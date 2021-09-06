const { expect } = require('@jest/globals')
const {sum} = require('./twoSum')



test('test twoSum function' , () => {
   expect(sum(1 , 3)).toBe(4)//точное совпадение
})

test('' , () => {
   expect(sum(3,4)).toBeGreaterThan(3)//больше этого
   expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
})

test('' , () => {

})