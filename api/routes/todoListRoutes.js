module.exports = function(app) {
    let todoList = require('../controllers/todoListController')
    app.route('/')
        .get((req, res) => {
            res.json({"error" : false, "message" : "Api status: online!"});
        })
    app.route('/tasks')
        .get(todoList.list)
        .post(todoList.store)

    app.route('/tasks/:id')
        .get(todoList.get)
        .put(todoList.update)
        .delete(todoList.delete)
}