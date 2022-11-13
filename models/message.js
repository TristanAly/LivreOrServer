let connection = require('../db');

class Message {

    static update (content, id, cb) {
        connection.query('UPDATE messages SET content = ? WHERE id = ?', [content, id], (err, result) => {
          if (err) throw err
          console.log("update message:", { content , id });
          cb(result)
        })
      }
      static delete (id, cb) {
        connection.query('DELETE FROM messages WHERE id = ?', [id], (err, result) => {
          if (err) throw err
          console.log("delete message:", { id });
          cb(result)
        })
      }

    static create (content, cb) {
        connection.query('INSERT INTO messages SET content = ?, created_at = ?', [content, new Date()], (err, result) => {
          if (err) throw err
          console.log("created message:", { content });
          cb(result)
        })
      }

    static all (cb) {

        connection.query('SELECT * FROM messages', (err, result) => {

            if (err) throw err
            cb(result)
        })
    }

    static find (id, cb) {

        connection.query('SELECT * FROM messages WHERE id = ? LIMIT 1', [id], (err, result) => {

            if (err) throw err
            cb(result)
        })
    }
}

module.exports = Message;