import { useState } from 'react';
//sweetalert makes our popups after adding, deleting or editing Posti's beautiful
import Swal from "sweetalert2";

//This will add a new Posti to our main board
const AddPost = ({ onSave }) => {
    //initial state of our Date and Posti content fields
    const [text, setText] = useState('');
    //the date will render to the date the posti was created/edited
    const day = Date().toLocaleString();
    
    //when we submit a new Posti we change these states
    const onSubmit = (e) => {
        //It will prevent the page from reloading to save the added posti to local storage
        e.preventDefault();
        //if there was no text added empty input field
        if (!text) {
            //sweetheart popup will display a very angry (for humor) message
            Swal.fire({
                icon: 'error',
                title: 'WASTED POSTI 😠',
                text: 'Oh no! It seems that you forgot your pen to write something. Go grab a pen before another Posti dries out!'
            })
        //if there was  text added to the input field, we change our initial state and save the data
        } else {
            onSave({ text, day });
        }
        //by default the text will be empty
        setText('');
    }

    return (
        //this will render the form to add a new Posti
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                {/* input field to enter posti information */ }
                <input type="text" maxlength="50" placeholder="Hmmm, what will I waste a Posti on today?" value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
            {/* input button to submit posti information */ }
            <input type="submit" className="btn btn-block" value="Stick Posti" />
        </form>
    )
}

//exports for use in other files
export default AddPost;