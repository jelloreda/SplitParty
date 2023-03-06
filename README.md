API ENDPOINTS

Users Routes

Base URL /users

| HTTP Method | URI Path     | Description                   |
|-------------|--------------|-------------------------------|
| GET         | /getAllUsers | All users list                |
| GET         | /:id         | User details with matching id |

Products Routes

Base URL /products

| HTTP Method | URI Path        | Description                      |
|-------------|-----------------|----------------------------------|
| GET         | /getAllProducts | All Products List                |
| POST        | /saveProducts   | Create new products              |
| GET         | /:id            | Product details with matching id |
| PUT         | /:id/edit       | Edit product with matching id    |
| DELETE      | /:id/delete     | Delete product with matching id  |

Event Routes

Base URL /events

| HTTP Method | URI Path      | Description                    |
|-------------|---------------|--------------------------------|
| GET         | /getAllEvents | All Events List                |
| POST        | /saveEvents   | Create new events              |
| GET         | /:id          | Event details with matching id |
| PUT         | /:id/edit     | Edit event with matching id    |
| DELETE      | /:id/delete   | Delete event with matching id  |

Auth Routes

Base URL /auth

| HTTP Method | URI Path | Description       |
|-------------|----------|-------------------|
| POST        | /signup  | Sign up user      |
| POST        | /login   | Login user        |
| GET         | /verify  | Verify auth token |

CLIENTES ROUTES

| URL                  | Description                     | Protected |
|----------------------|---------------------------------|-----------|
| /                    | Index page                      |           |
| /login               | Login page                      |           |
| /signup              | Signup page                     |           |
| /profile             | Logged in user Profile          | x         |
| /profile/edit        | Edit logged in user profile     | x         |
| /profile/delete      | Delete logged in user profile   | x         |
| /users               | Get all users list              |           |
| /users/:id           | User detail with matching id    | x         |
| /events              | Events List Page                |           |
| /events/create       | New event form page             | x         |
| /events/:id          | Event details page              | x         |
| /events/:id/edit     | Edit event form page            | x         |
| /events/:id/delete   | Delete event                    | x         |
| /products            | Get all products list           |           |
| /products/create     | Create new product              | x         |
| /products/:id        | Product detail with matching id |           |
| /products/:id/edit   | Edit product with matching id   | x         |
| /products/:id/delete | Delete product with matching id | x         |