import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as fromFeature from '../reducers';
import * as fromMenus from '../reducers/menu.reducer';


export const getMenuState = createSelector(
    fromFeature.getFeaturState,
    (state: fromFeature.PublicState) => state.menus
);

export const getMenusEntitiesById = createSelector(getMenuState, fromMenus.menusEntitiesById);

export const getAllMenusByIds = createSelector(
    getMenusEntitiesById, (entities) => {
        return Object.keys(entities).map(id => entities[ id ]);
    }
)

export const areMenusLoaded = createSelector(getMenuState, fromMenus.areMenusLoaded);
export const areMenusLoading = createSelector(getMenuState, fromMenus.areMenusLoading);

