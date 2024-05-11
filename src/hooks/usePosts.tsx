import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import axios, { AxiosError } from 'axios';
import * as PostAPI from '../apis/apiPost';
import { defaultPostsRequestParams, Post, PostsRequestParams } from '@/types/post';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  return await response.json();
};

export const usePosts = (paramsURL?: PostsRequestParams) => {
  // Setup fetcher function
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const getKey = (pageIndex: number, previousPageData: any) => {
    // Setup params
    const params: PostsRequestParams = { ...defaultPostsRequestParams, ...paramsURL, page: pageIndex + 1 };
    let searchParams = setupParams(params);
    if (previousPageData && !previousPageData.data) return null; // reached the end
    return process.env.NEXT_PUBLIC_API_URL + `posts?` + searchParams.toString(); // SWR key
  };

  const { data, error, isLoading, isValidating, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  // Total records
  const totalCount = data ? data[0]?.data?.totalCount : 0;

  // Modify posts data
  const dataFlat = data ? data.map((d) => d.data.data).flat() : [];
  let dataModified = dataFlat ? PostAPI.modifyPosts(dataFlat) : [];

  // Remove duplicate data with same id in dataModified
  const uniqueDataModified = dataModified.filter((v, i, a) => a.findIndex((t) => t?.id === v?.id) === i);

  return {
    data: uniqueDataModified,
    isLoading,
    size,
    setSize,
    hasMore: uniqueDataModified.length < totalCount,
  };
};

// Fetch post data from API
export function usePost(key: string) {
  // Setup fetcher function
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  // Fetch data from API
  const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + `posts/k/` + key, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

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
