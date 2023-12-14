import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreatNote = (props) => {
    const[expand,setExpand] = useState(false);

    const expandEvent = () =>{
        setExpand(true);
    };
    const shrinkEvent = () =>{
        setExpand(false);
    }
    const [note, setNote] = useState({
        title:'',
        content:''
    });

    const inputEvent = (event) =>{
     const{name,value}= event.target;
        setNote((prevalue) => {
            return{
                ...prevalue,
                [name]: value,
            };
         });
     };
    const addEvent = () => {
            props.passNote(note);
            setNote({
                title:'',
                content:''
            });
    };

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };
    return (
        <>
           <div className="note-creater">
            <form>
                 {expand?
                    <input type="text" value={note.title} placeholder="Title" onChange={inputEvent} name="title" autoComplete="off"/> : null}
                <br/>
                <textarea  placeholder="Write a note...." value={note.content} onChange={inputEvent} name="content" onClick={expandEvent} onDoubleClick={shrinkEvent}/>
                {expand?
                <Button onClick={addEvent} variant="contained" className="add-btn" style={{ borderRadius:'60px', backgroundColor: isHovering ? '#cf7979' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <AddIcon className="add-icon" style={{ color: isHovering ? 'white' : '#cf7979',}}/></Button>:null}
            </form>
           </div>
        </>
    )
};

export default CreatNote;