import {ACTION_BUTTON_CLASS_NAME} from '../constants/todoActionConstants'
import ToDoItemView from '../views/todoApp/ToDoItemView'
import PubSub from '../PubSub'

function ToDoItemController(){
    this.toDoItemView = new ToDoItemView();
}

ToDoItemController.prototype.init = function() {
    this.toDoItemView.init();
    this.initSubscribers();
}

ToDoItemController.prototype.initSubscribers = function(){
    PubSub.subscribe('onClickTodoItemWrapper',this.onClickTodoItemWrapper.bind(this));
}

ToDoItemController.prototype.onClickTodoItemWrapper = function(itemID,action,dataModal){
        switch(action){
            case ACTION_BUTTON_CLASS_NAME.EDIT_TODO:
                PubSub.publish('activeItemToEditChanged',itemID);
                PubSub.publish('showAndFillDataModal',dataModal);
                break;
            case ACTION_BUTTON_CLASS_NAME.CONFIRM_DELETE_TODO:
            case ACTION_BUTTON_CLASS_NAME.MARK_COMPLETE_TODO:
            case ACTION_BUTTON_CLASS_NAME.MARK_TODO_CHECKED:
                PubSub.publish('modifyTodoItemsOfList',action,[itemID]); 
        } 
    event.stopPropagation();
}

export default ToDoItemController;