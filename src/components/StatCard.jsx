import { FiArrowUp, FiArrowDown } from 'react-icons/fi'

const StatCard = ({ title, value, subtitle, icon, trend, color = "primary" }) => {
  const getTrendColor = () => {
    if (!trend) return 'text-gray-500'
    return trend > 0 ? 'text-success' : 'text-danger'
  }

  const getTrendIcon = () => {
    if (!trend) return null
    return trend > 0 ? <FiArrowUp className="inline" /> : <FiArrowDown className="inline" />
  }

  const getIconBackgroundColor = () => {
    const colors = {
      primary: 'bg-primary-100 text-primary-600',
      secondary: 'bg-secondary-100 text-secondary-600',
      success: 'bg-green-100 text-success',
      warning: 'bg-yellow-100 text-warning',
      danger: 'bg-red-100 text-danger',
      purple: 'bg-purple-100 text-purple-600',
      gray: 'bg-gray-100 text-gray-600'
    }
    return colors[color] || colors.primary
  }

  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        {icon && (
          <div className={`p-2 rounded-full ${getIconBackgroundColor()}`}>
            {icon}
          </div>
        )}
      </div>
      <div className="mt-2">
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
        <p className="text-sm flex items-center space-x-1 mt-1">
          <span className={getTrendColor()}>
            {getTrendIcon()} {trend ? `${Math.abs(trend)}%` : ''}
          </span>
          <span className="text-gray-500 ml-1">{subtitle}</span>
        </p>
      </div>
    </div>
  )
}

export default StatCard