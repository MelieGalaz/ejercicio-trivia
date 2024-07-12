import {
  Alert,
  Button,
  Box,
  Container,
  Typography,
  FormControl,
  FormLabel,
  Modal,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import { useState } from "react";

export const Card = ({
  preguntasTrivia,
  setContador,
  contador,
  indice,
  setIndice,
  setVista,
  total,
}) => {
  const { pregunta, opciones, respuestaCorrecta, explicación } =
    preguntasTrivia;
  const [respuesta, setRespuesta] = useState("");
  const [alerta, setAlerta] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [open, setOpen] = useState(false);
  const [explicacion, setExplicacion] = useState("");

  const handleRespuesta = (e) => {
    setRespuesta(e.target.value);
    setAlerta(false);
  };

  const handleCheckAnswer = () => {
    if (respuesta === "") {
      setAlerta(true);
    } else {
      if (respuestaCorrecta === respuesta) {
        setMensaje("CORRECTA ");
        setOpen(true);
        setExplicacion("");
        setContador(contador + 1);
      } else {
        setMensaje("INCORRECTA ");
        setExplicacion(explicación);
        setOpen(true);
      }
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    maxWidth: "800px",
  };

  const handleClose = () => {
    setOpen(false);
    if (indice + 1 === total) {
      setVista(2);
    } else {
      setIndice(indice + 1);
    }
    setRespuesta("");
  };

  return (
    <Container
      sx={{
        backgroundColor: "#e3f1ff",
        width: "80%",

        minHeight: 160,
        borderRadius: 2,
        boxShadow: 1,
        color: "black",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ textAlign: "center", paddingBottom: 2, fontSize: 25 }}
      >
        {pregunta}
      </Typography>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Selecciona una Respuesta
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          value={respuesta}
          onChange={handleRespuesta}
        >
          {opciones.map((opcion, index) => (
            <FormControlLabel
              key={index}
              value={opcion}
              control={<Radio />}
              label={opcion}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        onClick={handleCheckAnswer}
        sx={{
          width: "50%",
          margin: "auto",
          fontSize: 12,
        }}
      >
        Enviar Respuesta
      </Button>

      {alerta && <Alert severity="warning">Selecciona una opción</Alert>}

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Tu respuesta fue...
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {mensaje}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {explicacion}
            </Typography>
            <Button onClick={handleClose}>Siguiente Pregunta</Button>
          </Box>
        </Modal>
      </div>
    </Container>
  );
};
