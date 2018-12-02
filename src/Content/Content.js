class Content {
  constructor(text) {
    this.text = text;
  }

  render () {
    return `
      <dd>
        <p>${this.text}</p>
      </dd>`;
  }
}

export default Content;
