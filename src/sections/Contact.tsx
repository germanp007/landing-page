import Input from "../components/generics/input/Input";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import { Titles } from "../components/generics/titles/Titles";

const Contact = () => {
  return (
    <section className="h-[70vh] p-8">
      <Titles>Contáctanos</Titles>
      <Paragraph>Te invitamos a llenar el siguiente formulario.</Paragraph>
      <form>
        <Input
          name="Nombre y Apellido"
          type="text"
          placeholder="Juan Perez"
          id="name"
        />
        <Input
          name="Telefono"
          type="number"
          placeholder="01135902366"
          id="telefono"
        />
        <Input
          name="Correo Electronico"
          type="email"
          placeholder="ejemplo@gmail.com"
          id="email"
        />
        <Input
          name="Consulta"
          type="textarea"
          placeholder="Escriba aqui su consulta"
          id="consulta"
        />
      </form>
    </section>
  );
};

export default Contact;
