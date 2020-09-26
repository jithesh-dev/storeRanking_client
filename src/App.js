import React, { useState } from 'react';
import './App.scss';
import StoreTable from './components/StoreTable/StoreTable.Component';
import { AiOutlinePlus } from 'react-icons/ai';
import AddStoreModal from './components/AddStoreModal/AddStoreModal.Component';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='App'>
      <div className='App__Container'>
        <button
          className='App__addStoreBtn btn-grad'
          onClick={() => setIsOpen(true)}
        >
          <AiOutlinePlus /> Add Store
        </button>
        <StoreTable />
      </div>
      <AddStoreModal open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
