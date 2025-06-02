import { useState, useEffect } from 'react'
import { FiBox, FiShoppingBag, FiTruck, FiPackage } from 'react-icons/fi'
import PageHeader from '@components/PageHeader'
import StatCard from '@components/StatCard'
import CountryCard from '@components/CountryCard'
import PerformanceChart from '@components/PerformanceChart'
import ProductRow from '@components/ProductRow'
import TeamMemberCard from '@components/TeamMemberCard'
import StatCardSkeleton from '@components/Skeleton/StatCard'
import { useLoading } from '@contexts/LoadingContext'

// Import data from config
import countriesData from '@config/countries.json'
import productsData from '@config/products.json'
import teamData from '@config/team.json'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState(null)
  const [topProducts, setTopProducts] = useState([])
  const { startLoading, stopLoading } = useLoading()
  
  useEffect(() => {
    const loadData = async () => {
      startLoading()
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Set stats data
        setStats({
          processing: 210,
          processed: 109,
          total: 3.4,
          soldOut: 352,
          new: 176,
          totalOrders: 315,
          totalSold: 256,
          returns: 49
        })
        
        // Set top products
        setTopProducts(productsData.products.slice(0, 3))
        
        setIsLoading(false)
      } catch (error) {
        console.error("Failed to load dashboard data:", error)
      } finally {
        stopLoading()
      }
    }
    
    loadData()
  }, [startLoading, stopLoading])

  // Actions for header
  const headerActions = (
    <>
      <button className="btn bg-gray-200 hover:bg-gray-300 text-gray-800">
        Export Data
      </button>
      <button className="btn btn-primary">
        Add Product
      </button>
    </>
  )

  return (
    <>
      <PageHeader 
        title="HealthMart"
        subtitle="214 members"
        actions={headerActions}
      />
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {isLoading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : (
          <>
            <StatCard 
              title="Orders Processing"
              value={stats.processing}
              subtitle="Remaining"
              icon={<FiShoppingBag />}
              trend={5}
              color="primary"
            />
            <StatCard 
              title="Orders Processed"
              value={stats.processed}
              subtitle="Processed"
              icon={<FiPackage />}
              trend={-2}
              color="secondary"
            />
            <StatCard 
              title="Total"
              value={`${stats.total}k`}
              subtitle="Total"
              icon={<FiBox />}
              trend={7}
              color="success"
            />
            <StatCard 
              title="Sold Out"
              value={stats.soldOut}
              subtitle="Sold out"
              icon={<FiTruck />}
              trend={3}
              color="warning"
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Countries */}
        <div className="lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Sales by Country</h2>
            <button className="text-sm text-primary-600 font-medium">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {countriesData.countries.slice(0, 6).map(country => (
              <CountryCard
                key={country.id}
                flag={country.flag}
                name={country.name}
                value={country.sales + 'k'}
                metric="products"
              />
            ))}
          </div>
        </div>
        
        {/* Performance Chart */}
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Products */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Top Product Sales</h2>
            <button className="text-sm text-primary-600 font-medium">View All</button>
          </div>
          <div className="card overflow-hidden">
            <table className="min-w-full divide-y divide-gray-100">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Product</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Price</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td colSpan="3" className="px-4 py-3 text-center text-gray-500">Loading products...</td>
                  </tr>
                ) : (
                  topProducts.map(product => (
                    <ProductRow key={product.id} product={product} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Team Members */}
        <div className="lg:col-span-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Team Members</h2>
            <button className="text-sm text-primary-600 font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {isLoading ? (
              <>
                <div className="card animate-pulse p-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
                <div className="card animate-pulse p-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              teamData.members.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard