import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    }

});

const quiz = mongoose.model('quiz', quizSchema);

export default quiz;
