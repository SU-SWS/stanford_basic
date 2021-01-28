import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import SubNavToggleClick from '../../../secondary-nav/buttons/events/SubNavToggleClick';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnClickToggleLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    if (drupalSettings.stanford_basic.nav_dropdown_enabled) {
      this.handleMobile();
      return;
    }

    this.event.preventDefault();
    var node = this.parentNav.elem;
    node.click();
    node.focus();
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var clickEvent = new SubNavToggleClick(this.item, this.event, this.target);
    clickEvent.init();
  }

}
