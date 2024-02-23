import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //  const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Thevighneshpawar')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='flex flex-col justify-center items-center gap-5 p-4 text-3xl m-4 bg-gray-600 text-white'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
      </div>
      
        
    )
}

export default Github


export const githubInfoloader = async () =>{
    const response = await fetch('https://api.github.com/users/Thevighneshpawar')
    return response.json()
}