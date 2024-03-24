import { Request, Response } from 'express';
import db from '../db'; // Assurez-vous que le chemin d'importation est correct


export const getEtudiant = async (req: Request, res: Response) => {
    const { nom, prenom } = req.params;
    try {
        const etudiant = await db('etudiant').where({ nom, prenom });
        // return the first etudiant
        res.status(200).json({ nom: etudiant[0].nom, prenom: etudiant[0].prenom, code_etudiant: etudiant[0].code_etudiant });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}