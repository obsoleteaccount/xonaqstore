import React from 'react';
import {connect} from 'react-redux';
 
import CollectionItem from '../../components/collection-item/collection-item.component';//component that displays our items

import { selectCollection} from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(  
      <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    );
 };


//state is our overall reducer state from the top...ownProps is the props of the component that we are wrapping in our connect
const mapStateToProps = (state, ownProps) => ({
    //coz this is returning our createSelector (shop.selectors.js) call which is returns as a function that takes the state which runs it through the selector flow i have gotten used to writing anywayz. This is where we will pass state after we have invoked our selectCollection
    //this is necessary coz unlike other selectors, this selector needs a part of the state depending on the URL parameter
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);