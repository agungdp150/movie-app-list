import React from 'react'
import Card  from './Card'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, createSearchParams } from 'react-router-dom'
import { actions, currentPageSelector } from '../../redux/slices/movieLists.slice'

export interface MovieItems {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface MovieListSectionProps {
  movies: MovieItems[]
}

const MovieListSection: React.FC<MovieListSectionProps> = (props) => {
  const {movies} = props 
  const navigate = useNavigate()  
  const currentPage = useSelector(currentPageSelector)
  const dispatch = useDispatch()


  const handleOpenDetail = (id: string) => {
    navigate(`/details/${id}`)
  }

  const handlePrevPagination = () => {
    dispatch(actions.setPrevPage())
    navigate({      
      search: `?${createSearchParams({
        page : currentPage as unknown as string
      })}`
    })
  }

  const handleNextPagination = () => {
    dispatch(actions.setNextPage())
    navigate({      
      search: `?${createSearchParams({
        page : currentPage as unknown as string
      })}`
    })
  }

  return (    
    <>
      <div className='container__homepage'>      
        <div className="row">
          <div className='h4'>Movie List</div>
          <div className='row'>
            <button disabled={currentPage === 1} className="btn btn-sm mr-2" onClick={handlePrevPagination}>Previous</button>            
            <div className="mr-2">{currentPage}</div>
            <button disabled={!movies?.length} className="btn btn-sm" onClick={handleNextPagination}>Next</button>
          </div>
        </div>        
        <div className='body__lists columns mt-2 w-100'>                     
          {!movies?.length ? 
          <div className='w-100'>
            <div style={{textAlign: 'center'}} className="h6 py-2"> There is no movie... </div>    
          </div>
          : 
          movies?.map(value => (      
            <div className='card__content' key={value.imdbID}>    
              <Card
                id={value.imdbID}
                poster={value.Poster}
                title={value.Title}
                handleOpenDetail={handleOpenDetail}
              />   
            </div>       
          ))}        
        </div>
    </div>        
    </>
  )
}

export default MovieListSection
