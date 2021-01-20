import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowRight from '../../../secondary-nav/common/events/OnArrowRight';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightLV1 extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    if (this.isDesktop() && !drupalSettings.nav_dropdown_enabled) {
      this.handleDesktop();
    }
    else {
      this.handleMobile();
    }
  }

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    var element =
      this.getElement('next') ||
      this.getElement('first');

    element.focus();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {

    let node = this.elem.nextElementSibling;
    if (node) {
      node.focus();
      return;
    }

    var classicEvent = new OnArrowRight(this.item, this.event, this.target);
    classicEvent.init();
  }

}
