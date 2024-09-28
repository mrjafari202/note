
import React from 'react'

const NoteList = ({ notes, deleteHandler, startEditingNote }) => {
    return (
        <ul>
            {
                notes.map((note, index) =>
                    <li key={index}>
                        {note}
                        <button onClick={() => startEditingNote(index)}>ویرایش</button>
                        <button onClick={() => deleteHandler(index)}>حذف</button>
                    </li>
                )
            }
        </ul>
    )
}

export default NoteList

































// import React from 'react';

// const NoteList = ({ notes, deleteNote, startEditingNote }) => {
//     return (
//         <ul>
//             {notes.map((note, index) => (
//                 <li key={index}>
//                     {note}
//                     <button onClick={() => startEditingNote(index)}>ویرایش</button>
//                     <button onClick={() => deleteNote(index)}>حذف</button>
//                 </li>
//             ))}
//         </ul>
//     );
// };

// export default NoteList;
