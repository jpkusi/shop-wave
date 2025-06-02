import { useState, useEffect } from 'react'
import { FiSearch, FiPlus, FiFilter, FiDownload } from 'react-icons/fi'
import PageHeader from '@components/PageHeader'
import ProductRow from '@components/ProductRow'
import TableSkeleton from '@components/Skeleton/Table'
import { useLoading } from '@contexts/LoadingContext'
import productsData from '@config/products.json'

const Products = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
		const loadProducts = async () => {
			startLoading();
			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, 1200));
				setProducts(productsData.products);
				setIsLoading(false);
			} catch (error) {
				console.error("Failed to load products:", error);
			} finally {
				stopLoading();
			}
		};

		loadProducts();
	}, []);
  
  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Header actions
  const headerActions = (
    <>
      <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center gap-2">
        <FiDownload className="h-4 w-4" />
        <span>Export</span>
      </button>
      <button className="btn btn-primary flex items-center gap-2">
        <FiPlus className="h-4 w-4" />
        <span>Add Product</span>
      </button>
    </>
  )

  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Manage your product inventory"
        actions={headerActions}
      />
      
      {/* Filters and search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full input"
          />
        </div>
        
        <div className="flex gap-3">
          <button className="btn flex items-center gap-2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
            <FiFilter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <select className="input bg-white">
            <option>All Categories</option>
            <option>Vitamins</option>
            <option>Supplements</option>
            <option>Medications</option>
          </select>
        </div>
      </div>
      
      {/* Products table */}
      {isLoading ? (
        <TableSkeleton rows={6} columns={3} />
      ) : (
        <div className="card overflow-hidden">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500 mb-4">No products found matching "{searchTerm}"</p>
              <button className="btn btn-primary">Add New Product</button>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Product</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredProducts.map(product => (
                  <ProductRow key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  )
}

export default Products