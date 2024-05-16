//  import { comment } from "postcss";
import { useState } from "react";

export default function CommentForm () {

   const[comments, setComments]= useState([]);
       
   const [specificComments, setSpecificComments]= useState({name:"", comment:""});
    
   const handleTextChange=(event) => {
     setSpecificComments({...specificComments, [event.target.id]:event.target.value})
   }

   const addNewComment=(specificComments) =>{
      setComments([...comments, specificComments])
   }

   const handleSubmit= (event) => {
      event.preventDefault();

      addNewComment(specificComments);
   }

   return (  
      <div>
         <form onSubmit={handleSubmit}>
            <section>
               <p className="text-white ">Name</p>
               <div>
                  <title>Input Field</title>
                  <input type="text" id="name" onChange= {handleTextChange}placeholder="Name here" required/>
               </div>    
               <br />
               <p className="text-white">Comment</p>
               <div>
                  <title>Input Field</title>
                  <input type="text" placeholder="Comment here"  id="comment" onChange={handleTextChange}required/>
               </div>
               <br />
               <button className='rg bg-zinc-50 Submit button text-black' type='submit button'>Submit button </button>
               <br />
               <ul className="text-white">
                  {comments.map(specificComments => (
                     <li>
                        {specificComments.name}
                        <br />
                        
                          {specificComments.comment}
                      </li>
                  ))}
               </ul>
            </section>
         </form>
      </div> 
   );
}