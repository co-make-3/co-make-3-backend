# CO-MAKE-3

Back end repository for: co-make-3

Base url: http://co-make-3.herokuapp.com/

## API Routes

| http type |            endpoint            |      category    | payload |
| --------- | :----------------------------: | --------------:  | -------:|
| post      |       /api/auth/register       |          auth    |     yes |
| post      |        /api/auth/login         |          auth    |     yes |
| get       |         /api/users/:id         |         users    |      no |
| put       |         /api/users/:id         |         users    |     yes |
| delete    |         /api/users/:id         |         users    |      no |
| get       |           /api/posts           |     all posts    |      no |
| get       | /api/posts/comments            |posts w/ comments |      no |
| get       |         /api/posts/:id         |         posts    |      no |
| get       |       /api/posts/by/user       | posts by user    |      no |
| post      |           /api/posts           |         posts    |     yes |
| put       |         /api/posts/:id         |         posts    |     yes |
| delete    |         /api/posts/:id         |         posts    |      no |
| put       | /api/posts/:id/increment/votes |         votes    |      no |
| put       | /api/posts/:id/decrement/votes |         votes    |      no |
| get       |    /api/posts/:id/comments     |      comments    |      no |
| post      |    /api/posts/:id/comments     |      comments    |     yes |
| put       |       /api/comments/:id        |      comments    |     yes |
| delete    |       /api/comments/:id        |      comments    |      no |

## Authentication Endpoints:

### Register a new user:

POST /api/auth/register

Required fields: username, password, first_name, last_name, email

Optional Fields: profile_image_url, government_official (boolean)

Expected Request Body:

```
{
  "username": "user1",
  "password": "password",
  "first_name": "Patrick",
  "last_name": "Replogle",
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

Returns:

```
{
    "new_user": {
        "id": 1,
        "username": "user1",
        "first_name": "Patrick",
        "last_name": "Replogle",
        "email": "user1@email.com",
        "profile_image_url": "http://www.image_url.com",
        "government_official": 0

    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjQsInVzZXJuYW1lIjoiRGVtbzUiLCJpYXQiOjE1NzY4MDg1OTgsImV4cCI6MTU3NjgxMjE5OH0.PCNRX9Wn16kFBrTDNdQtHlyqs8BbiLxvAXvJHXDokzM"
}
```

### Login user endpoint:

POST /api/auth/login

Expected Request Body:

```
{
  "username": "user1",
  "password": "password"
}
```

Returns:

```
{
    "id": 1,
    "username": "user1",
    "message": "Welcome user1!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU4MjU2NTg1NSwiZXhwIjoxNTgzMTcwNjU1fQ.co-vWFadM3IbKznIUVsbyZkOqv7A1h1evS4jIsGpokA"
}
```

## User Endpoints

### Get user info by user id

GET /api/users/:id

Returns:

```
{
  "id": 1,
  "username": "user1-edited",
  "first_name": "Patrick",
  "last_name": "Replogle",
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

### Update user by user id

PUT /api/users/:id

Expected Request Body:

```
{
  "username": "user1-edited",
  "password": "password",
  "first_name": "Patrick",
  "last_name": "Replogle",
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

Returns:

```
{
  "id": 1,
  "username": "user1-edited",
  "first_name": "Patrick",
  "last_name": "Replogle",
  "email": "user1@gmail.com",
  "profile_image_url": "http://www.image_url.com"
}
```

### Delete user

DELETE /api/users/:id

Returns:

```
}
  message: "User account successfully deleted",
  removed: 1
}
```

## Posts Endpoints

### Get all posts for all users

GET /api/posts

### Get all posts for all users with comments

GET /api/posts/comments 

### Get post and related comments using post id

GET /api/posts/:id

### Get posts authored by logged in user

GET /api/posts/by/user

### Add new post

Required fields: description, city, zip_code

optional fields: post_image_url

POST /api/posts

Expected Request Body:

```
{
	"description": "stuff needs to be fixed",
	"city": "Portland",
	"zip_code": "97206",
	"post_image_url": "www.image.com"
}
```

Returns:

```
{
  "id": 5,
  "description": "stuff needs to be fixed",
  "post_image_url": "www.image.com",
  "city": "Portland",
  "zip_code": "97206",
  "user_id": 1,
  "votes": 0
}
```

### Update post using post id

Same required/optional fields as adding a post

PUT /api/posts/:id

### Delete post using post id

DELETE /api/posts/:id

## Votes Endpoints

### Increment votes for one post using post id

No need to add a payload/body to this request

PUT /api/posts/:id/increment/votes

### Decrement votes for one post using post id

No need to add a payload/body to this request

PUT /api/posts/:id/decrement/votes

## Comments Endpoints

### Get all comments associated with a single post

GET /api/posts/:id/comments

### Add comment to post using post id

POST /api/posts/:id/comments

Expected Request Body:

```
{
	"text": "new comment"
}
```

Returns:

```
{
  "id": 9,
  "text": "new comment",
  "username": "user1",
  "post_id": 4,
  "user_id": 1
}
```

### Edit comment using comment id

PUT /api/comments/:id

```
{
	"text": "edited comment"
}
```

Returns:

```
{
  "id": 4,
  "text": "edited comment",
  "username": "user1",
  "post_id": 3,
  "user_id": 1
}
```

### Delete a comment using comment id

DELETE /api/comments/:id
