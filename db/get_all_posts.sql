select u.firstname, u.lastname, p.id, p.type, p.img_url, p.make, p.model, p.year, p.description, p.price from vehicles p
join sellers u on p.seller_id = u.id;