export interface Category {
  mainCategories: string[];
}

export type CategoryDisplay = {
  categoryForDisplay: string;
  categoryForEnum: string;
  picture: string;
  subCategoryDisplay: SubCategoryDisplay[];
};

export type SubCategoryDisplay = {
  categoryForDisplay: string;
  categoryForEnum: string;
  picture: string;
};
