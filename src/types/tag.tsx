export type Tag = {
  tagId: number;
  title: string;
  slug: string;
  image?: string;
};

export type TagsResponseData = {
  data: Tag[];
  totalCount: number;
};
