// import React from 'react';
// import Header from './Header.jsx';
// import Note from './Note.jsx';
// import Footer from './Footer.jsx';
// import notes from '../notes';

// // function Card(props) {
// //     return <div>
// //         <h2>{props.name}</h2>
// //         <p>{props.age}</p>
// //         <p>{props.hobby}</p>
// //         <p>{props.address}</p>
// //     </div>

// // }



// function App() {
//     return (<div>
//         <Header />
//         {notes.map( notes => <Note key={notes.key} title={notes.title} content={notes.content} />  )}
//         <Footer />
//     </div>
//     );
// }

// export default App;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;