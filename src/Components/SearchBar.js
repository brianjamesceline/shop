import React from 'react'

export default function SearchBar(props) {
  const { inStockOnly } = props;

  const handleInStockChange = (e) => {
    props.onInStockChange(e.target.checked)
  }

  return (
    <form>
      <input type="text" placeholder="Search..." />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>

  )
}
