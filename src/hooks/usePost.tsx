import useSWR from 'swr';
import axios, { AxiosError } from 'axios';
import * as PostAPI from '../apis/apiPost';
import { defaultPostsRequestParams, PostsRequestParams } from '@/types/post';

export function usePosts(paramsURL?: PostsRequestParams) {
  // Setup fetcher function
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // Setup params
  const params: PostsRequestParams = { ...defaultPostsRequestParams, ...paramsURL };
  let searchParams = new URLSearchParams({ limit: params.limit.toString(), page: params.page.toString(), search: params.search, cate: params.cate, tag: params.tag, sort: params.sort, authorId: params.authorId });

  // Fetch data from API
  const { data, error, isLoading } = useSWR(`http://localhost:3334/api/posts?` + searchParams.toString(), fetcher);

  // Modify posts data
    let dataModified = { data: PostAPI.modifyPosts(data?.data) };

  return {
    posts: dataModified.data,
    postsLoading: isLoading,
    isError: error,
  };
}
