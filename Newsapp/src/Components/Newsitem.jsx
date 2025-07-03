import React from 'react'
import Image from '../assets/News.png'
const Newsitem = ({title,description,src,url }) => {
  return (
    <div >
      <div className="card bg-dark text-light mb-3 my-3 mx-3 px-2 py-2 " style={{maxWidth:"325px"}}>
  <img src={src?src:Image} style={{height:"200px",width:"200"}} className="card-img-top" alt="Image"/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Custom Description"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}

export default Newsitem
