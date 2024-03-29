import User from '../model/UserSchema.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET;

export const userLogIn = async (req, res) => {
    try {
        const {username,password} = req.body;
        let user = await User.findOne({ username: username});
        if(!user){
            return res.status(401).json({error:"Please enter correct Credential"})
        }

        let passCompare = await bcrypt.compare(password,user.password);
        if(!passCompare){
            return res.status(401).json({error:"Please enter correct Credential"})
        }
        const data = {
            user:{
                id:user.id,
            }
        }
        
        const auth_token = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({auth_token});
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json('Error: ', error.message);        
    }
}

export const userSignUp = async (req, res) => {
    try {
        let user = await User.findOne({ username: req.body.username });
        if(user) {
            return res.status(401).json({ message: 'User already exist'});
        }
        
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        
         user = await User.create({
            username:req.body.username,
            email: req.body.email,
            password: secPass,
        })
        
        const data = {
            user:{
                id:user.id,
            }
        }
        const auth_token = jwt.sign(data, JWT_SECRET);
        res.status(200).json( {auth_token} );
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        let userDetails = await User.find({}).select('-password');
        return res.status(200).send(userDetails);
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json('Error: ', error.message);        
    }
}