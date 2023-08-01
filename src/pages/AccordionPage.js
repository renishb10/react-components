import './App.css';
import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 123,
      label: 'Hello world how are you?',
      content: "Lorem ipsum dolor sit amet consectetur fugit odit ea odio nihil. Dolores harum minima inventore? Non!"
    },
    {
      id: 234,
      label: 'Hello world how are you?',
      content: "Lorem ipsum dolor sit amet consectetur fugit odit ea odio nihil. Dolores harum minima inventore? Non!"
    },
    {
      id: 334,
      label: 'Hello world how are you?',
      content: "Lorem ipsum dolor sit amet consectetur fugit odit ea odio nihil. Dolores harum minima inventore? Non!"
    },
    {
      id: 344,
      label: 'Hello world how are you?',
      content: "Lorem ipsum dolor sit amet consectetur fugit odit ea odio nihil. Dolores harum minima inventore? Non!"
    }
  ]
  return (
    <div className="AccordionPage">
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
