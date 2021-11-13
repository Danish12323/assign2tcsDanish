var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var quizSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    questions:{
            type: String
    },

    class: {
       
                type: mongoose.Types.ObjectId,
                ref: 'Class'
        
    }
    ,
    responses: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
            response:{
                type:String
            }
         
            
        }]
    }
,
startime:{
    type:String
},
endtime:{
    type:String
}



});













module.exports = mongoose.model('Quiz', quizSchema);