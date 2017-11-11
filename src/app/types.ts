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
