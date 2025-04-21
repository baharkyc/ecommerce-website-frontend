import PersonCard from "./cards/PersonCard";

const TeamMembersList = ({team}) => {
    return(
        <div className="flex flex-col  items-center">
            <h3 className="text-lg font-bold py-8">Meet Our Team</h3>
            <div className="grid sm:grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 items-center sm:px-16 md:px-24 lg:px-42 xl:px-48">
                {team.map((teamMember) => 
                <PersonCard key={teamMember.id} person={teamMember}/>)}
            </div>
        </div>
        
    )
}

export default TeamMembersList;