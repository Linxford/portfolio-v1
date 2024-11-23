import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Mail, Linkedin, Github, ExternalLink, BookOpen, Award, Users, Target, MessageSquare, Camera, PlayCircle, Star, Calendar, Clock, ArrowUp, Lightbulb, Book, UserCheck, Trophy } from 'lucide-react';

const TeachingPortfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  // Color theme state
  type ThemeOption = 'emerald' | 'blue' | 'purple' | 'rose';
type ThemeColors = Record<ThemeOption, {
  primary: string;
  button: string;
  text: string;
  border: string;
}>;

const [colorTheme, setColorTheme] = useState<ThemeOption>('emerald');

const themeColors: ThemeColors = {
  emerald: {
    primary: 'from-emerald-600 to-teal-600',
    button: 'bg-emerald-600 hover:bg-emerald-700',
    text: 'text-emerald-600',
    border: 'border-emerald-600',
  },
  blue: {
    primary: 'from-blue-600 to-indigo-600',
    button: 'bg-blue-600 hover:bg-blue-700',
    text: 'text-blue-600',
    border: 'border-blue-600',
  },
  purple: {
    primary: 'from-purple-600 to-pink-600',
    button: 'bg-purple-600 hover:bg-purple-700',
    text: 'text-purple-600',
    border: 'border-purple-600',
  },
  rose: {
    primary: 'from-rose-600 to-pink-600',
    button: 'bg-rose-600 hover:bg-rose-700',
    text: 'text-rose-600',
    border: 'border-rose-600',
  },
};

  // Stats data
  const stats = [
    { icon: Users, label: 'Students Taught', value: '500+' },
    { icon: Book, label: 'Courses Developed', value: '12' },
    { icon: Trophy, label: 'Awards Received', value: '5' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' },
  ];

  // Timeline data
  const timeline = [
    {
      year: '2024',
      title: 'Senior Education Specialist',
      description: 'Led professional development initiatives and mentored new teachers.',
    },
    {
      year: '2023',
      title: 'Curriculum Developer',
      description: 'Designed innovative learning programs and assessment methods.',
    },
    {
      year: '2022',
      title: 'Teaching Excellence Award',
      description: 'Recognized for outstanding contribution to student success.',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "An exceptional educator who truly understands how to engage students and make learning meaningful.",
      author: "Dr. Sarah Johnson",
      role: "Education Director",
      rating: 5,
    },
    {
      text: "Innovative teaching methods that have transformed our department's approach to education.",
      author: "Prof. Michael Chen",
      role: "Department Head",
      rating: 5,
    },
    {
      text: "Creates an inclusive and engaging learning environment where every student can thrive.",
      author: "Emily Rodriguez",
      role: "Fellow Educator",
      rating: 5,
    },
  ];

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links with icons
  const navigationLinks = [
    { id: 'home', label: 'Home', icon: BookOpen },
    { id: 'teaching-action', label: 'Teaching in Action', icon: Camera },
    { id: 'video-highlights', label: 'Video Highlights', icon: PlayCircle },
    { id: 'teaching-philosophy', label: 'Philosophy', icon: Lightbulb },
    { id: 'timeline', label: 'Journey', icon: Clock },
    { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];
  const images = [
    'src/assets/linxford_prof.png',
    'src/assets/linxford_prof.png',
    'src/assets/linxford_prof.png',
    'src/assets/linxford_prof.png',
  ];
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <BookOpen className={`h-8 w-8 ${themeColors[colorTheme].text}`} />
              <span className="text-xl font-bold text-gray-800 dark:text-white">EduPortfolio</span>
            </div>

            {/* Theme Selector */}
            <div className="hidden md:flex space-x-2">
              {Object.keys(themeColors).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setColorTheme(theme as ThemeOption)}
                  className={`w-6 h-6 rounded-full ${
                    theme === 'emerald' ? 'bg-emerald-600' :
                    theme === 'blue' ? 'bg-blue-600' :
                    theme === 'purple' ? 'bg-purple-600' :
                    'bg-rose-600'
                  } ${colorTheme === theme ? 'ring-2 ring-offset-2' : ''}`}
                />
              ))}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center space-x-1 text-gray-600 hover:${themeColors[colorTheme].text} dark:text-gray-300 transition-colors`}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navigationLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(link.id);
                  }}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section id="home" className={`bg-gradient-to-r ${themeColors[colorTheme].primary} text-white py-20`}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Teaching Portfolio</h1>
                <p className="text-xl text-gray-100 mb-8">
                  Inspiring minds and shaping futures through innovative education
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#teaching-philosophy"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <img
                    src="src/assets/linxford_prof.png"
                    alt="Teacher Profile"
                    className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                    <Award className={`w-8 h-8 ${themeColors[colorTheme].text}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg bg-gray-50 dark:bg-gray-700 transform hover:scale-105 transition-transform duration-300"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                  <div className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <div className="container mx-auto px-4"> */}
          {/* Teaching in Action */}
          <section id="teaching-action" className="py-16">
            <div className="text-center mb-12">
              <Camera className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Teaching in Action</h2>
              <p className="text-gray-600 dark:text-gray-400">Capturing moments of learning and growth</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image}
                    alt={`Teaching Moment ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Teaching Session {index + 1}</p>
                      <p className="text-sm">Interactive Learning Experience</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Video Highlights */}
          <section id="video-highlights" className="py-16">
            <div className="text-center mb-12">
              <PlayCircle className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Video Highlights</h2>
              <p className="text-gray-600 dark:text-gray-400">Watch my teaching methods in action</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((video) => (
                <div key={video} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 dark:bg-gray-700">
                    {/* Placeholder for video */}
                    <div className="w-full h-full flex items-center justify-center">
                      <PlayCircle className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Teaching Session {video}</h3>
                    <p className="text-gray-600 dark:text-gray-400">An in-depth look at interactive teaching methods and student engagement.</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Teaching Philosophy */}
          <section id="teaching-philosophy" className="py-16">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <BookOpen className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Teaching Philosophy</h2>
                <p className="text-gray-600 dark:text-gray-400">My approach to education and learning</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  My teaching philosophy centers on creating an engaging and inclusive environment where every student feels empowered to learn. I believe in the power of curiosity-driven education and aim to inspire lifelong learning in my students.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Through interactive teaching methods and personalized attention, I strive to create meaningful connections between theoretical concepts and real-world applications, making learning both relevant and enjoyable for all students.
                </p>
              </div>
            </div>
          </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Clock className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Professional Journey</h2>
              <p className="text-gray-600 dark:text-gray-400">My path in education</p>
            </div>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-0 h-full w-px bg-gray-300 dark:bg-gray-700"></div>
                  <div className={`absolute left-0 top-0 w-2 h-2 rounded-full -translate-x-1/2 ${themeColors[colorTheme].button}`}></div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform duration-300">
                    <div className={`text-sm font-semibold mb-2 ${themeColors[colorTheme].text}`}>{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section id="testimonials" className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <MessageSquare className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Testimonials</h2>
              <p className="text-gray-600 dark:text-gray-400">What colleagues and students say</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${selectedTestimonial * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-lg">
                          <div className="flex items-center mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.text}"</p>
                          <div>
                            <div className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</div>
                            <div className="text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center mt-6 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setSelectedTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        selectedTestimonial === index
                          ? themeColors[colorTheme].button
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Mail className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Let's Connect</h2>
                <p className="text-gray-600 dark:text-gray-400">Reach out to discuss educational opportunities</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                      <textarea
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 dark:text-white h-32"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`w-full ${themeColors[colorTheme].button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                        <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:underline">
                          contact@example.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <Linkedin className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:underline">
                          View Profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <div className="flex items-center space-x-4">
                      <Calendar className={`w-6 h-6 ${themeColors[colorTheme].text}`} />
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">Office Hours</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Footer */}
        <footer className="bg-gray-800 text-white pt-16 pb-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* About Section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className={`h-8 w-8 ${themeColors[colorTheme].text}`} />
                  <span className="text-xl font-bold">EduPortfolio</span>
                </div>
                <p className="text-gray-400">
                  Dedicated to excellence in education and inspiring the next generation of learners.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {navigationLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Teaching Materials</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Research Papers</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Student Resources</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">Publications</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
                <p className="text-gray-400 mb-4">Subscribe to my newsletter for educational insights and updates.</p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50"
                  />
                  <button
                    className={`px-4 py-2 rounded-lg ${themeColors[colorTheme].button} text-white`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-700 pt-8 mt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 mb-4 md:mb-0">
                  &copy; {new Date().getFullYear()} Teaching Portfolio. All rights reserved.
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg ${themeColors[colorTheme].button} text-white transition-all duration-300 hover:scale-110`}
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        )}
      </main>
    </div>
  );
};

export default TeachingPortfolio;
