import { InternshipModule } from '@/types';

export interface ExperienceInfo {
  organization: string;
  programmeTitle: string;
  collaboration: string;
  totalDuration: string;
  format: string;
  overview: string;
  attributionDisclaimer: string;
  modules: InternshipModule[];
}

export const internshipExperience: ExperienceInfo = {
  organization: 'Corizo',
  programmeTitle: 'Internship Programme',
  collaboration: 'In collaboration with IIT Bombay',
  totalDuration: '9 Months (Structured 3-Module Curriculum)',
  format: 'Online Technical Programme',
  overview:
    'A multi-disciplinary 9-month technical internship programme organized by Corizo in academic collaboration with IIT Bombay, structured into three distinct quarters covering foundational and emerging engineering disciplines.',
  attributionDisclaimer:
    'This experience represents an online internship training programme organized by Corizo in academic collaboration with IIT Bombay. Krishna Kaushik is participating as an intern/trainee in this collaborative programme and is not an employee of IIT Bombay.',
  modules: [
    {
      id: 'module-1',
      number: 1,
      title: 'IoT and Robotics',
      duration: '3 Months',
      status: 'Ongoing',
      focus: [
        'Microcontroller architectures & embedded systems',
        'Sensor integration & real-time telemetry processing',
        'Hardware-software interface protocols',
        'Robotics kinematics and automation principles'
      ],
      description:
        'Currently active initial module exploring hardware interfacing, embedded systems programming, sensor input handling, and automation logic.'
    },
    {
      id: 'module-2',
      number: 2,
      title: 'Data Science',
      duration: '3 Months',
      status: 'Upcoming',
      focus: [
        'Statistical data analysis and probability modeling',
        'Exploratory data analysis & data cleaning pipelines',
        'Predictive modeling and applied machine learning',
        'Feature engineering and scientific evaluation metrics'
      ],
      description:
        'Scheduled second module concentrating on statistical analysis, data pipeline engineering, and practical machine learning methodologies.'
    },
    {
      id: 'module-3',
      number: 3,
      title: 'Nanotechnology',
      duration: '3 Months',
      status: 'Upcoming',
      focus: [
        'Nanoscale material properties and synthesis',
        'Quantum effects and nanoscale electronic behavior',
        'Nanodevice physics and engineering applications',
        'Computational simulation of nanoscale architectures'
      ],
      description:
        'Scheduled concluding module focusing on nanomaterial physics, quantum structural properties, and nanoscale engineering applications.'
    }
  ]
};
