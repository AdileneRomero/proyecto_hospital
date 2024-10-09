import Axios from "axios";
const add =(nombre, edadAnios, edadMeses, numeroExpediente, numeroTelefonico, edad, )=>{
    Axios.post("http://localhost",{
        nombre: nombre,
        edadAnios: edadAnios,
        edadMeses: edadMeses,
        numeroExpediente: numeroExpediente,
        numeroTelefonico: numeroTelefonico,
        edad: edad,
    }) .then(() => {
        alert("Paciente " + nombre + " registrado");
        console.log("THEN");
      })
      .catch((error) => {
        console.error("Error al registrar paciente:", error);
        console.log("ERROR");
      });
};

export default add;