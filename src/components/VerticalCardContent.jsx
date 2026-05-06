import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IncomeState from "/src/components/IncomeState.jsx";

export default function VerticalCardContent(){
    return (
        <section>
            <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <IncomeState icon={null} state="pr" percentage="product design" />
            </AccordionSummary>

            <AccordionDetails>
                <section>
                <Typography component="span">Meeting With Author Bell</Typography>
                <p className="text-secondary">F030840-02842</p>
                </section>
                <p className="text-capitalize text-secondary">on design now</p>
            </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <IncomeState
                icon={null}
                state="su"
                percentage="marketing businesses"
                />
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="span">Meeting With Losikie perez</Typography>
                <p className="text-secondary">F030840-02842</p>
            </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
            >
                <IncomeState
                icon={null}
                state="da"
                percentage="Drain Informating Session"
                />
            </AccordionSummary>
            <AccordionDetails>
                <Typography component="span">Meeting With Losikie perez</Typography>
                <p className="text-secondary">F030840-02842</p>
            </AccordionDetails>
            </Accordion>
        </section>
    );
}