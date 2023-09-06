create table if not exists reactions(
    reaction_id int primary key auto_increment,
    created_at timestamp default current_timestamp,
    author_id integer,
    content varchar(256) not null,
    FOREIGN KEY (author_id) REFERENCES users(id)
);

Helo world!