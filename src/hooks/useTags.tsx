import useSWR from 'swr';
import axios, { AxiosError } from 'axios';
import { TagsResponseData } from '@/types/tag';

// Fetch tags data from API
export function useTags() {
  // Setup fetcher function
  const fetcher: (url: string) => Promise<{ data: TagsResponseData }> = (url) => axios.get(url).then((res) => res.data);

  // Fetch data from API
  const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + `tags?`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    tags: data?.data?.data || [],
    tagsLoading: isLoading,
    isError: error,
  };
}
