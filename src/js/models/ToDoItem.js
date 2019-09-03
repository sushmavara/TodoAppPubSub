function ToDoItem(toDoItemInfo){
    this.title = toDoItemInfo.title;
    this.description = toDoItemInfo.description || "";
    this.dueDate = toDoItemInfo.dueDate || "";
    this.id = toDoItemInfo.id || Date.now().toString();
    this.isCompleted = toDoItemInfo.isCompleted || false;
    this.isChecked = toDoItemInfo.isChecked || false;
}

ToDoItem.prototype.markTodoComplete = function(){
    this.isCompleted = true;
}

ToDoItem.prototype.toggleMarkComplete = function(){
    this.isCompleted = !this.isCompleted;
}

ToDoItem.prototype.editTodoItem = function(editedTodo){
    this.title = editedTodo.title;
    this.description = editedTodo.description;
    this.dueDate = editedTodo.dueDate; 
}

ToDoItem.prototype.toggleMarkChecked= function(){
    this.isChecked = !this.isChecked;
}

export default ToDoItem;