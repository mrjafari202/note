import React, { useState } from 'react'

const NoteInput = ({ AddNote, editedNote, setEditedNote, editingNoteIndex, updateNote }) => {
    const [text, setText] = useState("");

    const handelClick = () => {
        if (editingNoteIndex !== null) {
            updateNote()
        } else {
            if (text) {
                AddNote(text);
                setText("")
            }
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder={editingNoteIndex !== null ? 'ویرایش یادداشت...' : 'یادداشت جدید...'}
                value={editingNoteIndex !== null ? editedNote : text}
                onChange={(e) => editingNoteIndex !== null ? setEditedNote(e.target.value) : setText(e.target.value)}
            />
            <button onClick={handelClick}>
                {editingNoteIndex !== null ? 'ثبت ویرایش' : 'اضافه کردن'}
            </button>
        </div>
    )
}

export default NoteInput
































// import React, { useState } from 'react';

// const NoteInput = ({ addNote, editedNote, setEditedNote, editingNoteIndex, updateNote }) => {
//     const [input, setInput] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (editingNoteIndex !== null) {
//             updateNote(); // اگر در حالت ویرایش هستیم، یادداشت رو به‌روزرسانی کن
//         } else {
//             if (input) {
//                 addNote(input); // اضافه کردن یادداشت جدید
//                 setInput(''); // پاک کردن ورودی
//             }
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={editingNoteIndex !== null ? editedNote : input}
//                 onChange={(e) => editingNoteIndex !== null ? setEditedNote(e.target.value) : setInput(e.target.value)}
//                 placeholder={editingNoteIndex !== null ? 'ویرایش یادداشت...' : 'یادداشت جدید...'}
//             />
//             <button type="submit">
//                 {editingNoteIndex !== null ? 'ثبت ویرایش' : 'اضافه کردن'}
//             </button>
//         </form>
//     );
// };

// export default NoteInput;
