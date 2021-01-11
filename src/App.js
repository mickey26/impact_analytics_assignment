import React from "react";
import "./App.css";
import ResultPage from "./ResultPage";
import ShortListedPage from "./ShortListedPage";
import RejectedPage from "./RejectedPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Route path='/' exact component={ResultPage} />
      <Route path='/shortlisted-page' component={ShortListedPage} />
      <Route path='/rejected-page' component={RejectedPage} />
    </div>
  );
}

export default App;
