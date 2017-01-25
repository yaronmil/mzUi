import { MzUiPage } from './app.po';

describe('mz-ui App', function() {
  let page: MzUiPage;

  beforeEach(() => {
    page = new MzUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
