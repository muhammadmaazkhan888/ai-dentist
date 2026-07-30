"use client";

import Navbar from "./components/Navbar";
import AIChat from "./components/AIChat";
import DentalScan from "./components/DentalScan";
import { useState } from "react";

export default function Home() {

  const [submitted, setSubmitted] = useState(false);


  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white">


      <Navbar />


      {/* HERO SECTION */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 text-center pt-20"
      >

        <div className="max-w-4xl">

          <p className="text-cyan-300 font-bold tracking-widest">
            AI POWERED DENTAL CLINIC
          </p>


          <h1 className="text-6xl font-extrabold mt-4">
            Future of

            <span className="block text-cyan-300">
              Dental Care
            </span>

          </h1>


          <p className="mt-6 text-xl">
            Smart AI assistant, dental scanning and premium patient experience.
          </p>


          <a
            href="#booking"
            className="inline-block mt-8 bg-cyan-400 text-black px-8 py-3 rounded-full font-bold"
          >
            Book Appointment
          </a>


        </div>

      </section>



      {/* SERVICES */}

      <section
        id="services"
        className="bg-white text-black rounded-3xl m-6 p-8"
      >

        <h2 className="text-4xl font-bold text-center">
          Our AI Dental Services
        </h2>


        <div className="grid md:grid-cols-3 gap-6 mt-8">


          {/* AI SCAN CARD */}

          <a
            href="#scan"
            className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition cursor-pointer"
          >

            <h3 className="text-xl font-bold">
              🦷 AI Dental Scan
            </h3>


            <p className="mt-2">
              Upload tooth image and get AI analysis.
            </p>


            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl">
              Start Scan
            </button>


          </a>




          {/* AI CHAT CARD */}

          <a
            href="#ai"
            className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition"
          >

            <h3 className="text-xl font-bold">
              🤖 AI Consultation
            </h3>


            <p className="mt-2">
              Ask dental questions anytime.
            </p>


          </a>




          {/* BOOKING CARD */}

          <a
            href="#booking"
            className="p-6 bg-blue-50 rounded-2xl shadow hover:scale-105 transition"
          >

            <h3 className="text-xl font-bold">
              📅 Smart Booking
            </h3>


            <p className="mt-2">
              Easy appointment management.
            </p>


          </a>


        </div>

      </section>





      {/* AI DENTAL SCAN */}

      <section id="scan">

        <DentalScan />

      </section>





      {/* AI CHAT */}

      <section id="ai">

        <AIChat />

      </section>





      {/* BOOKING */}

      <section
        id="booking"
        className="m-6 bg-white text-black rounded-3xl p-8"
      >

        <h2 className="text-4xl font-bold">
          Book Appointment
        </h2>



        <div className="space-y-4 mt-6">


          <input
            className="w-full border rounded-xl p-3"
            placeholder="Full Name"
          />



          <input
            className="w-full border rounded-xl p-3"
            placeholder="Phone Number"
          />



          <button
            onClick={() => setSubmitted(true)}
            className="w-full bg-blue-600 text-white rounded-xl p-4 font-bold"
          >

            Confirm Appointment

          </button>



          {submitted && (

            <div className="bg-green-100 text-green-700 rounded-xl p-4 text-center">

              ✅ Appointment Submitted Successfully

            </div>

          )}


        </div>


      </section>



    </main>
  );
}