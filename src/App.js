import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { GlobalContent } from "./style";
import { Lines } from "./Lines";
import { Help } from "./Help";
import { Part } from "./Part";
import { Gallery } from "./Gallery";
import { Team } from "./Team";

export default function App() {
  const [tag, setTag] = useState("gallery");

  useEffect(() => {
    localStorage.getItem("tag") && setTag(localStorage.getItem("tag"));
  }, []);
  return (
    <BrowserRouter>
      <Header
        title={
          tag === "help"
            ? "Dúvidas frequentes"
            : tag === "sos"
            ? "Linhas de cuidado"
            : tag === "smart"
            ? "Teatro"
            : tag === "gallery"
            ? "Galeria"
            : "Time"
        }
      />

      <GlobalContent>
        <Routes>
          <Route path="/" element={<Help />} />
          <Route path="/linhas-de-cuidado" element={<Lines />} />
          <Route path="/duvidas-frequentes" element={<Help />} />
          <Route path="/teatro" element={<Part />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/time" element={<Team />} />
        </Routes>
      </GlobalContent>
      <Footer tag={tag} setTag={setTag} />
    </BrowserRouter>
  );
}
