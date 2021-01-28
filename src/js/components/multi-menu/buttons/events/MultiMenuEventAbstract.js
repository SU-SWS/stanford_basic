import EventAbstract from '../../../secondary-nav/common/events/EventAbstract';

/**
 * MultiMenuEventAbstract class
 *
 * Event action handler with common code for MultiMenu.
 */
export default class MultiMenuEventAbstract extends EventAbstract {

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
    // Do something.
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    // Do something.
  }

}
