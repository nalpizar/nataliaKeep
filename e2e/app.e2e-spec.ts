import { NataliaKeepPage } from './app.po';

describe('natalia-keep App', () => {
  let page: NataliaKeepPage;

  beforeEach(() => {
    page = new NataliaKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
