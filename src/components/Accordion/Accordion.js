import Section from '../Section/Section';
import { getDataFromApi } from '../../services/getDataFromApi';

class Accordion {
  // constructor(data) {
  //   this.data = data;
  // }

  handleEventListener = () => {
    const sections = this.getElementsInArray('accordion__section');
    sections.map(section => {section.addEventListener('click', this.handleToggleSection);});
  };

  handleToggleSection = (e) => {
    const selectedSection = e.target.nextElementSibling;
    return selectedSection.classList.contains('active')
      ? this.removeActiveClass(selectedSection) : this.addActiveClass(selectedSection);
  };

  removeActiveClass = section => {
    section.classList.remove('active');
  };

  addActiveClass = async(section) => {
    let activeSections = await this.getElementsInArray('accordion__section__content');
    await activeSections.forEach((section, index) => {this.removeActiveClass(section);});
    section.classList.add('active');
  };

  getElementsInArray = className => {
    return Array.from(document.getElementsByClassName(className));
  };

  handleData = async () => {
    const response = await getDataFromApi();
    return response;
  };

  createSectionElements = async() => {
    const data = await this.handleData();
    const sections = data && data.map(
      (dataSection) => new Section(dataSection).render()).join('');
    this.attachSectionElements(sections);
  };

  attachSectionElements = (newSections) => {
    document.getElementsByClassName('accordion')[0].innerHTML = newSections;
  };

  render() {
    return `
    <h1 class='title'>Accordion JS</h1>
    <dl class='accordion'></dl>`;
  }

  init = async() => {
    await this.createSectionElements();
    await this.handleEventListener();
  };
}

export default Accordion;
