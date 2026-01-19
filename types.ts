export interface Event {
  id: string;
  title: string;
  category: 'Competition' | 'Workshop' | 'Guest Lecture';
  description: string;
  date: string;
  time: string;
  image: string;
  teamSize: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
}
