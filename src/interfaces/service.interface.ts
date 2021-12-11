export interface newService {
  type: string;
  rating_quantity: number;
  coordinates: number[];
  description: string;
  summary: string;
}

export interface IService{
    type?: string;
    rating_quantity?: number;
    coordinates?: number[];
    description?: string;
    address?: string;
    summary?: string;
}
