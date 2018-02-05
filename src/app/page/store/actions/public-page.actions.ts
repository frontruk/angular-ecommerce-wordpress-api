import { Action } from '@ngrx/store';

export const GET_PAGE  = '[Page] Get public page by hostname';
export const GET_PAGE_SUCCESS  = '[Page] Get public page  by hostname success';
export const GET_PAGE_FAIL = '[Page] Get public page  by hostname fail';


export class GetPage implements Action {
    readonly type = GET_PAGE;
    constructor(public payload: any) {}
}
export class GetPageSuccess implements Action {
    readonly type = GET_PAGE_SUCCESS;
    constructor(public payload: Array<any>) {}
}
export class GetPageFailure implements Action {
    readonly type = GET_PAGE_FAIL;
    constructor(public payload: any) {}
}

export const GET_PAGES  = '[Pages] Get public page by hostname';
export const GET_PAGES_SUCCESS  = '[Pages] Get public page  by hostname success';
export const GET_PAGES_FAIL = '[Pages] Get public page  by hostname fail';


export class GetPages implements Action {
    readonly type = GET_PAGES;
    // constructor(public payload: any) {}
}
export class GetPagesSuccess implements Action {
    readonly type = GET_PAGES_SUCCESS;
    constructor(public payload: Array<any>) {}
}
export class GetPagesFailure implements Action {
    readonly type = GET_PAGES_FAIL;
    constructor(public payload: any) {}
}


export type PublicPageActions =
    | GetPage
    | GetPageSuccess
    | GetPageFailure
    | GetPages
    | GetPagesSuccess
    | GetPagesFailure;

