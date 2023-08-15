import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/*
  [x] - Definir o tipo de retorno
  [x] - Alterar o retorno de erro
  [x] - Acessar o repositório
  [x] - Retornar algo (Sem retorno tipo void)
*/

export class CreateCategoryService {
  //DIP
  constructor(private categoriesRepository: CategoriesRepository) {} //access to class CategoriesRepository

  //all that create need do!
  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}