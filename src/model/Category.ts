import { v4 as uuidV4 } from "uuid";

export class Category {
  id?: string;
  name: string;
  description: string;
  createdAt: Date;

  constructor() {
    //Se não tiver nenhum id ele recebe uuidV4()
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
