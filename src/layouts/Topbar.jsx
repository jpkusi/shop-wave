import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiChevronRight, FiCalendar, FiBell } from 'react-icons/fi'

const Topbar = ({ toggleSidebar }) => {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname.split('/')[1]

  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  // Generate breadcrumbs from path
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean)

    return (
      <div className="flex items-center text-sm text-gray-500 ml-4">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        {paths.map((path, index) => (
          <div key={index} className="flex items-center">
            <FiChevronRight className="mx-2 text-gray-400" />
            <Link
              to={`/${paths.slice(0, index + 1).join('/')}`}
              className={`capitalize ${index === paths.length - 1 ? 'text-gray-800 font-medium' : 'hover:text-primary-600'}`}
            >
              {path}
            </Link>
          </div>
        ))}
      </div>
    )
  }

  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-white border-b border-gray-100 shadow-sm z-30">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md lg:hidden"
          >
            <FiMenu className="h-6 w-6" />
          </button>

          {/* Breadcrumbs */}
          {generateBreadcrumbs()}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Date */}
          <div className="hidden md:flex items-center text-gray-700">
            <FiCalendar className="mr-2" />
            <span>{currentDate}</span>
          </div>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-1 rounded-full text-gray-600 hover:bg-gray-100"
            >
              <FiBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 bg-danger h-2 w-2 rounded-full"></span>
            </button>

            {/* Notifications dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 card z-30">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="p-2 max-h-80 overflow-y-auto">
                  {/* Sample notification */}
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start">
                      <div className="rounded-full bg-primary-100 p-2 mr-3">
                        <FiShoppingBag className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">New order received</p>
                        <p className="text-sm text-gray-500">Order #12345 needs processing</p>
                        <p className="text-xs text-gray-400 mt-1">20 minutes ago</p>
                      </div>
                    </div>
                  </div>
                  {/* Another notification */}
                  <div className="p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                    <div className="flex items-start">
                      <div className="rounded-full bg-warning-100 p-2 mr-3">
                        <FiAlert className="h-5 w-5 text-warning-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Inventory Alert</p>
                        <p className="text-sm text-gray-500">Product "Vitamin Boost" is running low</p>
                        <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100 text-center">
                  <button className="text-primary-600 font-medium text-sm hover:text-primary-700">View All Notifications</button>
                </div>
              </div>
            )}
          </div>

          {/* User profile */}
          <div className="flex items-center">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover mr-2"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">Cecilia Y.</p>
              <p className="text-xs text-gray-500">Branch Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar