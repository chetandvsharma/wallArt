import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import AboutUs from '../pages/AboutUS';
import ContactUs from '../pages/ContactUs';

export default function IndexRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
