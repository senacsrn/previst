import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export function Lines() {
  return (
    <>
      <h3 style={{ marginBottom: "1rem" }}>O que fazer e como fazer?</h3>

      <h5 style={{ marginBottom: "1rem", textAlign: "center" }}>
        Em São Raimundo Nonato:
      </h5>
      <img src="1.png" />
      <img src="2(1).png" />
      <img src="3.png" />
      <img src="4.png" />

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HIV ATENÇÃO PRIMÁRIA À SAÚDE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              target="_blank"
              href="https://linhasdecuidado.saude.gov.br/portal/hiv/unidade-de-atencao-primaria/"
              rel="noreferrer"
            >
              Clique aqui
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HIV ATENÇÃO ESPECIALIZADA </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              target="_blank"
              href="https://linhasdecuidado.saude.gov.br/portal/hiv/atencao-especializada/"
              rel="noreferrer"
            >
              Clique aqui
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HIV UNID PRONTO ATENDIMENTO </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              target="_blank"
              href="https://linhasdecuidado.saude.gov.br/portal/hiv/unidade-de-pronto-atendimento/"
              rel="noreferrer"
            >
              Clique aqui
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HIV SAMU </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              target="_blank"
              href="https://linhasdecuidado.saude.gov.br/portal/hiv/servico-de-atendimento-movel/"
              rel="noreferrer"
            >
              Clique aqui
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>HIV UNIDADE HOSPITALAR</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a
              target="_blank"
              href="https://linhasdecuidado.saude.gov.br/portal/hiv/unidade-hospitalar-especializada/"
              rel="noreferrer"
            >
              Clique aqui
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
