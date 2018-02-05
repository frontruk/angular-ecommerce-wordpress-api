// libs
import * as fromPublicPageReducer from './public-page.reducer';
import * as fromPublicPagesReducer from './public-pages.reducer';
import * as fromMenusReducer from './menu.reducer';

import { createFeatureSelector} from '@ngrx/store';

export interface PublicState {
    page: fromPublicPageReducer.State;
    pages: fromPublicPagesReducer.State;
    menus: fromMenusReducer.State;
}
export const reducers = {
    page: fromPublicPageReducer.reducer,
    pages: fromPublicPagesReducer.reducer,
    menus: fromMenusReducer.reducer,
};
export const getFeaturState = createFeatureSelector<PublicState>(
    'public'
);
