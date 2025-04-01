import { useState } from 'react'
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import './index.css'
// import './App.css'

;
// const initialState = [
//   {
//     _id: 1,
//     boxSize: 'Small',
//     boxOwner: 'Alex',
//   }
// ];

const App = () => {

  const [mailboxes, setMailBoxes] = useState([]);
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
          element={<MailboxForm />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;