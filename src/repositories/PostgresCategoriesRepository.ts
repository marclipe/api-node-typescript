import { Category } from "../model/Category";
import { ICategoyRepository, ICreateCategoryDTO } from "./ICategoyRepository";


export class PostgresCategoriesRepository implements ICategoyRepository {
  findByName(name: string): Category {
    console.log(name); 
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({name, description}: ICreateCategoryDTO): void {
    console.log(name, description)
  }
}