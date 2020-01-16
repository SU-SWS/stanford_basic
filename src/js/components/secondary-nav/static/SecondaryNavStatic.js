import SecondaryNavAbstract from '../common/SecondaryNavAbstract';
import SecondaryNavItem from '../common/SecondaryNavItem';
import SecondarySubNavItemStatic from './SecondarySubNavItemStatic';
import OnArrowDownSubNav from './events/OnArrowDownSubNav';
import OnArrowUpSubNav from './events/OnArrowUpSubNav';
import OnArrowRightSubNav from './events/OnArrowRightSubNav';

/**
 * A secondary menu with static links.
 */
export default class SecondaryNavStatic extends SecondaryNavAbstract {

  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem, options = {}) {
    super(elem, options);
    this.createSubNavItems();
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavButtons} A brand new instance.
   */
  newParentItem(item, depth, parent) {
    var opts = Object.assign(this.options, {
      itemExpandedClass: this.options.itemExpandedClass,
      depth: depth
    });
    var nav = new SecondarySubNavItemStatic(
      item,
      this,
      parent,
      opts
    );
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * Function for creating a new single tier navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondaryNavItem} A brand new instance.
   */
  newNavItem(item, depth, parent) {
    var myEvents = {
      onKeydownArrowDown: OnArrowDownSubNav,
      onKeydownArrowUp: OnArrowUpSubNav,
      onKeydownArrowRight: OnArrowRightSubNav
    };
    var opts = {
      eventRegistry: myEvents,
      depth: depth
    };
    var nav = new SecondaryNavItem(
      item,
      this,
      parent,
      opts
    );
    this.navItems.push(nav);
    return nav;
  }

}
