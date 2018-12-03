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
  handleClick = () => {
    let sectionList = Array.from(document.getElementsByClassName('accordion__section'));
    sectionList.map((section, index) => {
      section.addEventListener('click', this.addActiveClass);
    });
  };

  addActiveClass = (e) => {
    let sectionSelected = e.target.nextElementSibling;
    sectionSelected.classList.add('active');
  };

  render() {
    return `
    <h1 class='title'>Accordion JS</h1>
    <dl class='accordion'>
      ${data.map((dataSection, index) =>
        new Section(dataSection).render()
      ).join('')}
    </dl>`;
  }
  init(){
    this.handleClick();
  }
}

export default Accordion;
