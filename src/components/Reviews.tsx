import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    content: "Working with this developer was an absolute pleasure. The Flutter app exceeded our expectations in terms of both functionality and design.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    content: "Exceptional attention to detail and great communication throughout the project. Delivered a polished app right on schedule.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    content: "The expertise in Flutter development is evident in the smooth performance and beautiful UI of our application.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Client Reviews</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - here's what clients have to say about working together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="group">
              <div className="h-full bg-gray-50 dark:bg-gray-800 rounded-xl p-8 relative">
                <Quote className="absolute top-4 right-4 text-blue-500/20 w-12 h-12" />
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400">{review.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}