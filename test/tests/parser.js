'use strict';

const expect = require('chai').expect;
const Parser = require('../../src/parser');

describe('Parser', function () {
    it('Creates instance', function () {
        let parser = new Parser();
        expect(parser).to.be.defined;
    });
});
