INSERT INTO silly_joke_user (email, hash)
VALUES ($1, $2)
returning *;