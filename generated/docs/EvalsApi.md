# EvalsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**evalsGet**](EvalsApi.md#evalsget) | **GET** /evals | List evals |
| [**evalsIdGet**](EvalsApi.md#evalsidget) | **GET** /evals/{id} | Get eval |
| [**evalsIdPublishPost**](EvalsApi.md#evalsidpublishpost) | **POST** /evals/{id}/publish | Publish eval |
| [**evalsPost**](EvalsApi.md#evalspost) | **POST** /evals | Create eval |



## evalsGet

> evalsGet()

List evals

Teacher+Learner. List published evals.

### Example

```ts
import {
  Configuration,
  EvalsApi,
} from '';
import type { EvalsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EvalsApi();

  try {
    const data = await api.evalsGet();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evalsIdGet

> evalsIdGet(id)

Get eval

Teacher+Learner. Get a published eval by ID.

### Example

```ts
import {
  Configuration,
  EvalsApi,
} from '';
import type { EvalsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EvalsApi();

  const body = {
    // string | Eval ID
    id: id_example,
  } satisfies EvalsIdGetRequest;

  try {
    const data = await api.evalsIdGet(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evalsIdPublishPost

> evalsIdPublishPost(id)

Publish eval

Admin-only. Publish a draft eval (immutable after publish).

### Example

```ts
import {
  Configuration,
  EvalsApi,
} from '';
import type { EvalsIdPublishPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EvalsApi();

  const body = {
    // string | Eval ID
    id: id_example,
  } satisfies EvalsIdPublishPostRequest;

  try {
    const data = await api.evalsIdPublishPost(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## evalsPost

> evalsPost()

Create eval

Admin-only. Create a new eval in draft.

### Example

```ts
import {
  Configuration,
  EvalsApi,
} from '';
import type { EvalsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new EvalsApi();

  try {
    const data = await api.evalsPost();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **501** | not implemented |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

