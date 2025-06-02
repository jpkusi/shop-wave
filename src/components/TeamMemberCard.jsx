import { FiMail, FiPhone } from 'react-icons/fi'

const TeamMemberCard = ({ member }) => {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <img 
          src={member.avatar} 
          alt={member.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{member.role}</p>
          
          <div className="flex flex-col space-y-2">
            <a href={`mailto:${member.email}`} className="flex items-center text-sm text-gray-600 hover:text-primary-600">
              <FiMail className="mr-2" />
              <span>{member.email}</span>
            </a>
            <a href={`tel:${member.phone}`} className="flex items-center text-sm text-gray-600 hover:text-primary-600">
              <FiPhone className="mr-2" />
              <span>{member.phone}</span>
            </a>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
            <FiMail className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors">
            <FiPhone className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamMemberCard