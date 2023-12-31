create table if not exists reactions(
    reaction_id int primary key auto_increment,
    created_at timestamp default current_timestamp,
    author_id int,
		video_id int,
    content int check(content between 1 and 5),
    FOREIGN KEY (author_id) REFERENCES users(id),
		FOREIGN KEY (video_id) REFERENCES videos(video_id)
);