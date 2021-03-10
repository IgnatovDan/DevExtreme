import {
    TPromise
} from '../core';

import {
    TElement
} from '../core/element';

import dxScrollable, {
    dxScrollableOptions
} from './scroll_view/ui.scrollable';

export interface dxScrollViewOptions extends dxScrollableOptions<dxScrollView> {
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onPullDown?: ((e: { component?: dxScrollView, element?: TElement, model?: any }) => any);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onReachBottom?: ((e: { component?: dxScrollView, element?: TElement, model?: any }) => any);
    /**
     * @docid
     * @default "Release to refresh..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pulledDownText?: string;
    /**
     * @docid
     * @default "Pull down to refresh..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    pullingDownText?: string;
    /**
     * @docid
     * @default "Loading..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reachBottomText?: string;
    /**
     * @docid
     * @default "Refreshing..."
     * @default "" [for](Material)
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    refreshingText?: string;
}
/**
 * @docid
 * @inherits dxScrollable
 * @hasTranscludedContent
 * @module ui/scroll_view
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxScrollView extends dxScrollable {
    constructor(element: TElement, options?: dxScrollViewOptions)
    /**
     * @docid
     * @publicName refresh()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    refresh(): void;
    /**
     * @docid
     * @publicName release(preventScrollBottom)
     * @param1 preventScrollBottom:boolean
     * @return Promise<void>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    release(preventScrollBottom: boolean): TPromise<void>;
}

declare global {
interface JQuery {
    dxScrollView(): JQuery;
    dxScrollView(options: "instance"): dxScrollView;
    dxScrollView(options: string): any;
    dxScrollView(options: string, ...params: any[]): any;
    dxScrollView(options: dxScrollViewOptions): JQuery;
}
}
export type Options = dxScrollViewOptions;

/** @deprecated use Options instead */
export type IOptions = dxScrollViewOptions;
