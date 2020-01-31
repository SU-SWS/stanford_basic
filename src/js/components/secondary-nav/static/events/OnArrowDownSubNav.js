import EventAbstract from '../../common/events/EventAbstract';

/**
 * OnArrowDownSubNav
 *
 * Event action handler class.
 */
export default class OnArrowDownSubNav extends EventAbstract {

  /**
   * Execute the action to the event.
   */
  exec() {
    this.event.preventDefault();

    // Go to the first subnav item.
    let node = this.getElement('firstSubnavLink');
    if (node) {
      node.focus();
      return;
    }

    // Go to the next item.
    node = this.getElement('next');
    if (node) {
      node.focus();
      return;
    }

    // If there is no subnav item and no next item we must look for the next
    // link as far as it shows up in the html markup rather than the DOM. This
    // next link could be up and down a few sub nav items so the most reliable
    // key would be a tab key but as I am having trouble mimicking a tab event
    // with javascript we are going to do it the long way.

    var above = this.elem.parentNode;
    while (above.tagName !== 'NAV') {
      try {
        node = above.nextElementSibling.querySelector(':scope a:last-child');
      }
      catch (err) {
        // Nada.
      }

      // We got one or we are at the top.
      if (node) {
        break;
      }

      // Iterate.
      above = above.parentNode;
    }

    // If we find a link after all go to it.
    if (node) {
      node.focus();
      return;
    }

    // Go back to start, do not pass go.
    above.querySelector(':scope a').focus();
  }
}
