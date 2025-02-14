import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      if (typeof user_id !== "string") {
        return response.status(404).json({ error: " Invalid user Id" });
      }

      const users = this.listAllUsersUseCase.execute({ user_id });

      return response.json(users);
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}

export { ListAllUsersController };
