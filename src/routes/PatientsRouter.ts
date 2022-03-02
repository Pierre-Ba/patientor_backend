/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';
import utils from '../services/utils';

const PatientsRouter = express.Router();

PatientsRouter.get('/', (_req, res) => {
    res.send(utils.getPatientsEntriesWithoutSsn());
});

PatientsRouter.post('/', (req, res) => {
  const {name, dateOfBirth, gender, ssn, occupation } = req.body;
  const newPatientEntry = utils.addPatient({
      name,
      dateOfBirth,
      gender,
      ssn,
      occupation
  });
  res.json(newPatientEntry);
});

export default PatientsRouter;