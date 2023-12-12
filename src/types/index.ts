export interface topChartCards {
  title: string;
  description: string;
  duration: string;
  fav?: boolean;
  image: string;
}

export interface heroContainer {
    title: string;
    heading: string;
    subHeading: string;
    likes: number;
    customers: string[];
    image: string;
}   

export interface songCard {
    id:number;
    image: string;
    title: string;
    artist: string;
}