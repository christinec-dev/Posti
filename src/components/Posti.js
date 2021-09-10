import { useState, useEffect } from 'react';
//our form, posts and add components to be used in our functions
import ShowForm from '../layout/ShowForm';
import Posts from './Posts';
import AddPost from './Add';
//button component from reactrap to clear board
import { Button } from 'reactstrap'
//will generate random id values for our posti's
import { v4 as uuidv4 } from 'uuid';
//sweetalert makes our popups after adding, deleting or editing Posti's beautiful
import Swal from "sweetalert2";

//main Posti function to tie everything together
function Posti() {
    //initial states of post tasks and input form
    const [posts, setPosts] = useState([]);
    const [showAddPost, setShowAddPost] = useState(false);
  
    //************************************************************************************************************************************** */
    //This function will fetch and return all the current/saved Posti's from local storage
    const getPosts = JSON.parse(localStorage.getItem("postAdded"));
    useEffect(() => {
        //if theres nothing, show nothing
        if (getPosts == null) {
            setPosts([])
        //else return saved postis
        } else {
            setPosts(getPosts);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //************************************************************************************************************************************** */
    //This function will add new Posti's to our board and save it to local storage
    const AddPosts = (post) => {
        //generates random id
        const id = uuidv4();
        //assigns random id to new post
        const newPost = { id, ...post }
        // create a copy of our newly created posts array and passes previous argument to it
        setPosts([...posts, newPost]);
        //sweetheard popup to notify that a posti has been added
        Swal.fire({
            icon: 'success',
            title: 'STICKING POSTI 📌',
            text: 'Your new Posti was successfully pasted!'
        })
        //saves our posts array to our local storage
        localStorage.setItem("postAdded", JSON.stringify([...posts, newPost]));
    }
	
    //************************************************************************************************************************************** */
    //This function will delete a single Posti from our board and the local storage
    const deletePost = (id) => {
        //it will delete the post matching the correct id
        const deletePost = posts.filter((post) => post.id !== id);
        //assigns the id above to the function to be deleted and removes it
        setPosts(deletePost);
        //sweetheard popup to notify that a posti has been deleted
        Swal.fire({
            icon: 'success',
            title: 'CRUMBLING POSTI UP 🏸',
            text: 'Your Posti was successfully thrown in the bin!'
        })
        //removes our posti from our array and our local storage
        localStorage.setItem("postAdded", JSON.stringify(deletePost));
    }

    //************************************************************************************************************************************** */
    //This function will delete all the Posti's from our board and the local storage
    const deleteAllPost = () => {
        //sets post array to null value
        setPosts([]);
        //sweetheard popup to notify that all posti's have been deleted
        Swal.fire({
            icon: 'success',
            title: 'BURNING IT ALL 🔥',
            text: 'No Posti survived. Board successfully cleared!'
        })
        //removes all posti's from our array and our local storage
        localStorage.removeItem("postAdded", JSON.stringify(deleteAllPost));      
    }

    //************************************************************************************************************************************** */
    //This function will edit a singular Posti and update it in our local storage
    const editPost = (id) => {
        //prompt to allow us to edit the posti string
        const text = prompt("New Posti:");
        //gets the unique posti from array stored in local storage
        let data = JSON.parse(localStorage.getItem('postAdded'));
        //maps data to update matching posti id
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    id: uuidv4()
                }
            }
            //returns updated array
            return x;
        })
        //sweetheard popup to notify that posti has been updated
        Swal.fire({
            icon: 'success',
            title: 'ERASING SOMETHING ✏️',
            text: 'Your Posti was successfully edited!'
        })
        //saves posti edit to our local storage
        localStorage.setItem("postAdded", JSON.stringify(myData));
        window.location.reload();
    }
    //************************************************************************************************************************************** */
    return (
        <>
		<div className="container-fluid">
            <div className="header-main"> 
                <h1>Posti</h1>
                {/* button to add/close form for posti */ }
                <ShowForm showForm={() => setShowAddPost(!showAddPost)} changeTextAndColor={showAddPost} />
                {showAddPost && <AddPost onSave={AddPosts} />}

                {/* button to clear all posti's from board*/ }     
                <Button onClick={deleteAllPost} className="btn delete-btn">❌ Clear Board</Button>
            </div> 
			<div className="row posti-row">
            {/* displays all postis rendered from local storage */ }
                { posts.length > 0 ?
                (<Posts 
                    posts={posts} 
                    onDelete={deletePost} 
                    onEdit={editPost} />) :
                    (<div className="posti">No Posti was found. Try adding one! 😊 </div>
                )}
            </div>		
		</div>
        </>
    )
}

//exports for use in other files
export default Posti;