describe('helloCtrl', function () {

  it('the dom initially has a greeting', function () {
    browser.get('http://127.0.0.1:8081/');
    expect(element(by.id('greeting')).getText()).toEqual('hello world');
  });

});