import { Ex2TestPage } from './app.po';

describe('ex2-test App', function() {
  let page: Ex2TestPage;

  beforeEach(() => {
    page = new Ex2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
