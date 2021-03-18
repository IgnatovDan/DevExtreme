import {
    TElement
} from '../core/element';

import {
    TPromise
} from '../core/utils/deferred';

import {
    TEvent
} from '../events/index';

import PivotGridDataSource, {
    PivotGridDataSourceField,
    PivotGridDataSourceOptions
} from './pivot_grid/data_source';

import dxPopup from './popup';

import Widget, {
    WidgetOptions
} from './widget/ui.widget';

/**
 * @public
*/
export interface CellClickEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly model?: any;
    readonly area?: string;
    readonly cellElement?: TElement;
    readonly cell?: dxPivotGridPivotGridCell;
    readonly rowIndex?: number;
    readonly columnIndex?: number;
    readonly columnFields?: Array<PivotGridDataSourceField>;
    readonly rowFields?: Array<PivotGridDataSourceField>;
    readonly dataFields?: Array<PivotGridDataSourceField>;
    readonly event?: TEvent;
    cancel?: boolean
}

/**
 * @public
*/
export interface CellPreparedEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly model?: any;
    readonly area?: string;
    readonly cellElement?: TElement;
    readonly cell?: dxPivotGridPivotGridCell;
    readonly rowIndex?: number;
    readonly columnIndex?: number
}

/**
 * @public
*/
export interface ContextMenuPreparingEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly model?: any;
    readonly area?: string;
    readonly cell?: dxPivotGridPivotGridCell;
    readonly cellElement?: TElement;
    readonly columnIndex?: number;
    readonly rowIndex?: number;
    readonly dataFields?: Array<PivotGridDataSourceField>;
    readonly rowFields?: Array<PivotGridDataSourceField>;
    readonly columnFields?: Array<PivotGridDataSourceField>;
    readonly field?: PivotGridDataSourceField;
    items?: Array<any>;
}

/**
 * @public
*/
export interface ExportedEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly model?: any;
}

/**
 * @public
*/
export interface ExportingEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly model?: any;
    fileName?: string;
    cancel?: boolean;
}

/**
 * @public
*/
export interface FileSavingEvent {
    readonly component: dxPivotGrid;
    readonly element: TElement;
    readonly data?: Blob;
    readonly format?: string;
    fileName?: string;
    cancel?: boolean;
}

/**
 * @public
*/
export interface Export {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    enabled?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "PivotGrid"
     * @deprecated
     */
    fileName?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default true
     * @deprecated
     */
    ignoreExcelErrors?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default undefined
     * @deprecated
     */
    proxyUrl?: string;
}

/**
 * @public
*/
export interface FieldChooserTexts {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'All Fields'
     */
    allFields?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Column Fields'
     */
    columnFields?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Data Fields'
     */
    dataFields?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Filter Fields'
     */
    filterFields?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Row Fields'
     */
    rowFields?: string;
}

/**
 * @public
*/
export interface FieldChooser {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    allowSearch?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type Enums.ApplyChangesMode
     * @default "instantly"
     */
    applyChangesMode?: 'instantly' | 'onDemand';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default true
     */
    enabled?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 600
     */
    height?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type Enums.PivotGridFieldChooserLayout
     * @default 0
     */
    layout?: 0 | 1 | 2;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default searchTimeout
     */
    searchTimeout?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     */
    texts?: FieldChooserTexts;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Field Chooser"
     */
    title?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 600
     */
    width?: number;
}

/**
 * @public
*/
export interface FieldPanelTexts {
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default "Drop Column Fields Here"
    */
    columnFieldArea?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Drop Data Fields Here"
     */
    dataFieldArea?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Drop Filter Fields Here"
     */
    filterFieldArea?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Drop Row Fields Here"
     */
    rowFieldArea?: string;
}

/**
 * @public
*/
export interface FieldPanel {
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default true
    */
    allowFieldDragging?: boolean;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default true
    */
    showColumnFields?: boolean;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default true
    */
    showDataFields?: boolean;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default true
    */
    showFilterFields?: boolean;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default true
    */
    showRowFields?: boolean;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    */
    texts?: FieldPanelTexts;
    /**
    * @docid
    * @prevFileNamespace DevExpress.ui
    * @default false
    */
    visible?: boolean;
}

/**
 * @public
*/
export interface HeaderFilterTexts {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Cancel"
     */
    cancel?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "(Blanks)"
     */
    emptyValue?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Ok"
     */
    ok?: string;
}

/**
 * @public
*/
export interface HeaderFilter {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    allowSearch?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 325
     */
    height?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default searchTimeout
     */
    searchTimeout?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    showRelevantValues?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     */
    texts?: HeaderFilterTexts;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 252
     */
    width?: number;
}

/**
 * @public
*/
export interface LoadPanel {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default true
     */
    enabled?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 70
     */
    height?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default ""
     */
    indicatorSrc?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    shading?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default ''
     */
    shadingColor?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default true
     */
    showIndicator?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default true
     */
    showPane?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Loading...'
     */
    text?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 200
     */
    width?: number;
}

/**
 * @public
*/
export interface Scrolling {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type Enums.PivotGridScrollingMode
     * @default "standard"
     */
    mode?: 'standard' | 'virtual';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type boolean|Enums.Mode
     * @default "auto"
     */
    useNative?: boolean | 'auto';
}

/**
 * @public
*/
export interface StateStoring {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type_function_return Promise<Object>
     */
    customLoad?: (() => TPromise<any>);
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type_function_param1 state:object
     */
    customSave?: ((state: any) => any);
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default false
     */
    enabled?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 2000
     */
    savingTimeout?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default null
     */
    storageKey?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @type Enums.StateStoringType
     * @default "localStorage"
     */
    type?: 'custom' | 'localStorage' | 'sessionStorage';
}

/**
 * @public
*/
export interface Texts {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Collapse All'
     */
    collapseAll?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "N/A"
     */
    dataNotAvailable?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Expand All'
     */
    expandAll?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default "Export to Excel file"
     */
    exportToExcel?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Grand Total'
     */
    grandTotal?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'No data'
     */
    noData?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Remove All Sorting'
     */
    removeAllSorting?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Show Field Chooser'
     */
    showFieldChooser?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Sort {0} by This Column'
     */
    sortColumnBySummary?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default 'Sort {0} by This Row'
     */
    sortRowBySummary?: string;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @default '{0} Total'
     */
    total?: string;
}

export interface dxPivotGridOptions extends WidgetOptions<dxPivotGrid> {
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowExpandAll?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowFiltering?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowSorting?: boolean;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    allowSortingBySummary?: boolean;
    /**
     * @docid
     * @type Enums.PivotGridDataFieldArea
     * @default "column"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataFieldArea?: 'column' | 'row';
    /**
     * @docid
     * @default null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataSource?: Array<any> | PivotGridDataSource | PivotGridDataSourceOptions;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    encodeHtml?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    export?: Export;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fieldChooser?: FieldChooser;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    fieldPanel?: FieldPanel;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    headerFilter?: HeaderFilter;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    hideEmptySummaryCells?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    loadPanel?: LoadPanel;
    /**
     * @docid
     * @type_function_param1 e:Object
     * @type_function_param1_field4 area:string
     * @type_function_param1_field5 cellElement:dxElement
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 rowIndex:number
     * @type_function_param1_field8 columnIndex:number
     * @type_function_param1_field9 columnFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field10 rowFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field11 dataFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field12 event:event
     * @type_function_param1_field13 cancel:boolean
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCellClick?: ((e: CellClickEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field4 area:string
     * @type_function_param1_field5 cellElement:dxElement
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 rowIndex:number
     * @type_function_param1_field8 columnIndex:number
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onCellPrepared?: ((e: CellPreparedEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:Object
     * @type_function_param1_field4 items:Array<Object>
     * @type_function_param1_field5 area:string
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 cellElement:dxElement
     * @type_function_param1_field8 columnIndex:number
     * @type_function_param1_field9 rowIndex:number
     * @type_function_param1_field10 dataFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field11 rowFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field12 columnFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field13 field:PivotGridDataSourceOptions.fields
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onContextMenuPreparing?: ((e: ContextMenuPreparingEvent) => void);
    /**
     * @docid
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated
     */
    onExported?: ((e: ExportedEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field4 fileName:string
     * @type_function_param1_field5 cancel:boolean
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    onExporting?: ((e: ExportingEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field3 fileName:string
     * @type_function_param1_field4 format:string
     * @type_function_param1_field5 data:BLOB
     * @type_function_param1_field6 cancel:boolean
     * @extends Action
     * @action
     * @prevFileNamespace DevExpress.ui
     * @public
     * @deprecated
     */
    onFileSaving?: ((e: FileSavingEvent) => void);
    /**
     * @docid
     * @type Enums.PivotGridRowHeadersLayout
     * @default "standard"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rowHeaderLayout?: 'standard' | 'tree';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    scrolling?: Scrolling;
    /**
     * @docid
     * @default false
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showBorders?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showColumnGrandTotals?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showColumnTotals?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showRowGrandTotals?: boolean;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showRowTotals?: boolean;
    /**
     * @docid
     * @type Enums.PivotGridTotalsDisplayMode
     * @default "none"
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    showTotalsPrior?: 'both' | 'columns' | 'none' | 'rows';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    stateStoring?:StateStoring;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    texts?: Texts;
    /**
     * @docid
     * @default true
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    wordWrapEnabled?: boolean;
}

/**
 * @public
*/
export interface BindChartOptions {
  inverted?: boolean;
  dataFieldsDisplayMode?: string;
  putDataFieldsInto?: string;
  alternateDataFields?: boolean;
  processCell?: Function;
  customizeChart?: Function;
  customizeSeries?: Function;
}

/**
 * @docid
 * @inherits Widget
 * @module ui/pivot_grid
 * @export default
 * @prevFileNamespace DevExpress.ui
 * @public
 */
export default class dxPivotGrid extends Widget {
    constructor(element: TElement, options?: dxPivotGridOptions)
    /**
     * @docid
     * @publicName bindChart(chart, integrationOptions)
     * @param1 chart:string|jQuery|object
     * @param2 integrationOptions:object
     * @param2_field1 inverted:boolean
     * @param2_field2 dataFieldsDisplayMode:string
     * @param2_field3 putDataFieldsInto:string
     * @param2_field4 alternateDataFields:boolean
     * @param2_field5 processCell:function(cellData)
     * @param2_field6 customizeChart:function(chartOptions)
     * @param2_field7 customizeSeries:function(seriesName, seriesOptions)
     * @return function | null
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    bindChart(chart: string | TElement | any, integrationOptions: BindChartOptions): Function & null;
    /**
     * @docid
     * @publicName exportToExcel()
     * @deprecated excelExporter.exportPivotGrid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    exportToExcel(): void;
    /**
     * @docid
     * @publicName getDataSource()
     * @return PivotGridDataSource
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getDataSource(): PivotGridDataSource;
    /**
     * @docid
     * @publicName getFieldChooserPopup()
     * @return dxPopup
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    getFieldChooserPopup(): dxPopup;
    /**
     * @docid
     * @publicName updateDimensions()
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    updateDimensions(): void;
}

/**
* @docid
* @type object
*/
export interface dxPivotGridPivotGridCell {
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    columnPath?: Array<string | number | Date>;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @type string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    columnType?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    dataIndex?: number;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    expanded?: boolean;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    path?: Array<string | number | Date>;
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rowPath?: Array<string | number | Date>;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @type string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    rowType?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    text?: string;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @type string
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    type?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value?: any;
}

/**
* @docid
* @type object
*/
export interface dxPivotGridSummaryCell {
    /**
     * @docid
     * @publicName child(direction, fieldValue)
     * @param1 direction:string
     * @param2 fieldValue:number|string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    child(direction: string, fieldValue: number | string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName children(direction)
     * @param1 direction:string
     * @return Array<dxPivotGridSummaryCell>
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    children(direction: string): Array<dxPivotGridSummaryCell>;
    /**
     * @docid
     * @publicName field(area)
     * @param1 area:string
     * @return PivotGridDataSourceOptions.fields
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    field(area: string): PivotGridDataSourceField;
    /**
     * @docid
     * @publicName grandTotal()
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    grandTotal(): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName grandTotal(direction)
     * @param1 direction:string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    grandTotal(direction: string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName isPostProcessed(field)
     * @param1 field:PivotGridDataSourceOptions.fields|string
     * @return boolean
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    isPostProcessed(field: PivotGridDataSourceField | string): boolean;
    /**
     * @docid
     * @publicName next(direction)
     * @param1 direction:string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    next(direction: string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName next(direction, allowCrossGroup)
     * @param1 direction:string
     * @param2 allowCrossGroup:bool
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    next(direction: string, allowCrossGroup: boolean): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName parent(direction)
     * @param1 direction:string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    parent(direction: string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName prev(direction)
     * @param1 direction:string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    prev(direction: string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName prev(direction, allowCrossGroup)
     * @param1 direction:string
     * @param2 allowCrossGroup:bool
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    prev(direction: string, allowCrossGroup: boolean): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName slice(field, value)
     * @param1 field:PivotGridDataSourceOptions.fields
     * @param2 value:number|string
     * @return dxPivotGridSummaryCell
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    slice(field: PivotGridDataSourceField, value: number | string): dxPivotGridSummaryCell;
    /**
     * @docid
     * @publicName value()
     * @return any
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value(): any;
    /**
     * @docid
     * @publicName value(field)
     * @param1 field:PivotGridDataSourceOptions.fields|string
     * @return any
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value(field: PivotGridDataSourceField | string): any;
    /**
     * @docid
     * @publicName value(field, postProcessed)
     * @param1 field:PivotGridDataSourceOptions.fields|string
     * @param2 postProcessed:boolean
     * @return any
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value(field: PivotGridDataSourceField | string, postProcessed: boolean): any;
    /**
     * @docid
     * @publicName value(postProcessed)
     * @param1 postProcessed:boolean
     * @return any
     * @prevFileNamespace DevExpress.ui
     * @public
     */
    value(postProcessed: boolean): any;
}

export type Options = dxPivotGridOptions;

/** @deprecated use Options instead */
export type IOptions = dxPivotGridOptions;
