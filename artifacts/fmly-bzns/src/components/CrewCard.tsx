import type { CrewMember } from "@/data/crew";

export function CrewCard({ member }: { member: CrewMember }) {
  return (
    <article className="crewCard">
      <div
        className="crewCardImage"
        style={{ backgroundImage: `url(${member.image})` }}
        role="img"
        aria-label={member.name}
      />
      <div className="crewCardBody">
        <h3 className="crewCardName">{member.name}</h3>
        <p className="crewCardRole">{member.role}</p>
        {member.city ? <p className="crewCardCity">{member.city}</p> : null}
        {member.bio ? <p className="crewCardBio">{member.bio}</p> : null}
      </div>
    </article>
  );
}
