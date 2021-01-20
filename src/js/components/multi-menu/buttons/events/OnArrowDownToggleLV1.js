import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import SubNavToggleSpace from '../../../secondary-nav/buttons/events/SubNavToggleSpace';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowDownToggleLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    this.parentNav.openSubNav();
    this.getElement('firstSubnavLink').focus();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var expandEvent = new SubNavToggleSpace(this.item, this.event, this.target);
    expandEvent.init();
  }

}
