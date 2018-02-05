// libs
import * as fromPublicPageReducer from './public-page.reducer';

import { createFeatureSelector} from '@ngrx/store';

export interface PublicState {
    page: fromPublicPageReducer.State;
}
export const reducers = {
    page: fromPublicPageReducer.reducer,
};
export const getFeaturState = createFeatureSelector<PublicState>(
    'public'
);
