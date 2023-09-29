import { Education } from '../types';

type ExperienceCardProps = {
    education: Education;
}

function EducationCard({education}: ExperienceCardProps){

    return(
        <div>
            <strong>{education.name}</strong> | {education.program} | <em>{education.period}</em>
            <br></br>
            {education.degree}
        </div>
    )
}

export default EducationCard