import { Accordion } from "./components/Accordion";
import { useState } from "react";

const App = () => {
  const [itemOpen, setItemOpen] = useState(0);

  return (
    <article className="container stack">
      <Accordion
        heading="Learn Html"
        open={itemOpen === 1}
        toggle={() => setItemOpen((old) => (old === 1 ? 0 : 1))}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit deserunt
        sint quae laborum ipsum aut corrupti a! Sequi unde repellat maiores
        necessitatibus laborum iste vero. Facere vero id maxime odio corporis!
        Vero accusantium debitis ab? Quibusdam, perferendis eveniet! Consectetur
        commodi, iure doloremque ea aperiam accusantium animi? Nobis placeat
        similique distinctio?
      </Accordion>
      <Accordion
        heading="Learn CSS"
        open={itemOpen === 2}
        toggle={() => setItemOpen((old) => (old === 2 ? 0 : 2))}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam iure
        vero nostrum dignissimos dolor recusandae deserunt incidunt inventore
        perferendis? Asperiores animi impedit modi obcaecati sapiente
        repellendus excepturi earum voluptatum eius quis? Harum, sed provident
        ipsa dolorum ut autem cumque ipsam non beatae debitis, voluptatum
        expedita! Aliquam cupiditate amet eius est.
      </Accordion>
      <Accordion
        heading="Learn JAVA"
        open={itemOpen === 3}
        toggle={() => setItemOpen((old) => (old === 3 ? 0 : 3))}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quasi?
        Nobis at suscipit non impedit doloremque atque vero ex nesciunt nam
        quibusdam. Facilis, impedit libero debitis ipsam velit nulla ullam?
        Deserunt ratione veritatis, itaque unde corrupti ea dolor reiciendis
        maiores quae est non fugiat repellat debitis expedita cumque aperiam!
        Reiciendis?
      </Accordion>
      <Accordion
        heading="Learn C++"
        open={itemOpen === 4}
        toggle={() => setItemOpen((old) => (old === 4 ? 0 : 4))}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias soluta
        ab beatae nobis, odit animi. Optio tempore minus dicta dolores corporis,
        dignissimos mollitia eveniet dolorem laboriosam, nostrum illo! Laborum,
        saepe tempora quis dicta voluptatum repudiandae. Optio rem itaque id,
        tempore officia, saepe laborum illum dolore tenetur excepturi culpa
        quibusdam maxime.
      </Accordion>
    </article>
  );
};

export default App;
