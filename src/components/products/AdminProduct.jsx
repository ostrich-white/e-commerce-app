import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadProducts } from '../../store/productSlice';
import ProductTable from '../common/ProductTable';

const AdminProduct = () => {
    const  dispatch = useDispatch();
    const {data: products, loading, error} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(loadProducts())
    }, [dispatch])

  return (
    <div>
        {loading && <p>Loading...</p>}
        <ProductTable products={products}/>
    </div>
  )
}

export default AdminProduct