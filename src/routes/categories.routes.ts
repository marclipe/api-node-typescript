import { Router, request } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository; //nosso repositório já criado

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  //Criamos o CreateCategoryService
  const createCategoryService = new CreateCategoryService(categoriesRepository);

  //Chamamos o execute passando name e description
  createCategoryService.execute({ name, description } )

  return response.status(201).send();
})

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all)
})
