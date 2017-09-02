import { AngularmaterialPage } from './app.po';

describe('angularmaterial App', () => {
  let page: AngularmaterialPage;

  beforeEach(() => {
    page = new AngularmaterialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
