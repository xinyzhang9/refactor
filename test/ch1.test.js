import { statement } from '../src/ch1';
import { expect } from "chai";
describe('chapter 1 test', () => {
    const invoices = require('../data/ch1/invoices.json');
    const plays = require('../data/ch1/plays.json');
    it('should print statement', () => {
        let res = statement(invoices, plays);
        let array = res.split('\n');
        expect(array[0]).to.equal("Statement for BigCo");
        expect(array[1]).to.equal("  Hamlet: $650.00 (55 seats)");
        expect(array[2]).to.equal("  As You Like It: $580.00 (35 seats)");
        expect(array[3]).to.equal("  Othello: $500.00 (40 seats)");
        expect(array[4]).to.equal("Amount owed is $1,730.00");
        expect(array[5]).to.equal("You earned 47 credits");
    })
})