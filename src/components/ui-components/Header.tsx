import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { actions } from '../../redux/slices/movieLists.slice'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [search, setSearch] = useState<string>('')
  const dispatch = useDispatch()  

  const onChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {    
    setSearch(event.target.value)
  }

  const handleSearchMovie = () => {
    dispatch(actions.setSearchMovie(search))
  }

  const handlePressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.key === 'Enter') {
      dispatch(actions.setSearchMovie(search))
    }
  }

  return (
    <nav className='columns nav__columns navbar'>
       <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2">My Movie Lists</Link>
      </section>
      <section className="navbar-section">
        <div className="input-group input-inline">
          <input 
            className="form-input input-sm mr-2" 
            type="text" 
            placeholder="search"
            onChange={(e) => onChangeField(e)}
            onKeyDown={(e) => handlePressEnter(e)}
            />
          <button 
            className="btn btn-primary input-group-btn btn-sm"
            onClick={handleSearchMovie}
            >Search
          </button>
        </div>
      </section>
    </nav>
  )
}

export default Header
