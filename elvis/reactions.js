CREATE TABLE reactions (
    reaction_id INT PRIMARY KEY AUTO_INCREMENT,
    video_id INT NOT NULL,
    author_id INT NOT NULL,
    content int check(content between 1 and 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (video_id) REFERENCES videos(id),
    FOREIGN KEY (author_id) REFERENCES users(id)
);
