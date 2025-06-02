import { FiLoader } from 'react-icons/fi'
import { useLoading } from '@contexts/LoadingContext'

const LoadingScreen = ({ fullScreen = false }) => {
  const { isLoading } = useLoading()
  
  if (!isLoading && !fullScreen) return null
  
  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <FiLoader className="text-primary-500 text-4xl animate-spin mb-4" />
          <p className="text-gray-600 text-lg font-medium">Loading...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
      <FiLoader className="text-primary-500 text-3xl animate-spin" />
    </div>
  )
}

export default LoadingScreen