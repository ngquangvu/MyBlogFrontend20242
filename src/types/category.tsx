export type Category = {
  categoryId: number;
  title: string;
  slug: string;
  image?: string;
};

export type CategoriesResponseData = {
  data: Category[];
  totalCount: number;
};