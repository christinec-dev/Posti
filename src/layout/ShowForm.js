import React from 'react';
//import our customizable button
import Button from './Button';

//this will render our form when we click on our button to add a Posti
function ShowForm ({ showForm, changeTextAndColor }) {
    return (
      <div className="header">
          {/* will show either close/add and when its state is add it will show the input form*/ }
         <Button onClick={showForm} color={changeTextAndColor ? 'rgb(251, 78, 78)' : 'rgb(7, 255, 131)'} text={changeTextAndColor ? '➖ Close Posti' : '➕ New Posti'} />
      </div>
    )
}

//exports to be used in other files
export default ShowForm;