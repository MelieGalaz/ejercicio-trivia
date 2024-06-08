import { Container, Typography, Button } from "@mui/material";

export const Inicio = ({ setVista }) => {
  return (
    <Container
      disableGutters
      sx={{
        boxShadow: "2",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="h2">
        ¡Bienvenide a la Trivia!
      </Typography>
      <Button variant="contained" onClick={() => setVista(1)}>
        ¡Comienza el juego!
      </Button>
    </Container>
  );
};
