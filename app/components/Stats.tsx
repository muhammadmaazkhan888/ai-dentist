"use client";

import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { number: 5000, suffix: "+", title: "Happy Patients" },
    { number: 15, suffix: "+", title: "Years Experience" },
    { number: 98, suffix: "%", title: "Success Rate" },
    { number: 24, suffix: "/7", title: "AI Support" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition"
            >
              <h2 className="text-5xl font-extrabold text-cyan-600">
                <CountUp
                  end={item.number}
                  duration={3}
                />
                {item.suffix}
              </h2>

              <p className="mt-3 text-gray-700 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}