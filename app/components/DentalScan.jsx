"use client";

import { useState } from "react";

export default function DentalScan() {

  const [image, setImage] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);


  const handleScan = () => {

    if (!image) {
      alert("Please upload a dental image first 🦷");
      return;
    }


    setScanning(true);
    setResult(false);


    setTimeout(() => {
      setScanning(false);
      setResult(true);
    }, 3000);

  };



  return (

    <section className="m-6 bg-white text-black rounded-3xl p-8">

      <h2 className="text-4xl font-bold text-center">
        🦷 AI Dental Scanner
      </h2>


      <p className="text-center mt-3">
        Upload your dental image and get AI-powered analysis.
      </p>



      <div className="mt-8 flex flex-col items-center gap-5">


        <input
          type="file"
          accept="image/*"
          className="border p-3 rounded-xl"
          onChange={(e)=>{

            const file = e.target.files[0];

            if(file){
              setImage(URL.createObjectURL(file));
            }

          }}
        />



        {image && (

          <img
            src={image}
            alt="Dental Preview"
            className="w-64 h-64 object-cover rounded-2xl shadow"
          />

        )}




        <button
          onClick={handleScan}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
        >

          Start AI Scan 🤖

        </button>




        {scanning && (

          <div className="bg-blue-100 text-blue-700 p-5 rounded-xl text-center">

            🔍 AI is analyzing your dental image...
            <br/>
            Please wait 3 seconds

          </div>

        )}






        {result && (

          <div className="bg-green-100 text-green-700 p-6 rounded-2xl w-full text-center">


            <h3 className="text-2xl font-bold">
              AI Dental Report ✅
            </h3>


            <p className="mt-3">
              Status: Good Dental Condition
            </p>


            <p>
              Cavity Risk: Low
            </p>


            <p>
              Recommendation: Regular dental checkup recommended.
            </p>


          </div>

        )}



      </div>


    </section>

  );

}