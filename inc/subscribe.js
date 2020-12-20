var conn = require('./../inc/db')

module.exports = {
    postSubscribe(filds) {
        return new Promise((resolve, reject) => {

            conn.query(`
            INSERT INTO tb_emails(email)
            VALUES(?)
            ;`,
                [
                    filds.email
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