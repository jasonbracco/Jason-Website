import { WorkExperience} from '../types';

type ExperienceCardProps = {
    experience: WorkExperience;
}

function ExperienceCard({experience}: ExperienceCardProps){

    const jobDescriptionArray: string[] = experience.description;

    const accordionId = `accordion-${experience.index}`;
    const collapseId = `collapse-${experience.index}`;

    return(
        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                    {experience.company} | {experience.role} | {experience.period}
                </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${experience.index}`} data-bs-parent={`#${accordionId}`}>
                    <div className="accordion-body">
                        <ul className="job-highlights">
                            {jobDescriptionArray.map((line, index) => (
                                <p key={index}>{line}</p>
                            ))}
                        </ul>                    
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ExperienceCard