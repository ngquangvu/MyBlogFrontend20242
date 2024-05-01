import { Author } from './author';
import { Category } from './category';
import { Tag } from './tag';

export type Post = {
  id?: string;
  author?: Author;
  title?: string;
  metaTitle?: string;
  slug?: string;
  summary?: string;
  content?: string;
  thumbnail?: string;
  key?: string;
  url?: string;
  postCategories?: Category[];
  postTags?: Tag[];

  postedAt?: string;
  postedAtShort?: string;
  postedTimeAgo?: string;
  viewsNumb?: number;
  commentsNumb?: number;
  readMins?: number;
};

export type PostsResponseData = {
  data: Post[];
  totalCount: number;
};

export type PostResponseData = {
  data: Post;
};

export type PostsRequestParams = {
  limit: number;
  page: number;
  search: string;
  cate: string;
  tag: string;
  sort: string;
  authorId: string;
};

export const defaultPostsRequestParams: PostsRequestParams = {
  limit: 10,
  page: 1,
  search: '',
  cate: '',
  tag: '',
  sort: '',
  authorId: '',
};