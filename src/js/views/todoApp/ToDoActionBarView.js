import {todoActionHeaderSelectors} from '../../domSelectors/todoAppActionBarSelector'
import PubSub from '../../PubSub'

function ToDoActionBarView(){
}

ToDoActionBarView.prototype.init = function(){
    todoActionHeaderSelectors.addNewTodoBtn.addEventListener('click',this.showDataModal);
    todoActionHeaderSelectors.deleteSelectedTodoBtn.addEventListener('click',this.showDataModal);
    todoActionHeaderSelectors.markCompleteOnSelectedTodo.addEventListener('click',this.onClickMarkCompleteSelectedTodo);
    todoActionHeaderSelectors.commitTodoListChanges.addEventListener('click',this.showDataModal);
}

ToDoActionBarView.prototype.showDataModal = function(){
    const modalAction = event.target.getAttribute("data-modal");
    PubSub.publish('triggerShowModal',modalAction);
}

ToDoActionBarView.prototype.onClickMarkCompleteSelectedTodo = function(){
    PubSub.publish('onClickMarkCompleteSelectedTodo');
}

export default ToDoActionBarView;