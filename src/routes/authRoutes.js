import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();

// Register a new user endpoint auth/register
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // save gilgameshesh in the database
    console.log(username, password);
    res.sendStatus(201)

})

router.post('/login', (req, res) => {

    
})

export default router