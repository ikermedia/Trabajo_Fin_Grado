import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";
import { conversation } from "./routes/ai"; // lógica del servicio de IA


export async function handler(event, context) {
  

  // Preparar el servidor
  const app = express()
  const router = Router()

  app.use(express.json())
  app.use(cors()); // Habilita CORS para permitir peticiones desde el cliente
  app.use("/api/", router); 


  // Ruta de prueba GET - para comprobar el estado del servidor desde el navegador
  router.get("/chat", (req, res) => {
    res.send("prueba de API")
    console.log("prueba GET")
  });

  // POST - llamada a la API del servicio de IA
  router.post("/chat", conversation)
                  
  // Devolver manejador del estado sin servidor
  return serverless(app)(event, context)

}
