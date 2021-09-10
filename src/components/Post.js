import React from 'react'
//Draggable will make our posti notes draggable without having to code it ourselves
import Draggable from 'react-draggable';
//cool icon library as a substitue for FontAwesome
import { FaPen, FaTrash } from 'react-icons/fa';

//will render the individual Posti note, and allow us to edit it and delete it
function Post ({ post, onDelete, onEdit }) {
    return (
      <div>
          {/* making the Posti draggable */ }
          <Draggable>
            <div className="container posts">
                <div className="single-post">
                    {/* show the Posti text/content */ }
                    <p className="PostName">
                        {post.text}
                    </p>  
                    {/* show the Posti date added/edited */ }
                    <p className="PostDate">   
                    <span className="textBold">Posted:</span>           
                        {post.day}
                    </p>
                </div>
                {/* Posti interactions */ }
                <div className="editPosts">
                    <p>
                    {/* deleting the Posti*/ }
                    <FaTrash onClick={() => onDelete(post.id)} className="deleteIcon" />
                    {/* editing the Posti*/ }
                    <FaPen onClick={() => onEdit(post.id)} className="editIcon" />
                    </p>
                </div>
            </div>
        </Draggable>
      </div>
    )
}

//exports to be used in other files
export default Post;