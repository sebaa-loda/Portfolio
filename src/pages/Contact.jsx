import { MailOutline, WhatsApp, LinkedIn } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const Contact = () => {
  return (
    <div>
      <Typography variant="h2">Contactame!</Typography>

      <Typography variant="p">Email: </Typography>
      <MailOutline color="secondary" />
      <Typography variant="p">Whatsapp: </Typography>
      <WhatsApp color="secondary" />
      <Typography variant="p">LinkedIn: </Typography>
      <LinkedIn color="secondary" />
    </div>
  );
};
