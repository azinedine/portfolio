// Types
export interface ExperienceItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  company?: string;
  institution?: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link?: string;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  link: string;
}

// Experience Data
export const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Project Manager + Mobile Developer (React Native)',
    company: 'TakkiTech Company',
    location: 'Istanbul, Turkey',
    period: '2024 - Today',
    description: 'Started in this company as a Project Manager for a new application related to tourism and entertainment, managing everything from interface design to programming, and assigning tasks to various developers in the team.',
    achievements: [
      'Led complete project lifecycle from concept to deployment',
      'Managed cross-functional development team',
      'Designed and implemented user interfaces for tourism application',
      'Coordinated task distribution among team members',
      'Successfully delivered tourism and entertainment mobile application'
    ],
    technologies: ['React Native', 'Project Management', 'UI/UX Design', 'Team Leadership', 'Mobile Development'],
    link: '#'
  },
  {
    id: 2,
    type: 'work',
    title: 'Full Stack Mobile Developer (React Native)',
    company: 'BielTech Company',
    location: 'Blida, Algeria',
    period: '2023 - 2024',
    description: 'Enhanced my skills in developing phone applications through React Native, working on Mac, aiming to develop phone applications and upload them to App Store and Play Store.',
    achievements: [
      'Mastered React Native development on macOS platform',
      'Successfully published applications to both App Store and Play Store',
      'Gained extensive experience in mobile app deployment',
      'Learned advanced mobile development techniques',
      'Collaborated with senior developers with 15+ years experience'
    ],
    technologies: ['React Native', 'iOS Development', 'Android Development', 'App Store', 'Play Store', 'macOS'],
    link: '#'
  },
  {
    id: 3,
    type: 'work',
    title: 'Full Stack Web, Mobile Developer (ReactJs, React Native)',
    company: 'Bignova Company',
    location: 'Bejaia, Algeria',
    period: '2020 - 2023',
    description: 'Started from here after completing training on various programming fundamentals. Secured my first job as developer, completed numerous projects and gained extensive experience working with the company.',
    achievements: [
      'Completed over 20 web and mobile projects',
      'Gained substantial expertise in project management',
      'Developed expertise in both ReactJs and React Native',
      'Trained and mentored several new interns',
      'Built strong foundation in full-stack development'
    ],
    technologies: ['ReactJs', 'React Native', 'Node.js', 'MongoDB', 'Express.js', 'Full Stack Development'],
    link: '#'
  }
];

export const education: ExperienceItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor\'s Degree in Computer Science',
    institution: 'University: Khemis Miliana',
    location: 'Algeria',
    period: '2016',
    description: 'Completed comprehensive computer science program with focus on software development, algorithms, and system design.',
    achievements: [
      'Completed advanced coursework in software engineering',
      'Participated in programming competitions',
      'Developed strong foundation in computer science fundamentals',
      'Gained expertise in multiple programming languages'
    ],
    technologies: ['Java', 'C++', 'Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems']
  },
  {
    id: 2,
    type: 'education',
    title: 'Baccalaureate Degree in Mathematics',
    institution: 'College: Emir Abdlkader',
    location: 'Algeria',
    period: '2011',
    description: 'Completed secondary education with specialization in mathematics, building strong analytical and problem-solving foundations.',
    achievements: [
      'Achieved high scores in mathematics and sciences',
      'Developed strong analytical thinking skills',
      'Built foundation for computer science studies',
      'Excelled in logical reasoning and problem solving'
    ],
    technologies: ['Mathematics', 'Physics', 'Logic', 'Problem Solving', 'Analytical Thinking']
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Graduated as FullStack Developer',
    issuer: 'EsBoocamp',
    date: 'Jul 20 to Dec 31 - 2020',
    credentialId: 'ESBC-FS-2020-001',
    link: '#'
  },
  {
    id: 2,
    title: 'Cisco CCNA4',
    issuer: 'Cisco Systems',
    date: '2016 - 2017',
    credentialId: 'CISCO-CCNA4-2017-002',
    link: '#'
  },
  {
    id: 3,
    title: 'React Native Specialist',
    issuer: 'More than 1000 hours of training',
    date: '2023',
    credentialId: '1000+ hours of training',
    link: '#'
  },
  {
    id: 4,
    title: 'Project Management Professional',
    issuer: 'More than 4 years of experience in development',
    date: '2024',
    credentialId: '4+ years of experience in development',
    link: '#'
  }
];