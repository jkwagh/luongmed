-- +goose Up

CREATE TABLE events (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL, 
    event_name TEXT NOT NULL,
    event_date TEXT NOT NULL,
    event_description TEXT UNIQUE NOT NULL
);

-- +goose Down
DROP TABLE users;