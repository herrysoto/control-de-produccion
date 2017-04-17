import { ControlDeProduccionPage } from './app.po';

describe('control-de-produccion App', () => {
  let page: ControlDeProduccionPage;

  beforeEach(() => {
    page = new ControlDeProduccionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
