import { useState, useEffect } from 'react'
import { useLoading } from '@contexts/LoadingContext'

const useFetchData = (endpoint, initialData = null) => {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      startLoading()
      
      try {
        // In a real app, we would fetch from an API
        // For now, we'll simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Check if endpoint is a path to a local JSON file
        if (typeof endpoint === 'object') {
          setData(endpoint)
        } else {
          // In a real app, this would be a fetch call
          // const response = await fetch(endpoint)
          // const result = await response.json()
          // setData(result)
          
          // For demo purposes, we'll just set some mock data
          setData({
            success: true,
            message: 'Data fetched successfully',
            data: []
          })
        }
        
        setError(null)
      } catch (err) {
        setError(err.message || 'Failed to fetch data')
        console.error('Error fetching data:', err)
      } finally {
        setIsLoading(false)
        stopLoading()
      }
    }

    fetchData()
  }, [endpoint, startLoading, stopLoading])

  return { data, error, isLoading, setData }
}

export default useFetchData