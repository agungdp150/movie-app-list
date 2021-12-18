import React, { useEffect, useState } from 'react'
import PlaceholderImage from '../../../assets/placeholder.jpg'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export interface DetailMovieProps {}


const DetailMovie: React.FC<DetailMovieProps> = (props) => {
  const {id} = useParams()
  const [detailMovie, setDetailMovie] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    getDetailMovie()          
  }, [id])

  const getDetailMovie = async () => {
    setLoading(true)
    try {
      const result = await axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=419794c2`)
      if(result.data) {
        setDetailMovie(result.data)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  } 

  if(loading) {
    return (
      <div className='w-100 mt-2'>
        <div className="loading loading-lg"></div>    
      </div>
    )
  }

  return (    
    <div className='movie-detail__container'>
      <div className='movie-detail__img-section'>
      <img src={detailMovie.Poster === 'N/A' ? PlaceholderImage : detailMovie.Poster } alt={detailMovie.Title} className='movie-detail__img-poster' />
      <div>
        <div>{detailMovie.Runtime}</div>
        <div>{detailMovie.Genre}</div>
      </div>
      </div>
      <div className='detail__info'>
        <div>
          <h2>{detailMovie.Title}</h2>
        </div>                    
        <div className='divider'/>          
        <div>
          Relased: {detailMovie.Released ?? '-'}
        </div>                    
        <div className='divider'/>
        <div>
          Director: {detailMovie.Director ?? '-'}
        </div>
        <div className='divider'/>
        <div>
          Writer: {detailMovie.Writer ?? '-'}
        </div>
        <div className='divider'/>
        <div>
          Actors: {detailMovie.Actors ?? '-'}
        </div>
        <div className='divider'/>
        <div>
          Imdb Rating: {detailMovie.ImdbRating ?? '-'}
        </div>          
        <div className='divider'/>
        <div>
          Imdb Votes: {detailMovie.ImdbVotes ?? '-'}
        </div>
        <div className='divider'/>
        <div>
          {detailMovie.Plot ?? '-'}
        </div>        
      </div>      
    </div>
  )
}

export default DetailMovie
