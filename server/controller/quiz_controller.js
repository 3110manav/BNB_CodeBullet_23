import Quiz from '../model/QuizSchema.js';
import User from '../model/UserSchema.js';
import mongoose from 'mongoose';


const { ObjectId } = mongoose.Types;

export const addScore = async (req, res) => {
    try {
        const userId = new  ObjectId(req.user.id);
        let user = await User.findOne({ _id: userId});
        let isQuizTaken = await Quiz.findOne({user:req.user.id})
        if(isQuizTaken){
            return res.status(403).json({error:"Quiz already exist"}) 
        }
        console.log(req.user)
        console.log(user)
        const {score} = req.body;

        
         const scoreAdd = await Quiz.create({
            user:req.user.id,
            username:user.username,
            email: user.email,
            score:score,
        })
        const allData = await Quiz.find({}).select('-_id -user -__v')
        
        res.status(200).json( allData );
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getAllQuizUsers = async (req, res) => {
    try {
        let quizUsers = await Quiz.find({}).select('-_id -user');
        return res.status(200).send(quizUsers);
        // res.status(200).send("signedup successfully")
    } catch (error) {
        res.status(500).json('Error: ', error.message);        
    }
}