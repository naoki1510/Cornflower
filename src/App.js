import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import TopBar from "./components/header/TopBar";
import NoteList from "./components/main/notelist/NoteList";

import "@material/react-list/index.scss";
import "@material/react-top-app-bar/index.scss";
import "@material/react-material-icon/index.scss";
import "@material/react-drawer/index.scss";
import "@material/react-card/index.scss";
import "@material/react-typography/index.scss";
import "@material/react-icon-button/index.scss";
import "@material/react-button/index.scss";
import "./App.css";
import NoteDetail from "./components/main/notedetail/NoteDetail";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route path="/" component={TopBar} />
                <Route exact path="/" component={NoteList} />
                <Route exact path="/:user/:note" component={NoteDetail} />
            </div>
        </BrowserRouter>
    );
}

export default App;
