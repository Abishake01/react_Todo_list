import React from 'react'

const Searchitem = () => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Items'
        />
        <button htmlFor='search'>Search</button>
    </form>
  )
}

export default Searchitem