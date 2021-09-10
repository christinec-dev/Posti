
//will create our Button component to be used in ShowForm.js
const Button = ({ color, text, onClick }) => {
    //this button will render to display differently depending on its use (close/add)
    return <button onClick={onClick} style={{ backgroundColor: color }} className="btn btn-add">
        {/* will show either add/close */ }
        {text}
    </button>
}

//exports for use in other files
export default Button