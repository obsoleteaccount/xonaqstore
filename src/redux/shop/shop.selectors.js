import {createSelector} from 'reselect';

//we are using this object coz our url parameter is a string & the id we wanna match is a number...
//therefore, we write a map where the string value goes to the id

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])//gets us all of the keys of an object that we pass on to it, and gives us in an array format
);



//map over the collections by selecting it and passing into our new selectCollection selector the url params(string) 
//and will return a createSelector which is a function that returns another function(curried function)


//
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectCollections],
        //find collection.id matching the url parameter of our collection id map
        //this concept of storing list of elements inside of an object instead of an array is K.A data normalization
       
       
       // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])   //.find: based on this function we pass it, it is going to run this function on each element from left-right in our array till it reaches where find=true then give back that element based on the function call
        collections => collections[collectionUrlParam]
       )