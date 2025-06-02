import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiAlertTriangle } from 'react-icons/fi'

const ErrorPage = ({ error }) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    // Log error to monitoring service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="card max-w-lg w-full text-center p-8">
        <div className="flex justify-center mb-4">
          <FiAlertTriangle className="text-danger text-5xl" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-6">
          We've encountered an error. Our team has been notified.
        </p>
        <div className="p-4 bg-gray-100 rounded-lg mb-6 overflow-auto text-left">
          <pre className="text-sm text-gray-700">
            {error?.message || 'Unknown error occurred'}
          </pre>
        </div>
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-primary"
          >
            Refresh Page
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage