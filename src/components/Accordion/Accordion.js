import Section from '../Section/Section';
import { getDataFromApi } from '../../services/getDataFromApi';

class Accordion {
  // constructor(data) {
  //   this.data = data;
  // }

  handleEventListener = async() => {
    const sections = await this.getAllElementsByClassName('accordion-section');
    sections.map(section => {section.addEventListener('click', this.handleToggleSection);});
  };

  handleToggleSection = (e) => {
    const selectedSection = e.target.nextElementSibling;
    return selectedSection.classList.contains('active')
      ? this.handleClassFromElement(selectedSection, 'active', 'remove')
      : this.handleActiveClass(selectedSection);
  };

  handleActiveClass = async(section) => {
    let activeSections = await this.getAllElementsByClassName('accordion-section-content');
    await activeSections.forEach(
      (section, index) => { this.handleClassFromElement(section, 'active', 'remove');});
    this.handleClassFromElement(section, 'active', 'add');
  };

  handleClassFromElement = (element, className, method) => {
    element.classList[method](className);
  };

  getAllElementsByClassName = className => {
    return Array.from(document.getElementsByClassName(className));
  };

  createNewSectionElements = async() => {
    let data = await getDataFromApi();
    return data && data.map((dtData) => new Section(dtData).render()).join('');
  };

  attachSectionElementsToAccordion = async() => {
    let sections = await this.createNewSectionElements();
    this.getAllElementsByClassName('accordion')[0].innerHTML = sections;
  };

  render() {
    return `
    <h1 class='title'>Accordion JS</h1>
    <dl class='accordion'></dl>`;
  }

  init = async() => {
    await this.attachSectionElementsToAccordion();
    await this.handleEventListener();
  };
}

export default Accordion;
