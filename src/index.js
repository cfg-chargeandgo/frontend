import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Review from './pages/Review';
import Favourites from './pages/Favourites';
import MemberHomepage from './pages/MemberHomepage';
import StartPointWithChargeStations from './pages/StartPointWithChargeStations';
import RouteSuggestion from './pages/RouteSuggestion';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/memberhomepage" element={<MemberHomepage />} />
        <Route path="/startpoint" element={<StartPointWithChargeStations />} />
        <Route path="/routesuggestion" element={<RouteSuggestion />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
