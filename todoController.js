angular.module('todoApp')
    .controller('TodoController', function($scope) {
        $scope.todos = [];
        
        $scope.addTodo = function() {
            if ($scope.newTodo) {
                $scope.todos.push({
                    text: $scope.newTodo,
                    done: false
                });
                $scope.newTodo = '';
            }
        };
        
        $scope.removeTodo = function(index) {
            $scope.todos.splice(index, 1);
        };
    });
