# Backend API Documentation

## User Registration Endpoint

### POST /users/register

**Description:**  
Registers a new user by creating an account with the provided details. The endpoint validates the input data and returns a JWT token upon successful registration.

**Request Body:**  
The request must be in JSON format with the following fields:

- `fullname` (object): User's full name
  - `firstname` (string, required): First name, minimum 3 characters
  - `lastname` (string, optional): Last name, minimum 3 characters if provided
- `email` (string, required): Valid email address, minimum 5 characters
- `password` (string, required): Password, minimum 6 characters

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- **201 Created:** User registered successfully
  - Body: `{ "token": "jwt_token_here", "user": { user_object } }`

- **400 Bad Request:** Validation errors
  - Body: `{ "errors": [ { "msg": "error_message", ... } ] }`

**Notes:**  
- Password is hashed before storing.
- Email must be unique.



## User Login Endpoint

### POST /users/login

**Description:**  
Authenticates a user by verifying their email and password credentials. Upon successful authentication, the endpoint returns a JWT token for subsequent authenticated requests.

**Request Body:**  
The request must be in JSON format with the following fields:

- `email` (string, required): Valid email address
- `password` (string, required): Password, minimum 6 characters

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Response:**

- **200 OK:** User authenticated successfully
  - Body: `{ "token": "jwt_token_here", "user": { user_object } }`

- **401 Unauthorized:** Invalid email or password
  - Body: `{ "message": "Invalid email or password" }`

- **400 Bad Request:** Validation errors
  - Body: `{ "errors": [ { "msg": "error_message", ... } ] }`

**Notes:**  
- Email and password must match a registered user account.
- The returned JWT token should be included in subsequent requests for authentication.



## User Profile Endpoint

### GET /users/profile

**Description:**  
Retrieves the profile information of the authenticated user. This endpoint requires a valid JWT token for authorization.

**Request Headers:**  
- `Authorization` (string, required): Bearer token in the format `Bearer <jwt_token>`

**Response:**

- **200 OK:** User profile retrieved successfully
  - Body: `{ user_object }`
  - Example:
    ```json
    {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": "socket_id_here"
    }
    ```

- **401 Unauthorized:** Invalid or missing token
  - Body: `{ "message": "Unauthorized" }`

**Notes:**  
- Requires authentication via JWT token.
- Returns the complete user object excluding sensitive information like password.



## User Logout Endpoint

### GET /users/logout

**Description:**  
Logs out the authenticated user by invalidating their JWT token. The token is added to a blacklist to prevent further use.

**Request Headers:**  
- `Authorization` (string, required): Bearer token in the format `Bearer <jwt_token>`

**Response:**

- **200 OK:** User logged out successfully
  - Body: `{ "message": "Logged out" }`
  - Example:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized:** Invalid or missing token
  - Body: `{ "message": "Unauthorized" }`

**Notes:**  
- Requires authentication via JWT token.
- Clears the authentication cookie if present.
- The token is blacklisted and cannot be used for future requests.



## Captain Registration Endpoint

### POST /captains/register

**Description:**  
Registers a new captain by creating an account with the provided details, including personal information and vehicle details. The endpoint validates the input data and returns a JWT token upon successful registration.

**Request Body:**  
The request must be in JSON format with the following fields:

- `fullname` (object): Captain's full name
  - `firstname` (string, required): First name, minimum 3 characters
  - `lastname` (string, optional): Last name, minimum 3 characters if provided
- `email` (string, required): Valid email address, must be unique
- `password` (string, required): Password, minimum 6 characters
- `vehicle` (object): Vehicle information
  - `color` (string, required): Vehicle color, minimum 3 characters
  - `plate` (string, required): Vehicle plate number, minimum 3 characters
  - `capacity` (number, required): Vehicle seating capacity, minimum 1
  - `vehicleType` (string, required): Type of vehicle - must be one of: `car`, `motorcycle`, `auto`

Example:
```json
{
  "fullname": {
    "firstname": "James",
    "lastname": "Smith"
  },
  "email": "james.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Response:**

- **201 Created:** Captain registered successfully
  - Body: `{ "token": "jwt_token_here", "captain": { captain_object } }`
  - Captain object includes:
    ```json
    {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "James",
        "lastname": "Smith"
      },
      "email": "james.smith@example.com",
      "status": "inactive",
      "vehicle": {
        "color": "black",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "location": {
        "lat": null,
        "lng": null
      }
    }
    ```

- **400 Bad Request:** Validation errors or captain already exists
  - Body: `{ "message": "Captain with this email already exists" }` or `{ "errors": [ { "msg": "error_message", ... } ] }`

**Validation Rules:**

| Field | Rule | Error Message |
|-------|------|---------------|
| `fullname.firstname` | Minimum 3 characters | "First name must be at least 3 character long" |
| `email` | Valid email format | "Invalid Email" |
| `password` | Minimum 6 characters | "password must be 6 character long" |
| `vehicle.color` | Minimum 3 characters | "Color must be at least 3 character long" |
| `vehicle.plate` | Minimum 3 characters | "Plate must be at least 3 character long" |
| `vehicle.capacity` | Integer, minimum 1 | "Capacity must be at least 1" |
| `vehicle.vehicleType` | One of: car, motorcycle, auto | "Vehicle type must be car, motorcycle or auto" |

**Notes:**  
- Password is hashed using bcrypt before storing.
- Email must be unique across all captains.
- The returned JWT token should be included in subsequent requests for authentication.
- Captain status defaults to `inactive` upon registration.
- Location is initialized with null values and can be updated later.