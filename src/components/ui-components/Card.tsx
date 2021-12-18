import React from 'react'
import PlaceholderImage from '../../assets/placeholder.jpg'

export interface CardProps {
  poster: string
  title: string
  id: string
  handleOpenDetail(id: string): void
}

const Card: React.FC<CardProps> = (props) => {
  const {poster, title, id, handleOpenDetail} = props
  return (
    <div onClick={() => handleOpenDetail(id)} className='card c-hand'>      
      <img src={poster === 'N/A' ? PlaceholderImage : poster} alt={`${title} ${id}`} className='card__image'/>
      <div className="card-title h6 card__container-title">
          {title}
      </div>   
    </div>
  )
}

export default Card
