import { createSelector } from '@ngrx/store';
import * as fromRoot from '../../../core/store';
import * as fromFeature from '../reducers';
import * as fromMenus from '../reducers/menu.reducer';
import * as fromPage from '../reducers/public-pages.reducer';

export const getMenuState = createSelector(
    fromFeature.getFeaturState,
    (state: fromFeature.PublicState) => state.menus
);

export const getMenusEntitiesById = createSelector(getMenuState, fromMenus.menusEntitiesById);

export const getAllMenusByIds = createSelector(
    getMenusEntitiesById, (entities) => {
        return Object.keys(entities).map(object_id => entities[ object_id ]);
    }
)
export const getMenuEntitiesByPaths = createSelector(
    getMenuState,
    fromMenus.menusEntitiesByPath
);

export const getMenuChildren = createSelector(
    fromRoot.getRouterState,
    getMenuEntitiesByPaths, (router, entities) => {
        if(router.state.url != '/'){
            console.log('testingwwww ::::::', entities)
            console.log('url', )

            const test = router.state.url.replace('/','');
            console.log('test', test)
            console.log('ddd ::::::' ,  entities[router.state.url.replace('/','')] )

            if(entities[router.state.url.replace('/','')]){
                return entities[router.state.url.replace('/','')].children;
            }else{
                return []
            }
        }
    }
)


// export const getMenuChildren = createSelector(
//     fromPage.PagesEntitiesById,
//     getAllMenusByIds, (router, entities) => {
//         console.log('testing', entities)
//         console.log('zzz', router)
//        // console.log('ddd' ,  entities['http://ecommerce-ux.london' + router.state.url + '/'] )
//        // return entities['http://ecommerce-ux.london' + router.state.url + '/'].id ;
//         return true;
//     }
// )


export const areMenusLoaded = createSelector(getMenuState, fromMenus.areMenusLoaded);
export const areMenusLoading = createSelector(getMenuState, fromMenus.areMenusLoading);

