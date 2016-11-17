    // Jasmine Test

    describe('Hello World example', function() {

    beforeEach(module('myApp'));

    var myCtrl,
        scope;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        myCtrl = $controller('myCtrl', {
            $scope: scope
        });
    }));
    it('says hello world!', function () {
        expect(scope.greeting).toEqual('Hello world!');
    });

});