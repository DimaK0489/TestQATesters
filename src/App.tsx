import React from 'react';
import './App.css';
import {Actions} from "./pages/Actions/Actions";
import {Route, Routes} from 'react-router-dom';
import {ROUTES} from "./routes";
import {InfoAction} from "./pages/InfoAction/InfoAction";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Actions/>}/>
        <Route path={ROUTES.infoAction} element={<InfoAction/>}/>
      </Routes>
    </div>
  );
}

export default App;
