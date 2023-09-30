import { TechnicalProject } from '../types';

type ExperienceCardProps = {
    project: TechnicalProject;
}

function TechnicalProjectCard({project}: ExperienceCardProps){

    const accordionId = `accordion-${project.index}`;
    const collapseId = `collapse-${project.index}`;

    return(
        <div className="accordion" id={accordionId}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseId}`} aria-expanded="false" aria-controls={collapseId}>
                    {project.name} 
                </button>
                </h2>
                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${project.index}`} data-bs-parent={`#${accordionId}`}>
                    <div className="accordion-body">
                        <em>{project.description}</em>
                        <br></br>
                        <br></br>       
                        <a href={`${project.gh_link}`}>GitHub</a> | <a href={`${project.demo_link}`}>Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnicalProjectCard