import MultiMenuEventAbstract from './MultiMenuEventAbstract';
import OnArrowRight from '../../../secondary-nav/common/events/OnArrowRight';

/**
 * OnArrowLeft
 *
 * Event action handler class.
 */
export default class OnArrowRightLV1 extends MultiMenuEventAbstract {

  /**
   * Handle the events for desktop sized screens.
   */
  handleDesktop() {

    var themeName = drupalSettings.ajaxPageState.theme;
    if (drupalSettings[themeName].nav_dropdown_enabled) {
      this.handleMobile();
      return;
    }

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
