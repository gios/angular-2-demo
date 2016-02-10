System.register(["angular2/platform/browser", "angular2/core", "./todo-input", "./todo-service", "./todo-list", "./status-selector", "./search-box"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var browser_1, core_1, todo_input_1, todo_service_1, todo_list_1, status_selector_1, search_box_1;
    var App;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_input_1_1) {
                todo_input_1 = todo_input_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_list_1_1) {
                todo_list_1 = todo_list_1_1;
            },
            function (status_selector_1_1) {
                status_selector_1 = status_selector_1_1;
            },
            function (search_box_1_1) {
                search_box_1 = search_box_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'app',
                        directives: [todo_input_1.TodoInput, todo_list_1.TodoList, status_selector_1.StatusSelector, search_box_1.SearchBox],
                        template: "<div>\n  <search-box (update)=\"term = $event\"></search-box>\n  <todo-input></todo-input>\n  <status-selector (select)=\"status = $event\"></status-selector>\n  <todo-list \n  [status]=\"status\"\n  [term]=\"term\">\n  </todo-list>\n  </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            browser_1.bootstrap(App, [todo_service_1.TodoService]);
        }
    }
});
//# sourceMappingURL=main.js.map