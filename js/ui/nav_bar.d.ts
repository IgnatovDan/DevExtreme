import {
    TElement
} from '../core/element';

import dxTabs, {
    dxTabsItem,
    dxTabsOptions
} from './tabs';

export interface dxNavBarOptions extends dxTabsOptions<dxNavBar> {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrollByContent?: boolean;
}
/**
 * @docid
 * @inherits dxTabs
 * @module ui/nav_bar
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxNavBar extends dxTabs {
    constructor(element: TElement, options?: dxNavBarOptions)
}

/**
* @docid
* @inherits dxTabsItem
* @type object
*/
export interface dxNavBarItem extends dxTabsItem {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    badge?: string;
}

declare global {
interface JQuery {
    dxNavBar(): JQuery;
    dxNavBar(options: "instance"): dxNavBar;
    dxNavBar(options: string): any;
    dxNavBar(options: string, ...params: any[]): any;
    dxNavBar(options: dxNavBarOptions): JQuery;
}
}
export type Options = dxNavBarOptions;

/** @deprecated use Options instead */
export type IOptions = dxNavBarOptions;
