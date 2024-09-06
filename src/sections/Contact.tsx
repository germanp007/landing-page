import { Paragraph } from "../components/generics/paragraph/Paragraph";
import { Titles } from "../components/generics/titles/Titles";

const Contact = () => {
  return (
    <section className="h-[70vh] p-8">
      <Titles>Contáctanos</Titles>
      <Paragraph>Te invitamos a llenar el siguiente formulario.</Paragraph>
      <form></form>
    </section>
  );
};

export default Contact;
