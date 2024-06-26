import { Request, Response } from "express";
import db from "../db"; // Assurez-vous que le chemin d'importation est correct

import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";

export const signin = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const user = await db("user").where({ login }).first();
    if (!user)
      return res
        .status(404)
        .json({ message: "Mot de passe ou email incorrect" });
        
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid)
      return res
        .status(401)
        .json({ message: "Mot de passe ou email incorrect" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as Secret, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: `Utilisateur ${user.id} connecté avec succès`,
      token,
      user
    });
  } catch (error) {
    res.status(500).json({ message: JSON.stringify(error) });
  }
};
