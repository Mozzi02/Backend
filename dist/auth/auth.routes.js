import { Router } from "express";
import { sanitizeAuthInput, login } from "./auth.controler.js";
export const authRoutes = Router();
authRoutes.post("/", sanitizeAuthInput, login);
//# sourceMappingURL=auth.routes.js.map