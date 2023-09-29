import { TechnicalProject } from '../types';

type ExperienceCardProps = {
    project: TechnicalProject;
}

function TechnicalProjectCard({project}: ExperienceCardProps){

    return(
        <div>
            <strong>{project.name}</strong> | <a href = {project.gh_link}>GitHub</a> | <a href = {project.demo_link}>Demo</a>
            <br></br>
            {project.description}
            <br></br>
            <br></br>
        </div>
    )
}

export default TechnicalProjectCard