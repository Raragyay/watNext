import CommentCard from '../components/CommentCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardDeck(props) { 
  const [data, setData] = useState("Loading!");

  useEffect(()=>{
      axios.get("http://localhost:4000/task/getComments/"+props.id)
    .then((data) => {console.log(data);setData(data)})
    .catch((err) => setData(err))
  },[])


  const GenerateDeck = () => {
    if (data === "Loading!") return "Loading!"
    else if (data?.data?.comment.length) return (data.tasks).map(e => <CommentCard user={e.user} commentContent={e.commentContent}/>)
    else return <CommentCard user={"No comments here!"} commentContent={"Maybe write one?"}/>
  }

  return (
    <div style={{
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap"
    }}>
      <GenerateDeck />
    </div>
  );
}