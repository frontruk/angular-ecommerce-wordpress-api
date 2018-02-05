import * as fromPage from '../actions/public-page.actions';
import { PageApiResponse } from '../../models/page';


export interface State {
    loading: boolean;
    loaded: boolean;
    data: PageApiResponse | false;
}
const initialState: State = {
    loading: false,
    loaded: false,
    data: false,
}

export function reducer(state: State = initialState, action: fromPage.PublicPageActions): State {
    switch (action.type) {

        case fromPage.GET_PAGE_SUCCESS: {
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                data: action.payload
            });
        }

        default:
            return state;
    }
}

export const getPage = (state: State) => state.data;
export const isPageLoading = (state: State) => state.loading;
export const isPageLoaded = (state: State) => state.loaded;
