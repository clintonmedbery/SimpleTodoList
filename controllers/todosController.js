exports.create = function(req, res, next){
    var user = req.user;
    var text = req.body.text;
    var count = user.todos.push({
        text: text
    });
    var _id = user.todos[count - 1]._id;
    user.save(function(error){
        if(error){
            return next(error);
        }
        console.log(_id);
        res.json({todo: {text: text, _id: _id}});
    });
}

exports.index = function(req, res, next){
    res.json({todos: req.user.todos});
}