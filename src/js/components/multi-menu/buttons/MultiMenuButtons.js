import SecondaryNavButtons from '../../secondary-nav/buttons/SecondaryNavButtons';
import MultiSubNavButtons from './MultiSubNavButtons';
import MultiNavItem from './MultiNavItem';

/**
 * A secondary menu with toggle buttons.
 */
export default class MultiMenuButtons extends SecondaryNavButtons {

  /**
   * Initialize.
   *
   * @param {HTMLElement} elem  The outermost wrapper for the Navigation.
   * @param {Object} options    An object of metadata.
   */
  constructor(elem, options = {}) {
    // Set some default options.
    var defaultOptions = {
      itemClass: 'su-multi-menu__item',
      itemExpandedClass: 'su-multi-menu__item--expanded',
      itemActiveClass: 'su-multi-menu__item--current',
      itemActiveTrailClass: 'su-multi-menu__item--active-trail',
      itemParentClass: 'su-multi-menu__item--parent',
      expand: false,
      activeTrail: false
    };

    // Merge in defaults.
    options = Object.assign(defaultOptions, options);

    // Kick it.
    super(elem, options);
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavAccordion} A brand new instance.
   */
  newParentItem(item, depth, parent) {
    var opts = Object.assign(this.options, {depth: depth});
    var nav = new MultiSubNavButtons(
      item,
      this,
      parent,
      opts
    );
    this.subNavItems.push(nav);
    return nav;
  }

  /**
   * Function for creating a new nested navigation item.
   *
   * @param  {HTMLElement} item     The HTMLElement to attach a new subnav to.
   * @param  {Integer} depth        The level of nesting. (starts at 1)
   * @param  {Object|Mixed} parent  The parent subnav instance.
   *
   * @return {SecondarySubNavAccordion} A brand new instance.
   */
  newNavItem(item, depth, parent) {
    var opts = Object.assign(this.options, {depth: depth});
    var nav = new MultiNavItem(
      item,
      this,
      parent,
      opts
    );
    this.navItems.push(nav);
    return nav;
  }

}
