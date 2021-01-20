import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import SubNavToggleSpace from '../../../secondary-nav/buttons/events/SubNavToggleSpace';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightToggleLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    if (this.getElement('next')) {
      this.getElement('next').focus();
    }
    else {
      this.getElement('parentNavFirst').focus();
    }
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var expandEvent = new SubNavToggleSpace(this.item, this.event, this.target);
    expandEvent.init();
  }

}
