export interface Content {
  id: number;
  title: string,
  body?: string;
  author:string;
  type: string;
  imageLink?: string;
  hashtags?: string[];
}
