import React from 'react'

const ProductTable = ({products}) => {
  return (
    <table className="min-w-full bg-white">
    <thead>
      <tr>
        <th className="py-2">Name</th>
        <th className="py-2">Price</th>
        <th className="py-2">Category</th>
        <th className="py-2">Tags</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product._id}>
          <td className="border px-4 py-2">{product.name}</td>
          <td className="border px-4 py-2">${product.price}</td>
          <td className="border px-4 py-2">{product.category}</td>
          <td className="border px-4 py-2">{product.tags.join(', ')}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default ProductTable