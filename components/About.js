import React from "react";
import Image from "next/image";

function About() {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600"></h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-indigo-900 marginStyle">
            Check our contributors
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
              <Image
                src="https://media-exp1.licdn.com/dms/image/C5603AQEkGpzRFcgZOA/profile-displayphoto-shrink_800_800/0/1643715446285?e=1649289600&v=beta&t=HiAaV4zyQWykau1AyjYXi7M1n0DMdfwioGMmh7aStrQ"
                width={200}
                height={200}
                className="object-center object-cover rounded-full h-36 w-36"
                alt="Tanya's photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Tanya Rajhans
              </p>
              <p className="text-base text-gray-400 font-normal">
                Competitive Programmer | NITA ECE-23
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
              <Image
                src="https://media-exp1.licdn.com/dms/image/C4E03AQEErA9fup3USw/profile-displayphoto-shrink_800_800/0/1636949337187?e=1649289600&v=beta&t=HXhChtTZ6Xg5B5_ZIFilemmH2M2-LvNiMVqXFmfJJwk"
                width={200}
                height={200}
                className="object-center object-cover rounded-full h-36 w-36"
                alt="Atithi's photo"
              />
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 font-bold mb-2">
                Atithi Kumar Singh
              </p>
              <p className="text-base text-gray-400 font-normal">
                Competitive Programmer | NITA ECE-24
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
