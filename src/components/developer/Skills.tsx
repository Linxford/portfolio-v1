import React from "react";
import {
  Smartphone,
  Layout,
  Database,
  Cloud,
  Code,
  Cpu,
  Layers,
  Palette,
  Zap,
  GitBranch,
  TestTube,
  Gauge,
  Atom,
} from "lucide-react";

const skills = [
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "React Native", "Dart", "iOS", "Android"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "UI/UX Design",
    icon: Layout,
    items: ["Material Design", "Cupertino", "Custom Widgets", "Animations"],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Backend Integration",
    icon: Database,
    items: ["REST APIs", "GraphQL", "WebSockets", "Firebase"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Cloud Services",
    icon: Cloud,
    items: ["Firebase", "AWS", "Google Cloud", "Azure"],
    color: "from-orange-500 to-yellow-500",
  },
  {
    category: "State Management",
    icon: Code,
    items: ["BLoC", "Provider", "GetX", "Riverpod"],
    color: "from-red-500 to-pink-500",
  },
  {
    category: "AI & Machine Learning",
    icon: Atom,
    items: ["Natural Language Processing", "Image Recognition", "Chatbots", "Predictive Analytics"],
    color: "from-indigo-400 to-teal-500",
  },
  {
    category: "Development Tools",
    icon: Cpu,
    items: ["Git", "CI/CD", "Unit Testing", "Performance Analysis"],
    color: "from-indigo-500 to-purple-500",
  },
];

const tools = [
  { name: "Clean Architecture", icon: Layers },
  { name: "UI/UX Design", icon: Palette },
  { name: "Performance Optimization", icon: Gauge },
  { name: "Version Control", icon: GitBranch },
  { name: "Unit Testing", icon: TestTube },
  { name: "State Management", icon: Zap },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A diverse skill set encompassing modern frameworks, robust tools,
            and the ability to create scalable, innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.color}`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold font-display">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <Icon className="text-blue-500 mb-2" size={28} />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
