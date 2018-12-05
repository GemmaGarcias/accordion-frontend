import Content from './Content';

describe('Content', () => {
  let content;
  beforeAll(() => content = new Content);

  test('content should exist', () => {
    expect(content).toBeDefined();
  });
  test('content should be instance of Content Class', () => {
    expect(content).toBeInstanceOf(Content);
  });
  test('init method should be defined', () => {
    expect(content.render).toBeDefined();
  });
  test('constructor should', () => {
      expect(content).toHaveProperty('text');
    });
});
