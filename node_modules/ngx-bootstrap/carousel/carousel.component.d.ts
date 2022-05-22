/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { EventEmitter, NgZone, OnDestroy, AfterViewInit } from '@angular/core';
import { LinkedList } from 'ngx-bootstrap/utils';
import { SlideComponent } from './slide.component';
import { CarouselConfig } from './carousel.config';
import { SlideWithIndex } from './models';
import * as ɵngcc0 from '@angular/core';
export declare enum Direction {
    UNKNOWN = 0,
    NEXT = 1,
    PREV = 2
}
/**
 * Base element to create carousel
 */
export declare class CarouselComponent implements AfterViewInit, OnDestroy {
    private ngZone;
    noWrap: boolean;
    noPause: boolean;
    showIndicators: boolean;
    pauseOnFocus: boolean;
    indicatorsByChunk: boolean;
    itemsPerSlide: number;
    singleSlideOffset: boolean;
    /** Turn on/off animation. Animation doesn't work for multilist carousel */
    isAnimated: boolean;
    /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
    activeSlideChange: EventEmitter<number>;
    /** Will be emitted when active slides has been changed in multilist mode */
    slideRangeChange: EventEmitter<number[]>;
    /** Index of currently displayed slide(started for 0) */
    set activeSlide(index: number);
    get activeSlide(): number;
    startFromIndex: number;
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     */
    get interval(): number;
    set interval(value: number);
    get slides(): SlideComponent[];
    protected currentInterval: any;
    protected _currentActiveSlide: number;
    protected _interval: number;
    protected _slides: LinkedList<SlideComponent>;
    protected _chunkedSlides: SlideWithIndex[][];
    protected _slidesWithIndexes: SlideWithIndex[];
    protected _currentVisibleSlidesIndex: number;
    protected isPlaying: boolean;
    protected destroyed: boolean;
    get isBs4(): boolean;
    constructor(config: CarouselConfig, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    addSlide(slide: SlideComponent): void;
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    removeSlide(slide: SlideComponent): void;
    nextSlideFromInterval(force?: boolean): void;
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    nextSlide(force?: boolean): void;
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    previousSlide(force?: boolean): void;
    getFirstVisibleIndex(): number;
    getLastVisibleIndex(): number;
    getActive: (slide: SlideComponent) => boolean;
    move(direction: Direction, force?: boolean): void;
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    keydownPress(event: KeyboardEvent): void;
    /**
     * Play on mouse leave
     * @internal
     */
    onMouseLeave(): void;
    /**
     * Play on mouse up
     * @internal
     */
    onMouseUp(): void;
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    pauseFocusIn(): void;
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    pauseFocusOut(): void;
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    selectSlide(index: number): void;
    /**
     * Starts a auto changing of slides
     */
    play(): void;
    /**
     * Stops a auto changing of slides
     */
    pause(): void;
    /**
     * Finds and returns index of currently displayed slide
     */
    getCurrentSlideIndex(): number;
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    isLast(index: number): boolean;
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    isFirst(index: number): boolean;
    indicatorsSlides(): SlideComponent[];
    private selectInitialSlides;
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    private findNextSlideIndex;
    private mapSlidesAndIndexes;
    private selectSlideRange;
    private selectRangeByNestedIndex;
    private isIndexOnTheEdges;
    private isIndexInRange;
    private hideSlides;
    private isVisibleSlideListLast;
    private isVisibleSlideListFirst;
    private moveSliderByOneItem;
    private makeSlidesConsistent;
    private moveMultilist;
    private getVisibleIndexes;
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    private _select;
    /**
     * Starts loop of auto changing of slides
     */
    private restartTimer;
    get multilist(): boolean;
    /**
     * Stops loop of auto changing of slides
     */
    private resetTimer;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CarouselComponent, "carousel", never, {
    "indicatorsByChunk": "indicatorsByChunk";
    "itemsPerSlide": "itemsPerSlide";
    "singleSlideOffset": "singleSlideOffset";
    "isAnimated": "isAnimated";
    "startFromIndex": "startFromIndex";
    "activeSlide": "activeSlide";
    "interval": "interval";
    "noWrap": "noWrap";
    "noPause": "noPause";
    "showIndicators": "showIndicators";
    "pauseOnFocus": "pauseOnFocus";
}, {
    "activeSlideChange": "activeSlideChange";
    "slideRangeChange": "slideRangeChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUtBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKlxuICogcGF1c2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP3N0cmluZz0naG92ZXInKSAtIGV2ZW50IGdyb3VwIG5hbWUgd2hpY2ggcGF1c2VzXG4gKiB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwsIGlmIGhvdmVyIHBhdXNlcyBvbiBtb3VzZWVudGVyIGFuZCByZXN1bWVzIG9uXG4gKiBtb3VzZWxlYXZlIGtleWJvYXJkIChub3QgeWV0IHN1cHBvcnRlZCkgKD9ib29sZWFuPXRydWUpIC0gaWYgZmFsc2VcbiAqIGNhcm91c2VsIHdpbGwgbm90IHJlYWN0IHRvIGtleWJvYXJkIGV2ZW50c1xuICogbm90ZTogc3dpcGluZyBub3QgeWV0IHN1cHBvcnRlZFxuICovXG4vKioqKlxuICogUHJvYmxlbXM6XG4gKiAxKSBpZiB3ZSBzZXQgYW4gYWN0aXZlIHNsaWRlIHZpYSBtb2RlbCBjaGFuZ2VzLCAuYWN0aXZlIGNsYXNzIHJlbWFpbnMgb24gYVxuICogY3VycmVudCBzbGlkZS5cbiAqIDIpIGlmIHdlIGhhdmUgb25seSBvbmUgc2xpZGUsIHdlIHNob3VsZG4ndCBzaG93IHByZXYvbmV4dCBuYXYgYnV0dG9uc1xuICogMykgaWYgZmlyc3Qgb3IgbGFzdCBzbGlkZSBpcyBhY3RpdmUgYW5kIG5vV3JhcCBpcyB0cnVlLCB0aGVyZSBzaG91bGQgYmVcbiAqIFwiZGlzYWJsZWRcIiBjbGFzcyBvbiB0aGUgbmF2IGJ1dHRvbnMuXG4gKiA0KSBkZWZhdWx0IGludGVydmFsIHNob3VsZCBiZSBlcXVhbCA1MDAwXG4gKi9cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgTmdab25lLCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExpbmtlZExpc3QgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxDb25maWcgfSBmcm9tICcuL2Nhcm91c2VsLmNvbmZpZyc7XG5pbXBvcnQgeyBTbGlkZVdpdGhJbmRleCB9IGZyb20gJy4vbW9kZWxzJztcbmV4cG9ydCBkZWNsYXJlIGVudW0gRGlyZWN0aW9uIHtcbiAgICBVTktOT1dOID0gMCxcbiAgICBORVhUID0gMSxcbiAgICBQUkVWID0gMlxufVxuLyoqXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIG5nWm9uZTtcbiAgICBub1dyYXA6IGJvb2xlYW47XG4gICAgbm9QYXVzZTogYm9vbGVhbjtcbiAgICBzaG93SW5kaWNhdG9yczogYm9vbGVhbjtcbiAgICBwYXVzZU9uRm9jdXM6IGJvb2xlYW47XG4gICAgaW5kaWNhdG9yc0J5Q2h1bms6IGJvb2xlYW47XG4gICAgaXRlbXNQZXJTbGlkZTogbnVtYmVyO1xuICAgIHNpbmdsZVNsaWRlT2Zmc2V0OiBib29sZWFuO1xuICAgIC8qKiBUdXJuIG9uL29mZiBhbmltYXRpb24uIEFuaW1hdGlvbiBkb2Vzbid0IHdvcmsgZm9yIG11bHRpbGlzdCBjYXJvdXNlbCAqL1xuICAgIGlzQW5pbWF0ZWQ6IGJvb2xlYW47XG4gICAgLyoqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIGFjdGl2ZSBzbGlkZSBoYXMgYmVlbiBjaGFuZ2VkLiBQYXJ0IG9mIHR3by13YXktYmluZGFibGUgWyhhY3RpdmVTbGlkZSldIHByb3BlcnR5ICovXG4gICAgYWN0aXZlU2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGVzIGhhcyBiZWVuIGNoYW5nZWQgaW4gbXVsdGlsaXN0IG1vZGUgKi9cbiAgICBzbGlkZVJhbmdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyW10+O1xuICAgIC8qKiBJbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlKHN0YXJ0ZWQgZm9yIDApICovXG4gICAgc2V0IGFjdGl2ZVNsaWRlKGluZGV4OiBudW1iZXIpO1xuICAgIGdldCBhY3RpdmVTbGlkZSgpOiBudW1iZXI7XG4gICAgc3RhcnRGcm9tSW5kZXg6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBEZWxheSBvZiBpdGVtIGN5Y2xpbmcgaW4gbWlsbGlzZWNvbmRzLiBJZiBmYWxzZSwgY2Fyb3VzZWwgd29uJ3QgY3ljbGVcbiAgICAgKiBhdXRvbWF0aWNhbGx5LlxuICAgICAqL1xuICAgIGdldCBpbnRlcnZhbCgpOiBudW1iZXI7XG4gICAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpO1xuICAgIGdldCBzbGlkZXMoKTogU2xpZGVDb21wb25lbnRbXTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudEludGVydmFsOiBhbnk7XG4gICAgcHJvdGVjdGVkIF9jdXJyZW50QWN0aXZlU2xpZGU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgX2ludGVydmFsOiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIF9zbGlkZXM6IExpbmtlZExpc3Q8U2xpZGVDb21wb25lbnQ+O1xuICAgIHByb3RlY3RlZCBfY2h1bmtlZFNsaWRlczogU2xpZGVXaXRoSW5kZXhbXVtdO1xuICAgIHByb3RlY3RlZCBfc2xpZGVzV2l0aEluZGV4ZXM6IFNsaWRlV2l0aEluZGV4W107XG4gICAgcHJvdGVjdGVkIF9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIGlzUGxheWluZzogYm9vbGVhbjtcbiAgICBwcm90ZWN0ZWQgZGVzdHJveWVkOiBib29sZWFuO1xuICAgIGdldCBpc0JzNCgpOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ2Fyb3VzZWxDb25maWcsIG5nWm9uZTogTmdab25lKTtcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlXG4gICAgICogYW5kIHN0YXJ0cyBhdXRvIGNoYW5naW5nXG4gICAgICogQHBhcmFtIHNsaWRlXG4gICAgICovXG4gICAgYWRkU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHNwZWNpZmllZCBzbGlkZS4gSWYgdGhpcyBzbGlkZSBpcyBhY3RpdmUgLSB3aWxsIHJvbGwgdG8gYW5vdGhlclxuICAgICAqIHNsaWRlXG4gICAgICogQHBhcmFtIHNsaWRlXG4gICAgICovXG4gICAgcmVtb3ZlU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZDtcbiAgICBuZXh0U2xpZGVGcm9tSW50ZXJ2YWwoZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSb2xsaW5nIHRvIG5leHQgc2xpZGVcbiAgICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiB0cnVlIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWdcbiAgICAgKi9cbiAgICBuZXh0U2xpZGUoZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSb2xsaW5nIHRvIHByZXZpb3VzIHNsaWRlXG4gICAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgdHJ1ZSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnXG4gICAgICovXG4gICAgcHJldmlvdXNTbGlkZShmb3JjZT86IGJvb2xlYW4pOiB2b2lkO1xuICAgIGdldEZpcnN0VmlzaWJsZUluZGV4KCk6IG51bWJlcjtcbiAgICBnZXRMYXN0VmlzaWJsZUluZGV4KCk6IG51bWJlcjtcbiAgICBnZXRBY3RpdmU6IChzbGlkZTogU2xpZGVDb21wb25lbnQpID0+IGJvb2xlYW47XG4gICAgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2U/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTd2l0aCBzbGlkZXMgYnkgZW50ZXIsIHNwYWNlIGFuZCBhcnJvd3Mga2V5c1xuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGtleWRvd25QcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUGxheSBvbiBtb3VzZSBsZWF2ZVxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFBsYXkgb24gbW91c2UgdXBcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBvbk1vdXNlVXAoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBXaGVuIHNsaWRlcyBvbiBmb2N1cyBhdXRvcGxheSBpcyBzdG9wcGVkKG9wdGlvbmFsKVxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHBhdXNlRm9jdXNJbigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gc2xpZGVzIG91dCBvZiBmb2N1cyBhdXRvcGxheSBpcyBzdGFydGVkXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgcGF1c2VGb2N1c091dCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJvbGxpbmcgdG8gc3BlY2lmaWVkIHNsaWRlXG4gICAgICogQHBhcmFtIGluZGV4OiB7bnVtYmVyfSBpbmRleCBvZiBzbGlkZSwgd2hpY2ggbXVzdCBiZSBzaG93blxuICAgICAqL1xuICAgIHNlbGVjdFNsaWRlKGluZGV4OiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyBhIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAgICovXG4gICAgcGxheSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFN0b3BzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcbiAgICAgKi9cbiAgICBwYXVzZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZpbmRzIGFuZCByZXR1cm5zIGluZGV4IG9mIGN1cnJlbnRseSBkaXNwbGF5ZWQgc2xpZGVcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50U2xpZGVJbmRleCgpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcywgd2hldGhlciB0aGUgc3BlY2lmaWVkIGluZGV4IGlzIGxhc3QgaW4gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIGlzTGFzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzLCB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgZmlyc3QgaW4gY29sbGVjdGlvblxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIGlzRmlyc3QoaW5kZXg6IG51bWJlcik6IGJvb2xlYW47XG4gICAgaW5kaWNhdG9yc1NsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdO1xuICAgIHByaXZhdGUgc2VsZWN0SW5pdGlhbFNsaWRlcztcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIG5leHQgc2xpZGUgaW5kZXgsIGRlcGVuZGluZyBvZiBkaXJlY3Rpb25cbiAgICAgKiBAcGFyYW0gZGlyZWN0aW9uOiBEaXJlY3Rpb24oVU5LTk9XTnxQUkVWfE5FWFQpXG4gICAgICogQHBhcmFtIGZvcmNlOiB7Ym9vbGVhbn0gaWYgVFJVRSAtIHdpbGwgaWdub3JlIG5vV3JhcCBmbGFnLCBlbHNlIHdpbGxcbiAgICAgKiAgIHJldHVybiB1bmRlZmluZWQgaWYgbmV4dCBzbGlkZSByZXF1aXJlIHdyYXBwaW5nXG4gICAgICovXG4gICAgcHJpdmF0ZSBmaW5kTmV4dFNsaWRlSW5kZXg7XG4gICAgcHJpdmF0ZSBtYXBTbGlkZXNBbmRJbmRleGVzO1xuICAgIHByaXZhdGUgc2VsZWN0U2xpZGVSYW5nZTtcbiAgICBwcml2YXRlIHNlbGVjdFJhbmdlQnlOZXN0ZWRJbmRleDtcbiAgICBwcml2YXRlIGlzSW5kZXhPblRoZUVkZ2VzO1xuICAgIHByaXZhdGUgaXNJbmRleEluUmFuZ2U7XG4gICAgcHJpdmF0ZSBoaWRlU2xpZGVzO1xuICAgIHByaXZhdGUgaXNWaXNpYmxlU2xpZGVMaXN0TGFzdDtcbiAgICBwcml2YXRlIGlzVmlzaWJsZVNsaWRlTGlzdEZpcnN0O1xuICAgIHByaXZhdGUgbW92ZVNsaWRlckJ5T25lSXRlbTtcbiAgICBwcml2YXRlIG1ha2VTbGlkZXNDb25zaXN0ZW50O1xuICAgIHByaXZhdGUgbW92ZU11bHRpbGlzdDtcbiAgICBwcml2YXRlIGdldFZpc2libGVJbmRleGVzO1xuICAgIC8qKlxuICAgICAqIFNldHMgYSBzbGlkZSwgd2hpY2ggc3BlY2lmaWVkIHRocm91Z2ggaW5kZXgsIGFzIGFjdGl2ZVxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIHByaXZhdGUgX3NlbGVjdDtcbiAgICAvKipcbiAgICAgKiBTdGFydHMgbG9vcCBvZiBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xuICAgICAqL1xuICAgIHByaXZhdGUgcmVzdGFydFRpbWVyO1xuICAgIGdldCBtdWx0aWxpc3QoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTdG9wcyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNldFRpbWVyO1xufVxuIl19