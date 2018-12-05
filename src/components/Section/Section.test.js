import Section from './Section';

describe('Section', () => {
  let section;
  let testExpected = { title: 'title', content: 'content' };
  beforeAll(() => section = new Section(testExpected));

  test('section should exist', () => {
    expect(section).toBeDefined();
  });
  test('section should be instance of Section Class', () => {
    expect(section).toBeInstanceOf(Section);
  });
  test('init method should be defined', () => {
    expect(section.render).toBeDefined();
  });
  test('have constructor properties', () => {
    expect(section).toHaveProperty('title');
    expect(section).toHaveProperty('content');
  });
});
