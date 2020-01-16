import EventAbstract from '../../common/events/EventAbstract';
import OnArrowDownSubNav from './OnArrowDownSubNav';

/**
 * OnArrowRightSubNav
 *
 * Event action handler class.
 */
export default class OnArrowRightSubNav extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    // Go to the next sibling then go to the parent next sibling.
    let node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    // Do what down does.
    var eventDown = new OnArrowDownSubNav(this.item, this.event, this.target);
    eventDown.exec();
  }

}
