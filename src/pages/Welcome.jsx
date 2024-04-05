import { Typography, Grid } from "@mui/material";
import { About } from "./About";

export const Welcome = () => {
  return (
    <Grid
    container
    sx={{width:'100vh'}}
    >
      <Typography 
      variant="h1"
      fontSize='50px' 
      >Sebastián Patricio Loda</Typography>
      <Typography 
      variant="h3"
      fontSize='30px'
      >Bienvenidos a mi porfolio</Typography>
      <Typography 
      variant="h4"
      fontSize='20px'
      >Si quieres ponerte en contacto conmigo escribime a:  
      <a href="mailto:sebasmdq96@hotmail.com"> sebasmdq96@hotmail.com</a>
      </Typography>

      <Grid>
        <About />
      </Grid>
    </Grid>
  )
}
