import Input from "../components/generics/input/Input";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import { Titles } from "../components/generics/titles/Titles";
import marcaAgua from "../assets/images/marca-agua-desktop.png";

const Contact = () => {
  return (
    <section className="relative min-h-[70vh] p-8  md:p-16" id="contact">
      <Titles>Contáctanos</Titles>
      <Paragraph className="w-auto">
        Te invitamos a llenar el siguiente formulario.
      </Paragraph>
      <form>
        <Input
          name="name"
          type="text"
          title="Nombre y Apellido"
          placeholder="Juan Perez"
          id="name"
        />
        <Input
          name="telefono"
          title="Telefono"
          type="number"
          placeholder="01135902366"
          id="telefono"
        />
        <Input
          name="email"
          title="Correo Electronico"
          type="email"
          placeholder="ejemplo@gmail.com"
          id="email"
        />
        <Input
          name="consulta"
          title="Consulta"
          type="textarea"
          placeholder="Escriba aqui su consulta"
          id="consulta"
        />
      </form>
      <img
        src={marcaAgua}
        alt="Logo"
        className="absolute top-0 right-0 h-full"
      />
    </section>
  );
};

export default Contact;
