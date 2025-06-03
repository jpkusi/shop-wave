const CountryCard = ({ flag, name, value, metric = "products" }) => {
  return (
    <div className="card hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex">
        <span className="text-2xl">{flag}</span>
        <div>
          <h3 className="text-gray-800 font-medium">{name}</h3>
          <p className="text-gray-500 text-sm">
            <span className="font-medium text-primary-600">{value}</span> {metric}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountryCard