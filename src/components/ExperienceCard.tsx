import { WorkExperience} from '../types';

type ExperienceCardProps = {
    experience: WorkExperience;
}

function ExperienceCard({experience}: ExperienceCardProps){

    const jobDescriptionArray: string[] = experience.description;

    return(
        <div>
            <strong>{experience.company}</strong> | {experience.role} | {experience.location} | <em>{experience.period}</em>
            <br></br>
            <ul className='job-highlights'>
                {jobDescriptionArray.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceCard