export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  comments: Array<{id: number; text: string; author: string}>;
};
