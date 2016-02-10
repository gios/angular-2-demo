System.register([], function(exports_1) {
    var TodoModel;
    return {
        setters:[],
        execute: function() {
            TodoModel = (function () {
                function TodoModel(title) {
                    if (title === void 0) { title = ""; }
                    this.title = title;
                    this.status = "started";
                }
                TodoModel.prototype.toggle = function () {
                    this.status =
                        this.status == "started"
                            ? "completed"
                            : "started";
                };
                return TodoModel;
            })();
            exports_1("TodoModel", TodoModel);
        }
    }
});
//# sourceMappingURL=todo-model.js.map