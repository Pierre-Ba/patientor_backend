
import DiagnosesEntries from "../../data/diagnoses";
import PatientsEntries from "../../data/patients";
import { Diagnose, Patient, PatientWithoutSsn, NewPatientEntry } from "../types";
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

export default {
    getDiagnosesEntries,
    addDiagnose,
    getPatientsEntries,
    getPatientsEntriesWithoutSsn,
    addPatient
};

