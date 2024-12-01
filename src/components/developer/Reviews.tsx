import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
    {
        name: "Sarah Johnson",
        role: "CEO at TechStart",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        content: "Working with this developer was an absolute pleasure. The Flutter app exceeded our expectations in terms of both functionality and design.",
        rating: 5,
        //  website: "https://tradersodd.com"
    },
    {
        name: "Michael Chen",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        content: "Exceptional attention to detail and great communication throughout the project. Delivered a polished app right on schedule.",
        rating: 5,
        // website: "https://tradersodd.com"
    },
    {
        name: "Emily Rodriguez",
        role: "Startup Founder",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        content: "The expertise in Flutter development is evident in the smooth performance and beautiful UI of our application.",
        rating: 5,
        // website: "https://tradersodd.com"
    },
    {
        name: "Isaac Donkor (CashBill)",
        role: "CEO at TradersOdd",
        image: "https://ugc.production.linktr.ee/01dffcae-9117-49da-8321-a09a4b50d3f5_bvnbn.jpeg?io=true&size=avatar-v3_0",
        content: "The developer's attention to detail and commitment to quality are evident in every aspect of the project.",
        rating: 5,
        website: "https://linktr.ee/cashbill"
    },
];

export default function Reviews() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Client Reviews</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it—here's what clients have to say about working with me.
                    </p>
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-8"
                        >
                            {/* Quote Icon */}
                            <Quote className="absolute top-4 right-4 text-blue-500/10 w-12 h-12" />

                            {/* Reviewer Info */}
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={review.image}
                                    alt={`Portrait of ${review.name}`}
                                    className="w-14 h-14 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                                        {review.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{review.role} 👉
                                        {review.website && (
                                            <span className="text-sm text-gray-600 dark:text-gray-400"><a href={review.website} target="_blank" rel="noopener noreferrer">Visit Website</a></span>
                                        )} </p>
                                </div>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Review Content */}
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
                                {review.content}
                            </p>

                            {/* Highlight on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
