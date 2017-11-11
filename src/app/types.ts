export interface Map<T> {
  [key: string]: T;
}

export interface ApiResponse {
  data: any;
  success: boolean;
  error: any;
}

export interface NewsApiResponse {
  status: any;
  source: any;
  sortBy: any;
  articles: any;
  error: any;
}

export interface SourcesApiResponse {
  status: any;
  sources: any;
}

export interface ArticleDetailApiResponse {
  title: any;
  content: any;
  author: any;
  lead_image_url: any;
  excerpt: any;
  word_count: any;
  date_published: any;
}
