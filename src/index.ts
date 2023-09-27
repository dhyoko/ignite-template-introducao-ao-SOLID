import express from "express";

import { usersRoutes } from "./routes/users.routes";
import { swaggerRoutes } from "./routes/swagger.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swaggerRoutes);

export { app };
