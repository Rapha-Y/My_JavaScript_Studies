const should = require('should')
const findArtists = require('../findArtists')

describe('find artists', () => {
    it('sum artists', () => {
        findArtists.sumArtist(2, 3).should.be.equal(5)
    })
    it('must add two numbers and return 30', () => {
        findArtists.sumArtist(10, 20).should.be.equal(30)
    })
    it('passes a name and must return message that the person was not found', () => {
        findArtists.findArtist('Mystery Skulls').should.be.equal('Artist not found')
    })
    it('returns a message that the name field is empty', () => {
        findArtists.findArtist().should.be.equal('Name field is empty')
    })
    it('returns message of invalid type', () => {
        findArtists.findArtist({}).should.be.equal('Invalid type')
    })
    it('must return a name from the list', () => {
        findArtists.findArtist('Patti Smith').should.be.equal('Patti Smith')
    })
})