class Content {
  constructor(text) {
    this.text = text;
  }

  render () {
    return `
      <dd class='accordion-section-content'>
        <p>${this.text}</p>
      </dd>`;
  }
}

export default Content;
