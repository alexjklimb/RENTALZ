INSERT INTO sellers(firstname, lastname, email, username, password) values(${firstname}, ${lastname}, ${email}, ${username}, ${hash})
RETURNING *;