// This module aims to explain the structure of a resume

export interface Address {
    street: string;
    zipcode: string; // Usually a number but it seems that not always
    city: string;
    country: string;
}

export interface ExperienceLevel {
    name: string;
    level: number; // 0 to 5 stars
    icon_path: string;
}

export interface Hobby {
    name: string; // Emphasized
    description: string;
}

export interface Name {
    firstName: string;
    surName: string; // familly name
}

export interface GlobalPresentation {
    name: Name;
    title: string;
    address: Address;
    phone: string;
    email: string;
    catchline: string; // Sentences that explain your job research.
}

export interface Experience {
    dateFrom: string; // String to allow values such as "now"
    dateTo: string; // null == now
    tags: string[]; // Tags for eventual filtering
    title: string;
    company: string;
    companyIconPath: string; // Not mandatory.
    city: string;
    country: string;
    technologies: string[];
    tasks: string[]; // Will be used as a bullet point for each.
}

export interface StudyField {
    name: string;
    description: string;
}

export interface Education {
    dateFrom: string;
    dateTo: string;
    tags: string[];
    title: string;
    university: string;
    studiedFields: StudyField[];
}

export interface ScientificContribution {
    name: string; // Convention & Paper name
    description: string;
    date: string;
}

export interface ResumeObject {
    presentation: GlobalPresentation
    programming: ExperienceLevel[];
    frameworks: ExperienceLevel[];
    languages: ExperienceLevel[];
    hobbies: Hobby[];
    experiences: Experience[];
    education: Education[];
    scientificContributions: ScientificContribution[];
}
