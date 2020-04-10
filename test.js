const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('./index')
const should = chai.should()

chai.use(chaiHttp)

describe('Hello World', function () {
  it('should return status 200 on /', function (done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        res.should.have.status(200)
        res.text.should.equal('Hello World!')
        done()
      })
  })
})
