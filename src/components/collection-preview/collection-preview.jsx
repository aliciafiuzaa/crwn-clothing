import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item'
import './collection-preview.scss'

// collection of items. Hats has various items inside
const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
        .filter((item, idx) => idx < 4) // it will only show 4 items
        .map(({ id, ...otheItemProps }) => (
            <CollectionItem key={id} {...otheItemProps} /> // will make items appear with their props
         ))}
      </div>
    </div>
  )
}

export default CollectionPreview;
