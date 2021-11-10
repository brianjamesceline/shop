import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable(props) {
  const { products } = props;

  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}
