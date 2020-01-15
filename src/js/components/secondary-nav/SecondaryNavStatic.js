import SecondaryNavAbstract from './common/SecondaryNavAbstract';

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
    console.log('add Listeners');
  }

}
