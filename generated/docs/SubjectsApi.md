# SubjectsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**subjectsForSelectionGet**](SubjectsApi.md#subjectsforselectionget) | **GET** /subjects/for-selection | List subjects for test creation selection |
| [**subjectsGet**](SubjectsApi.md#subjectsget) | **GET** /subjects | List all subjects |



## subjectsForSelectionGet

> Array&lt;SubjectsSubjectForSelection&gt; subjectsForSelectionGet()

List subjects for test creation selection

Retrieve subjects formatted for selection UI (tag cloud style)

### Example

```ts
import {
  Configuration,
  SubjectsApi,
} from '';
import type { SubjectsForSelectionGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SubjectsApi(config);

  try {
    const data = await api.subjectsForSelectionGet();
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

[**Array&lt;SubjectsSubjectForSelection&gt;**](SubjectsSubjectForSelection.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


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
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SubjectsApi(config);

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

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **500** | internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

