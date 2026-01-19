# ArtifactsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**artifactsGet**](ArtifactsApi.md#artifactsget) | **GET** /artifacts | List all artifacts |
| [**artifactsIdGet**](ArtifactsApi.md#artifactsidget) | **GET** /artifacts/{id} | Get artifact by ID |
| [**artifactsStatsGet**](ArtifactsApi.md#artifactsstatsget) | **GET** /artifacts/stats | Get artifact statistics |
| [**artifactsStatusStatusGet**](ArtifactsApi.md#artifactsstatusstatusget) | **GET** /artifacts/status/{status} | Get artifacts by status |
| [**artifactsTypeTypeGet**](ArtifactsApi.md#artifactstypetypeget) | **GET** /artifacts/type/{type} | Get artifacts by type |



## artifactsGet

> ArtifactsArtifactListResponse artifactsGet(page, pageSize)

List all artifacts

Get all artifacts with pagination support

### Example

```ts
import {
  Configuration,
  ArtifactsApi,
} from '';
import type { ArtifactsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ArtifactsApi(config);

  const body = {
    // number | Page number (default: 1) (optional)
    page: 56,
    // number | Page size (default: 20, max: 100) (optional)
    pageSize: 56,
  } satisfies ArtifactsGetRequest;

  try {
    const data = await api.artifactsGet(body);
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
| **page** | `number` | Page number (default: 1) | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Page size (default: 20, max: 100) | [Optional] [Defaults to `undefined`] |

### Return type

[**ArtifactsArtifactListResponse**](ArtifactsArtifactListResponse.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of artifacts |  -  |
| **400** | Bad request - invalid pagination parameters |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## artifactsIdGet

> ArtifactsArtifact artifactsIdGet(id)

Get artifact by ID

Retrieve a specific artifact by its UUID

### Example

```ts
import {
  Configuration,
  ArtifactsApi,
} from '';
import type { ArtifactsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ArtifactsApi(config);

  const body = {
    // string | Artifact ID (UUID)
    id: id_example,
  } satisfies ArtifactsIdGetRequest;

  try {
    const data = await api.artifactsIdGet(body);
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
| **id** | `string` | Artifact ID (UUID) | [Defaults to `undefined`] |

### Return type

[**ArtifactsArtifact**](ArtifactsArtifact.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Artifact details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Artifact not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## artifactsStatsGet

> StoreGetArtifactStatsRow artifactsStatsGet()

Get artifact statistics

Retrieve statistics about artifacts (counts by status, etc.)

### Example

```ts
import {
  Configuration,
  ArtifactsApi,
} from '';
import type { ArtifactsStatsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ArtifactsApi(config);

  try {
    const data = await api.artifactsStatsGet();
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

[**StoreGetArtifactStatsRow**](StoreGetArtifactStatsRow.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Artifact statistics |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## artifactsStatusStatusGet

> Array&lt;ArtifactsArtifact&gt; artifactsStatusStatusGet(status)

Get artifacts by status

Retrieve artifacts filtered by their status

### Example

```ts
import {
  Configuration,
  ArtifactsApi,
} from '';
import type { ArtifactsStatusStatusGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ArtifactsApi(config);

  const body = {
    // string | Artifact status
    status: status_example,
  } satisfies ArtifactsStatusStatusGetRequest;

  try {
    const data = await api.artifactsStatusStatusGet(body);
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
| **status** | `string` | Artifact status | [Defaults to `undefined`] |

### Return type

[**Array&lt;ArtifactsArtifact&gt;**](ArtifactsArtifact.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of artifacts |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## artifactsTypeTypeGet

> ArtifactsArtifactListResponse artifactsTypeTypeGet(type, page, pageSize)

Get artifacts by type

Retrieve artifacts filtered by their type with pagination

### Example

```ts
import {
  Configuration,
  ArtifactsApi,
} from '';
import type { ArtifactsTypeTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ArtifactsApi(config);

  const body = {
    // string | Artifact type
    type: type_example,
    // number | Page number (default: 1) (optional)
    page: 56,
    // number | Page size (default: 20, max: 100) (optional)
    pageSize: 56,
  } satisfies ArtifactsTypeTypeGetRequest;

  try {
    const data = await api.artifactsTypeTypeGet(body);
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
| **type** | `string` | Artifact type | [Defaults to `undefined`] |
| **page** | `number` | Page number (default: 1) | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Page size (default: 20, max: 100) | [Optional] [Defaults to `undefined`] |

### Return type

[**ArtifactsArtifactListResponse**](ArtifactsArtifactListResponse.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of artifacts |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

