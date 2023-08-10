import { Router, request } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

export const categoriesRoutes = Router();
//Instancio a classe
const categoriesRepository = new CategoriesRepository;

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body; 
  
  //chamo o método
  categoriesRepository.create(
    { name, description }
  )

  return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  
  return response.json(all)
})
