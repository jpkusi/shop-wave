import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link to="/dashboard" className="btn btn-primary flex items-center gap-2">
        <FiArrowLeft />
        <span>Back to Dashboard</span>
      </Link>
    </div>
  )
}

export default NotFound