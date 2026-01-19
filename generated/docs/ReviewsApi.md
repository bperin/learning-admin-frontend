# ReviewsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**evalItemsIdReviewsGet**](ReviewsApi.md#evalitemsidreviewsget) | **GET** /eval-items/{id}/reviews | List eval item reviews |
| [**evalItemsIdReviewsPost**](ReviewsApi.md#evalitemsidreviewspost) | **POST** /eval-items/{id}/reviews | Create eval item review |



## evalItemsIdReviewsGet

> evalItemsIdReviewsGet(id)

List eval item reviews

Admin-only. List review history for an eval item.

### Example

```ts
import {
  Configuration,
  ReviewsApi,
} from '';
import type { EvalItemsIdReviewsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReviewsApi();

  const body = {
    // string | Eval Item ID
    id: id_example,
  } satisfies EvalItemsIdReviewsGetRequest;

  try {
    const data = await api.evalItemsIdReviewsGet(body);
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
| **id** | `string` | Eval Item ID | [Defaults to `undefined`] |

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


## evalItemsIdReviewsPost

> evalItemsIdReviewsPost(id)

Create eval item review

Teacher+Admin. Submit a review verdict for an eval item.

### Example

```ts
import {
  Configuration,
  ReviewsApi,
} from '';
import type { EvalItemsIdReviewsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ReviewsApi();

  const body = {
    // string | Eval Item ID
    id: id_example,
  } satisfies EvalItemsIdReviewsPostRequest;

  try {
    const data = await api.evalItemsIdReviewsPost(body);
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
| **id** | `string` | Eval Item ID | [Defaults to `undefined`] |

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

