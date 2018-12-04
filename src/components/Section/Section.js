import Content from '../Content/Content';
class Section {
  constructor({ title, content }) {
    this.title = title;
    this.content = content;
  }

  render() {
    const content = new Content(this.content).render();
    return `
    <dt class='accordion__section'>${this.title}</dt>${content}`;
  }
}

export default Section;
