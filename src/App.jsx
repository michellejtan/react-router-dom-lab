import { useState } from 'react'
import LetterForm from './components/LetterForm/LetterForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import './index.css'
// import './App.css'

;
import LetterForm from './components/LetterForm/LetterForm';
// const initialState = [
//   {
//     _id: 1,
//     boxSize: 'Small',
//     boxOwner: 'Alex',
//   }
// ];

const App = () => {

  const [mailboxes, setMailBoxes] = useState([]);
  const [letters, setLetters] = useState([]);

  const addBox = (newMailBoxData) => {
    newMailBoxData._id = mailboxes.length + 1;
    setMailBoxes([...mailboxes, newMailBoxData]); 
  };

  const addLetter = (newMailBoxData) => {
    setLetters([...letters, newMailBoxData]); 
  };

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/"
          element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/new-mailbox"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes}/>}
        />
        <Route
          path="/new-letter"
          element={<LetterForm addLetter={addLetter} mailboxes={mailboxes}/>}
        />
        <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
      </Routes>
    </>
  );
};

export default App;