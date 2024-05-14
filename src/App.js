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
  const [tag, setTag] = useState("galeria");

  useEffect(() => {
    localStorage.getItem("tag") && setTag(localStorage.getItem("tag"));
    if (window.location.hash.includes("linhas-de-cuidado")) {
      setTag("linhas-de-cuidado");
    } else if (window.location.hash.includes("duvidas-frequentes")) {
      setTag("duvidas-frequentes");
    } else if (window.location.hash.includes("galeria")) {
      setTag("galeria");
    } else if (window.location.hash.includes("teatro")) {
      setTag("teatro");
    } else if (window.location.hash.includes("time")) {
      setTag("time");
    } else {
      setTag("galeria");
    }
  }, []);
  return (
    <BrowserRouter>
      <Header
        title={
          tag === "duvidas-frequentes"
            ? "Dúvidas frequentes"
            : tag === "linhas-de-cuidado"
            ? "Linhas de cuidado"
            : tag === "teatro"
            ? "Teatro"
            : tag === "galeria"
            ? "Galeria"
            : "time"
        }
      />

      <GlobalContent>
        <Routes>
          <Route path="/" element={<Gallery />} />
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
