import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowLeft from '../../../secondary-nav/common/events/OnArrowRight';

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
    if (this.isDesktop()) {
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
    var classicEvent = new OnArrowRight(this.item, this.event, this.target);
    classicEvent.init();
  }

}
