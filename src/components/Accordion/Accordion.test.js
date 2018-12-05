import Accordion from './Accordion';

describe('Accordion', () => {
  let accordion;
  beforeAll(() => accordion = new Accordion);

  test('accordion should exist', () => {
    expect(accordion).toBeDefined();
  });
  test('accordion should be instance of Accordion Class', () => {
    expect(accordion).toBeInstanceOf(Accordion);
  });
  test('init method should be defined', () => {
    expect(accordion.init).toBeDefined();
  });
});
