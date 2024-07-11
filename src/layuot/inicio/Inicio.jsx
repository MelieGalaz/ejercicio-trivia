import { Container, Typography, Button } from "@mui/material";

export const Inicio = ({ setVista }) => {
  return (
    <Container
      disableGutters
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
        gap: 3,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        ¡Bienvenido a la Trivia!
      </Typography>
      <Button variant="contained" onClick={() => setVista(1)}>
        ¡Comienza el juego!
      </Button>
    </Container>
  );
};
