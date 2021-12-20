import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieListSection } from '../../ui-components'
import { MovieItems } from '../../ui-components/MovieListSection'
import { useSelector } from 'react-redux'
import { currentPageSelector, searchMovieValueSelector } from '../../../redux/slices/movieLists.slice'

export interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = (props) => {
  const [movieItems, setMovieItems] = useState<MovieItems[]>()
  const currentPage = useSelector(currentPageSelector)
  const searchValue = useSelector(searchMovieValueSelector)
  const [loading, setLoading] = useState<boolean>(false)
  
  useEffect(() => {
    getAllMovie()
  }, [currentPage, searchValue])


  const getAllMovie = async () => {
    setLoading(true)
    try {
      const result =  await axios.get(`https://www.omdbapi.com/?s=${searchValue ? searchValue : 'inception'}&apikey=419794c2&page=${currentPage ?? '1'}`)      
      if (result.data) {                    
        setLoading(false)
        setMovieItems(result.data.Search)        
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
    <>
      <div className='content'>        
        <MovieListSection movies={movieItems ?? []}/>
      </div>
    </>
  )
}

export default Homepage
