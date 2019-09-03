import {APP_DISPLAY_CONFIG} from './configs/appDisplayConfig'
import AppNavigationBarView from './views/appNavigationBar/appNavigationBarView'
import ToDoManager from './controller/ToDoManager'
import PubSub from './PubSub'

function App() {
    this.currentActiveTab = APP_DISPLAY_CONFIG.currentActiveTab;
    this.currentDisplayedContent = APP_DISPLAY_CONFIG.currentDisplayedContent;
    this.appNavigationView= new AppNavigationBarView();
    this.todoManager = new ToDoManager();
}

App.prototype.initNavigation = function(){
    // initialize app navigation controller 
    this.appNavigationView.init();
    this.initEventSubscribers();
}

App.prototype.initEventSubscribers = function(){
    PubSub.subscribe('navigationLinkClicked', App.prototype.showAppContent.bind(this));
}

App.prototype.initTodoManager = function(todoListData){
    //initialize todo Manager 
    this.todoManager.init(todoListData);
}

App.prototype.showAppContent = function(contentToShow,clickedTarget) {
    if(clickedTarget!== this.currentActiveTab)
    {
        let activeContentToDisplay = document.querySelector(contentToShow);
        clickedTarget.classList.add('active');
        this.currentActiveTab.classList.remove('active');
        this.currentDisplayedContent.style.display = "none";
        activeContentToDisplay.style.display = "block";
        this.currentDisplayedContent = activeContentToDisplay;
        this.currentActiveTab = clickedTarget;   
    } 
  }

export default App;