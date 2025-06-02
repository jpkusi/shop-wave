import { Link, useLocation } from 'react-router-dom'
import { FiBarChart2, FiBox, FiShoppingBag, FiUsers, FiSettings, FiHelpCircle, FiLogOut } from 'react-icons/fi'
import storesData from '@config/stores.json'

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation()
  
  const isActive = (path) => location.pathname.startsWith(path)
  
  // Navigation items
  const mainNavItems = [
    { path: '/dashboard', icon: <FiBarChart2 />, label: 'Dashboard' },
    { path: '/products', icon: <FiBox />, label: 'Products' },
    { path: '/orders', icon: <FiShoppingBag />, label: 'Orders' },
    { path: '/team', icon: <FiUsers />, label: 'Team Members' }
  ]
  
  const bottomNavItems = [
    { path: '/settings', icon: <FiSettings />, label: 'Settings' },
    { path: '/help', icon: <FiHelpCircle />, label: 'Get Help' },
    { path: '/logout', icon: <FiLogOut />, label: 'Logout' }
  ]

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 transform bg-white border-r border-gray-100 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } lg:relative lg:translate-x-0`}
    >
      {/* Logo & branding */}
      <div className="flex items-center px-4 py-5">
        <img src="https://via.placeholder.com/36" alt="Logo" className="w-9 h-9 mr-2" />
        <h1 className="text-xl font-bold text-gray-900">ShopWave</h1>
        
        {/* Mobile close button */}
        <button 
          className="p-2 ml-auto rounded-md text-gray-500 lg:hidden"
          onClick={closeSidebar}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      {/* Sidebar content */}
      <div className="h-full flex flex-col justify-between overflow-y-auto">
        <nav className="space-y-1 px-2">
          {/* Search */}
          <div className="px-2 py-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
              />
              <span className="absolute left-2.5 top-2.5 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </div>

          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Menu</p>
          
          {/* Main navigation */}
          {mainNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
              onClick={() => closeSidebar()}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          
          {/* Stores section */}
          <div className="pt-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Stores</p>
            <div className="mt-2">
              {storesData.stores.map((store) => (
                <Link
                  key={store.id}
                  to={`/store/${store.id}`}
                  className={`sidebar-link ${location.pathname === `/store/${store.id}` ? 'active' : ''}`}
                  onClick={() => closeSidebar()}
                >
                  <span className="text-xl">{store.logo}</span>
                  <span>{store.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>
        
        {/* Bottom navigation */}
        <div className="mt-auto pb-4">
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Others</p>
          <nav className="mt-2">
            {bottomNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => closeSidebar()}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar