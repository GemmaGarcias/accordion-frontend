import Section from '../Section/Section';

const data = [
  {
    title: 'Section 1',
    content: 'Content section 1',
  },
  {
    title: 'Section 2',
    content: 'Content section 2',
  },
  {
    title: 'Section 3',
    content: 'Content section 3',
  },
];

class Accordion {
  // constructor() {}

  render() {
    return `
    <h1>Accordion JS</h1>
    <dl>
      ${data.map((dataSection, index) =>
        new Section(dataSection).render()
      ).join('')}
    </dl>`;
  }
}

export default Accordion;
