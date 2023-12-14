import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreatNote from "./CreatNote";
import Note from "./Note";

const App = () =>{
    const[addItem, setaddItem] = useState([]);

    const addNote = (note) =>{
        setaddItem((preval)=>{
            return [...preval,note];
          });
    };
    const onDelete = (id) => {
        setaddItem((preval) => preval.filter((current, index) => index !== id));
     };

    return(
        <>
          <Header/>
          <CreatNote passNote={addNote}/>

          {addItem.map((val,index)=>{
            if(val.title !== '' & val.content !== ''){
             return <Note
             key={index} 
             id={index} 
             title={val.title} 
             content={val.content}
             deleteItem={onDelete}/>}
             else{
                return null;
             }
             })}
            
          <Footer/>
        </>
    );
};

export default App;