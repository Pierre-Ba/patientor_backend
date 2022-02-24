import express from 'express';
import utils from '../services/utils';

const DiagnoseRouter = express.Router();

DiagnoseRouter.get('/', (_req, res)=> {
    res.send(utils.getDiagnosesEntries());
});

export default DiagnoseRouter;