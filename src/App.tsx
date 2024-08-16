import {
  Paragraph,
  ParagraphCard,
} from "./components/generics/paragraph/Paragraph";
import {
  // TitleLogo,
  TitleMain,
  Titles,
} from "./components/generics/titles/Titles";

const App = () => {
  return (
    <div
      className="bg-slate-500 w-screen h-screen
    "
    >
      {/* <Button>Home</Button>
      <Button>Enviar</Button>
      <Button>Ver Servicios</Button>
      <Input
        id="name"
        type="text"
        name="Nombre y Apellido"
        placeholder="Juan Pinto"
      />
      <Input
        id="telefono"
        type="number"
        name="Telefono"
        placeholder="011345623"
      />
      <Input
        id="email"
        type="email"
        name="Correo Electronico"
        placeholder="johnDoe@gmail.com"
      />
      <Input
        id="consulta"
        type="textarea"
        name="Consulta"
        placeholder="Escriba su consulta"
      /> */}
      <TitleMain>La solución que buscas</TitleMain>
      <Titles>podemos ayudarte</Titles>
      <Titles classname="text-white w-[411px]">nuestros servicios</Titles>
      <Paragraph>
        En Tel & Tech contamos con el mejor equipo capacitado para ayudarte a
        que CREES eso que necesitas para hacer crecer tu negocio.
      </Paragraph>
      <ParagraphCard>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        blanditiis atque dolorem amet sunt veritatis nulla dicta dolor omnis a,
        numquam unde tenetur id eaque autem doloribus voluptatum? Alias, earum?
      </ParagraphCard>
    </div>
  );
};

export default App;
