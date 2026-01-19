# AttemptsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**attemptsIdAnswersPost**](AttemptsApi.md#attemptsidanswerspost) | **POST** /attempts/{id}/answers | Submit answer |
| [**attemptsIdGet**](AttemptsApi.md#attemptsidget) | **GET** /attempts/{id} | Get attempt |
| [**attemptsIdSubmitPost**](AttemptsApi.md#attemptsidsubmitpost) | **POST** /attempts/{id}/submit | Submit attempt |
| [**evalsIdAttemptsPost**](AttemptsApi.md#evalsidattemptspost) | **POST** /evals/{id}/attempts | Start test attempt |



## attemptsIdAnswersPost

> attemptsIdAnswersPost(id)

Submit answer

Learner-only. Submit an answer for an attempt.

### Example

```ts
import {
  Configuration,
  AttemptsApi,
} from '';
import type { AttemptsIdAnswersPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttemptsApi(config);

  const body = {
    // string | Attempt ID
    id: id_example,
  } satisfies AttemptsIdAnswersPostRequest;

  try {
    const data = await api.attemptsIdAnswersPost(body);
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
| **id** | `string` | Attempt ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## attemptsIdGet

> attemptsIdGet(id)

Get attempt

Learner+Teacher+Admin. Get a test attempt by ID.

### Example

```ts
import {
  Configuration,
  AttemptsApi,
} from '';
import type { AttemptsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttemptsApi(config);

  const body = {
    // string | Attempt ID
    id: id_example,
  } satisfies AttemptsIdGetRequest;

  try {
    const data = await api.attemptsIdGet(body);
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
| **id** | `string` | Attempt ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## attemptsIdSubmitPost

> attemptsIdSubmitPost(id)

Submit attempt

Learner-only. Submit an attempt and finalize score.

### Example

```ts
import {
  Configuration,
  AttemptsApi,
} from '';
import type { AttemptsIdSubmitPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttemptsApi(config);

  const body = {
    // string | Attempt ID
    id: id_example,
  } satisfies AttemptsIdSubmitPostRequest;

  try {
    const data = await api.attemptsIdSubmitPost(body);
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
| **id** | `string` | Attempt ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evalsIdAttemptsPost

> evalsIdAttemptsPost(id)

Start test attempt

Learner-only. Create a new attempt for an eval.

### Example

```ts
import {
  Configuration,
  AttemptsApi,
} from '';
import type { EvalsIdAttemptsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AttemptsApi(config);

  const body = {
    // string | Eval ID
    id: id_example,
  } satisfies EvalsIdAttemptsPostRequest;

  try {
    const data = await api.evalsIdAttemptsPost(body);
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
| **id** | `string` | Eval ID | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

