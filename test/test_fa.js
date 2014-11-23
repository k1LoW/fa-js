var fs = require('fs');
var files = fs.readdirSync('lib');
var expect = require('chai').expect;
var yaml = require('js-yaml');
var fa = require('./../release/fa'); // test release build

var TESTSET_DIR = __dirname + '/../fa/testsets/';

describe('fa.allow', function(){

  it('should assert alpha', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'alpha.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('alpha').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).alpha().assert()).to.eq(entry['expect']);
      });
  });
    
  it('should assert digit', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'digit.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('digit').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).digit().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert space', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'space.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('space').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).space().assert()).to.eq(entry['expect']);
      });
  });
    
  it('should assert symbol', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'symbol.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('symbol').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).symbol().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert hyphen', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'hyphen.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('hyphen').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).hyphen().assert()).to.eq(entry['expect']);
      });
  });
    
  it('should assert zenkaku', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('zenkaku').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).zenkaku().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert hiragana', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'hiragana.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('hiragana').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).hiragana().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert katakana', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'katakana.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('katakana').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).katakana().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert zenkaku_alpha', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_alpha.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('zenkaku_alpha').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).zenkaku_alpha().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert zenkaku_digit', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_digit.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('zenkaku_digit').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).zenkaku_digit().assert()).to.eq(entry['expect']);
      });
  });
    
  it('should assert zenkaku_space', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_space.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('zenkaku_space').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).zenkaku_space().assert()).to.eq(entry['expect']);
      });
  });

  it('should assert zenkaku_symbol', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_symbol.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).allow('zenkaku_symbol').assert()).to.eq(entry['expect']);

          expect(fa.set(entry['input']).zenkaku_symbol().assert()).to.eq(entry['expect']);
      });
  });
    
});

describe('fa.check', function(){
  
  it('should check notEmpty', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'not_empty.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).notEmpty().assert()).to.eq(entry['expect']);

          expect(fa.notEmpty(entry['input']).assert()).to.eq(entry['expect']);
      });
  });

  it('should check numeric', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'numeric.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).numeric().assert()).to.eq(entry['expect']);

          expect(fa.numeric(entry['input']).assert()).to.eq(entry['expect']);
      });
  });

  it('should check range', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'range3.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).range(3).assert()).to.eq(entry['expect']);

          expect(fa.range(entry['input'], 3).assert()).to.eq(entry['expect']);
      });
  });

  it('should check email', function(){
      var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'email.yml', 'utf8'));
      testset.forEach(function(entry) {
          expect(fa.set(entry['input']).email().assert()).to.eq(entry['expect']);

          expect(fa.email(entry['input']).assert()).to.eq(entry['expect']);
      });
  });

});
