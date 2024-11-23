// import React, { useState } from 'react';
// import { Camera, PlayCircle, X, ChevronLeft, ChevronRight, Loader } from 'lucide-react';

// const TeachingSections = ({ images, themeColors, colorTheme }) => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [imageIndex, setImageIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   // Helper function for image navigation
//   const navigateImage = (direction) => {
//     const newIndex = direction === 'next'
//       ? (imageIndex + 1) % images.length
//       : (imageIndex - 1 + images.length) % images.length;
//     setIsLoading(true);
//     setImageIndex(newIndex);
//     setSelectedImage(images[newIndex]);
//   };

//   // Modal components with enhanced features
//   const ImageModal = ({ image, onClose }) => (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div
//         className="relative max-w-4xl w-full animate-fadeIn"
//         onClick={e => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
//         >
//           <X className="w-8 h-8" />
//         </button>

//         {/* Navigation buttons */}
//         <button
//           onClick={() => navigateImage('prev')}
//           className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
//         >
//           <ChevronLeft className="w-8 h-8" />
//         </button>
//         <button
//           onClick={() => navigateImage('next')}
//           className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
//         >
//           <ChevronRight className="w-8 h-8" />
//         </button>

//         {/* Loading state */}
//         {isLoading && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
//             <Loader className="w-8 h-8 text-white animate-spin" />
//           </div>
//         )}

//         <img
//           src={image}
//           alt="Teaching moment"
//           className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-300"
//           onLoad={() => setIsLoading(false)}
//         />

//         {/* Image counter */}
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
//           {imageIndex + 1} / {images.length}
//         </div>
//       </div>
//     </div>
//   );

//   const VideoModal = ({ videoId, onClose }) => {
//     const [isVideoLoading, setIsVideoLoading] = useState(true);
//     const [isPlaying, setIsPlaying] = useState(false);

//     const handlePlayClick = () => {
//       setIsVideoLoading(true);
//       setTimeout(() => {
//         setIsVideoLoading(false);
//         setIsPlaying(true);
//       }, 1500); // Simulate video loading
//     };

//     return (
//       <div
//         className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
//         onClick={onClose}
//       >
//         <div
//           className="relative max-w-4xl w-full animate-fadeIn"
//           onClick={e => e.stopPropagation()}
//         >
//           <button
//             onClick={onClose}
//             className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
//           >
//             <X className="w-8 h-8" />
//           </button>

//           <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
//             {isVideoLoading && (
//               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <Loader className="w-8 h-8 text-white animate-spin" />
//               </div>
//             )}

//             {!isPlaying ? (
//               <div
//                 className="w-full h-full relative cursor-pointer group"
//                 onClick={handlePlayClick}
//               >
//                 {/* Video thumbnail */}
//                 <div className="absolute inset-0">
//                   <img
//                     src="/api/placeholder/640/360"
//                     alt={`Video thumbnail ${videoId}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
//                 </div>

//                 {/* Play button overlay */}
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//                   <PlayCircle className="w-16 h-16 mb-4 transform group-hover:scale-110 transition-transform" />
//                   <h3 className="text-xl font-semibold">Teaching Session {videoId}</h3>
//                   <p className="text-sm text-gray-300">Click to play</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
//                 <div className="text-center">
//                   <p className="text-lg mb-2">Video {videoId} is playing</p>
//                   <p className="text-sm text-gray-400">Video player implementation goes here</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Video info */}
//           <div className="mt-4 text-white">
//             <h3 className="text-xl font-semibold mb-2">Teaching Session {videoId}</h3>
//             <p className="text-gray-300">
//               Duration: 15:30 • Posted 3 days ago
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <>
//       {/* Teaching in Action */}
//       <section id="teaching-action" className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <Camera className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
//             <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//               Teaching in Action
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400">
//               Capturing moments of learning and growth
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {images.map((image, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
//                 onClick={() => {
//                   setImageIndex(index);
//                   setSelectedImage(image);
//                 }}
//               >
//                 <img
//                   src={image}
//                   alt={`Teaching Moment ${index + 1}`}
//                   className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
//                   <div className="absolute bottom-4 left-4 text-white">
//                     <p className="font-semibold">Teaching Session {index + 1}</p>
//                     <p className="text-sm">Interactive Learning Experience</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Highlights */}
//       <section id="video-highlights" className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <PlayCircle className={`w-12 h-12 mx-auto mb-4 ${themeColors[colorTheme].text}`} />
//             <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//               Video Highlights
//             </h2>
//             <p className="text-gray-600 dark:text-gray-400">
//               Watch my teaching methods in action
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {[1, 2].map((video) => (
//               <div
//                 key={video}
//                 className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative group">
//                   <img
//                     src="/api/placeholder/640/360"
//                     alt={`Video thumbnail ${video}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity">
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <PlayCircle className={`w-12 h-12 text-white transform group-hover:scale-110 transition-transform`} />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
//                     Teaching Session {video}
//                   </h3>
//                   <p className="text-gray-600 dark:text-gray-400">
//                     An in-depth look at interactive teaching methods and student engagement.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modals */}
//       {selectedImage && (
//         <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
//       )}
//       {selectedVideo && (
//         <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
//       )}
//     </>
//   );
// };

// export default TeachingSections;
