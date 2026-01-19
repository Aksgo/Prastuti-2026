import { Event, TeamMember } from './types';

export const FEST_DATES = "March 21-23, 2026";
export const FEST_NAME = "Prastuti '26";

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Circuit Cipher',
    category: 'Competition',
    description: 'Debug complex circuits in record time. A test of speed and fundamental electrical knowledge.',
    date: 'March 21, 2026',
    time: '10:00 AM',
    image: 'https://picsum.photos/800/600?random=1',
    teamSize: 2
  },
  {
    id: '2',
    title: 'RoboWars',
    category: 'Competition',
    description: 'Build your bot and battle it out in the arena. May the strongest alloy win.',
    date: 'March 22, 2026',
    time: '2:00 PM',
    image: 'https://picsum.photos/800/600?random=2',
    teamSize: 4
  },
  {
    id: '3',
    title: 'IoT & Edge Computing',
    category: 'Workshop',
    description: 'Hands-on workshop on connecting the physical world to the digital realm using ESP32.',
    date: 'March 21, 2026',
    time: '11:00 AM',
    image: 'https://picsum.photos/800/600?random=3',
    teamSize: 1
  },
  {
    id: '4',
    title: 'Simulink Simulation',
    category: 'Competition',
    description: 'Model complex power systems using MATLAB Simulink.',
    date: 'March 23, 2026',
    time: '9:00 AM',
    image: 'https://picsum.photos/800/600?random=4',
    teamSize: 2
  },
  {
    id: '5',
    title: 'Future of EV',
    category: 'Guest Lecture',
    description: 'A talk by industry leaders on the rapidly evolving landscape of Electric Vehicles in India.',
    date: 'March 22, 2026',
    time: '5:00 PM',
    image: 'https://picsum.photos/800/600?random=5',
    teamSize: 0
  },
  {
    id: '6',
    title: 'Code-Electra',
    category: 'Competition',
    description: 'Algorithmic coding challenges with an electrical engineering twist.',
    date: 'March 23, 2026',
    time: '1:00 PM',
    image: 'https://picsum.photos/800/600?random=6',
    teamSize: 1
  }
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
