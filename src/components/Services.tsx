import React from 'react';
import { Smartphone, Palette, Gauge, Shield, Cloud, Code2, Globe, Atom } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with Flutter and React Native for iOS and Android, ensuring scalability and performance.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-focused designs that combine creativity and functionality for exceptional digital experiences.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Optimizing apps for speed, efficiency, and minimal resource consumption to deliver seamless user interactions.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "App Security",
    description: "Implementing cutting-edge security practices to safeguard user data and ensure compliance with industry standards.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Integrating apps with powerful cloud services like Firebase, AWS, and Azure for a reliable backend infrastructure.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Code2,
    title: "Code Quality",
    description: "Maintaining clean, efficient, and maintainable codebases using modern best practices and robust design patterns.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Crafting responsive and dynamic web applications with React, ensuring a strong online presence for businesses.",
    color: "from-teal-500 to-blue-500"
  },
  {
    icon: Atom,
    title: "Artificial Intelligence",
    description: "Integrating AI capabilities into systems, offering intelligent automation, analytics, and predictive insights.",
    color: "from-indigo-400 to-pink-500"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive development solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div
                    className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-r ${service.color} p-3 transform group-hover:rotate-6 transition-transform`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-display">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
