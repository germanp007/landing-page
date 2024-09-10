import Input from "../components/generics/input/Input";
import { Paragraph } from "../components/generics/paragraph/Paragraph";
import { Titles } from "../components/generics/titles/Titles";
import marcaAguaTablet from "../assets/images/marca-agua-tablet.png";
import useForm from "../hooks/useForm";

const Contact = () => {
  const { values, handleChange } = useForm();

  // const handleSubmit = () => {
  //   console.log(values);
  // };

  return (
    <section
      className="relative min-h-[70vh] p-8  md:p-16 overflow-hidden"
      id="contact"
    >
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
          onChange={handleChange}
        />
        <Input
          name="telefono"
          title="Telefono"
          type="number"
          placeholder="01135902366"
          id="telefono"
          onChange={handleChange}
        />
        <Input
          name="email"
          title="Correo Electronico"
          type="email"
          placeholder="ejemplo@gmail.com"
          id="email"
          onChange={handleChange}
        />
        <Input
          name="consulta"
          title="Consulta"
          type="textarea"
          placeholder="Escriba aqui su consulta"
          id="consulta"
          onChange={handleChange}
        />
      </form>
      <img
        src={marcaAguaTablet}
        alt="Logo"
        className="h-[80%]  absolute top-1/2 transform -translate-y-1/2 right-0  -z-10 "
      />
    </section>
  );
};

export default Contact;
