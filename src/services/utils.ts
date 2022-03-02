
import DiagnosesEntries from "../../data/diagnoses";
import PatientsEntries from "../../data/patients";
import { Diagnose, Patient, PatientWithoutSsn, NewPatientEntry, Gender } from "../types";
import { v1 as uuid } from 'uuid';

 const getDiagnosesEntries = (): Array<Diagnose> => {
    return DiagnosesEntries;
};

const addDiagnose = () => {
    return null;
};

const getPatientsEntries = (): Array<Patient> => {
    return PatientsEntries;
};

const getPatientsEntriesWithoutSsn = (): PatientWithoutSsn[] => {
    return PatientsEntries.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
    const id = uuid();
    const stringifiedId = id.toString();
    const newPatientEntry = {
        id: stringifiedId,
        ...entry
    };
    PatientsEntries.push(newPatientEntry);
    return newPatientEntry;

};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
    if(!name || !isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
    if(!dateOfBirth || !isString(dateOfBirth)) {
        throw new Error('Incorrect or missing date of birth');
    }
    return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
    if(!ssn || !isString(ssn)) {
        throw new Error('Incorrect or missing ssn');
    }
    return ssn;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if(!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};

const parseOccupation = (occupation: unknown): string => {
    if(!occupation || !isString(occupation)) {
        throw new Error('Incorrect or missing occupation');
    }
    return occupation;
};

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatientEntry = ({name, dateOfBirth, ssn, gender, occupation}: Fields): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
     name: parseName(name),
     dateOfBirth: parseDateOfBirth(dateOfBirth),
     ssn: parseSsn(ssn),
     gender: parseGender(gender),
     occupation: parseOccupation(occupation)
  };
  return newEntry;
};

const utils = {
    getDiagnosesEntries,
    addDiagnose,
    getPatientsEntries,
    getPatientsEntriesWithoutSsn,
    addPatient,
    toNewPatientEntry
};

export default utils;



