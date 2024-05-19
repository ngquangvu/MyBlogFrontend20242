'use client';

import { SimpleLayout } from '@/components/layouts/SimpleLayout';
import { Container } from '@/components/molecules/Container';
import { PostDetail } from '@/components/molecules/PostDetail';
import { SkeletonLine } from '@/components/molecules/SkeletonLine';
import { usePost, usePosts } from '@/hooks/usePosts';
import { Post, PostsRequestParams } from '@/types/post';
import { Link } from '@/navigation';
import { usePathname } from 'next/navigation';

export default function BlogPost() {
  const currentPage = usePathname();
  const lastSegment = currentPage.split('/').pop();
  const key = lastSegment?.split('-').pop();

  // Get post detail
  const { post, postLoading } = usePost(key || '');
  const currentPost = post;

  // Get related posts
  const paramCate = (post?.postCategories && post?.postCategories.length > 0 && post?.postCategories[0]?.slug) || '';
  const paramTag = (post?.postTags && post?.postTags.length > 0 && post?.postTags[0]?.slug) || '';
  const paramSort = 'relevant';
  const paramsPostsCate: PostsRequestParams = { limit: 5, page: 1, search: '', cate: paramCate || '', tag: '' || '', sort: paramSort || '', authorId: '' };
  const paramsPostsTag: PostsRequestParams = { limit: 5, page: 1, search: '', cate: '' || '', tag: paramTag || '', sort: paramSort || '', authorId: '' };
  // Get posts cate
  const { data: postsCate, isLoading: postsLoadingCate } = usePosts(paramsPostsCate);
  // Get posts tag
  const { data: postsTag, isLoading: postsLoadingTag } = usePosts(paramsPostsTag);
  // Merge related posts
  const relatedPosts: Post[] = [];
  if (postsCate && postsCate?.length > 0) {
    postsCate.forEach((post: Post) => {
      relatedPosts.push(post);
    });
  }
  if (postsTag && postsTag?.length > 0) {
    postsTag.forEach((post: Post) => {
      relatedPosts.push(post);
    });
  }

  // Remove all duplicate posts and current post
  const uniqueRelatedPosts = relatedPosts.filter((post, index, self) => index === self.findIndex((t) => t.id === post.id) && post.id !== currentPost?.id);

  return (
    <>
      {postLoading && (
        <Container className='mx-auto max-w-5xl mt-16 sm:mt-28'>
          <div className='space-y-6'>
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </div>
        </Container>
      )}
      {post && <PostDetail post={post} relatedPosts={uniqueRelatedPosts} />}
      {!postLoading && !post && (
        <SimpleLayout title='Blog not found' intro='I apologize for any inconvenience, but the requested blog post does not exist. Please verify the URL or try again later.'>
          <div>
            <Link href='/'>Back to Home</Link>
          </div>
        </SimpleLayout>
      )}
    </>
  );
}
