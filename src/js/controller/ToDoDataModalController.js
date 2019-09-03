import TodoDataModalView from '../views/todoApp/TodoDataModalView'
import {ACTION_BUTTON_CLASS_NAME} from '../constants/todoActionConstants'
import PubSub from '../PubSub'

function ToDoDataModalController(){
    this.todoDataModalView = new TodoDataModalView();
}

ToDoDataModalController.prototype.init = function() {
    this.initSubscribers();
}

ToDoDataModalController.prototype.initSubscribers = function() {
    PubSub.subscribe('saveNewTodo',this.onClickSaveNewTodo.bind(this));
    PubSub.subscribe('updateTodo',this.onClickUpdateTodo.bind(this));
    PubSub.subscribe('deleteSelectedTodo',this.onClickDeleteConfirmSelectedTodo.bind(this));
    PubSub.subscribe('commitTodoChanges',this.onClickCommitTodoListChanges.bind(this));
}

ToDoDataModalController.prototype.displayModal= function(modalNode) {
    this.todoDataModalView.attachDataModal(modalNode);
    this.todoDataModalView.bindEvents(this);
}

ToDoDataModalController.prototype.fillModal= function(todoInfo) {
    this.todoDataModalView.fillUpdateTodoItemModal(todoInfo);
}

ToDoDataModalController.prototype.onClickSaveNewTodo = function(toDoInfo){
    this.todoDataModalView.validateTitle(toDoInfo.title.trim());
    if(toDoInfo.title.trim()){
        PubSub.publish('addNewTodoItem',toDoInfo);
        this.todoDataModalView.destroyActiveDataModal();
    }
    PubSub.publish('renderTodoList');
    event.stopPropagation();
}

ToDoDataModalController.prototype.onClickUpdateTodo = function(toDoInfo){
    this.todoDataModalView.validateTitle(toDoInfo.title.trim());
    if(toDoInfo.title.trim()){
        PubSub.publish('updateTodoItem',toDoInfo);
        PubSub.publish('activeItemToEditChanged',null);
        this.todoDataModalView.destroyActiveDataModal();
    }
    PubSub.publish('renderTodoList');
    event.stopPropagation();
}

ToDoDataModalController.prototype.onClickDeleteConfirmSelectedTodo = function(){
    let action=ACTION_BUTTON_CLASS_NAME.CONFIRM_DELETE_TODO;
    PubSub.publish('modifyTodoItemsOfList',action); 
    this.todoDataModalView.destroyActiveDataModal();
    event.stopPropagation();
}

ToDoDataModalController.prototype.onClickCommitTodoListChanges = function(){
    PubSub.publish('commitTodoListChanges');
    this.todoDataModalView.destroyActiveDataModal();
    event.stopPropagation();
}


export default ToDoDataModalController;