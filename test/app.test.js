const math = require('../app');
const assert = require('assert');

describe('Math Library', () => {
    it('Sum is 3', () => {
        const res = math.add(1, 2);

        assert.equal(res, 3);
    });

    it('Product is 18', () => {
        const res = math.multiply(9, 2);

        assert.equal(res, 8);
    })
});