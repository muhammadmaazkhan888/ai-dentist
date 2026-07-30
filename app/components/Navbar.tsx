"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-700">
          AI Dentist 🦷
        </h1>


        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-blue-600">
            Home
          </a>

          <a href="#services" className="hover:text-blue-600">
            Services
          </a>

          <a href="#ai" className="hover:text-blue-600">
            AI Assistant
          </a>

          <a href="#booking" className="hover:text-blue-600">
            Booking
          </a>

        </div>


        <a
          href="#booking"
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700"
        >
          Book Now
        </a>


      </div>
    </nav>
  );
}