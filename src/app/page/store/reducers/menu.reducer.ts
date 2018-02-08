import * as fromMenu from '../actions/menus.actions';
import { MenuItem } from '../../models/menu';

export interface State {
    loading: boolean;
    loaded: boolean;
    data: any;
    entities: { [id: number ]: any };
    entitiesbyPath: { [path: string ]: any };
}
const initialState: State = {
    loading: false,
    loaded: false,
    data: [],
    entities: {},
    entitiesbyPath: {}
}

export function reducer(state: State = initialState, action: fromMenu.MenusActions): State {
    switch (action.type) {

        // case fromMenu.GET_MENUS_SUCCESS: {
        //     console.log('calling')
        //     return Object.assign({}, state, {
        //         loading: false,
        //         loaded: true,
        //         data: action.payload
        //     });
        // }

        case fromMenu.GET_MENUS_SUCCESS: {
            const pages = action.payload;
            const entities = pages.reduce(
                (entitiesList: { [id: number]: MenuItem }, item: MenuItem) => {
                    return {
                        ...entitiesList,
                        [item.id]: item,
                    };
                },
                {
                    ...state.entities,
                }
            );
            const entitiesbyPath = pages.reduce(
                (entitiesList: { [object_slug: string]: MenuItem }, item: MenuItem) => {
                    return {
                        ...entitiesList,
                        [item.object_slug]: item,
                    };
                },
                {
                    ...state.entities,
                }
            );
            return {
                ...state,
                loading: false,
                loaded: true,
                entities,
                entitiesbyPath
            };
        }






        default:
            return state;
    }
}
export const menusEntitiesById = (state: State) => state.entities;
export const menusEntitiesByPath = (state: State) => state.entitiesbyPath;
export const menus = (state: State) => state.data;
export const areMenusLoading = (state: State) => state.loading;
export const areMenusLoaded = (state: State) => state.loaded;
