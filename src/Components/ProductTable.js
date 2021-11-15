import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
  const { products, inStockOnly } = props;

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    )
    lastCategory = product.category;
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}
