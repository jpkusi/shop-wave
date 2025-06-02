import { useState, useEffect } from 'react'
import { FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiTrash2, FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi'
import PageHeader from '@components/PageHeader'
import TableSkeleton from '@components/Skeleton/Table'
import { useLoading } from '@contexts/LoadingContext'

const Orders = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    const loadOrders = async () => {
      startLoading()
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Sample orders data
        const ordersData = [
          { id: 'ORD-1234', customer: 'John Doe', date: '2024-07-15', status: 'completed', amount: 129.99 },
          { id: 'ORD-1235', customer: 'Jane Smith', date: '2024-07-15', status: 'processing', amount: 79.99 },
          { id: 'ORD-1236', customer: 'Robert Johnson', date: '2024-07-14', status: 'completed', amount: 199.99 },
          { id: 'ORD-1237', customer: 'Emma Williams', date: '2024-07-14', status: 'cancelled', amount: 49.99 },
          { id: 'ORD-1238', customer: 'Michael Brown', date: '2024-07-13', status: 'processing', amount: 159.99 },
          { id: 'ORD-1239', customer: 'Olivia Jones', date: '2024-07-13', status: 'completed', amount: 89.99 },
          { id: 'ORD-1240', customer: 'William Davis', date: '2024-07-12', status: 'processing', amount: 69.99 }
        ]
        
        setOrders(ordersData)
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load orders:", error)
      } finally {
        stopLoading()
      }
    }
    
    loadOrders()
  }, [startLoading, stopLoading])
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Status badge component
  const StatusBadge = ({ status }) => {
    const statusConfig = {
      completed: { bg: 'bg-green-100', text: 'text-success', icon: <FiCheckCircle /> },
      processing: { bg: 'bg-blue-100', text: 'text-blue-600', icon: <FiClock /> },
      cancelled: { bg: 'bg-red-100', text: 'text-danger', icon: <FiXCircle /> }
    }
    
    const config = statusConfig[status] || statusConfig.processing
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.icon && <span className="mr-1">{config.icon}</span>}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    )
  }
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }
  
  // Header actions
  const headerActions = (
    <>
      <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center gap-2">
        <FiDownload className="h-4 w-4" />
        <span>Export</span>
      </button>
    </>
  )

  return (
    <>
      <PageHeader
        title="Orders"
        subtitle="Manage your customer orders"
        actions={headerActions}
      />
      
      {/* Filters and search */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search orders..."
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
            <option>All Statuses</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>
      
      {/* Orders table */}
      {isLoading ? (
        <TableSkeleton rows={7} columns={5} />
      ) : (
        <div className="card overflow-x-auto">
          {filteredOrders.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-gray-500">No orders found matching "{searchTerm}"</p>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 text-sm font-medium text-gray-800">{order.id}</td>
                    <td className="px-4 py-4 text-sm text-gray-700">{order.customer}</td>
                    <td className="px-4 py-4 text-sm text-gray-500">{formatDate(order.date)}</td>
                    <td className="px-4 py-4 text-sm">
                      <StatusBadge status={order.status} />
                    </td>
                    <td className="px-4 py-4 text-sm text-right font-medium text-gray-800">
                      ${order.amount.toFixed(2)}
                    </td>
                    <td className="px-4 py-4 text-sm text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="p-1 text-gray-500 hover:text-primary-600 rounded">
                          <FiEye className="h-5 w-5" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-primary-600 rounded">
                          <FiEdit2 className="h-5 w-5" />
                        </button>
                        <button className="p-1 text-gray-500 hover:text-danger rounded">
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
      
      {/* Pagination */}
      {!isLoading && filteredOrders.length > 0 && (
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            Showing <span className="font-medium">1</span> to <span className="font-medium">7</span> of <span className="font-medium">42</span> orders
          </div>
          <div className="flex space-x-2">
            <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">Previous</button>
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Orders