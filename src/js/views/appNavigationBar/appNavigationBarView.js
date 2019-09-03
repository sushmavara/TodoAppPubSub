import {appNavigationHeaderElements} from '../../domSelectors/appNavigationHeaderElements'
import {APPS_CLASS_NAME} from '../../constants/appNameConstants'
import PubSub from '../../PubSub'

function AppNavigationBarView(){
}

AppNavigationBarView.prototype.init = function(){
    appNavigationHeaderElements.todoAppNavBar.addEventListener('click',this.showContent(APPS_CLASS_NAME.TODO_APP));
    appNavigationHeaderElements.calendarAppNavBar.addEventListener('click',this.showContent(APPS_CLASS_NAME.CALENDAR_APP));
}


AppNavigationBarView.prototype.showContent = function(contentToShow) {
    return (evnt)=>{
        let clickedTarget = evnt.currentTarget;
        PubSub.publish('navigationLinkClicked',contentToShow,clickedTarget);
    }
  }

export default AppNavigationBarView;