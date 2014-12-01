var fs = require('fs');
var files = fs.readdirSync('lib');
var expect = require('chai').expect;
var yaml = require('js-yaml');
var fa = require('./../release/fa'); // test release build

var TESTSET_DIR = __dirname + '/../fa/testsets/';

describe('fa.chars', function(){

  it('should assert alpha', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'alpha.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('alpha').assert()).to.eq(entry['expect']);
    });
  });
  
  it('should assert digit', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'digit.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('digit').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert space', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'space.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('space').assert()).to.eq(entry['expect']);
    });
  });
  
  it('should assert symbol', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'symbol.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('symbol').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert hyphen', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'hyphen.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('hyphen').assert()).to.eq(entry['expect']);
    });
  });
  
  it('should assert zenkaku', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('zenkaku').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert hiragana', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'hiragana.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('hiragana').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert katakana', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'katakana.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('katakana').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert zenkaku_alpha', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_alpha.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('zenkaku_alpha').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert zenkaku_digit', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_digit.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('zenkaku_digit').assert()).to.eq(entry['expect']);
    });
  });
  
  it('should assert zenkaku_space', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_space.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('zenkaku_space').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert zenkaku_symbol', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zenkaku_symbol.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('zenkaku_symbol').assert()).to.eq(entry['expect']);
    });
  });

  it('should assert alphanumeric', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'alphanumeric.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).char('alpha+digit').assert()).to.eq(entry['expect']);
    });
  });
  
});

describe('fa.format', function(){
  
  it('should format notEmpty', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'not_empty.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).format('notEmpty').assert()).to.eq(entry['expect']);
      expect(fa.notEmpty(entry['input']).assert()).to.eq(entry['expect']);
      expect(fa.set(entry['input']).notEmpty().assert()).to.eq(entry['expect']);
    });
  });

  it('should format int', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'int.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).format('int').assert()).to.eq(entry['expect']);
      expect(fa.int(entry['input']).assert()).to.eq(entry['expect']);
      expect(fa.set(entry['input']).int().assert()).to.eq(entry['expect']);
    });
  });

  it('should format range', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'range3.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).range(3).assert()).to.eq(entry['expect']);
      expect(fa.range(entry['input'], 3).assert()).to.eq(entry['expect']);
    });
  });

  it('should format email', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'email.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).format('email').assert()).to.eq(entry['expect']);
      expect(fa.email(entry['input']).assert()).to.eq(entry['expect']);
      expect(fa.set(entry['input']).email().assert()).to.eq(entry['expect']);
    });
  });

  it('should format zipcode', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'zipcode.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).format('zipcode').assert()).to.eq(entry['expect']);
      expect(fa.zipcode(entry['input']).assert()).to.eq(entry['expect']);
      expect(fa.set(entry['input']).zipcode().assert()).to.eq(entry['expect']);
    });
  });

  it('should format telNo', function(){
    var testset = yaml.safeLoad(fs.readFileSync(TESTSET_DIR + 'telNo.yml', 'utf8'));
    testset.forEach(function(entry) {
      expect(fa.set(entry['input']).format('telNo').assert()).to.eq(entry['expect']);
      expect(fa.telNo(entry['input']).assert()).to.eq(entry['expect']);
      expect(fa.set(entry['input']).telNo().assert()).to.eq(entry['expect']);
    });
  });

});
