import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/CraftWithSweta')
        .then(response=>response.json())
        .then(data=> {console.log(data);
        
            setData(data)
        }
        )
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4'>Github followers:{data.followers}</div>
  )
}

export default Github