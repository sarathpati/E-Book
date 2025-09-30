

import React, { useState } from 'react';
import Header from './Header';
import { data } from './Data';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState(data.books);

  function handleSearchResults(results) {
    setFilteredBooks(results);
  }

  return (
    <>
      <Header onSearch={handleSearchResults} />
      <div className='home'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <div className="books" key={item.id}>
              <div className="body" onClick={() => navigate(`/singlebook/${item.id}`)}>
                <img src={item.coverImage} alt="" />
                <h3>Title: {item.title}</h3>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: '20px' }}>No books found</p>
        )}
      </div>
    </>
  );
};

export default Home;



// import { useState } from "react";
// import { Search, Star, BookOpen, ArrowRight, Moon, Sun } from "lucide-react";
// import Slider from "react-slick"; // install: npm install react-slick slick-carousel
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function HomePage() {
//   const [search, setSearch] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   const featuredBooks = [
//     { id: 1, title: "Atomic Habits", author: "James Clear", rating: 4.8 },
//     { id: 2, title: "The Alchemist", author: "Paulo Coelho", rating: 4.7 },
//     { id: 3, title: "Deep Work", author: "Cal Newport", rating: 4.6 },
//   ];

//   const trendingBooks = [
//     "The Psychology of Money",
//     "Ikigai",
//     "Rich Dad Poor Dad",
//     "Think Like a Monk",
//     "Can't Hurt Me",
//   ];

//   const suggestions = featuredBooks
//     .filter((book) =>
//       book.title.toLowerCase().includes(search.toLowerCase())
//     )
//     .map((book) => book.title);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//     ],
//   };

//   return (
//     <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen transition`}>
//       {/* Navbar */}
//       <header className="flex justify-between items-center px-6 py-4 shadow bg-white dark:bg-gray-800">
//         <h1 className="text-2xl font-bold text-indigo-600">📚 ReadNest</h1>
//         <nav className="flex gap-6 items-center">
//           <a href="#featured" className="hover:text-indigo-600">Featured</a>
//           <a href="#trending" className="hover:text-indigo-600">Trending</a>
//           <a href="#about" className="hover:text-indigo-600">About</a>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//           >
//             {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//           </button>
//           <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
//             Login
//           </button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="flex flex-col items-center text-center py-16 px-6">
//         <h2 className="text-4xl font-extrabold sm:text-5xl">
//           Discover & Read Your Favorite Books
//         </h2>
//         <p className="mt-4 text-lg max-w-2xl">
//           Browse, buy, and rent ebooks with ReadNest. Track your reading and explore trending titles.
//         </p>

//         {/* Search Bar */}
//         <div className="relative mt-6 w-full max-w-md">
//           <div className="flex bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
//             <input
//               type="text"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               placeholder="Search books..."
//               className="flex-1 px-4 py-2 outline-none dark:bg-gray-700 dark:text-white"
//             />
//             <button className="px-4 bg-indigo-600 text-white hover:bg-indigo-700">
//               <Search size={20} />
//             </button>
//           </div>

//           {/* Auto-suggestions */}
//           {search && (
//             <ul className="absolute w-full mt-2 bg-white dark:bg-gray-800 border rounded-lg shadow z-10">
//               {suggestions.length > 0 ? (
//                 suggestions.map((s, idx) => (
//                   <li
//                     key={idx}
//                     className="px-4 py-2 hover:bg-indigo-100 dark:hover:bg-gray-600 cursor-pointer"
//                     onClick={() => setSearch(s)}
//                   >
//                     {s}
//                   </li>
//                 ))
//               ) : (
//                 <li className="px-4 py-2 text-gray-500">No results</li>
//               )}
//             </ul>
//           )}
//         </div>
//       </section>

//       {/* Featured Books */}
//       <section id="featured" className="px-6 py-12">
//         <h3 className="text-2xl font-bold mb-6">⭐ Featured Books</h3>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {featuredBooks.map((book) => (
//             <div
//               key={book.id}
//               className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
//             >
//               <BookOpen className="text-indigo-600 mb-2" size={32} />
//               <h4 className="text-lg font-semibold">{book.title}</h4>
//               <p className="text-sm opacity-80">by {book.author}</p>
//               <div className="flex items-center mt-2 text-yellow-500">
//                 <Star size={16} className="mr-1" /> {book.rating}
//               </div>
//               <button className="mt-4 px-4 py-2 w-full bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2">
//                 Read Now <ArrowRight size={16} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Trending Carousel */}
//       <section id="trending" className="px-6 py-12 bg-indigo-50 dark:bg-gray-700">
//         <h3 className="text-2xl font-bold mb-6">🔥 Trending Books</h3>
//         <Slider {...sliderSettings}>
//           {trendingBooks.map((title, index) => (
//             <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
//               <h4 className="text-lg font-semibold">{title}</h4>
//               <p className="text-sm opacity-70 mt-2">Popular among readers this week</p>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* Footer */}
//       <footer className="mt-12 py-6 text-center bg-indigo-600 text-white">
//         <p>© {new Date().getFullYear()} ReadNest. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }
