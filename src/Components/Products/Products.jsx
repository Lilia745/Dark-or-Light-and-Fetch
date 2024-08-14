import React from 'react'
import { useEffect, useState } from 'react';


function Products() {
  const [value,setValue] = useState([]) 
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(results => results.json())
    .then(date => setValue(date))
  },[])
  const [isDark,setIsDark] = useState(true)
  return (
    <section style={{background: isDark ? "white" : "black", transition:"0.5s"}}>
        <div className="ionIcon" onClick={()=>{
          setIsDark(!isDark)
        }}>
         {isDark?<ion-icon name="sunny-outline" className="sun"></ion-icon>:<ion-icon name="moon-outline" style={{color:isDark ? "black" : "white"}}></ion-icon>}
        </div>
        <div>
          <div className="box">
          {value.map((products)=>{
            const {id,image,title,price} = products
            return(
              <div key={products.id} className="products">
                <div className="root" style={{borderColor: isDark ? "black" : "white"}}>
                  <img src={image}/>
                  <h4 style={{color: isDark ? "black" : "white"}}>{title}</h4>
                  <p style={{color: isDark ? "black" : "white"}}>Price:   {price}$</p>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </section>
  )
}

export default Products