import { Request, Response } from 'express';
import db from '../db'; // Assurez-vous que le chemin d'importation est correct

type Call = {
    id_call: number;
    date_heure: string;
    abs$1: boolean;
    code_etudiant: number;
    id_user: number;
    id_ue: number;
    id_sousgrp: number;
}


//get
export const getCallByIdEtudiant = async (req: Request, res: Response) => {

	const { id_etudiant } = req.params;
    try {
        const les_call: Call[] = await db('un_call').where({ id_etudiant, abs$1: true });
        res.status(200).json(les_call);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}

//post
export const createCall = async (req: Request, res: Response) => {

}

//put
export const updateCall = async (req: Request, res: Response) => {
    // update call abs$
    const { id_call } = req.params;
    try {
        await db('un_call').where({ id_call }).update({ abs$1: false });
        res.status(200).json({ message: 'Call abs updated' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}

//delete
export const deleteCall = async (req: Request, res: Response) => {

}
