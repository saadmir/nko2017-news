export interface Map<T> {
  [key: string]: T;
}

export interface ApiResponse {
  data: any;
  success: boolean;
  error: any;
}

