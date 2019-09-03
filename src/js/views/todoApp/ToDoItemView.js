import {todoContainerSelectors} from '../../domSelectors/todoAppContainerSelector'
import todoItemTemplate from '../../templates/todoElementTemplate'
import PubSub from '../../PubSub'

function ToDoItemView(){
}

ToDoItemView.prototype.init = function() {
    todoContainerSelectors.toDoItemsUlList.addEventListener('click',this.onClickTodoItemWrapper);
}

ToDoItemView.prototype.toggleEmptyContentMessage = function(todoListSize) {
    if(todoListSize){  
        todoContainerSelectors.emptyContent.style.display = "none";
        todoContainerSelectors.toDoListContainer.style.display = "block";
    }else {
        todoContainerSelectors.toDoListContainer.style.display = "none";
        todoContainerSelectors.emptyContent.style.display = "flex";
    }
}

ToDoItemView.prototype.onClickTodoItemWrapper = function(event){
    const itemID = event.target.parentNode.getAttribute('target-id');
    if(itemID){
        const action = event.target.getAttribute('data-action');
        const dataModal = event.target.getAttribute("data-modal");
        PubSub.publish('onClickTodoItemWrapper',itemID,action,dataModal);
    }
    event.stopPropagation();
}


ToDoItemView.prototype.renderTodo = function(todoItemObject,htmlToNodeFunction,toDoListContainer){
    let todoTemplate = todoItemTemplate.replace("%id%",todoItemObject.id).
        replace("%title%",todoItemObject.title).
        replace("%description%",todoItemObject.description).
        replace("%dueDate%",todoItemObject.dueDate);
    todoTemplate = todoItemObject.isCompleted ? todoTemplate.replace(/%isComplete%/g," todoComplete"):
            todoTemplate.replace(/%isComplete%/g,"");
    let toDoNode = htmlToNodeFunction(todoTemplate);
    if(todoItemObject.isChecked) toDoNode.querySelector('[data-action = "markTodoChecked"]').checked = true;
    toDoListContainer.appendChild(toDoNode);
}

export default ToDoItemView;