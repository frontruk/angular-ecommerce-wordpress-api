// libs
import * as fromPublicPageReducer from './public-page.reducer';
import * as fromPublicPagesReducer from './public-pages.reducer';

import { createFeatureSelector} from '@ngrx/store';

export interface PublicState {
    page: fromPublicPageReducer.State;
    pages: fromPublicPagesReducer.State;
}
export const reducers = {
    page: fromPublicPageReducer.reducer,
    pages: fromPublicPagesReducer.reducer,
};
export const getFeaturState = createFeatureSelector<PublicState>(
    'public'
);
