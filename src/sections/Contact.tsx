import Input from "../components/generics/input/Input";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import { Titles } from "../components/generics/titles/Titles";

const Contact = () => {
  return (
    <section className="min-h-[70vh] p-8" id="contact">
      <Titles>Contáctanos</Titles>
      <Paragraph>Te invitamos a llenar el siguiente formulario.</Paragraph>
      <form>
        <Input
          title="Nombre y Apellido"
          type="text"
          placeholder="Juan Perez"
          id="name"
        />
        <Input
          title="Telefono"
          type="number"
          placeholder="01135902366"
          id="telefono"
        />
        <Input
          title="Correo Electronico"
          type="email"
          placeholder="ejemplo@gmail.com"
          id="email"
        />
        <Input
          title="Consulta"
          type="textarea"
          placeholder="Escriba aqui su consulta"
          id="consulta"
        />
      </form>
    </section>
  );
};

export default Contact;
