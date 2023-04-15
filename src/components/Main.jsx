import React, { useEffect, useState } from 'react'
import { FaPlay, FaStarHalf, FaStar, } from 'react-icons/fa'
import requests from '../Requests'
import axios from 'axios'

function Main() {

    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        });
    }, [])

    console.log(movie)

    const truncateString = (str, num) => {
        if(str?.length > 0) {
            return str.slice(0, num) + '...'
        }
        else {
            return str;
        }
    }

    const setStarRate = (rate) => {
        const starsCount = rate / 2

        var res = '';

        for (let index = 0; index < Math.floor(starsCount); index++) {
            res += <FaStar size={10} />
        }

        if(Math.floor(starsCount) < starsCount) {
            res += <FaStarHalf size={10}/>
        }
    }

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={ `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` } alt={ movie?.title } />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>
                   {movie?.title} 
                </h1>
            <div className='my-4 flex flex-row'>
                <button className='border bg-white text-black border-gray-300 m-4 px-5 flex flex-row items-center justify-around h-10'>
                    <FaPlay className='mr-6' size={20} />
                    <p>Play Now</p>
                </button>
                <button className='border text-white border-gray-300 py-2 px-5 m-4 h-10'>Watch Later</button>
            </div>
            <p className='text-gray-400 test-sm'>
                Release: {movie?.release_date}
            </p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
                { truncateString(movie?.overview, 150) }
            </p>
            </div>
        </div>
    </div>
  )
}

export default Main