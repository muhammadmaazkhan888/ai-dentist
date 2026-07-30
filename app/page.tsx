"use client";

import { useState } from "react";

export default function Home() {

  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white">

      <nav className="flex justify-between p-6">
        <h1 className="text-3xl font-bold text-cyan-300">
          AI Dentist 🦷
        </h1>

        <button className="bg-cyan-400 text-black px-5 py-2 rounded-full">
          Book Now
        </button>
      </nav>


      <section className="flex items-center justify-center min-h-screen px-6">

        <div className="text-center max-w-4xl">

          <p className="text-cyan-300 font-bold">
            AI POWERED DENTAL CLINIC
          </p>


          <h1 className="text-6xl font-extrabold mt-5">
            Future Of
            <span className="block text-cyan-300">
              Dental Care
            </span>
          </h1>


          <p className="mt-6 text-xl">
            Smart AI dental assistant, online consultation,
            appointment booking and premium patient experience.
          </p>


          <button className="mt-8 bg-cyan-400 text-black px-10 py-4 rounded-full font-bold">
            Book Appointment
          </button>

        </div>

      </section>



      <section className="bg-white text-black m-6 p-8 rounded-3xl">

        <h2 className="text-4xl font-bold text-blue-900">
          AI Dental Features
        </h2>


        <div className="grid md:grid-cols-3 gap-5 mt-8">


          <div className="bg-blue-50 p-6 rounded-xl">
            🦷
            <h3 className="font-bold text-xl">
              AI Diagnosis
            </h3>
            <p>
              Detect dental problems faster.
            </p>
          </div>


          <div className="bg-blue-50 p-6 rounded-xl">
            🤖
            <h3 className="font-bold text-xl">
              AI Assistant
            </h3>
            <p>
              24/7 patient support.
            </p>
          </div>


          <div className="bg-blue-50 p-6 rounded-xl">
            📅
            <h3 className="font-bold text-xl">
              Smart Booking
            </h3>
            <p>
              Easy online appointments.
            </p>
          </div>


        </div>


      </section>



      <section className="p-6">

        <div className="bg-white text-black rounded-3xl p-8">


          <h2 className="text-4xl font-bold text-center">
            Book Appointment
          </h2>


          <input
          className="border p-3 rounded-xl w-full mt-6"
          placeholder="Your Name"
          />


          <input
          className="border p-3 rounded-xl w-full mt-4"
          placeholder="Phone Number"
          />


          <button
          onClick={()=>setSubmitted(true)}
          className="bg-blue-600 text-white w-full mt-5 p-4 rounded-xl font-bold"
          >
            Confirm Appointment
          </button>


          {
            submitted &&
            <p className="bg-green-100 text-green-700 p-4 mt-4 rounded-xl text-center">
              ✅ Appointment Submitted Successfully
            </p>
          }


        </div>


      </section>


    </main>
  );
}