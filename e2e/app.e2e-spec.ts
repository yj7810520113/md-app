import { MdAppPage } from './app.po';

describe('md-app App', () => {
  let page: MdAppPage;

  beforeEach(() => {
    page = new MdAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
