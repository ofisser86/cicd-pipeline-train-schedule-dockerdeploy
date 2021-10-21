var request = require('supertest');
var express = require('express');
 
var app = require('../app');
 
describe('Index Page', function() {
  it("renders successfully", function(done) {
    return "renders successfully";    
  })
})

describe('Trains API', function() {
  it("returns data successfully", function(done) {
    request(app).get('/trains').expect(200).expect('Content-Length', '1093').expect('Content-Type', /json/, done); ;    
  })
})
