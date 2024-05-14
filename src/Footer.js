import { FooterContainer } from "./style";
import SosOutlinedIcon from "@mui/icons-material/SosOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import CollectionsIcon from '@mui/icons-material/Collections';
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import { useNavigate } from "react-router-dom";
import Diversity2Icon from '@mui/icons-material/Diversity2';

export function Footer({ tag, setTag }) {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <div
        onClick={() => {
          navigate("/linhas-de-cuidado");
          setTag("linhas-de-cuidado");
          localStorage.setItem("tag", "linhas-de-cuidado");
        }}
        style={{ backgroundColor: tag === "linhas-de-cuidado" ? "#fff" : "#ef248d" }}
      >
        <SosOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "linhas-de-cuidado" ? "#ef248d" : "#fff",
            background: tag === "linhas-de-cuidado" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      <div
        onClick={() => {
          navigate("/duvidas-frequentes");
          setTag("duvidas-frequentes");
          localStorage.setItem("tag", "duvidas-frequentes");
        }}
        style={{ backgroundColor: tag === "duvidas-frequentes" ? "#fff" : "#ef248d" }}
      >
        <HelpOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "duvidas-frequentes" ? "#ef248d" : "#fff",
            background: tag === "duvidas-frequentes" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      <div
        onClick={() => {
          navigate("/galeria");
          setTag("galeria");
          localStorage.setItem("tag", "galeria");
        }}
        style={{ backgroundColor: tag === "galeria" ? "#fff" : "#ef248d" }}
      >
        <CollectionsIcon
          sx={{
            fontSize: "2rem",
            color: tag === "galeria" ? "#ef248d" : "#fff",
            background: tag === "galeria" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      {/*  */}
      <div
        onClick={() => {
          navigate("/teatro");
          setTag("teatro");
          localStorage.setItem("tag", "teatro");
        }}
        style={{ backgroundColor: tag === "teatro" ? "#fff" : "#ef248d" }}
      >
        <SmartDisplayOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "teatro" ? "#ef248d" : "#fff",
            background: tag === "teatro" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      {/*  */}
      <div
        onClick={() => {
          navigate("/time");
          setTag("time");
          localStorage.setItem("tag", "time");
        }}
        style={{ backgroundColor: tag === "time" ? "#fff" : "#ef248d" }}
      >
        <Diversity2Icon
          sx={{
            fontSize: "2rem",
            color: tag === "time" ? "#ef248d" : "#fff",
            background: tag === "time" ? "#fff" : "#ef248d",
          }}
        />
      </div>
    </FooterContainer>
  );
}
