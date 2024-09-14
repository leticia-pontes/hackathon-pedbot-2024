import OpenAI from "openai";

function ReceberChat(event) {
    event.preventDefault(); // Prevent form submission
  
    // Access form elements by their IDs
    const key = ""
    const textoUser = document.getElementById("chat").value;
    const openai = new OpenAI(key);
  
    const completion = async() => {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: textoUser,
        },
      ],
    });}
    // Do something with the form data
  
    console.log(completion.choices[0].message);
  
    // Reset the form
    event.target.reset();
  }
  
