export interface Testimonial {
  name: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}