const TableSkeleton = ({ rows = 5, columns = 4 }) => {
  return (
    <div className="overflow-hidden card animate-pulse">
      <div className="flex border-b border-gray-100 p-4">
        {Array.from({ length: columns }).map((_, index) => (
          <div 
            key={`header-${index}`} 
            className="h-6 bg-gray-200 rounded flex-1 mr-2"
          ></div>
        ))}
      </div>
      
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div 
          key={`row-${rowIndex}`} 
          className="flex border-b border-gray-100 p-4"
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <div 
              key={`cell-${rowIndex}-${colIndex}`} 
              className="h-5 bg-gray-200 rounded flex-1 mr-2"
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default TableSkeleton