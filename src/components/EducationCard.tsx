import { Education } from '../types';

type ExperienceCardProps = {
    education: Education;
}

function EducationCard({education}: ExperienceCardProps){

    const accordionId = `accordion-${education.index}`;
    const collapseId = `collapse-${education.index}`;

    return(
        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                    {education.name}, {education.program} - {education.location}
                </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${education.index}`} data-bs-parent={`#${accordionId}`}>
                    <div className="accordion-body">
                        <em>{education.period}</em>
                        <br></br>
                        <br></br>
                        {education.degree}         
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default EducationCard