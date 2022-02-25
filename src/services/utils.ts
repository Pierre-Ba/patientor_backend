import DiagnosesEntries from "../../data/diagnoses";
import PatientsEntries from "../../data/patients";
import { Diagnose, Patient, PatientWithoutSsn } from "../types";

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

const addPatient = () => {
    return null;
};

export default {
    getDiagnosesEntries,
    addDiagnose,
    getPatientsEntries,
    getPatientsEntriesWithoutSsn,
    addPatient
};

