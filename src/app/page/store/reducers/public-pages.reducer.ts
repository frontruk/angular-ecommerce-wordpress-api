import * as fromPage from '../actions/public-page.actions';
import { PageApiResponse } from '../../models/page';


export interface State {
    loading: boolean;
    loaded: boolean;
    data: any;
    entities: { [id: number ]: PageApiResponse };
    entitiesbyPath: { [path: string ]: PageApiResponse };
}
const initialState: State = {
    loading: false,
    loaded: false,
    data: [],
    entities: {},
    entitiesbyPath: {}
}

export function reducer(state: State = initialState, action: fromPage.PublicPageActions): State {
    switch (action.type) {

        // case fromPage.GET_PAGES_SUCCESS: {
        //     return Object.assign({}, state, {
        //         loading: false,
        //         loaded: true,
        //         data: action.payload
        //     });
        // }

        case fromPage.GET_PAGES_SUCCESS: {
            const pages = action.payload;
            const entities = pages.reduce(
                (entitiesList: { [id: number]: PageApiResponse }, page: PageApiResponse) => {
                    return {
                        ...entitiesList,
                        [page.id]: page,
                    };
                },
                {
                    ...state.entities,
                }
            );
            const entitiesbyPath = pages.reduce(
                (entitiesList: { [link: string]: PageApiResponse }, page: PageApiResponse) => {
                    return {
                        ...entitiesList,
                        [page.link]: page,
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
export const PagesEntitiesById = (state: State) => state.entities;
export const getPages = (state: State) => state.data;
export const arePagesLoading = (state: State) => state.loading;
export const arePagesLoaded = (state: State) => state.loaded;
