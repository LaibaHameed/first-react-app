"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios'



const page = () => {
  const [user, setuser] = useState("Laiba");
  const [marks, setMarks] = useState(80);
  const [imags, setImages] = useState([]);
  useEffect(()=>{
    getImgs();
  }, [])
  const getImgs = async () =>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      setImages(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
    }
  return (
    <>
    <h2>my marks were {marks}</h2>
    <button onClick={()=>{
      setMarks(65)
      }}>update</button>
      <button onClick={getImgs}> get PICs</button>
      <div id='picsBox'>
        {imags.map((img, i)=>{
          return(
          <img key={i} src={img.download_url} id='image'/>
          )
        })}
      </div>
    </>
  )
}

export default page