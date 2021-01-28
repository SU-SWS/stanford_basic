import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import OnArrowLeft from '../../../secondary-nav/common/events/OnArrowLeft';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeftLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {

    if (drupalSettings.stanford_basic.nav_dropdown_enabled) {
      this.handleMobile();
      return;
    }

    var element =
      this.getElement('prev') ||
      this.getElement('last');

    element.focus();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var classicEvent = new OnArrowLeft(this.item, this.event, this.target);
    classicEvent.init();
  }

}
