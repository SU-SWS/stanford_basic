import EventAbstract from '../../common/events/EventAbstract';
import OnEnd from '../../common/events/OnEnd';

/**
 * OnArrowUpSubNav
 *
 * Event action handler class.
 */
export default class OnArrowUpSubNav extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Go to the previous item.
    let node = this.getElement('prevElement');
    if (node) {
      var links = node.querySelectorAll(':scope a');
      links[links.length - 1].focus();
      return;
    }

    // Go to the prev item last subnav item.
    node = this.getElement('parentItem');
    if (node) {
      node.focus();
      return;
    }

    // Default to the end..
    var eventEnd = new OnEnd(this.item, this.event, this.target);
    eventEnd.init();

  }
}
