import React from 'react'

export default function About() {
    return (
        
        <section class="bg-white py-20">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold text-gray-900">About Us</h2>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        We’re on a mission to simplify your digital experience. With powerful tools and intuitive design,
        we help you focus on what matters most — growing your business.
      </p>
    </div>
    
    <div class="grid gap-10 md:grid-cols-2 items-center">
      
    
      <div>
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
        <ul class="space-y-4 text-gray-600">
          <li class="flex items-start">
            <span class="text-orange-500 mr-3 mt-1">✓</span>
            <p>Fast, responsive tools that scale with your business.</p>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 mr-3 mt-1">✓</span>
            <p>Clean, modern design that your users will love.</p>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 mr-3 mt-1">✓</span>
            <p>Dedicated support and regular updates to keep you ahead.</p>
          </li>
        </ul>
      </div>

     
      <div class="text-center">
        <img src="https://via.placeholder.com/450x300" alt="About Image" class="rounded-lg shadow-lg mx-auto" />

      </div>

    </div>
  </div>
</section>

        
    );
}