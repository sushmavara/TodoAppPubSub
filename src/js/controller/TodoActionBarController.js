
import ToDoActionBarView from '../views/todoApp/ToDoActionBarView'
import {ACTION_BUTTON_CLASS_NAME} from '../constants/todoActionConstants'
import PubSub from '../PubSub'

function TodoActionBarController(){
    this.todoActionBarView = new ToDoActionBarView();
}

TodoActionBarController.prototype.init = function() {
    this.todoActionBarView.init();
    this.initSubscribers();
}

TodoActionBarController.prototype.initSubscribers = function() {
    PubSub.subscribe('triggerShowModal',this.showDataModal.bind(this));
    PubSub.subscribe('onClickMarkCompleteSelectedTodo',this.onClickMarkCompleteSelectedTodo.bind(this));
}

TodoActionBarController.prototype.onClickMarkCompleteSelectedTodo = function(){
    let action=ACTION_BUTTON_CLASS_NAME.MARK_COMPLETE_SELECTED;
    PubSub.publish('modifyTodoItemsOfList',action);
    event.stopPropagation();
}
TodoActionBarController.prototype.showDataModal = function(modalAction){
    PubSub.publish('showAndFillDataModal',modalAction);
}

export default TodoActionBarController;