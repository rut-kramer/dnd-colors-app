import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import './App.css';
import List from './list';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <List></List>
      </DndProvider>
    </div>
  );
}
export default App;
