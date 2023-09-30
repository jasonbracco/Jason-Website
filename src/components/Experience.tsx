import { WorkExperience, Education, TechnicalProject } from '../types';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';
import TechnicalProjectCard from './TechnicalProjectCard';


function Experience(){

    let restaurant_review: TechnicalProject = {
        name: 'Restaurant Review App',
        description: 'A tracking and rating application allowing users to add, review, track, and explore restaurants from around the world',
        gh_link: 'https://github.com/jasonbracco/phase-4-project-real',
        demo_link: 'coming soon',
        index: 1
    }

    let photo_share: TechnicalProject = {
        name: 'PhotoShare',
        description: 'An ecommerce marketplace geared toward photography enthusiasts who are looking to buy and sell their artwork',
        gh_link: 'https://github.com/jasonbracco/phase-5-project',
        demo_link: 'coming soon',
        index: 2
    }

    let gw: Education = {
        name:'The George Washington University',
        program: 'School of Engineering and Applied Sciences (SEAS)',
        degree: 'Bachelor of Science, Mechanical Engineering, concentration in Aerospace Engineering',
        location: 'Washington, DC',
        period: '08/2014 - 05/2018',
        index: 3
    }

    let flatiron: Education = {
        name:'Flatiron School',
        program: 'Full Stack Software Engineering',
        degree: 'Full Stack Web Development, Ruby on Rails and JavaScript',
        location: 'Remote',
        period: '04/2022 - 04/2023',
        index: 4
    }

    let mba_csi: WorkExperience = {
        company: 'MBA Consulting Services',
        role: 'Mechanical Engineer - Vehicle Programs',
        location: 'Merrifield, VA',
        period: '08/2018 - 12/2018',
        description: [
            'Managed the activation, installation, data collection, and invoicing of 50 Verizon GPS devices, while simultaneously generating real time reports for all vehicles which contained GPS devices',
            'Performed queries using Oracle Business Intelligence to pinpoint the age and need to replace certain classes of vehicles in the overall fleet of 240,000 vehicles',
            'Played active role in testing and assessment of new Long Life Vehicle selection from more than 5 different prototypes, including trips to the TRC in Ohio for functional, on road, evaluations'
        ],
        index: 5
    }

    let aquicore_one: WorkExperience = {
        company: 'Aquicore', 
        role: 'Technical Services Engineer', 
        location: 'Washington, DC', 
        period: '01/2019 - 12/2021', 
        description: [
            'Attained a 27% improvement in time to resolve technical support tickets in Salesforce',
            'Constructed internal support process utilized by multiple teams, providing improved customer experience and unified data tracking capabilities in Salesforce',
            'Proactively investigated data quality issues leading to a 93% internal technical support ticket capture rate',
            'Guided customers throughout the support lifecycle, engaging with multiple levels of personnel and 3rd party contractors'
        ],
        index: 6
    }
    
    let aquicore_two: WorkExperience = {
        company: 'Aquicore', 
        role: 'Technical Services Team Lead', 
        location: 'Washington, DC', 
        period: '12/2021 - Present', 
        description: [
            'Achieved a 66% reduction in product support tickets by integrating internal processes',
            'Developed product SLAs and maintained KPIs through robust reporting in Intercom and Salesforce, and presented data to internal stakeholders during All-Hands meetings',
            'Enabled a 200% decrease in time to resolution for product support tickets through structured support ticket reviews',
            'Tracked internal support CSAT score through quantitative and qualitative data'
        ],
        index: 7
    }

    let experienceArray = [aquicore_two, aquicore_one, mba_csi];
    let educationArray = [flatiron, gw];
    let technicalProjectsArray = [restaurant_review, photo_share];

    return (
        <div>
            <div className="work-accordion">
                <h3>Work Experience:</h3>
                {experienceArray.map((experience, index) => (
                    <div className='experience-card' key={index}>
                        <ExperienceCard experience={experience} />
                    </div>
                ))
                }
            </div>
            <div className="education-accordion">
                <h3>Education:</h3>
                {educationArray.map((education, index) => (
                    <div className='education-card' key={index}>
                        <EducationCard education={education} />
                    </div>
                ))
                }
            </div>
            <br></br>
            <div className="project-accordion">
                <h3>Technical Projects:</h3>
                {technicalProjectsArray.map((project, index) => (
                    <div className='project-card' key={index}>
                        <TechnicalProjectCard project={project} />
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Experience