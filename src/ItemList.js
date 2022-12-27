import React from 'react';

const ItemList = ({ data }) => {
  return (
    <div>
      <h3>Groups</h3>
      <ul>
        {data.groups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
      <h3>Product Categories</h3>
      <ul>
        {data.productCategories.map(productCategory => (
          <li key={productCategory.id}>{productCategory.name}</li>
        ))}
      </ul>
      <h3>Products</h3>
      <ul>
        {data.products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
