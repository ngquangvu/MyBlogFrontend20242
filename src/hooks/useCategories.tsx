import useSWR from 'swr';
import axios, { AxiosError } from 'axios';
import { CategoriesResponseData } from '@/types/category';

// Fetch categories data from API
export function useCategories() {
  // Setup fetcher function
  const fetcher: (url: string) => Promise<{data: CategoriesResponseData}> = (url) => axios.get(url).then((res) => res.data);

  // Fetch data from API
  const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL + `categories?`, fetcher);

  return {
    categories: data?.data?.data || [],
    categoriesLoading: isLoading,
    isError: error,
  };
}
