import { Angular4qsPage } from './app.po';

describe('angular4qs App', () => {
  let page: Angular4qsPage;

  beforeEach(() => {
    page = new Angular4qsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
