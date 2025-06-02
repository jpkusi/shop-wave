import { useEffect, useState } from 'react'
import { 
  Chart as ChartJS, 
  CategoryScale,
  LinearScale, 
  BarElement,
  Title,
  Tooltip, 
  Legend 
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import ChartSkeleton from './Skeleton/Chart'
import { useLoading } from '@contexts/LoadingContext'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const PerformanceChart = () => {
  const [chartData, setChartData] = useState(null)
  const { startLoading, stopLoading } = useLoading()

  useEffect(() => {
    const fetchData = async () => {
      startLoading()
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Sample data
        const data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Orders',
              data: [55, 49, 45, 87, 76, 62, 49, 44, 42, 58, 37],
              backgroundColor: 'rgba(59, 117, 245, 0.7)',
              borderRadius: 6,
            },
            {
              label: 'Revenue',
              data: [65, 59, 80, 89, 76, 85, 69, 74, 62, 78, 57],
              backgroundColor: 'rgba(58, 141, 175, 0.7)',
              borderRadius: 6,
            }
          ],
        }
        
        setChartData(data)
      } catch (error) {
        console.error('Failed to fetch chart data:', error)
      } finally {
        stopLoading()
      }
    }
    
    fetchData()
  }, [startLoading, stopLoading])
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 15,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 14,
          weight: 'bold',
        },
        padding: 12,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        boxPadding: 6,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    barPercentage: 0.7,
    categoryPercentage: 0.7,
  }
  
  if (!chartData) {
    return <ChartSkeleton />
  }
  
  return (
    <div className="card h-96">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800 text-lg">Performance Overview</h3>
        <div className="text-sm text-gray-500">Jul 2024</div>
      </div>
      <div className="h-[calc(100%-3rem)]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

export default PerformanceChart