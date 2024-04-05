import { MailOutline, WhatsApp, LinkedIn } from "@mui/icons-material";
import { Typography, Grid } from "@mui/material";

export const Contact = () => {
  return (
    <Grid>
      <Typography variant="h2">Contactame!</Typography>
      <MailOutline color="secondary" />
      <Typography variant="p">
        Email: 
        <a href="mailito:sebasmdq96@hotmail.com">sebasmdq96@hotmail.com</a>
      </Typography>
      <br />
      <WhatsApp color="secondary" />
      <Typography variant="p">Whatsapp: <a href="https://wa.me/+5492235135848?text=mensaje">+5492235135848</a></Typography>
      <br />
      <LinkedIn color="secondary" />
      <Typography variant="p">LinkedIn: <a href="https://www.linkedin.com/in/sebastian-loda">www.linkedin.com/in/sebastian-loda</a></Typography>
    </Grid>
  );
};
