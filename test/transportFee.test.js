describe('transportFee' , function(){
    it('should return the tright price based on shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('should return the tright price based on shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });
    it('should return the tright price based on shift' , function(){
        assert.equal(transportFee('evening'), 'free');
    });
});