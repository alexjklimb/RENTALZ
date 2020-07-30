INSERT INTO buyers(firstname, lastname, email, username, password) values(${firstname}, ${lastname}, ${email}, ${username}, ${hash})
RETURNING *;