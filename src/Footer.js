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
          setTag("sos");
          localStorage.setItem("tag", "sos");
        }}
        style={{ backgroundColor: tag === "sos" ? "#fff" : "#ef248d" }}
      >
        <SosOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "sos" ? "#ef248d" : "#fff",
            background: tag === "sos" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      <div
        onClick={() => {
          navigate("/duvidas-frequentes");
          setTag("help");
          localStorage.setItem("tag", "help");
        }}
        style={{ backgroundColor: tag === "help" ? "#fff" : "#ef248d" }}
      >
        <HelpOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "help" ? "#ef248d" : "#fff",
            background: tag === "help" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      <div
        onClick={() => {
          navigate("/galeria");
          setTag("gallery");
          localStorage.setItem("tag", "gallery");
        }}
        style={{ backgroundColor: tag === "gallery" ? "#fff" : "#ef248d" }}
      >
        <CollectionsIcon
          sx={{
            fontSize: "2rem",
            color: tag === "gallery" ? "#ef248d" : "#fff",
            background: tag === "gallery" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      {/*  */}
      <div
        onClick={() => {
          navigate("/teatro");
          setTag("smart");
          localStorage.setItem("tag", "smart");
        }}
        style={{ backgroundColor: tag === "smart" ? "#fff" : "#ef248d" }}
      >
        <SmartDisplayOutlinedIcon
          sx={{
            fontSize: "2rem",
            color: tag === "smart" ? "#ef248d" : "#fff",
            background: tag === "smart" ? "#fff" : "#ef248d",
          }}
        />
      </div>
      {/*  */}
      <div
        onClick={() => {
          navigate("/time");
          setTag("team");
          localStorage.setItem("tag", "team");
        }}
        style={{ backgroundColor: tag === "team" ? "#fff" : "#ef248d" }}
      >
        <Diversity2Icon
          sx={{
            fontSize: "2rem",
            color: tag === "team" ? "#ef248d" : "#fff",
            background: tag === "team" ? "#fff" : "#ef248d",
          }}
        />
      </div>
    </FooterContainer>
  );
}
