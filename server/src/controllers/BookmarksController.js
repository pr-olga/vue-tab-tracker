const { Bookmark } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const { songId, userId } = req.query
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      res.send(bookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured again.'
      })
    }
  },
  async post (req, res) {
    try {
      const userId = req.body.userId
      const songId = req.body.songId
      const bookmark = await Bookmark.findOne({
        where: {
          SongId: songId,
          UserId: userId
        }
      })
      if (bookmark) {
        return res.status(400).send({
          error: 'you already have this bookmark'
        })
      }
      const newBookmark = await Bookmark.create({
        SongId: songId,
        UserId: userId
      })

      res.send(newBookmark)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured again.'
      })
    }
  },
  async delete (req, res) {
    try {
      const { bookmarkId } = req.params
      const bookmark = await Bookmark.findOne({
        where: {
          id: bookmarkId
        }
      })
      await bookmark.destroy()
      res.send(bookmark)
    } catch (err) {
      console.log(err)
      res.status(500).send({
        error: 'An error has occured trying to delete a bookmark'
      })
    }
  }
}
