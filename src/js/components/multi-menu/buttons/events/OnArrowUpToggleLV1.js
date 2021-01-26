import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import SubNavToggleSpace from '../../../secondary-nav/buttons/events/SubNavToggleSpace';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowUpToggleLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {
    var themeName = drupalSettings.ajaxPageState.theme;
    if (drupalSettings[themeName].nav_dropdown_enabled) {
      this.handleMobile();
      return;
    }
  }

  /**
   * Handle the events for mobile sized screens.
   */
  handleMobile() {
    var collapseEvent = new SubNavToggleSpace(this.item, this.event, this.target);
    collapseEvent.init();
  }

}
