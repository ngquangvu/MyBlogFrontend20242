import { SkeletonLine } from "../SkeletonLine/SkeletonLine";

export const SkeletonLines = () => {
  return (
    <div className='space-y-6 mt-10'>
      <SkeletonLine />
      <SkeletonLine />
      <SkeletonLine />
    </div>
  );
};
