var conn = require('./../inc/db')

module.exports = {
    postReservations(filds) {
        return new Promise((resolve, reject) => {

            conn.query(`
            INSERT INTO tb_reservations(name, email, people, date, time)
            VALUES(?, ?, ?, ?, ?)
            ;`,
                [
                    filds.name,
                    filds.email,
                    filds.people,
                    filds.date,
                    filds.time
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