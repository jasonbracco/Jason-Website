import { WorkExperience } from '../types';
import {useState} from 'react'

type ExperienceCardProps = {
    experience: WorkExperience;
}

function ExperienceCard({ experience }: ExperienceCardProps) {
    const [isHighlightsVisible, setHighlightsVisible] = useState(false);

    const toggleHighlights = () => {
      setHighlightsVisible(!isHighlightsVisible);
    };

    const jobDescriptionArray: string[] = experience.description;
    console.log(experience)

    return (
        <div className="work-card">
          <div className="work-card-header" onClick={toggleHighlights}>
            <img className="company-logo" src={experience.image} alt="Company Logo" />
            <em className="job-overview">
              {experience.company} | {experience.role} | {experience.period}
            </em>
          </div>
          {isHighlightsVisible && (
            <ul className="job-highlights">
              {experience.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          )}
        </div>
    );
}

export default ExperienceCard