import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as fromFeature from '../reducers';
import * as fromPages from '../reducers/public-pages.reducer';
import * as fromPage from '../../../page/store';

export const getPagesState = createSelector(
    fromFeature.getFeaturState,
    (state: fromFeature.PublicState) => state.pages
);
export const getPagesEntitiesByPaths = createSelector(
    getPagesState,
    fromPages.PagesEntitiesByPaths
);
export const getAllPagesByPath = createSelector(
    getPagesEntitiesByPaths, (entities) => {
        console.log('entitiesentities', entities)
        return Object.keys(entities).map(path => entities[path]);
    }
)
export const getPagesEntitiesById = createSelector(
    getPagesState,
    fromPages.PagesEntitiesById
);

export const getAllPagesByIds = createSelector(
    getPagesEntitiesById, (entities) => {
        return Object.keys(entities).map(id => entities[id]);
    }
)

export const getSelectedPagebyId = createSelector(
    fromRoot.getRouterState,
    getPagesEntitiesByPaths, (router, entities) => {
        if(router.state.url != '/'){
            console.log('testing', entities)
            console.log('ddd' ,  entities['http://ecommerce-ux.london' + router.state.url + '/'] )
            return entities['http://ecommerce-ux.london' + router.state.url + '/'].id ;
        }
    }
)

export const arePagesLoaded = createSelector(getPagesState, fromPages.arePagesLoaded);
export const arePagesLoading = createSelector(getPagesState, fromPages.arePagesLoading);
export const getActivePage = createSelector(getPagesState, fromPages.Pages);
