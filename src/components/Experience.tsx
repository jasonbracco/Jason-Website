import { WorkExperience, Education } from '../types';
import ExperienceCard from './ExperienceCard';
import EducationCard from './EducationCard';



function Experience(){

    let gw: Education = {
        name:'George Washington University',
        program: 'School of Engineering and Applied Sciences',
        degree: 'Bachelor of Science, Mechanical Engineering, concentration in Aerospace Engineering',
        location: 'Washington, DC',
        period: '08/2014 - 05/2018',
        index: 3,
        description: 'I knew from a young age I wanted to know how things worked.  I went into Mechanical Engineering because it formed the basis for how things got built and interacted with the world.  The mindset I built going through this program laid the foundation for how I want to approach my life and career.',
        image: 'src/Photos/gw.jpg'
    }

    let flatiron: Education = {
        name:'Flatiron School',
        program: 'Full Stack Software Engineering',
        degree: 'Full Stack Web Development, Ruby on Rails and JavaScript',
        location: 'Remote',
        period: '04/2022 - 04/2023',
        index: 4,
        description: 'Keeping with the theme of trying to understand how things work, I realized that my curiosity was shifting from the physical to the digital.  I wanted to understand and learn how the applications I interact with every day were created, and I wanted to be able to bring my own ideas to life.',
        image: 'src/Photos/flatiron.jpg'
    }

    let mba_csi: WorkExperience = {
        company: 'MBA Consulting Services',
        role: 'Mechanical Engineer - Vehicle Programs',
        location: 'Merrifield, VA',
        period: '08/2018 - 12/2018',
        description: [
            'My first real job out of college taught me a lot about what I value in a workplace setting.  Understanding my passion for knowing how things work, I was really excited to start as a Vehicle Engineer at the place that has the largest vehicle fleet in the country - the United States Postal Service.',
            'I was quickly thrown into an existing search for a new Long Life Vehicle (LLV), or the small little postal trucks you see chugging around your neighborhood.  There are over 140,000 of them on the road today.',
            'Evaluating 6 new models, both quantitatively and qualitatively, was no easy task.  That, plus the native bureaucracy of a quasi-government agency, dragged the process on weeks, months, and eventually years after I started contributing to this project.',
            'I was not fond of the pace at which everything operated at the USPS vehicle engineering office, and I quickly found my curiosity in the various programs waning.  I knew I needed a pivot.'
        ],
        index: 5,
        image: 'src/Photos/mba.jpg'

    }

    let aquicore_one: WorkExperience = {
        company: 'Aquicore', 
        role: 'Technical Services Engineer', 
        location: 'Washington, DC', 
        period: '01/2019 - 12/2021', 
        description: [
            'Getting hired at a startup was incredibly exciting.  The stories and depictions of offices I had become accustomed to were cubicle based, head down environments without much variety built in.  Moving from the USPS to a 50 person startup was a move I am thankful every day that I made.',
            'At Aquicore, I was thrust into a role for which I did not have any experience, in an industry I had never heard of.  I had a TON of learning to do - understanding the value prop of the company, who our customers were, and the problems we were trying to solve for them.',
            'Being customer facing, I needed to learn quickly.  As startups tend to do, the company evolved almost every other month.  I was starting by learning the basics of electrical engineering, commercial real estate operations, real time metering solutions, and data communication protocols like modbus.', 
            'A couple months in, after an acquisition, I started learning about networking infrastructre, and how a Building Management System (BMS) works on a controls level through BACnet and TCP/IP protocols.',
            'I was able to bring the engineering mindset I had developed and channel my curiosity toward picking up what had been totally foreign concepts - eventually mastering these concepts to a point where I could effectively resolve issues in the field, and become an internal subject matter expert.' 
        ],
        index: 6,
        image: 'src/Photos/aquicore.jpg',
    }
    
    let aquicore_two: WorkExperience = {
        company: 'Aquicore (Acquired by Infogrid)',
        role: 'Technical Services Team Lead', 
        location: 'Washington, DC', 
        period: '12/2021 - Present', 
        description: [
            'You can learn a lot about a company by being in a support role - there are no shortages of complaints, originating both internally and externally.  After some changes within the company, I took the challenges that I perceived and starting building out processes to increase transparency and reporting capabilities for our support teams',
            'This started with my immediate team, enabling reporting on our KPIs and unlocking tracking on our support issues that had not been available before.  This work picked up traction, and yielded significant results - so much so that I started working on the same thing for our Product team.',
            'Being hyper focused on growth and not having any dedicated support engineers, our backlog of bugs was growing.  The high leverage issues would get picked up, but that left everything that had been reported in a stage of purgatory.',
            'I was able to help the Product team make sense of this backlog, assisting in building out a thorough prioritization framework based on the business case for each ticket, leaning on experience gained in my customer facing role.',
            'Not only was I able to unclog a lengthy backlog, but I set the Product team up for success by enabling quick and efficient prioritization of all tickets.  As time went on, I joined Epic planning sessions with the Engineers, Engineering Managers, and Product Managers to forecast what bugs would make it into upcoming sprints.',
            'I own a piece of the Product at Aquicore from a planning and prioritization perspective - a role that has decreased the time for highly prioritized bug tickets to get resolved by 200%.',
            'Now that i have become a certified full stack software engineer, I have started on the next journey in this role - doing some hands on engineering work in a support capacity.  I cannot wait to see where this takes me.'
        ],
        index: 7,
        image: 'src/Photos/infogrid.jpg'

    }
 
    let experienceArray = [aquicore_two, aquicore_one, mba_csi];
    let educationArray = [flatiron, gw];

    return (
        <div>
            <div className="work-experience">
                {experienceArray.map((experience, index) => (
                    <div className='experience-card' key={index}>
                        <ExperienceCard experience={experience} />
                    </div>
                ))}
                <br></br>
                <br></br>
                {educationArray.map((education, index) => (
                    <div className='experience-card' key={index}>
                        <EducationCard education={education} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience