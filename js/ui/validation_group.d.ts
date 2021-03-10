import {
    TPromise
} from '../core';

import DOMComponent, {
    DOMComponentOptions
} from '../core/dom_component';

import {
    AsyncRule,
    CompareRule,
    CustomRule,
    EmailRule,
    NumericRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule
} from './validation_rules';

export interface dxValidationGroupOptions extends DOMComponentOptions<dxValidationGroup> {
}
/**
 * @docid
 * @inherits DOMComponent
 * @hasTranscludedContent
 * @module ui/validation_group
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxValidationGroup extends DOMComponent {
    constructor(element: Element, options?: dxValidationGroupOptions)
    constructor(element: JQuery, options?: dxValidationGroupOptions)
    /**
     * @docid
     * @publicName reset()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    reset(): void;
    /**
     * @docid
     * @publicName validate()
     * @return dxValidationGroupResult
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    validate(): dxValidationGroupResult;
}

/**
 * @docid
 * @type object
 */
export interface dxValidationGroupResult {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
    /**
     * @docid
     * @type Promise<dxValidationGroupResult>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    complete?: TPromise<dxValidationGroupResult>;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    isValid?: boolean;
    /**
     * @docid
     * @type Enums.ValidationStatus
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    status?: 'valid' | 'invalid' | 'pending';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    validators?: Array<any>;
}

declare global {
interface JQuery {
    dxValidationGroup(): JQuery;
    dxValidationGroup(options: "instance"): dxValidationGroup;
    dxValidationGroup(options: string): any;
    dxValidationGroup(options: string, ...params: any[]): any;
    dxValidationGroup(options: dxValidationGroupOptions): JQuery;
}
}
export type Options = dxValidationGroupOptions;

/** @deprecated use Options instead */
export type IOptions = dxValidationGroupOptions;
