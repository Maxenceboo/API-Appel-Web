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

export const createEtudiant = async (req: Request, res: Response) => {
    // let response = await axios.post('/etudiant/create', {
    //     code_etudiant: code_etudiant,
    //     nom: nom,
    //     prenom: prenom,
    //     date_naissance: date_naissance,
    //     sexe: sexe,
    //     nationalite: nationalite,
    //     adrfixe1: adrfixe1,
    //     adrfixe2: adrfixe2,
    //     adrfixe3: adrfixe3,
    //     adrfixee: adrfixee,
    //     adrfixecodepostal: adrfixecodepostal,
    //     adrfixecommune: adrfixecommune,
    //     adrfixetelephone: adrfixetelephone,
    //     adrfixetelportable: adrfixetelportable,
    //     adrfixeemail: adrfixeemail,
    //     adrann1: adrann1,
    //     adrann2: adrann2,
    //     adrann3: adrann3,
    //     adranncodepostal: adranncodepostal,
    //     adranncommune: adranncommune,
    //     adranntelportable: adranntelportable,
    //     adrannemail: adrannemail,
    //     csp_chef_famille: csp_chef_famille,
    //     csp_autre_parent: csp_autre_parent,
    //     email_uppa: email_uppa,
    //     code_bac_ou_eq: code_bac_ou_eq,
    //     lib_bac_ou_eq: lib_bac_ou_eq,
    //     annee_bac_ou_eq: annee_bac_ou_eq,
    //     lib_mention: lib_mention,
    //     regime_ins: regime_ins,
    //     libelle_bourse: libelle_bourse,
    //     lib_type_dernier_diplome: lib_type_dernier_diplome,
    //     annee_dernier_diplome: annee_dernier_diplome,
    //     code_composante: code_composante,
    //     libcomposante: libcomposante,
    //     libetape: libetape,
    //     codeetape: codeetape,
    //     versionetape: versionetape,
    //     statut: statut,
    //     ine: ine
    // });
    const { nom, prenom, code_etudiant, date_naissance, sexe, nationalite, adrfixe1, adrfixe2, adrfixe3, adrfixee, adrfixecodepostal, adrfixecommune, adrfixetelephone, adrfixetelportable, adrfixeemail, adrann1, adrann2, adrann3, adranncodepostal, adranncommune, adranntelportable, adrannemail, csp_chef_famille, csp_autre_parent, email_uppa, code_bac_ou_eq, lib_bac_ou_eq, annee_bac_ou_eq, lib_mention, regime_ins, libelle_bourse, lib_type_dernier_diplome, annee_dernier_diplome, code_composante, libcomposante, libetape, codeetape, versionetape, statut, ine } = req.body;
    try {
        await db('etudiant').insert({ nom, prenom, code_etudiant, date_naissance, sexe, nationalite, adrfixe1, adrfixe2, adrfixe3, adrfixee, adrfixecodepostal, adrfixecommune, adrfixetelephone, adrfixetelportable, adrfixeemail, adrann1, adrann2, adrann3, adranncodepostal, adranncommune, adranntelportable, adrannemail, csp_chef_famille, csp_autre_parent, email_uppa, code_bac_ou_eq, lib_bac_ou_eq, annee_bac_ou_eq, lib_mention, regime_ins, libelle_bourse, lib_type_dernier_diplome, annee_dernier_diplome, code_composante, libcomposante, libetape, codeetape, versionetape, statut, ine });
        res.status(201).json({ message: 'Etudiant créé' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
}


