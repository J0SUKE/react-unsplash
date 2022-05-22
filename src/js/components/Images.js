import React, { useContext, useEffect, useState } from 'react'
import { topicContext,settopicContext } from '../App';

function Images() {
  
  const[count,setCount] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
  
  const topic = useContext(topicContext);

  useEffect(()=>{
    window.addEventListener("scroll",(e)=>{
      
      const{scrollTop,scrollHeight,clientHeight} = document.documentElement;
      if ((scrollTop+clientHeight)>=(scrollHeight*0.8)) 
      {
        
        setCount((count)=>{
          const add = [];
        
          for (let i = count[count.length-1]+1; i <= count[count.length-1]+9; i++) 
          {
              add.push(i);
          }
          return ([...count,...add])
        })
      
      }
    })
  },[])

  return (
    <section className='gallery-section'>
      <h1>the current topic is {topic}</h1>
      <div className="gallery">
      {
        count.map((element)=>(
          <div key={element}>
            <img src={`https://loremflickr.com/420/340/${topic}?random=${element}`} alt="" />
          </div> 
        ))
      }
      </div>    
    </section>
  )
}

export default Images