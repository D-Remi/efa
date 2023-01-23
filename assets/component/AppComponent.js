import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adhesion from './Adhesion';
import Agenda from './Agenda';
import ContactComponent from './Contact';
import Event from './Event';
import Header from './header/Header';
import HomeComponent from './HomeComponent';
import Lien from './Link';

export default function App() {
  return (
      <div>
        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
					<Route path="/evenements" element={<Event />} />
					<Route path="/adhésions" element={<Adhesion />} />
					<Route path="/lien" element={<Lien/>} />
					<Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  );
}

function Home() {
  return <HomeComponent/>;
}

function Contact() {
  return <ContactComponent/>;
}