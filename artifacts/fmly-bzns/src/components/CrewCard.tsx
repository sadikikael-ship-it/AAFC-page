import { FaInstagram, FaSoundcloud } from "react-icons/fa";
import type { CrewMember } from "@/data/crew";

export function CrewCard({ member }: { member: CrewMember }) {
  const hasSocials = member.instagramUrl || member.soundcloudUrl;

  const id = member.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  return (
    <article className="crewCard" id={id}>
      <div
        className="crewCardImage"
        style={{
          backgroundImage: `url(${member.image})`,
          backgroundPosition: member.bgPosition ?? "center 15%",
        }}
        role="img"
        aria-label={member.name}
      />
      <div className="crewCardBody">
        <h3 className="crewCardName">{member.name}</h3>
        <p className="crewCardRole">{member.role}</p>
        {member.city ? <p className="crewCardCity">{member.city}</p> : null}
        {member.bio ? <p className="crewCardBio">{member.bio}</p> : null}
        {hasSocials && (
          <div className="crewCardSocials">
            {member.instagramUrl && (
              <a
                href={member.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crewSocialLink"
                aria-label={`Follow ${member.name} on Instagram`}
              >
                <FaInstagram aria-hidden focusable="false" />
              </a>
            )}
            {member.soundcloudUrl && (
              <a
                href={member.soundcloudUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="crewSocialLink"
                aria-label={`Listen to ${member.name} on SoundCloud`}
              >
                <FaSoundcloud aria-hidden focusable="false" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
