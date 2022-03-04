//import utils from '../src/services/utils';
import { Patient, Gender, NewPatientEntry } from '../src/types';

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

const data = [
    {
        "id": "d2773336-f723-11e9-8f0b-362b9e155667",
        "name": "John McClane",
        "dateOfBirth": "1986-07-09",
        "ssn": "090786-122X",
        "gender": "male",
        "occupation": "New york city cop"
    },
    {
        "id": "d2773598-f723-11e9-8f0b-362b9e155667",
        "name": "Martin Riggs",
        "dateOfBirth": "1979-01-30",
        "ssn": "300179-77A",
        "gender": "male",
        "occupation": "Cop"
    },
    {
        "id": "d27736ec-f723-11e9-8f0b-362b9e155667",
        "name": "Hans Gruber",
        "dateOfBirth": "1970-04-25",
        "ssn": "250470-555L",
        "gender": "male",
        "occupation": "Technician"
    },
    {
        "id": "d2773822-f723-11e9-8f0b-362b9e155667",
        "name": "Dana Scully",
        "dateOfBirth": "1974-01-05",
        "ssn": "050174-432N",
        "gender": "female",
        "occupation": "Forensic Pathologist"
    },
    {
        "id": "d2773c6e-f723-11e9-8f0b-362b9e155667",
        "name": "Matti Luukkainen",
        "dateOfBirth": "1971-04-09",
        "ssn": "090471-8890",
        "gender": "male",
        "occupation": "Digital evangelist"
    }
];



const PatientsEntries: Patient[] = data.map(obj => {
    const object = toNewPatientEntry(obj) as Patient;
    object.id = obj.id;
    return object;

});



export default PatientsEntries;