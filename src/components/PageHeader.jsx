const PageHeader = ({ title, subtitle, actions }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
        </div>
        
        {actions && (
          <div className="mt-4 sm:mt-0 flex space-x-3">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}

export default PageHeader