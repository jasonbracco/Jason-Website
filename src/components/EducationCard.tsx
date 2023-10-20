import { Education } from '../types';
import {useState} from 'react'

type EducationCardProps = {
    education: Education;
}
 
function EducationCard({ education }: EducationCardProps) {
    const [isHighlightsVisible, setHighlightsVisible] = useState(false);

    const toggleHighlights = () => {
      setHighlightsVisible(!isHighlightsVisible);
    };

    return (
        <div className="work-card">
          <div className="work-card-header" onClick={toggleHighlights}>
            <img className="company-logo" src={education.image} alt="Company Logo" />
            <em className="job-overview">
              {education.name} | {education.program} | {education.period}
            </em>
          </div>
          {isHighlightsVisible && (
            <div className="job-highlights">{education.description}</div>
            )}
        </div>
        
    );
}

export default EducationCard