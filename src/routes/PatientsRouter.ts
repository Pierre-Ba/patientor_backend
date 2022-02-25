import express from 'express';
import utils from '../services/utils';

const PatientsRouter = express.Router();

PatientsRouter.get('/', (_req, res) => {
    res.send(utils.getPatientsEntriesWithoutSsn());
});

export default PatientsRouter;