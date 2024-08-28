import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import Button from '../Button';


function Products() {
  const [value,setValue] = useState([]) 
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(results => results.json())
    .then(date => setValue(date))
  },[])
  const [isDark,setIsDark] = useState(true)
  const count = useRef(0)
  return (
    <section style={{background: isDark ? "white" : "black", transition:"0.5s", position:"relative"}}>
        <div className="ionIcon" onClick={()=>{
          setIsDark(!isDark)
        }}>
         {isDark?<ion-icon name="sunny-outline" className="sun"></ion-icon>:<ion-icon name="moon-outline" style={{color:isDark ? "black" : "white"}}></ion-icon>}
        </div>
        <ion-icon name="cart-outline" style={{color: isDark ? "black" : "white", fontSize:"30px",cursor:"pointer",position:"absolute",right:"0",top:"0",margin:"10px"}}></ion-icon>
        <div className="num">{count.current}</div>
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
                  <Button count={count.current}/>
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