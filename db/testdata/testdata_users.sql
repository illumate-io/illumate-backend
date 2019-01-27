INSERT INTO users(
    user_id, username, email, password, type, school, created_at, updated_at)
VALUES
       -- Unit testing orgs - do not delete or edit!
   ('1', 'test user 1', 'test1@test.com', '$2a$10$olG94BulxSJTwFiyN0np0.7pkUXCTurSd6TGPhpTUcLwWBPsKkx.6', 'student', 'National University of Singapore', NOW(), NOW()),
   ('2', 'test user 2', 'test2@test.com', '$2a$10$olG94BulxSJTwFiyN0np0.7pkUXCTurSd6TGPhpTUcLwWBPsKkx.6', 'student', 'National University of Singapore', NOW(), NOW()),
   ('3', 'test user 3', 'test3@test.com', '$2a$10$olG94BulxSJTwFiyN0np0.7pkUXCTurSd6TGPhpTUcLwWBPsKkx.6', 'tutor', 'National University of Singapore', NOW(), NOW()),
   ('4', 'test user 4', 'test4@test.com', '$2a$10$olG94BulxSJTwFiyN0np0.7pkUXCTurSd6TGPhpTUcLwWBPsKkx.6', 'tutor', 'National University of Singapore', NOW(), NOW()),
   ('5', 'test user 5', 'test5@test.com', '$2a$10$olG94BulxSJTwFiyN0np0.7pkUXCTurSd6TGPhpTUcLwWBPsKkx.6', 'tutor', 'National University of Singapore', NOW(), NOW());
