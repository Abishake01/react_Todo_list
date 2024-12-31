import React from 'react'
import ListItems from './ListItems'

const Content = ({items,handleCheck,remove}) => {

  return (
    
    <div>
        {(items.length)? (
        <ListItems
          items= {items}
          handleCheck={handleCheck}
          remove={remove}
        />
        ):(
            <p>Onnum illa da...</p>
        )}
    </div>
  )
}

export default Content

/* const handleClick= (e) => {
    console.log(e.target.innerText)
}
const handleClick2= (name) => {
    console.log(`You are Clicked ${name}`)
} 
return (

<div>
<h2 onDoubleClick={() => handleClick2('bala')}>You are a {changeWord()}</h2>
<button onClick={ (e) => handleClick(e)}>Click</button>
</div>
)
} */

/* const [change, setChange]=useState('Done')
    function changeWord(){
        const summa = ['Beginner','Intermediate','Expert'];
        const inti=Math.floor(Math.random()*3);
        setChange(summa[inti])
        }
   
        const [count,setCount]=useState(10)
        function IncrementNumber (){
           setCount(nexcount => nexcount + 1)
        }
        function DecrementNumber(){
            setCount( precount => precount - 1)
        } */

/* <h2>You are a {change}</h2>
        <button onClick={changeWord}>Click</button><br /> 
        <input/>
        <button></button>
        <button onClick={DecrementNumber}>-</button>
        <span>{count}</span>
        <button onClick={IncrementNumber}>+</button> */
