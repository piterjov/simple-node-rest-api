const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list = (req, res) => {
    Task.find({}, (err, task) => {
        if (err)
            res.send(err)

        res.json(task)
    })


}


exports.store = (req, res) => {
    let task = new Task(req.body)
    task.save(function(err, task){
        if (err)
            res.send(err)

        res.json(task)
    })
}

exports.update = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
        console.log(req.params.task_id)
        if (err)
            res.send(err);
        console.log(task)
        res.json(task);
    });
}

exports.get = (req, res) => {
    return
}

exports.delete = (req, res) => {
    Task.remove({
        _id: req.params.task_id
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
}