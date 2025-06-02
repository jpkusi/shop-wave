import { FiEdit2, FiTrash2 } from 'react-icons/fi'

const ProductRow = ({ product }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 flex items-center">
        <span className="text-2xl mr-3">{product.icon}</span>
        <div>
          <p className="font-medium text-gray-800">{product.name}</p>
          <p className="text-xs text-gray-500">{product.sku}</p>
        </div>
      </td>
      <td className="py-4 px-4 text-right font-medium">
        ${product.price.toFixed(2)}
      </td>
      <td className="py-4 px-4">
        <div className="flex justify-end space-x-2">
          <button className="p-1 text-gray-500 hover:text-primary-600 rounded">
            <FiEdit2 className="h-5 w-5" />
          </button>
          <button className="p-1 text-gray-500 hover:text-danger rounded">
            <FiTrash2 className="h-5 w-5" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ProductRow