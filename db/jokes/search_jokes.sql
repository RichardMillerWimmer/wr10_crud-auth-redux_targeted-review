SELECT * FROM silly_joke
WHERE joke_text ILIKE '%' $1 '%';