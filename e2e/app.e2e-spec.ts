import { CoffeeProject001Page } from './app.po';

describe('coffee-project-001 App', function() {
  let page: CoffeeProject001Page;

  beforeEach(() => {
    page = new CoffeeProject001Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
