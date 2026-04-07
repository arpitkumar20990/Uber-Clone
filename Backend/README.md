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
Retrieves the authenticated user's profile information. This is a protected endpoint that requires a valid JWT token.

**Authentication:**
- Required: JWT token in the `Authorization` header (Bearer token) or in the `token` cookie

**Response:**

- **200 OK:** Profile retrieved successfully
  - Body: `{ "user": { user_object } }`

- **401 Unauthorized:** Missing or invalid token
  - Body: `{ "message": "Unauthorized" }`

**Notes:**  
- This endpoint requires authentication via the authUser middleware.
- The user object is attached to the request from the authentication middleware.



## User Logout Endpoint

### GET /users/logout

**Description:**  
Logs out the authenticated user by blacklisting their JWT token and clearing the session cookie. After logout, the token can no longer be used for authentication.

**Authentication:**
- Required: JWT token in the `Authorization` header (Bearer token) or in the `token` cookie

**Response:**

- **200 OK:** User logged out successfully
  - Body: `{ "message": "Logged out successfully" }`

- **401 Unauthorized:** Missing or invalid token
  - Body: `{ "message": "Unauthorized" }`

**Cookies:**
- The `token` cookie is cleared upon successful logout

**Notes:**  
- This endpoint requires authentication via the authUser middleware.
- The token is added to the blacklist to prevent reuse.
- The token cookie is cleared from the client side.



## Captain Registration Endpoint

### POST /captains/register

**Description:**  
Registers a new captain by creating an account with the provided details and vehicle information. The endpoint validates the input data and returns a JWT token upon successful registration.

**Request Body:**  
The request must be in JSON format with the following fields:

- `fullname` (object): Captain's full name
  - `firstname` (string, required): First name, minimum 3 characters
  - `lastname` (string, optional): Last name, minimum 3 characters if provided
- `email` (string, required): Valid email address
- `password` (string, required): Password, minimum 6 characters
- `vehicle` (object): Vehicle information
  - `color` (string, required): Vehicle color, minimum 3 characters
  - `plate` (string, required): Vehicle plate, minimum 3 characters
  - `capacity` (number, required): Passenger capacity, minimum 1
  - `vehicleType` (string, required): Type of vehicle - 'car', 'motorcycle', or 'auto'

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

**Response:**

- **201 Created:** Captain registered successfully
  - Body: `{ "token": "jwt_token_here", "captain": { captain_object } }`

- **400 Bad Request:** Validation errors or captain already exists
  - Body: `{ "errors": [ { "msg": "error_message", ... } ] }` or `{ "message": "Captain with this email already exists" }`

**Notes:**  
- Password is hashed before storing.
- Email must be unique.



## Captain Login Endpoint

### POST /captains/login

**Description:**  
Authenticates a captain by verifying their email and password credentials. Upon successful authentication, the endpoint returns a JWT token for subsequent authenticated requests.

**Request Body:**  
The request must be in JSON format with the following fields:

- `email` (string, required): Valid email address
- `password` (string, required): Password, minimum 6 characters

Example:
```json
{
  "email": "jane.smith@example.com",
  "password": "password123"
}
```

**Response:**

- **200 OK:** Captain authenticated successfully
  - Body: `{ "token": "jwt_token_here", "captain": { captain_object } }`

- **401 Unauthorized:** Invalid email or password
  - Body: `{ "message": "Invalid email or password" }`

- **400 Bad Request:** Validation errors
  - Body: `{ "errors": [ { "msg": "error_message", ... } ] }`

**Headers:**
- Token is set in `token` cookie for future requests

**Notes:**  
- Email and password must match a registered captain account.
- The returned JWT token should be included in subsequent requests for authentication.



## Captain Profile Endpoint

### GET /captains/profile

**Description:**  
Retrieves the authenticated captain's profile information. This is a protected endpoint that requires a valid JWT token.

**Authentication:**
- Required: JWT token in the `Authorization` header (Bearer token) or in the `token` cookie

**Response:**

- **200 OK:** Profile retrieved successfully
  - Body: `{ "captain": { captain_object } }`

- **401 Unauthorized:** Missing or invalid token
  - Body: `{ "message": "Unauthorized" }`

**Notes:**  
- This endpoint requires authentication via the authCaptain middleware.
- The captain object is attached to the request from the authentication middleware.



## Captain Logout Endpoint

### GET /captains/logout

**Description:**  
Logs out the authenticated captain by blacklisting their JWT token and clearing the session cookie. After logout, the token can no longer be used for authentication.

**Authentication:**
- Required: JWT token in the `Authorization` header (Bearer token) or in the `token` cookie

**Response:**

- **200 OK:** Captain logged out successfully
  - Body: `{ "message": "Logged out successfully" }`

- **401 Unauthorized:** Missing or invalid token
  - Body: `{ "message": "Unauthorized" }`

**Cookies:**
- The `token` cookie is cleared upon successful logout

**Notes:**  
- This endpoint requires authentication via the authCaptain middleware.
- The token is added to the blacklist to prevent reuse.
- The token cookie is cleared from the client side.