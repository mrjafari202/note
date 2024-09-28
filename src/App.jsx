
import React, { useState } from 'react';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const App = () => {

    const [notes, setNotes] = useState([]);
    const [editingNoteIndex, setEditingNoteIndex] = useState(null); // برای مشخص کردن یادداشتی که ویرایش می‌شود
    const [editedNote, setEditedNote] = useState(''); // ذخیره متن ویرایش شده

    //add
    const AddNote = (note) => {
        setNotes([...notes, note])
    };

    //delete
    const deleteHandler = (index) => {
        const newArray = notes.filter((_, i) => i !== index);
        setNotes(newArray);
    };

    //start edit 
    const startEditingNote = (index) => {
        setEditingNoteIndex(index);
        setEditedNote(notes[index])
    };

    //register edit 
    const updateNote = () => {
        const updateNotes = notes.map((note, index) => index === editingNoteIndex ? editedNote : note);
        setNotes(updateNotes);
        setEditingNoteIndex(null);
        setEditedNote("")

    };

    return (
        <div>
            <NoteInput
                AddNote={AddNote}
                editingNoteIndex={editingNoteIndex}
                updateNote={updateNote}
                editedNote={editedNote}
                setEditedNote={setEditedNote}
            />
            <NoteList
                notes={notes}
                deleteHandler={deleteHandler}
                startEditingNote={startEditingNote}
            />
        </div>
    )
}

export default App































// import React, { useState } from 'react';
// import NoteInput from './NoteInput';
// import NoteList from './NoteList';

// const App = () => {
//     const [notes, setNotes] = useState([]);
//     const [editingNoteIndex, setEditingNoteIndex] = useState(null); // برای مشخص کردن یادداشتی که ویرایش می‌شود
//     const [editedNote, setEditedNote] = useState(''); // ذخیره متن ویرایش شده

//     // تابع اضافه کردن یادداشت
//     const addNote = (note) => {
//         setNotes([...notes, note]);
//     };

//     // تابع حذف یادداشت
//     const deleteNote = (index) => {
//         const newNotes = notes.filter((_, i) => i !== index);
//         setNotes(newNotes);
//     };

//     // شروع ویرایش یادداشت
//     const startEditingNote = (index) => {
//         setEditingNoteIndex(index);
//         setEditedNote(notes[index]);
//         console.log(notes[index])
//     };

//     // ثبت ویرایش یادداشت
//     const updateNote = () => {
//         const updatedNotes = notes.map((note, index) => 
//             index === editingNoteIndex ? editedNote : note
//         );
//         setNotes(updatedNotes);
//         setEditingNoteIndex(null); // خروج از حالت ویرایش
//         setEditedNote(''); // پاک کردن ورودی
//     };

//     return (
//         <div>
//             <h1>یادداشت‌برداری</h1>
//             <NoteInput
//                 addNote={addNote}
//                 editedNote={editedNote}
//                 setEditedNote={setEditedNote}
//                 editingNoteIndex={editingNoteIndex}
//                 updateNote={updateNote}
//             />
//             <NoteList
//                 notes={notes}
//                 deleteNote={deleteNote}
//                 startEditingNote={startEditingNote}
//             />
//         </div>
//     );
// };

// export default App;
