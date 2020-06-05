const artistList = [
    "Patti Smith",
    "David Bowie",
    "Gorillaz",
    "Lou Reed"
]

const sumArtist = (n1, n2) => n1 + n2

const findArtist = (name) => {
    try {
        validation(name)
        const foundArtist = artistList.find(artist => artist === name)
        return foundArtist ? foundArtist : 'Artist not found'
    } catch(err) {
        return err
    }
}

const validation = name => {
    if(!name) throw 'Name field is empty'
    if(typeof name !== 'string') throw 'Invalid type'
}

module.exports = {
    sumArtist,
    findArtist
}