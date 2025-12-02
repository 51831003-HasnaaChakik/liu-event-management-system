import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import LiuEvents from "./Pages/Liu_Events";
import EventDetails from "./Pages/Event_Details";
import Contact from "./Pages/Liu_contact";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/events" element={<LiuEvents/>}/>
        <Route path="/events/:id" element={<EventDetails/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}
