import { ICategoyRepository } from "../repositories/ICategoyRepository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  //DIP
  constructor(private categoriesRepository: ICategoyRepository) {} //access to class CategoriesRepository

  //all that create need do!
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}