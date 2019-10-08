import {createSelector} from 'reselect'; 

//2 types of selectors: input selector-doesn't use createselector, output selector-uses inut and createselector to build themselves

//input selector takes the whole state and returns a slice of it
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],//array of our input selectors
    (user) => user.currentUser//function that gets the return of our input selector
);
