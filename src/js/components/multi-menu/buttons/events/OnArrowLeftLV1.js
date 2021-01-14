import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';
import OnArrowLeft from '../../../secondary-nav/common/events/OnArrowLeft';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowLeftLV1 extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    if (this.isDesktop()) {
      //this.handleDesktop();
      this.handleMobile();
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
