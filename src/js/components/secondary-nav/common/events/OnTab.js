import EventAbstract from './EventAbstract';

/**
 * OnTab
 *
 * Event action handler class.
 */
export default class OnTab extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    const shifted = event.shiftKey;
    let firstItem = false;
    let lastItem = false; 

    // check for focus
    let focusedmasterNav = 'scope: ul > li > a:active';
    // check for open menu
    let openmenu = '.su-nav-toggle[aria-expanded=true]';

    try {
      firstItem = this.masterNav.elem.querySelector('a');
    }
    catch (err) {
      firstItem = this.masterNav.elem.firstElementChild;
    }

    try {
      lastItem = this.masterNav.elem.querySelector(':scope > ul > li:last-of-type');
    }
    catch (err) {
      lastItem = this.masterNav.elem.lastElementChild.lastElementChild;
    }

    console.log(firstItem + ' first item');
    console.log(lastItem + ' last item');
    console.log(focusedmasterNav + ' focused Item');
    console.log(openmenu + ' menu');
    

    // If shift key is held.
    if (shifted) {
      if (this.target === firstItem) {
        this.masterNav.closeAllSubNavs();
        return;
      }
    }
    // No shift key, just regular ol tab.
    if (this.target === lastItem) {
      this.masterNav.closeAllSubNavs();
      return;
    }
  }
}
