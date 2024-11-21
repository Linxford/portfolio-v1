import React from 'react';
import { Smartphone, Palette, Gauge, Shield, Cloud, Code2, Globe, Atom } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built with Flutter for iOS and Android.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Fast, efficient apps optimized for smooth performance and minimal resource usage.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: Shield,
    title: "App Security",
    description: "Implementing robust security measures to protect user data and privacy.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless integration with cloud services and backend systems.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Code2,
    title: "Code Quality",
    description: "Clean, maintainable code following best practices and design patterns.",
    color: "from-indigo-500 to-purple-500"
  },
{
    icon: Globe,
    title: "Premium Web Development",
    description: "Clean, maintainable code following best practices and design patterns.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Atom,
    title: "Artificial Intelligence",
    description: "Integrating AI in all forms of system, embedding and the rest...",
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
            Comprehensive mobile development solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="h-full bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`w-14 h-14 mb-6 rounded-lg bg-gradient-to-r ${service.color} p-3 transform group-hover:rotate-6 transition-transform`}>
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
