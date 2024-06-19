import React from 'react'
import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Cards from './Cards'

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
  
    const movies = [
      {
        id: 1,
        poster: "https://th-i.thgim.com/public/entertainment/movies/bd86fm/article67920016.ece/alternates/FREE_1200/Manjummel%20Boys%20100%20crores.jpg",
        title:"Manjummel Boys",
        description:"Manjummel Boys is a 2024 Malayalam survival thriller film about a group of friends from a small town near Kochi, India who go on vacation to Kodaikanal",
        director:"Chidambaram S. Poduval",
        rating:"4.9"

      },
      {
        id: 2,
        poster: "https://images.indianexpress.com/2024/01/Poster-of-Guruvayoor-Ambala-Nadayil.jpg?w=640",
        title:"Guruvayoor Ambalanadayil",
        description:"Guruvayoor Ambalanadayil is a 2024 Malayalam comedy-drama film directed by Vipin Das and written by Deepu Pradeep",
        director:"Vipin Das",
        rating:"3.4"

      },
      {
        id: 3,
        poster: "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2024/2/24/turbo.jpg.transform/845x440/image.jpg",
        title:"Turbo",
        description:"The plot. Turbo is an action thriller written by Midhun Manuel Thomas and directed by Vysakh.",
        director:"Vysakh",
        rating:"4.8"
      },
      {
        id: 4,
        poster: "https://img.onmanorama.com/content/dam/mm/en/entertainment/entertainment-news/images/2024/5/9/thalavan-one.jpg",
        title:"Thalavan",
        description:"Thalavan is a 2024 Malayalam investigative thriller film that begins with an ego clash between two police officers, Jayashankar (Biju Menon) and Karthik (Asif Ali), who work at a local police station in the fictional Cheppanamthotta",
        director:"Jis Joy",
        rating:"3.9",

      },
      {
        id: 5,
        poster: "https://images.moneycontrol.com/static-mcnews/2024/04/aavesham.jpg?impolicy=website&width=1600&height=900",
        title:"Aavesham",
        description:"Aavesham (2024) is a Malayalam-language film about three college students from Kerala who move to Bangalore to study aeronautical engineering",
        director:"Jithu Madhavan",
        rating:"4.9"
      }
    ]

      
    setMovies(movies);
  }, []);

  // const movie = {
  //   title: 'Drishyam',
  //   director: 'Jeethu Joseph',
  //   rating: 4.8,
  //   poster: 'https://via.placeholder.com/400x600?text=Drishyam',
  //   genres: ['Crime', 'Drama', 'Thriller'],
  //   releaseDate: '2013-12-19',
  // };
  return (
<>
<section>
<div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore your Movies!</h1>
    <Carousel items={movies} />
  </div>

</section>
<section>
<div className="min-h-screen bg-gray-100 flex flex-row items-center mt-0 p-6">
<Cards movies ={movies} />
</div>

  
</section>


</>
  )
}








export default Home


