# AuthApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**oauthTokenPost**](AuthApi.md#oauthtokenpost) | **POST** /oauth/token | OAuth token endpoint |



## oauthTokenPost

> AuthdtoTokenResponse oauthTokenPost(authdtoTokenRequest)

OAuth token endpoint

Issue or refresh OAuth2 tokens using supported grant types. Supported grant types: - password: exchange email + password for tokens - refresh_token: exchange refresh_token for new access token

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '';
import type { OauthTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AuthApi();

  const body = {
    // AuthdtoTokenRequest | OAuth Token Request
    authdtoTokenRequest: ...,
  } satisfies OauthTokenPostRequest;

  try {
    const data = await api.oauthTokenPost(body);
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
| **authdtoTokenRequest** | [AuthdtoTokenRequest](AuthdtoTokenRequest.md) | OAuth Token Request | |

### Return type

[**AuthdtoTokenResponse**](AuthdtoTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OAuth2 token response |  -  |
| **400** | invalid request or unsupported grant_type |  -  |
| **401** | invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

