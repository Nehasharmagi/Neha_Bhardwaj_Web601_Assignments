export interface Content {
  id: number;
  title: string,
  body?: string;
  author:string;
  type: string;
  imageUrl?: string;
  tags?: string[];
}
