import { Express } from "express";
import userRoutes from "./routes/user.route";

/**
 * Configure toutes les routes de l'application
 * @param app - Instance Express
 */
export function configureRoutes(app: Express): void {
  // Route de santé
  app.get("/health", (_req, res) => 
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      service: "Rotsy Backend API"
    })
  );

  // Routes API
  app.use("/api", userRoutes);
}
