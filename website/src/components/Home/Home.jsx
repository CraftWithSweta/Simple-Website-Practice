import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
           
            <section class="bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    
    <div>
      <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        Make your brand stand out
      </h1>
      <p class="mt-6 text-lg text-gray-600">
        Elevate your digital presence with modern, fast, and responsive designs. We help you grow online.
      </p>
      <div class="mt-8">
        <a href="#"
          class="inline-block bg-orange-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">
          Get Started
        </a>
      </div>
    </div>

    
    <div class="flex justify-center md:justify-end">
      <img src="https://w7.pngwing.com/pngs/61/36/png-transparent-remote-work-man-working-at-desk-with-laptop-thumbnail.png" alt="Hero Image" class="rounded-lg shadow-lg" />
    </div>

  </div>
</section>

        </div>
    );
}
