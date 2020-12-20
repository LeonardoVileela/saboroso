var conn = require('./../inc/db')

module.exports = {
    postContact(filds) {
        return new Promise((resolve, reject) => {

            conn.query(`
            INSERT INTO tb_contacts(name, email, message)
            VALUES(?, ?, ?)
            ;`,
                [
                    filds.name,
                    filds.email,
                    filds.message
                ], (err, results) => {

                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }
}