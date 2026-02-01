import { Event, TeamMember } from './types';
export const FEST_DATES = "March 21-22, 2026";
export const FEST_NAME = "Prastuti '26";

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Codigo',
    category: 'Competition',
    description: 'Codigo is a competitive programming event involving the application of various data structures and algorithms.',
    date: 'March 21, 2026',
    time: '10:00 AM',
    image: 'https://picsum.photos/800/600?random=2',
    teamSize: 0
  },  
  {
    id: '2',
    title: 'Hackoverflow',
    category: 'Competition',
    description: 'With this event, we intend to give paricipants a kickstart in learning web',
    date: 'March 21, 2026',
    time: '2:00 PM',
    image: 'https://picsum.photos/800/600?random=2',
    teamSize: 4
  },
  {
    id: '3',
    title: 'Consilium',
    category: 'Workshop',
    description: 'Hands-on hardware implementation. It aims to introduce young minds to the world of electronic design, concepts and real world application.',
    date: 'March 21, 2026',
    time: '11:00 AM',
    image: 'https://picsum.photos/800/600?random=3',
    teamSize: 4
  },
  {
    id: '4',
    title: 'Student Alumni Interaction',
    category: 'Guest Lecture',
    description: 'Forever united by our alma mater, bound by memories, and connected by purpose.',
    date: 'March 23, 2026',
    time: '9:00 AM',
    image: 'https://picsum.photos/800/600?random=4',
    teamSize: 0
  },
  {
    id: '5',
    title: 'Codigo - CP Workshop 1',
    category: 'Workshop',
    description: 'Brushing up the Basics',
    date: 'TBD',
    time: 'TBD',
    image: 'https://picsum.photos/800/600?random=4',
    teamSize: 0
  },
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Dhruv Gupta',
    role: 'Convener',
    image: 'https://picsum.photos/200/200?random=10'
  },
  {
    id: '2',
    name: 'Dhruv Gupta',
    role: 'Co-Convener',
    image: 'https://picsum.photos/200/200?random=11'
  },
  {
    id: '3',
    name: 'Dhruv Gupta',
    role: 'Tech Head',
    image: 'https://picsum.photos/200/200?random=12'
  },
  {
    id: '4',
    name: 'Dhruv Gupta',
    role: 'PR Head',
    image: 'https://picsum.photos/200/200?random=13'
  }
];
