import React from 'react'

const Banner = ({ movie }) => {
    // console.log('Home=> Banner 영화', movie)
    return (
        <div className='banner-img'
            style={{
                backgroundImage : 'url('+
                `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path}`
                +')'
            }}
        >
            {/* 배너이미지를 포스터로 띄우고, 그 위에 제목 , overview */}

            <div className='banner-item'>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Banner