# UsersApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**signupPost**](UsersApi.md#signuppost) | **POST** /signup | Sign up a new user |
| [**usersEmailEmailGet**](UsersApi.md#usersemailemailget) | **GET** /users/email/{email} | Get user by email |
| [**usersIdDelete**](UsersApi.md#usersiddelete) | **DELETE** /users/{id} | Delete user |
| [**usersIdGet**](UsersApi.md#usersidget) | **GET** /users/{id} | Get user by ID |
| [**usersMeGet**](UsersApi.md#usersmeget) | **GET** /users/me | Get current authenticated user |
| [**usersPost**](UsersApi.md#userspost) | **POST** /users | Create a new user |



## signupPost

> UsersUser signupPost(usersSignupRequest)

Sign up a new user

Create a new user account with email, password, and role

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { SignupPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new UsersApi();

  const body = {
    // UsersSignupRequest | Signup Request
    usersSignupRequest: ...,
  } satisfies SignupPostRequest;

  try {
    const data = await api.signupPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **usersSignupRequest** | [UsersSignupRequest](UsersSignupRequest.md) | Signup Request | |

### Return type

[**UsersUser**](UsersUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | invalid request |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersEmailEmailGet

> UsersUser usersEmailEmailGet(email)

Get user by email

Retrieve a specific user by their email address

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersEmailEmailGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User Email
    email: email_example,
  } satisfies UsersEmailEmailGetRequest;

  try {
    const data = await api.usersEmailEmailGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **email** | `string` | User Email | [Defaults to `undefined`] |

### Return type

[**UsersUser**](UsersUser.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | invalid request |  -  |
| **404** | not found |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersIdDelete

> { [key: string]: string; } usersIdDelete(id)

Delete user

Remove a user from the system

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User ID
    id: id_example,
  } satisfies UsersIdDeleteRequest;

  try {
    const data = await api.usersIdDelete(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | User ID | [Defaults to `undefined`] |

### Return type

**{ [key: string]: string; }**

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | invalid request |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersIdGet

> UsersUser usersIdGet(id)

Get user by ID

Retrieve a specific user by their unique ID

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // string | User ID
    id: id_example,
  } satisfies UsersIdGetRequest;

  try {
    const data = await api.usersIdGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` | User ID | [Defaults to `undefined`] |

### Return type

[**UsersUser**](UsersUser.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | invalid request |  -  |
| **404** | not found |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersMeGet

> UsersUser usersMeGet()

Get current authenticated user

Retrieve the current user\&#39;s profile from their JWT token

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  try {
    const data = await api.usersMeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UsersUser**](UsersUser.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | unauthorized |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## usersPost

> UsersUser usersPost(usersCreateUserRequest)

Create a new user

Create a new user with the provided details

### Example

```ts
import {
  Configuration,
  UsersApi,
} from '';
import type { UsersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new UsersApi(config);

  const body = {
    // UsersCreateUserRequest | Create User Request
    usersCreateUserRequest: ...,
  } satisfies UsersPostRequest;

  try {
    const data = await api.usersPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **usersCreateUserRequest** | [UsersCreateUserRequest](UsersCreateUserRequest.md) | Create User Request | |

### Return type

[**UsersUser**](UsersUser.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | invalid request |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

