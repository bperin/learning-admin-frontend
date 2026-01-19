# ContentDiscoveryApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**contentDiscoveryBooksPost**](ContentDiscoveryApi.md#contentdiscoverybookspost) | **POST** /content-discovery/books | List books from selected subjects |



## contentDiscoveryBooksPost

> ContentDiscoveryBookListResponse contentDiscoveryBooksPost(contentDiscoveryBookListRequest)

List books from selected subjects

Fetch books from the provided subject URLs for test creation workflow. Returns book title, detail page URL, and PDF download link when available.

### Example

```ts
import {
  Configuration,
  ContentDiscoveryApi,
} from '';
import type { ContentDiscoveryBooksPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ContentDiscoveryApi(config);

  const body = {
    // ContentDiscoveryBookListRequest | Subject IDs and max books
    contentDiscoveryBookListRequest: ...,
  } satisfies ContentDiscoveryBooksPostRequest;

  try {
    const data = await api.contentDiscoveryBooksPost(body);
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
| **contentDiscoveryBookListRequest** | [ContentDiscoveryBookListRequest](ContentDiscoveryBookListRequest.md) | Subject IDs and max books | |

### Return type

[**ContentDiscoveryBookListResponse**](ContentDiscoveryBookListResponse.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of books with subject information and PDF links |  -  |
| **400** | Bad request - invalid request body |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

