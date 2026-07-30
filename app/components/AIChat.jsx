"use client";

import { useState } from "react";

export default function AIChat() {

  const [message, setMessage] = useState("");

  const questions = [
    {
      q: "Kya daant nikalwane mein bohot dard hoga?",
      a: "Bilkul nahi! Dard bas aik hi baar hoga... jab aap billing counter par bill dekhenge! 😉 Just kidding, hamare doctor saab ka haath bohot halka hai!"
    },
    {
      q: "Mujhay dentist se bohot darr lagta hai, main kya karun?",
      a: "Aankhein band kar ke 3 baar bolo: Main bahadur hun! 😄 Phir bhi darr lage toh doctor saab ko boliyega."
    },
    {
      q: "Kya main treatment ke dauran chilla sakta/sakti hun?",
      a: "Haan bilkul! Lekin hamari team aapko comfortable rakhne ki puri koshish karegi."
    },
    {
      q: "Din mein kitni baar brush karna zaroori hai?",
      a: "Din mein 2 baar brush karna best hai — subah aur raat ko."
    },
    {
      q: "Kya roz floss karna waqai zaroori hai?",
      a: "Ji haan, floss daanton ke darmiyan phansi hui gandagi ko remove karta hai."
    },
    {
      q: "Main brush karna bhool jata hun, kya karun?",
      a: "Phone par Brush Time ka alarm laga dein."
    },
    {
      q: "Mera Aql Ka Daant nikal raha hai, kya main ziyaada zheen ho jaunga?",
      a: "Zheen ka toh pata nahi 😄 lekin aap zaroor samajhdaar ho jayenge ke dental care zaroori hai."
    }
  ];


  const askQuestion = (answer) => {
    setMessage(answer);
  };


  return (

    <section className="m-6 bg-white text-black rounded-3xl p-8">

      <h2 className="text-4xl font-bold">
        🤖 AI Dental Assistant
      </h2>


      <p className="mt-3">
        Apna dental question select karein:
      </p>


      <div className="grid gap-4 mt-6">


        {questions.map((item,index)=>(

          <button
            key={index}
            onClick={()=>askQuestion(item.a)}
            className="text-left p-4 bg-blue-50 rounded-xl hover:bg-blue-100"
          >

            🦷 {item.q}

          </button>

        ))}


      </div>



      {message && (

        <div className="mt-6 p-5 bg-cyan-100 rounded-xl">

          <b>AI:</b> {message}

        </div>

      )}


    </section>

  );

}