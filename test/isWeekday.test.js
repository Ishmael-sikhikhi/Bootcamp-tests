describe('isWeekday' , function(){
    it('should return true if the day is a weekday' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return true if the day is a weekday' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});