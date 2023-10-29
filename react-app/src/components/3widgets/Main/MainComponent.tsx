import React, { useEffect, useState } from 'react';
import "./style.scss"


function MainComponent() {
  interface User {
    created:string,

episode:string[],
gender:string,
id:number,
image:string,
location:{
  name:string,
  url:string,
},
name:string,
origin:{
  name:string,
  url:string,
},
species:string,
status:string,
type:string,
url:string,
  }
  interface Result{
    results:User[],
    info:{}
  }
  const url:string="https://rickandmortyapi.com/api/character";
  const [data, setData]=useState<Result|null>(null)
    useEffect(()=>{
fetch(url)
.then(res=>res.json())
.then(res=>{
  console.log(res)
  setData(res)
})
  }, [])
  console.log(data)
  let list:HTMLElement[]=[]
 if(data){
   list=data.results.map(item=>{
   const listItem= <li key={item.id} className='item'>
      <h2 className="title">Name: {item.name}</h2>
    <h4 className="subtitle">Created: {item.created}</h4>
      <h4 className="subtitle">Gender: {item.gender}</h4>
      <h4 className="subtitle">Status: {item.status}</h4>
      <img src={item.image} alt={item.name} className="img" /> 
      <p>aaaaaa</p>
    </li>
  return listItem
  }
    )
    //const listForRender:string=list.split()
 }
  return (
    <>
    <div>MainComponent</div>
    <ul className='list'>{list}</ul>
</>
  )
}

export default MainComponent