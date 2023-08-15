import { Category } from "../model/Category";

//DTO => Data Transfer Object
export interface ICreateCategoryDTO {
  name: string; 
  description: string;  
}

export interface ICategoyRepository {
  findByName(name: string): Category | undefined;
  list(): Category[]; //Array of category
  create({ name, description }: ICreateCategoryDTO): void;
}