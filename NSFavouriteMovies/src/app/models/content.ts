export interface Content {
 readonly id: number|undefined;
  title: string,
  body?: string;
  author:string;
  type: string;
  imageLink?: string;
  hashtags?: string[];
}
