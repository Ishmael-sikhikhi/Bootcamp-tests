describe('regCheck' , function(){
    it('should return true if Registration number is for GP, L, EC, MP ' , function(){
        assert.deepEqual(regCheck('DV 23 LP GP', 'MP'),false);
    });
    it('should return true if Registration number is for GP, L, EC, MP ' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });    
    it('should return true if Registration number is for GP, L, EC, MP ' , function(){
        assert.equal(regCheck('DV 23 NB GP', null),false);
    });
});