import App from './App'


let todoListData = '{ "todoListItems": [{"description":null,"dueDate":null,"id":null,"isChecked":1,"isCompleted":null,"title":"Todo item 1"},'+
'{"description":"","dueDate":"2019-08-01","id":"2","isChecked":false,"isCompleted":true,"title":"todo item 2"},'+
'{"description":"This is due","dueDate":"2019-08-31","id":"3","isChecked":false,"isCompleted":false,"title":"todo item 3"},'+
'{"description":"","dueDate":"2019-08-31","id":"4","isChecked":false,"isCompleted":true,"title":"todo item 4"},'+
'{"description":"","dueDate":"2019-07-31","id":"5","isChecked":true,"isCompleted":false,"title":"todo item 5"},'+
'{"description":"","dueDate":"2019-08-02","id":"6","isChecked":true,"isCompleted":false,"title":"todo item 6"},'+
'{"description":"","dueDate":"2018-02-31","id":"7","isChecked":true,"isCompleted":true,"title":"todo item 7"},'+
'{"description":"","dueDate":"2019-08-31","id":"8","isChecked":true,"isCompleted":true,"title":"todo item 8"},'+
'{"description":"","dueDate":"2019-08-31","id":"9","isChecked":false,"isCompleted":true,"title":"todo item 9"},'+
'{"description":"","dueDate":"2020-08-10","id":"10","isChecked":true,"isCompleted":false,"title":"todo item 10"}]}';

// let todoListData=[];


// let todoListData = '{ "todoListItems": [{"description":"","dueDate":"2020-08-10","id":"10","isChecked":true,"isCompleted":false,"title":"todo item 10"}]}';

let startApp= new App();
startApp.initNavigation();
startApp.initTodoManager(todoListData);
