import { useState, useEffect } from 'react'
import { FiSearch, FiUserPlus } from 'react-icons/fi'
import PageHeader from '@components/PageHeader'
import TeamMemberCard from '@components/TeamMemberCard'
import { useLoading } from '@contexts/LoadingContext'
import teamData from '@config/team.json'

const TeamMembers = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [teamMembers, setTeamMembers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const { startLoading, stopLoading } = useLoading()
  
  useEffect(() => {
		const loadTeamMembers = async () => {
			startLoading();
			try {
				// Simulate API call
				await new Promise((resolve) => setTimeout(resolve, 800));
				setTeamMembers(teamData.members);
				setIsLoading(false);
			} catch (error) {
				console.error("Failed to load team members:", error);
			} finally {
				stopLoading();
			}
		};

		loadTeamMembers();
	}, []);
  
  // Filter team members based on search term
  const filteredMembers = teamMembers.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  // Header actions
  const headerActions = (
    <button className="btn btn-primary flex items-center gap-2">
      <FiUserPlus className="h-4 w-4" />
      <span>Add Team Member</span>
    </button>
  )
  
  // Skeleton for team members
  const TeamMembersSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="card animate-pulse p-4">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div className="flex-1">
              <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <PageHeader
        title="Team Members"
        subtitle="Manage your team"
        actions={headerActions}
      />
      
      {/* Search */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search team members..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full input"
        />
      </div>
      
      {/* Team members grid */}
      {isLoading ? (
        <TeamMembersSkeleton />
      ) : (
        <>
          {filteredMembers.length === 0 ? (
            <div className="card py-16 text-center">
              <p className="text-gray-500 mb-4">No team members found matching "{searchTerm}"</p>
              <button className="btn btn-primary">Add New Team Member</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default TeamMembers