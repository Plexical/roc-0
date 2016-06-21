"use strict";
import Mocha from 'mocha';
import chai from 'chai';

chai.should();
chai.use(require('chai-immutable'));
chai.use(require('chai-as-promised'));

const mocha = new Mocha({
  ui: 'bdd',
  reporter: (new Set(process.argv)).has('--report=min') && 'min' });

const grepWords = (
  process.argv.slice(-2).filter((s) => (
    s != 'node' && s.indexOf('browser-free') == -1)) )
if(grepWords.length > 0) {
  mocha.grep(grepWords.join(' '))
}

mocha.addFile('./cli-tests/redux.clicker.test.js');

/* Runs & ensures the number of failures is reported as process exit
 value (usable when run non-interactively: $? == 0 -> no failures,
   $? > 0 -> failures) */
mocha.run((failed) => ( process.on('exit',() => process.exit(failed)) ));
