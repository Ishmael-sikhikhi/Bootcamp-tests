describe('fromWhere' , function(){
    it('should return the own car is from' , function(){
        assert.equal(fromWhere('CY 123'), 'Bellville');
    });
    it('should return the own car is from' , function(){
        assert.equal(fromWhere('CJ 456'), 'Paarl');
    });
    it('should return the own car is from' , function(){
        assert.equal(fromWhere('CA 789'), 'Cape Town');
    });
    it('should return the own car is from' , function(){
        assert.equal(fromWhere('CL 876'), 'Some other place!');
    });
});