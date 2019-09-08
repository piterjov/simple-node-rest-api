const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: 'pending'
    }
})

module.export = mongoose.model('Tasks', TaskSchema)