import { Accordion } from "./components/Accordion";

const roadMap = [
  {
    heading: "Learn Html",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa veniam iste, ad, earum autem, expedita quaerat tenetur nulla aspernatur eius voluptas consequatur quia. Suscipit nihil voluptas beatae ratione esse et harum cumque laboriosam, illo labore blanditiis reiciendis ab delectus consectetur deserunt qui nobis rem. A rem iusto ut unde!",
  },

  {
    heading: "Learn CSS",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, reprehenderit quo dolore culpa iusto perferendis earum inventore, facere repudiandae vel excepturi maxime veniam? Sit temporibus neque doloribus enim adipisci iusto nam, facilis hic soluta, odio dolorum praesentium possimus quidem magnam atque id aliquid pariatur quis explicabo laborum ipsa illo incidunt?",
  },
  {
    heading: "Learn JAVA",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ad quia natus animi voluptatibus exercitationem dolorem quis autem eaque consequuntur possimus qui harum, architecto beatae iure nostrum quibusdam, porro error magnam delectus. Itaque ratione illum cupiditate reprehenderit debitis nam nemo sunt, sed voluptas dignissimos mollitia velit unde perspiciatis? Ratione, enim.",
  },
  {
    heading: "Learn C++",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse alias voluptatem facere omnis. Laboriosam esse, atque eligendi ullam, minima minus laudantium temporibus omnis molestias beatae dolor adipisci, optio deleniti sequi a explicabo necessitatibus dolore. Exercitationem officia quibusdam temporibus sunt? Doloremque est labore nam officia dignissimos accusantium porro tempora ipsum id!",
  },
];

const App = () => {
  return (
    <div className="wrapper">
      <Accordion.Root className="container">
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <Accordion.Root className="container" collapsible>
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <Accordion.Root className="container" type="multiple">
        {roadMap.map(({ heading, content }, idx) => (
          <Accordion.Item key={idx} heading={heading}>
            {content}
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
};

export default App;
