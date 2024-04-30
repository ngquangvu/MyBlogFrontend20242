export interface Post {
  title: string;
  description?: string;
  content?: string;
  author?: string;
  date: string;
}

export interface PostWithSlug extends Post {
  slug: string;
}
