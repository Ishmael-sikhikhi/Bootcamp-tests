describe('findItemsOver' , function(){
    it('should return products that have quantity higher than the threshold' , function(){
        assert.deepEqual(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ],20), [{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });
    it('should show you a greet message and name' , function(){
        assert.equal(findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 17},
            {name : 'bananas', qty : 13},
            {name : 'apples', qty : 3},
        ]), '')
    });
});