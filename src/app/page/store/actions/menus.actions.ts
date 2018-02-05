import { Action } from '@ngrx/store';
import { MenuItem } from '../../models/menu';

export const GET_MENUS  = '[Menu] Get menu ';
export const GET_MENUS_SUCCESS  = '[Menu] Get menu success';
export const GET_MENUS_FAIL = '[Menu] Get menu hostname fail';


export class GetMenus implements Action {
    readonly type = GET_MENUS;
    constructor(public payload: any) {}
}
export class GetMenusSuccess implements Action {
    readonly type = GET_MENUS_SUCCESS;
    constructor(public payload: Array<MenuItem>) {}
}
export class GetMenusFailure implements Action {
    readonly type = GET_MENUS_FAIL;
    constructor(public payload: any) {}
}


export type MenusActions =
    | GetMenus
    | GetMenusSuccess
    | GetMenusFailure;

