//import express, { Request, Response } from "express"
import express, { Router } from "express";
import { config } from "dotenv";
import cors from "cors";
import {GoogleGenAI} from '@google/genai';

config() 

// Preparar el servidor
const app = express()
const router = Router()
app.use(express.json())
app.use(express.static("client"))
app.use(cors()); // Habilita CORS para permitir peticiones desde el cliente
app.use("/api/", router);

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("Falta la API Key: Asegúrate de definir GEMINI_API_KEY en tu .env");
}


/***
 * llamada API modelo
 */
async function main(message) {

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  // Ensure that the file is available in local system working directory or change the file path.
  const files = [
    await ai.files.upload({file: 'training/TE_6.pdf'}),
    await ai.files.upload({file: 'training/TE_1.pdf'}),
    await ai.files.upload({file: 'training/TE_4.pdf'}),
    await ai.files.upload({file: 'training/TE_8.pdf'}),
    await ai.files.upload({file: 'training/TE_5.pdf'}),
    await ai.files.upload({file: 'training/TE_7.pdf'}),
    await ai.files.upload({file: 'training/TE_3.pdf'}),
    await ai.files.upload({file: 'training/TE_9.pdf'}),
    await ai.files.upload({file: 'training/TE_2.pdf'}),
    await ai.files.upload({file: 'training/TE_10.pdf'}), 
  ]
  const config = {
    responseMimeType: 'text/plain',
    systemInstruction: [
        {
          text: `Eres un profesor de universidad especializado en el temario de los pdf subidos. Vas a responder a las preguntas que se realicen, solo basandote en la información del temario, nunca con datos del exterior. El contexto y los limites son el temario de la asignatura subida. Tiene que parecer que se está hablando con un docente. Se educado y riguroso. Trata de usted al usuario. Si no encuentras la respuesta a la pregunta entre los pdfs subidos, no te inventes la respuesta, di que esta fuera del alcance o que no se encuentra en el temario.`,
        }
    ],
  };
  const model =  'learnlm-2.0-flash-experimental';
  const contents = [
      {
      role: 'user',
      parts: [
        {
          fileData: {
            fileUri: files[0].uri,
            mimeType: files[0].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[1].uri,
            mimeType: files[1].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[2].uri,
            mimeType: files[2].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[3].uri,
            mimeType: files[3].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[4].uri,
            mimeType: files[4].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[5].uri,
            mimeType: files[5].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[6].uri,
            mimeType: files[6].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[7].uri,
            mimeType: files[7].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[8].uri,
            mimeType: files[8].mimeType,
          }
        },
        {
          fileData: {
            fileUri: files[9].uri,
            mimeType: files[9].mimeType,
          }
        }, 
      ],
    },
  
    {
      role: 'user',
      parts: [
        {
          text: message,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
 
  let responseText = '';
  for await (const chunk of response) {
    responseText += chunk.text;
  } 

  console.log(responseText);
  return responseText

}



// Ruta de prueba GET
router.get("/chat", (req, res) => {
  res.send("prueba de API")
  console.log("prueba GET")
});

// POST
router.post("/chat", async (req, res) => {

  try {
    if (!req.body.contents || !req.body.contents[0]?.parts[0]?.text) {
      return res.status(400).json({ error: "Solicitud inválida" });
    }

    const userMessage = req.body.contents[0].parts[0].text;
    console.log("Mensaje del usuario:", userMessage);

    const responseMessage = await main(userMessage)
    res.status(200).json({ content: responseMessage });


  } catch (error) {
    console.error("Error en la API:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }

});


const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`)
})



