# SubjectsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**subjectsGet**](SubjectsApi.md#subjectsget) | **GET** /subjects | List all subjects |



## subjectsGet

> Array&lt;SubjectsSubject&gt; subjectsGet()

List all subjects

Retrieve all academic subjects with their nested sub-subjects

### Example

```ts
import {
  Configuration,
  SubjectsApi,
} from '';
import type { SubjectsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SubjectsApi();

  try {
    const data = await api.subjectsGet();
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

[**Array&lt;SubjectsSubject&gt;**](SubjectsSubject.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

