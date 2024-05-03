import { Post } from '@/types/post';

/**
 * Modify posts response data
 * @param postsRes
 * @returns modifiedPosts
*/
export function modifyPosts(posts: Post[]) {
  let modifiedPosts: Post[] = [];

  if (posts && posts.length > 0) {
  posts.forEach((post: Post) => {
      const modifiedPost: Post | null = modifyPost(post);
      if (modifiedPost) {
        modifiedPosts.push(modifiedPost);
      }
    });
    return modifiedPosts;
  }
  return [];
}

/**
 * Modify post response data
 * @param postRes
 * @returns modifiedPosts
*/
export function modifyPost(postRes: Post) {
  if (postRes) {
    // Create url from title and key, concat by '-'
    const url =
      postRes.title
        ?.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '') +
      '-' +
      postRes.key;
    // Format postedAt to 'MMM dd, yyyy hh:mm a'
    const postedAt = postRes.postedAt ? new Date(postRes.postedAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }) : new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

    // Format postedAt to 'YYYY-MM-DD'
    const postedAtShort = postRes.postedAt ? new Date(postRes.postedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

    // Summary modification
    const summary = postRes.summary && postRes.summary?.length > 0 ? postRes.summary?.substring(0, 400) + '...' :  postRes.content?.substring(0, 400)?.replace(/<[^>]*>/g, '') + '...';

    // Calculate readMins from content length
    const readMins = Math.round(postRes.content?.length ? Math.round(postRes.content?.length / 500) : 5);

    // Return modified post
    const modifiedPost: Post = { ...postRes, url, postedAt, postedAtShort, summary, readMins: readMins !== 0 ? readMins : 1 };
    return modifiedPost;
  }
  return null;
}
