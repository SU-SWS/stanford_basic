import SecondaryNavItem from '../common/SecondaryNavItem';
import OnArrowUpSubNav from './events/OnArrowUpSubNav';
import OnArrowRightSubNav from './events/OnArrowRightSubNav';
import OnArrowDownSubNav from './events/OnArrowDownSubNav';

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
   * Creates an event registry for handling types of events.
   *
   * This registry is used by the EventHandlerDispatch class to bind and
   * execute the events in the created property key.
   *
   * @param  {Object} options Options to merge in with the defaults.
   *
   * @return {Object} A key/value registry of events and handlers.
   */
  createEventRegistry(options) {

    var registryDefaults = super.createEventRegistry(options);
    registryDefaults['onKeydownArrowUp'] = OnArrowUpSubNav;
    registryDefaults['onKeydownArrowRight'] = OnArrowRightSubNav;
    registryDefaults['onKeydownArrowDown'] = OnArrowDownSubNav;

    return Object.assign(registryDefaults, options.eventRegistry);
  }

  /**
   * Close all SubNavs.
   *
   * Please override this method in your class.
   */
  closeAllSubNavs() {
    return;
  }

  /**
   * Close this SubNav.
   *
   * Please override this method in your class.
   */
  closeSubNav() {
    return;
  }

}
