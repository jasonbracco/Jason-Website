
export type WorkExperience = {
    company: string,
    role: string,
    location: string,
    period: string,
    description: string[],
    index: number
};

export type Education = {
    name: string,
    program: string,
    degree: string,
    location: string,
    period: string,
    index: number,
    description: string
};

export type TechnicalProject = {
    name: string,
    description: string,
    gh_link: string,
    demo_link: string,
    index: number
};