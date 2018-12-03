class Content {
  constructor(text) {
    this.text = text;
  }

  render () {
    return `
      <dd class='accordion__section__content'>
        <p>${this.text}</p>
      </dd>`;
  }
}

export default Content;
