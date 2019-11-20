import { expect } from "chai";
import sayHello from '../src/index';

describe("index test", () => {
    describe("sayHello fuction", () => {
        it('should say hello', () => {
            expect(sayHello()).to.equal("hello");
        })
    })
})