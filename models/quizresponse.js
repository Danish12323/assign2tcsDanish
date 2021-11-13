var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var responseSchema = new Schema({

quizid:{
    type: mongoose.Types.ObjectId,
    ref:'Quiz'
},



    responses: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            }, response:{
                type:String
            }
        }]
    }
    
});








module.exports = mongoose.model('Quizresponse', responseSchema);