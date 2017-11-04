import { Giftthecode2017Page } from './app.po';

describe('giftthecode2017 App', () => {
  let page: Giftthecode2017Page;

  beforeEach(() => {
    page = new Giftthecode2017Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
