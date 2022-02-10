import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview';
import SHOP_DATA from './shop-data';
import './shop.scss'

// displays the collection preview in the shopping window, the shop is separated by hats, sneakers, etc
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} /> // will make each collection of items appear: hats, sneackers...
          ))
        }
      </div>
    )
  }
}

export default ShopPage;

