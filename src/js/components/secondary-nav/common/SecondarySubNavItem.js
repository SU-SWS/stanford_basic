import EventHandlerDispatch from '../../nav/EventHandlerDispatch';
import SecondaryNavItem from './SecondaryNavItem';

/**
 * SecondaryNav Class
 */
export default class SecondarySubNavItem extends SecondaryNavItem {

  /**
   * Initialize.
   *
   * @param {HTMLElement} element      The HTMLElement to bind to.
   * @param {Object|Mixed} masterNav   The top most navigation instance.
   * @param {Object|Mixed} parentNav   The parent nav instance if available.
   * @param {Object} options           An object of metadata.
   */
  constructor(element, masterNav, parentNav = null, options = {}) {
    super(element, masterNav, parentNav, options);
  }

  /**
   * Close all SubNavs.
   *
   * Please override this method in your class.
   * @return null
   */
  closeAllSubNavs() {
    return;
  }

  /**
   * Close this SubNav.
   * @return
   */
  closeSubNav() {
    return;
  }

}
