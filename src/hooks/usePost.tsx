import useSWR from 'swr';
import axios, { AxiosError } from 'axios';
import * as PostAPI from '../apis/apiPost';
import { defaultPostsRequestParams, PostsRequestParams } from '@/types/post';

// Fetch posts data from API
export function usePosts(paramsURL?: PostsRequestParams) {
  // Setup fetcher function
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // Setup params
  const params: PostsRequestParams = { ...defaultPostsRequestParams, ...paramsURL };
  let searchParams = setupParams(params);

  // Fetch data from API
  const { data, error, isLoading } =
    useSWR(process.env.NEXT_PUBLIC_API_URL + `posts?` + searchParams.toString(),
      fetcher
    );

  // Modify posts data
  let dataModified = { data: PostAPI.modifyPosts(data?.data) };

  return {
    posts: dataModified.data,
    postsLoading: isLoading,
    isError: error,
  };
}

// Fetch post data from API
export function usePost(key: string) {
  // Setup fetcher function
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // Fetch data from API
  const { data, error, isLoading } =
    useSWR(process.env.NEXT_PUBLIC_API_URL + `posts/k/` + key,
      fetcher,
      {
        // revalidateOnFocus: false,
        // revalidateOnMount: false,
        // revalidateOnReconnect: false,
        // refreshWhenOffline: false,
        // refreshWhenHidden: false,
        refreshInterval: 0
      }
    );

  // Modify post data
  let dataModified = { data: PostAPI.modifyPost(data?.data) };

  return {
    post: dataModified.data,
    postLoading: isLoading,
    isError: error,
  };
}

// Setup params for fetching posts
function setupParams(params: PostsRequestParams) {
  let searchParams = new URLSearchParams();
  if (params.limit) searchParams.append('limit', params.limit.toString());
  if (params.page) searchParams.append('page', params.page.toString());
  if (params.search) searchParams.append('search', params.search);
  if (params.cate) searchParams.append('cate', params.cate);
  if (params.tag) searchParams.append('tag', params.tag);
  if (params.sort) searchParams.append('sort', params.sort);
  if (params.authorId) searchParams.append('authorId', params.authorId);
  return searchParams;
}
