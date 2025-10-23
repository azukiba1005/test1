import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      await storage.saveContactForm(validatedData);
      res.json({ success: true, message: "お問い合わせを受け付けました" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "入力内容に誤りがあります" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
