import React from 'react'
import ListOrder from './ListOrder'


const ListItems = ({items,handleCheck,remove}) => {
  return (
    <ul>    
        {items.map((item) =>(
        <ListOrder
        item= {item}
        key={item.id}
        handleCheck={handleCheck}
        remove={remove}
        />
    )
)}
</ul>
  )
}

export default ListItems