import * as React from 'react';
import { MenuProps, Ref, RefObject, Void } from './types';
interface MenuState {
    dragging: boolean;
    xPoint: number;
    translate: number;
    startDragTranslate: number;
    xDraggedDistance: number;
    firstItemVisible: boolean;
    lastItemVisible: boolean;
    leftArrowVisible: boolean;
    rightArrowVisible: boolean;
}
export declare class ScrollMenu extends React.Component<MenuProps, MenuState> {
    static defaultProps: MenuProps;
    private ref;
    private menuWrapper;
    private menuInner;
    private mounted;
    private needUpdate;
    private allItemsWidth;
    private menuPos;
    private menuWidth;
    private wWidth;
    private firstPageOffset;
    private lastPageOffset;
    private lastTranslateUpdate;
    private menuItems;
    private selected;
    private onLoadTimer;
    private rafTimer;
    private resizeTimer;
    private frameId;
    private data;
    private dragHistory;
    constructor(props: MenuProps);
    state: {
        dragging: boolean;
        firstItemVisible: boolean;
        lastItemVisible: boolean;
        leftArrowVisible: boolean;
        rightArrowVisible: boolean;
        startDragTranslate: number;
        translate: number;
        xDraggedDistance: number;
        xPoint: number;
    };
    componentDidMount(): Void;
    shouldComponentUpdate(nextProps: MenuProps, nextState: MenuState): boolean;
    componentDidUpdate(prevProps: MenuProps, prevState: MenuState): Void;
    componentWillUnmount(): Void;
    setRef: (ref: RefObject) => Void;
    setMenuInnerRef: (ref: Ref) => Void;
    setWrapperRef: (ref: Ref) => Void;
    checkFirstLastItemVisibility: ({ translate, }: {
        translate?: number | undefined;
    }) => {
        firstItemVisible: boolean;
        lastItemVisible: boolean;
    };
    setFirstLastItemVisibility: () => Void;
    onLoad: () => Void;
    resizeHandler: () => Void;
    resize: () => Void;
    setInitial: () => Void;
    isScrollNeeded: ({ itemId, translate, }: {
        itemId: string;
        translate?: number | undefined;
    }) => boolean;
    scrollTo: (itemKey: string) => Void;
    getMenuItems: () => [string, import("./types").Item][];
    getItemsWidth: ({ items, }: {
        items?: [string, import("./types").Item][] | undefined;
    }) => number;
    getWidth: ({ items, }: {
        items: [string, import("./types").Item][];
    }) => {
        wWidth: number;
        menuPos: number;
        menuWidth: number;
        allItemsWidth: number;
    };
    updateWidth: ({ items, }: {
        items?: [string, import("./types").Item][] | undefined;
    }) => Void;
    getFirstPageOffset: ({ items, offset, menuWidth, }: {
        items: [string, import("./types").Item][];
        offset: number;
        wWidth: number;
        menuPos: number;
        menuWidth: number;
    }) => number;
    getLastPageOffset: ({ items, allItemsWidth, wWidth, menuPos, menuWidth, }: {
        items: [string, import("./types").Item][];
        allItemsWidth: number;
        wWidth: number;
        menuPos: number;
        menuWidth: number;
    }) => number;
    getPagesOffsets: ({ items, allItemsWidth, wWidth, menuPos, menuWidth, offset, }: {
        items?: [string, import("./types").Item][] | undefined;
        allItemsWidth?: number | undefined;
        wWidth?: number | undefined;
        menuPos?: number | undefined;
        menuWidth?: number | undefined;
        offset?: number | undefined;
    }) => {
        firstPageOffset: number;
        lastPageOffset: number;
    };
    onItemClick: (id: string) => Void;
    getVisibleItems: ({ items, menuWidth, offset, translate, }: {
        items?: [string, import("./types").Item][] | undefined;
        menuWidth?: number | undefined;
        offset?: number | undefined;
        translate?: number | undefined;
    }) => [string, import("./types").Item][];
    elemVisible: ({ x, offset, elWidth, menuWidth, }: {
        x: number;
        offset: number;
        elWidth: number;
        menuWidth?: number | undefined;
    }) => boolean;
    getItemInd: (menuItems: [string, import("./types").Item][] | undefined, item: [string, import("./types").Item]) => number;
    getNextItemInd: (left: boolean, visibleItems: [string, import("./types").Item][]) => number;
    getOffsetToItemByKey: (key: string) => number;
    getItemByKey: (key: React.ReactText) => [string, import("./types").Item];
    getItemIndexByKey: (itemKey: string) => number;
    getOffsetToItemByIndex: ({ index, menuItems, translate, }: {
        index: number;
        menuItems?: [string, import("./types").Item][] | undefined;
        translate?: number | undefined;
    }) => number;
    getScrollRightOffset: (visibleItems: [string, import("./types").Item][], items?: [string, import("./types").Item][]) => number;
    getScrollLeftOffset: (visibleItems: [string, import("./types").Item][], items?: [string, import("./types").Item][]) => number;
    getNextItem: (key: string) => [string, import("./types").Item];
    getPrevItem: (key: string) => [string, import("./types").Item];
    getOffset: (left: boolean, items?: [string, import("./types").Item][]) => number;
    getCenterOffset: ({ items, menuWidth, }: {
        items?: [string, import("./types").Item][] | undefined;
        menuWidth?: number | undefined;
    }) => number;
    handleWheel: (e: React.WheelEvent<Element>) => Void;
    getOffsetAtStart: () => number;
    getOffsetAtEnd: () => number;
    handleArrowClickRight: () => Void;
    handleArrowClick: (left?: boolean) => Void;
    itBeforeStart: (trans: number) => boolean;
    itAfterEnd: (trans: number) => boolean;
    getPoint: (ev: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => number;
    handleDragStart: (ev: React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    handleDrag: (e: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    handleDragStop: (e: Event | React.MouseEvent<Element, MouseEvent> | React.TouchEvent<Element>) => Void;
    isArrowsVisible: () => boolean;
    onUpdate: ({ translate, translateOld, }: {
        translate?: number | undefined;
        translateOld?: number | undefined;
    }) => Void;
    render(): React.ReactNode | null;
}
export default ScrollMenu;
//# sourceMappingURL=scrollMenu.d.ts.map