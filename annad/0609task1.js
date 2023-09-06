// create table if not exists reactions(
//     reaction_id integer primary key auto_increment,
//     created_at timestamp default current_timestamp,
// 	   author_id integer,
//     video_id integer,
//     FOREIGN KEY (author_id) REFERENCES users(user_id),
//     FOREIGN KEY (video_id) REFERENCES videos(video_id)
// );