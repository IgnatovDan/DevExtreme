import {
    animationConfig
} from '../animation/fx';

import {
    positionConfig
} from '../animation/position';

import {
    TElement
} from '../core/element';

import {
    template
} from '../core/templates/template';

import {
    TEvent
} from '../events/index';

import dxDropDownList, {
    dxDropDownListOptions
} from './drop_down_editor/ui.drop_down_list';

import {
    dxPopoverOptions
} from './popover';

export interface dxLookupOptions extends dxDropDownListOptions<dxLookup> {
    /**
     * @docid
     * @default undefined
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    animation?: {
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      hide?: animationConfig,
      /**
      * @docid
      * @prevFileNamespace DevExpress.ui
      * @default undefined
      */
      show?: animationConfig
    };
    /**
     * @docid
     * @default "OK"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    applyButtonText?: string;
    /**
     * @docid
     * @type Enums.EditorApplyValueMode
     * @hidden false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    applyValueMode?: 'instantly' | 'useButtons';
    /**
     * @docid
     * @default "Cancel"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cancelButtonText?: string;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    cleanSearchOnOpening?: boolean;
    /**
     * @docid
     * @default "Clear"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    clearButtonText?: string;
    /**
     * @docid
     * @default false
     * @type_function_param1 event:event
     * @type_function_return Boolean
     * @publicName closeOnOutsideClick
     * @default true [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    closeOnOutsideClick?: boolean | ((event: TEvent) => boolean);
    /**
     * @docid
     * @default null
     * @type_function_param1 selectedItem:object
     * @type_function_param2 fieldElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fieldTemplate?: template | ((selectedItem: any, fieldElement: TElement) => string | Element | JQuery);
    /**
     * @docid
     * @default false
     * @default true [for](desktop)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid
     * @default false
     * @default true [for](iPhone)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    fullScreen?: boolean;
    /**
     * @docid
     * @default "group"
     * @type_function_param1 itemData:object
     * @type_function_param2 itemIndex:number
     * @type_function_param3 itemElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    groupTemplate?: template | ((itemData: any, itemIndex: number, itemElement: TElement) => string | Element | JQuery);
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    grouped?: boolean;
    /**
     * @docid
     * @default "More"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    nextButtonText?: string;
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPageLoading?: ((e: { component?: dxLookup, element?: TElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPullRefresh?: ((e: { component?: dxLookup, element?: TElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 event:event
     * @type_function_param1_field5 scrollOffset:object
     * @type_function_param1_field6 reachedLeft:boolean
     * @type_function_param1_field7 reachedRight:boolean
     * @type_function_param1_field8 reachedTop:boolean
     * @type_function_param1_field9 reachedBottom:boolean
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onScroll?: ((e: { component?: dxLookup, element?: TElement, model?: any, event?: TEvent, scrollOffset?: any, reachedLeft?: boolean, reachedRight?: boolean, reachedTop?: boolean, reachedBottom?: boolean }) => any);
    /**
     * @docid
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 titleElement:dxElement
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    onTitleRendered?: ((e: { component?: dxLookup, element?: TElement, model?: any, titleElement?: TElement }) => any);
    /**
     * @docid
     * @extends Action
     * @type_function_param1 e:object
     * @type_function_param1_field4 value:object
     * @type_function_param1_field5 previousValue:object
     * @type_function_param1_field6 event:event
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onValueChanged?: ((e: { component?: dxLookup, element?: TElement, model?: any, value?: any, previousValue?: any, event?: TEvent }) => any);
    /**
     * @docid
     * @type Enums.ListPageLoadMode
     * @default "scrollBottom"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageLoadMode?: 'nextButton' | 'scrollBottom';
    /**
     * @docid
     * @default "Loading..."
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pageLoadingText?: string;
    /**
     * @docid
     * @default "Select"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    placeholder?: string;
    /**
     * @docid
     * @default function() { return $(window).height() * 0.8 }
     * @type_function_return number|string
     * @default 'auto' [for](desktop|iPad)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    popupHeight?: number | string | (() => number | string);
    /**
     * @docid
     * @default function() {return $(window).width() * 0.8 }
     * @type_function_return number|string
     * @default function() { return Math.min($(window).width(), $(window).height()) * 0.4; } [for](iPad)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions

     */
    popupWidth?: number | string | (() => number | string);
    /**
     * @docid
     * @default undefined
     * @publicName position
     * @default { my: 'left top', at: 'left top', of: lookupContainer } [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    position?: positionConfig;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pullRefreshEnabled?: boolean;
    /**
     * @docid
     * @default "Release to refresh..."
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pulledDownText?: string;
    /**
     * @docid
     * @default "Pull down to refresh..."
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pullingDownText?: string;
    /**
     * @docid
     * @default "Refreshing..."
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    refreshingText?: string;
    /**
     * @docid
     * @default true
     * @publicName searchEnabled
     * @default false [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchEnabled?: boolean;
    /**
     * @docid
     * @default "Search"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    searchPlaceholder?: string;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    shading?: boolean;
    /**
     * @docid
     * @default true
     * @publicName showCancelButton
     * @default false [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showCancelButton?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showClearButton?: boolean;
    /**
     * @docid
     * @default true
     * @publicName showPopupTitle
     * @default false [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    showPopupTitle?: boolean;
    /**
     * @docid
     * @default ""
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    title?: string;
    /**
     * @docid
     * @default "title"
     * @type_function_param1 titleElement:dxElement
     * @type_function_return string|Element|jQuery
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated dxLookupOptions.dropDownOptions
     */
    titleTemplate?: template | ((titleElement: TElement) => string | Element | JQuery);
    /**
     * @docid
     * @default true
     * @default false [for](desktop except Mac)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    useNativeScrolling?: boolean;
    /**
     * @docid
     * @default false
     * @default true [for](desktop|iOS)
     * @publicName usePopover
     * @default false [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    usePopover?: boolean;
    /**
     * @docid
     * @default false
     * @default true [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dropDownCentered?: boolean;
    /**
     * @docid
     */
    dropDownOptions?: dxPopoverOptions;

}
/**
 * @docid
 * @isEditor
 * @inherits dxDropDownList
 * @module ui/lookup
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxLookup extends dxDropDownList {
    constructor(element: TElement, options?: dxLookupOptions)
}

declare global {
interface JQuery {
    dxLookup(): JQuery;
    dxLookup(options: "instance"): dxLookup;
    dxLookup(options: string): any;
    dxLookup(options: string, ...params: any[]): any;
    dxLookup(options: dxLookupOptions): JQuery;
}
}
export type Options = dxLookupOptions;

/** @deprecated use Options instead */
export type IOptions = dxLookupOptions;
