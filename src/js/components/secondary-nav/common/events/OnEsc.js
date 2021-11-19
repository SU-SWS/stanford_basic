import EventAbstract from './EventAbstract';
import { createEvent } from '../../../../polyfills/createEvent';

/**
 * OnEsc
 *
 * Event action handler class.
 */
export default class OnEsc extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();
    let node = false;

    if (this.parentNav.getDepth() > 2) { 
      this.event.stopPropagation();
      this.parentNav.closeSubNav();
      node = this.getElement('parentItem').parentElement.getElementsByTagName('button')[0];
    }

    else {
      if (this.isDesktop()) {
        this.masterNav.closeAllSubNavs();
        node = this.elem;
      }
      else {
        var closeAllEvent = createEvent('closeAllMobileNavs', { bubbles: true, data: this.item });
        this.elem.dispatchEvent(closeAllEvent);
      }
    }

    if (node) {
      node.focus();
    }

  }

}
