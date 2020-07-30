INSERT INTO sellers(firstname, lastname, email, username, password) values(${firstname}, ${lastname}, ${email}, ${username}, ${password})
RETURNING id, firstname, lastname, email, username, password;