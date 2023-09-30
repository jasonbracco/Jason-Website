import { WorkExperience} from '../types';

type ExperienceCardProps = {
    experience: WorkExperience;
    index: number
}

function ExperienceCard({experience, index}: ExperienceCardProps){

    const jobDescriptionArray: string[] = experience.description;
    console.log(index)

    const accordionId = `accordion-${index}`;
    const collapseId = `collapse-${index}`;

    return(
        // <div>
        //     <strong>{experience.company}</strong> | {experience.role} | {experience.location} | <em>{experience.period}</em>
        //     <br></br>
        //     <ul className='job-highlights'>
        //         {jobDescriptionArray.map((line, index) => (
        //             <li key={index}>{line}</li>
        //         ))}
        //     </ul>
        // </div>

        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                    Accordion Item #1
                </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${index}`} data-bs-parent={`#${accordionId}`}>
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ExperienceCard