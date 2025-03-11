
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Header from "../../components/Header";
// import { Button, Chip } from "@mui/material";
// import { motion } from "framer-motion";
// import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

// // SkeletonCard Component
// function SkeletonCard() {
//   return (
//     <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
//       {/* Image Skeleton */}
//       <Skeleton className="h-48 w-full rounded-none" />

//       {/* Content Skeleton */}
//       <div className="p-4">
//         {/* Category and Type Skeleton */}
//         <div className="flex justify-between items-start mb-2">
//           <Skeleton className="h-6 w-20 rounded-full" /> {/* Category */}
//           <Skeleton className="h-6 w-16 rounded-full" /> {/* Type */}
//         </div>

//         {/* Title Skeleton */}
//         <Skeleton className="h-6 w-3/4 mb-2" />

//         {/* Date and Time Skeleton */}
//         <Skeleton className="h-4 w-1/2 mb-2" />

//         {/* Location Skeleton */}
//         <Skeleton className="h-4 w-3/4 mb-4" />

//         {/* Button Skeleton */}
//         <Skeleton className="h-10 w-full rounded-lg" />
//       </div>
//     </div>
//   );
// }

// const Events = () => {
//   const events = useSelector((state) => state.events.events);
//   const [filter, setFilter] = useState("All");
//   const [isLoading, setIsLoading] = useState(true); // Loading state

//   // Simulate loading delay
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // 2 seconds delay
//     return () => clearTimeout(timer);
//   }, []);

//   // Function to filter events based on the selected filter
//   const getFilteredEvents = () => {
//     const today = new Date();
//     const tomorrow = new Date();
//     tomorrow.setDate(today.getDate() + 1);

//     switch (filter) {
//       case "Today":
//         return events.filter((event) => {
//           const eventDate = new Date(event.date);
//           return (
//             eventDate.getDate() === today.getDate() &&
//             eventDate.getMonth() === today.getMonth() &&
//             eventDate.getFullYear() === today.getFullYear()
//           );
//         });

//       case "Tomorrow":
//         return events.filter((event) => {
//           const eventDate = new Date(event.date);
//           return (
//             eventDate.getDate() === tomorrow.getDate() &&
//             eventDate.getMonth() === tomorrow.getMonth() &&
//             eventDate.getFullYear() === tomorrow.getFullYear()
//           );
//         });

//       case "This Week":
//         const startOfWeek = new Date(today);
//         startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
//         const endOfWeek = new Date(today);
//         endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // End of the week (Saturday)

//         return events.filter((event) => {
//           const eventDate = new Date(event.date);
//           return eventDate >= startOfWeek && eventDate <= endOfWeek;
//         });

//       case "Next Week":
//         const startOfNextWeek = new Date(today);
//         startOfNextWeek.setDate(today.getDate() + (7 - today.getDay())); // Start of next week (Sunday)
//         const endOfNextWeek = new Date(startOfNextWeek);
//         endOfNextWeek.setDate(startOfNextWeek.getDate() + 6); // End of next week (Saturday)

//         return events.filter((event) => {
//           const eventDate = new Date(event.date);
//           return eventDate >= startOfNextWeek && eventDate <= endOfNextWeek;
//         });

//       case "This Month":
//         const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month
//         const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // End of the month

//         return events.filter((event) => {
//           const eventDate = new Date(event.date);
//           return eventDate >= startOfMonth && eventDate <= endOfMonth;
//         });

//       case "All":
//       default:
//         return events;
//     }
//   };

//   const filteredEvents = getFilteredEvents();

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="min-h-screen bg-gray-900"
//     >
//       {/* Navbar */}
//       <Header />

//       {/* Main Content */}
//       <div className="container mx-auto px-6 pt-24">
//         <h1 className="text-3xl font-bold text-gray-200 mb-6">
//           We Helped Communities Connect & Flourish
//         </h1>

//         {/* Filter Buttons */}
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="flex space-x-4 mb-6"
//         >
//           {["All", "Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
//             (period) => (
//               <Button
//                 key={period}
//                 variant={filter === period ? "contained" : "outlined"}
//                 color="primary"
//                 onClick={() => setFilter(period)}
//                 className="rounded-full"
//                 component={motion.div}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {period}
//               </Button>
//             )
//           )}
//         </motion.div>

//         {/* Event Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {isLoading
//             ? // Show skeleton cards while loading
//               Array.from({ length: 4 }).map((_, index) => (
//                 <SkeletonCard key={index} />
//               ))
//             : // Show actual event cards after loading
//               filteredEvents.map((event) => (
//                 <motion.div
//                   key={event.id}
//                   initial={{ opacity: 0, y: 50 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1, duration: 0.5 }}
//                   whileHover={{ scale: 1.05 }}
//                   className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
//                 >
//                   {/* Event Image */}
//                   <motion.img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-48 object-cover"
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   {/* Event Details */}
//                   <div className="p-4">
//                     <div className="flex justify-between items-start mb-2">
//                       <Chip
//                         label={event.category}
//                         color="primary"
//                         className="mb-2"
//                       />
//                       <Chip
//                         label={event.type}
//                         color={event.type === "Free" ? "success" : "warning"}
//                         className="bg-green-100 text-green-800"
//                       />
//                     </div>

//                     {/* Event Title */}
//                     <h2 className="text-xl font-bold text-gray-200 mb-2">
//                       {event.title}
//                     </h2>

//                     {/* Event Date and Time */}
//                     <p className="text-gray-400 mb-2">
//                       {event.date} | {event.time}
//                     </p>

//                     {/* Event Location */}
//                     <p className="text-gray-400 mb-4">Location: {event.location}</p>

//                     {/* View Details Button */}
//                     <Link
//                       to={`/event/${event.id}`}
//                       className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700"
//                     >
//                       View Details
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Events;




























import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

// SkeletonCard Component
function SkeletonCard() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="h-48 w-full rounded-none" />

      {/* Content Skeleton */}
      <div className="p-4">
        {/* Category and Type Skeleton */}
        <div className="flex justify-between items-start mb-2">
          <Skeleton className="h-6 w-20 rounded-full" /> {/* Category */}
          <Skeleton className="h-6 w-16 rounded-full" /> {/* Type */}
        </div>

        {/* Title Skeleton */}
        <Skeleton className="h-6 w-3/4 mb-2" />

        {/* Date and Time Skeleton */}
        <Skeleton className="h-4 w-1/2 mb-2" />

        {/* Location Skeleton */}
        <Skeleton className="h-4 w-3/4 mb-4" />

        {/* Button Skeleton */}
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </div>
  );
}

const Events = () => {
  const events = useSelector((state) => state.events.events);
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  // Function to filter events based on the selected filter
  const getFilteredEvents = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    switch (filter) {
      case "Today":
        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.getDate() === today.getDate() &&
            eventDate.getMonth() === today.getMonth() &&
            eventDate.getFullYear() === today.getFullYear()
          );
        });

      case "Tomorrow":
        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.getDate() === tomorrow.getDate() &&
            eventDate.getMonth() === tomorrow.getMonth() &&
            eventDate.getFullYear() === tomorrow.getFullYear()
          );
        });

      case "This Week":
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
        const endOfWeek = new Date(today);
        endOfWeek.setDate(today.getDate() + (6 - today.getDay())); // End of the week (Saturday)

        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= startOfWeek && eventDate <= endOfWeek;
        });

      case "Next Week":
        const startOfNextWeek = new Date(today);
        startOfNextWeek.setDate(today.getDate() + (7 - today.getDay())); // Start of next week (Sunday)
        const endOfNextWeek = new Date(startOfNextWeek);
        endOfNextWeek.setDate(startOfNextWeek.getDate() + 6); // End of next week (Saturday)

        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= startOfNextWeek && eventDate <= endOfNextWeek;
        });

      case "This Month":
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0); // End of the month

        return events.filter((event) => {
          const eventDate = new Date(event.date);
          return eventDate >= startOfMonth && eventDate <= endOfMonth;
        });

      case "All":
      default:
        return events;
    }
  };

  const filteredEvents = getFilteredEvents();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Navbar */}
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 pt-24">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-200 mb-6">
          We Helped Communities Connect & Flourish
        </h1>

        {/* Filter Buttons (Responsive) */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {["All", "Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
            (period) => (
              <Button
                key={period}
                variant={filter === period ? "contained" : "outlined"}
                color="primary"
                onClick={() => setFilter(period)}
                className="text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full"
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {period}
              </Button>
            )
          )}
        </motion.div>

        {/* Event Cards Grid (Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {isLoading
            ? // Show skeleton cards while loading
              Array.from({ length: 4 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : // Show actual event cards after loading
              filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  {/* Event Image */}
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Event Details */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Chip
                        label={event.category}
                        color="primary"
                        className="mb-2"
                      />
                      <Chip
                        label={event.type}
                        color={event.type === "Free" ? "success" : "warning"}
                        className="bg-green-100 text-green-800"
                      />
                    </div>

                    {/* Event Title */}
                    <h2 className="text-xl font-bold text-gray-200 mb-2">
                      {event.title}
                    </h2>

                    {/* Event Date and Time */}
                    <p className="text-gray-400 mb-2">
                      {event.date} | {event.time}
                    </p>

                    {/* Event Location */}
                    <p className="text-gray-400 mb-4">Location: {event.location}</p>

                    {/* View Details Button */}
                    <Link
                      to={`/event/${event.id}`}
                      className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Events;