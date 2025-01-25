import React, { useState } from 'react'
import axios from 'axios'


function PostMovie() {
    const [moviename,setmoviename] = useState(0);
    const [hero,sethero] = useState(0);
    const [heroine,setheroine] = useState(0);
    const [year,setyear] = useState(0);
    const [rating,setrating] = useState(0);
    const [genre,setgenre] = useState(0);

    const apipostdata= async()=>{
        try{
        const jsonobject = 
        await axios.post('http://localhost:3000/addmoviesdata',
         {moviename,hero,heroine,year,rating,genre})
        alert('Data saved successfully')
        console.log(jsonobject.data)
        }
        catch(error){
            console.log("Post data failed")
        }  
    }

    return (
    <>
    <div class="p-3 mb-2 bg-warning text-dark">
        <h1>Post Movie Data</h1>
        <form>
            <input type='text'
             onChange={(e) => setmoviename(e.target.value)}
             placeholder='Enter Movie Name'/><br/>
            <input type='text'
             onChange={(e) => sethero(e.target.value)}
            placeholder='Enter Hero Name'/><br/>
            <input type='text'
             onChange={(e) => setheroine(e.target.value)}
            placeholder='Enter Heroine Name'/><br/>
            <input type='number'
             onChange={(e) => setyear(e.target.value)}
            placeholder='Enter Release Year'/><br/>
            <input type='number'
             onChange={(e) => setrating(e.target.value)}
            placeholder='Enter Your Rating'/><br/>
            <input type='text'
             onChange={(e) => setgenre(e.target.value)}
            placeholder='Enter Movie Genre'/><br/><br/>
            <input type='button' onClick={apipostdata} value='Add Movie Data'/>


        </form>
    </div>
    </>
  )
}



export default PostMovie
