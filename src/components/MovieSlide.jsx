import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const MovieSlide = ({movies , type}) => {
    // console.log('Home에서 넘어온값', movies.results)
    
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div>
            <Carousel responsive={responsive}>
                {movies.results.map((item)=>(
                    <MovieCard movie={item} type={type} key={item.id}></MovieCard>
                ))}
            </Carousel>
            
        </div>
    )
}

export default MovieSlide