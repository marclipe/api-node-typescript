import { Router } from "express";
import { v4 as uuidV4 } from 'uuid'

export const categoriesRoutes = Router();

//Precisei criar uma interface para categories
interface Category {
  name: string, 
  description: string
  id: string
}

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;  

  const category = {
    name,
    description,
    id: uuidV4(),
  };

  categories.push(category);

  console.log(category)

  return response.status(201).send()
})
