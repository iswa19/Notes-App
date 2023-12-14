import React, {useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) =>{

   const deleteNote = () =>{

      props.deleteItem(props.id);
   };

   const [isHovering, setIsHovering] = useState(false);
    const handleMouseEnter = () => {
        setIsHovering(true);
      };
     const handleMouseLeave = () => {
        setIsHovering(false);
      };
    return(
        <>
          <div className="note">
              <h4>{props.title}</h4><span className="fav-icon"><FavoriteIcon style={{fontSize:'medium'}}/></span>
              <p>{props.content}</p>
              <Button onClick={deleteNote} variant="contained" className ="del-btn" style={{borderRadius:'90px',backgroundColor: isHovering ? '#cf7979' : 'white'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <DeleteIcon  style={{fontSize:'medium',color:'#cf7979', color: isHovering ? 'white' : '#cf7979'}} /></Button>
          </div>     
        </>
    );
};

export default Note;