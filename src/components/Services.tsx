import React from 'react';
import {
  Smartphone,
  Palette,
  Gauge,
  Shield,
  Cloud,
  Code2,
  Globe,
  Atom,
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building scalable, high-performance apps with Flutter and React Native for both iOS and Android platforms.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting stunning and user-centric interfaces that combine aesthetics with exceptional usability.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Ensuring smooth and efficient app experiences with advanced optimization techniques.",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Shield,
    title: "App Security",
    description:
      "Implementing top-notch security measures to safeguard applications and protect user data.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connecting applications with reliable cloud services like Firebase, AWS, and Azure.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Code Quality",
    description:
      "Writing clean, maintainable code using industry-standard best practices and modern architectures.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Designing responsive, dynamic web applications with React for a robust digital presence.",
    color: "from-teal-500 to-blue-500",
  },
  {
    icon: Atom,
    title: "Artificial Intelligence",
    description:
      "Leveraging AI to enhance system intelligence with predictive analytics, automation, and more.",
    color: "from-indigo-400 to-pink-500",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A range of specialized solutions to help you build, scale, and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group h-full bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 mb-6 mx-auto rounded-lg bg-gradient-to-r ${service.color} p-3 transform group-hover:rotate-6 transition-transform`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 font-display text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
