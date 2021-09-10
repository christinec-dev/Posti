//imports individual Posti's from Post.js
import Post from './Post';

//will render all the posts and allow us to edit, delete or add them individually
const Posts = ({ posts, onDelete, onEdit }) => {
  return (
    <>
      {/* listing of all posts */ }
      <div className="postNote">
        {
          posts.map((post) => (
            <Post key={post.id} post={post} onDelete={onDelete} onEdit={onEdit} />
          ))
        }
      </div>
    </>
  )
}

//exports for use in other files
export default Posts;