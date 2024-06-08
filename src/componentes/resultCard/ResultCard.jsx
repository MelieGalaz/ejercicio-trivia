import { Box, Typography, Button } from "@mui/material";
export const ResultCard = ({ contador, setVista, setIndice, setContador }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#e3f1ff",
        width: "60%",
        minHeight: 160,
        borderRadius: 2,
        boxShadow: 1,
        color: "black",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">¡Gracias por participar!</Typography>

      <Typography sx={{ fontSize: 25 }}>
        Tu resultado final es : {contador}{" "}
      </Typography>

      <Typography>¿Quieres intentarlo de nuevo?</Typography>

      <Button
        variant="contained"
        onClick={() => {
          setVista(1);
          setContador(0);
          setIndice(0);
        }}
        sx={{ margin: "auto" }}
      >
        Reiniciar
      </Button>
    </Box>
  );
};
