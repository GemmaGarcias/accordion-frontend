import Content from '../Content/Content';
class Section {
  constructor({ title, content }) {
    this.title = title;
    this.content = content;
  }

  render() {
    let content = new Content(this.content).render();
    return `
    <dt>${this.title}</dt>${content}`;
  }
}

export default Section;
