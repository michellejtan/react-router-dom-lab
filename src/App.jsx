import { useState } from 'react'
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router';
import './index.css'
import './App.css'

const App = () => {
  return (<>
    <NavBar />
    <h1>Mailbox List</h1>

    <Routes>
         {/* <PokemonList pokemon={pokemon} /> */}
         <Route path="/"
           element={<main><h1>Post Office</h1></main>} />
         <Route path="/mailboxes"
           element={<MailboxList />} />
         <Route
           path="/new-mailbox"
           element={<MailboxForm/>}
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

export default App
