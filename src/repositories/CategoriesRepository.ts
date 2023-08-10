import { Category } from "../model/Category";

//DTO => Data Transfer Object
interface ICreateCategoryDTO {
  name: string; 
  description: string;  
}

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = []
  }

  //Para cadastrar a nossa categoria
  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  //Retornar uma lista de categorias
  list(): Category[] {
    return this.categories;
  }
}