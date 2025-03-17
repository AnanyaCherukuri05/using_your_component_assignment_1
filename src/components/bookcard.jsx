import React from 'react'

function Bookcard({image, name, genre, author}) {
  return (
    <div className='book-card'>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{genre}</p>
        <p>{author}</p>
    </div>
  )
}

export default Bookcard;