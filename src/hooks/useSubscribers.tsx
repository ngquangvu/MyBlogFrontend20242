import { Subscriber } from '@/types/subscriber';
import { CommonResponseData } from '@/types/common';
import axiosInstance from '@/config/axiosInstance';

export const makeSubscribe = async (email?: string): Promise<CommonResponseData & { data: Subscriber | null }> => {
  const request = { email };
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const { data } = await axiosInstance.post<CommonResponseData & { data: Subscriber | null }>(process.env.NEXT_PUBLIC_API_URL + `subscribers/`, request, config);
  return data;
};
