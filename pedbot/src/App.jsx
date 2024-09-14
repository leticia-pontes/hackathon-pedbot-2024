import { useState } from "react";
import "./App.css";
import OpenAI from "openai";
import { Bloco, Caixa } from "./assets/styled";

function App() {
  const [texto, setTexto] = useState("");
  const [res, setRes] = useState("");
  const key = ""
  const completion = async () => {
    const openai = new OpenAI({apiKey: key, dangerouslyAllowBrowser: true });

    return await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Your goal is to help by providing techniques to help in the treatment of mainly mental problems, such as anxiety, panick attacks, depression and so on. Those techniques should not be professional but more like an friendly advice. Also write it in an way that seens like a person talking to another, without being very formal and in a casual way. Keep the answers in a way that keep the conversation going. In your answer write it like a sentence" },
        {
          role: "user",
          content: texto,
        },
      ],
    });
  };
  const ReceberChat = async () => {
    // Access form elements by their IDs
    let res = await completion(texto);
    // Do something with the form data
    console.log(res.choices[0].message);
    setRes(res.choices[0].message.content);
    // Reset the form
  };

  const titulos = ["Artigos", "Assuntos do dia", "Exercicios de respiração", "Arrume um pet", "Centro de ajuda"
  ]

  return (
    <>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <Caixa>
        <h1>artigos q tem coisa a ver</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quia consequuntur voluptas illum? Voluptate, est mollitia cum, asperiores hic dolor quae iste assumenda dolorem laboriosam quidem doloremque rem! Sunt, pariatur.
        </Caixa>
        <Caixa>
        <h1>Dogs</h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quia consequuntur voluptas illum? Voluptate, est mollitia cum, asperiores hic dolor quae iste assumenda dolorem laboriosam quidem doloremque rem! Sunt, pariatur.
        </Caixa>
      </div>

      <div>
        <h1>Insira seu texto</h1>
        <input type="text" onChange={(e) => setTexto(e.target.value)}/>
        <button onClick={() => ReceberChat()}>Enviar</button>
      </div>
      <div>
        <h1>Resposta</h1>
        <p>{res}</p>
        </div>
        <Bloco>
          {titulos.map((titulo) => {
            return <Caixa key={titulo}>
              <h1>{titulo}</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi id perspiciatis sequi, maxime impedit illum sapiente eveniet maiores, aperiam repellat eaque molestiae totam ab culpa amet doloremque! Ullam, atque omnis?</p>
            </Caixa>
          })}
        </Bloco>
    </>
  );
}

export default App;
