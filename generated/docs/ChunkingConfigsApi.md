# ChunkingConfigsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**chunkingConfigsActiveGet**](ChunkingConfigsApi.md#chunkingconfigsactiveget) | **GET** /chunking-configs/active | Get active chunking config |
| [**chunkingConfigsGet**](ChunkingConfigsApi.md#chunkingconfigsget) | **GET** /chunking-configs | List all chunking configs |
| [**chunkingConfigsIdActivatePost**](ChunkingConfigsApi.md#chunkingconfigsidactivatepost) | **POST** /chunking-configs/{id}/activate | Activate chunking config |
| [**chunkingConfigsIdGet**](ChunkingConfigsApi.md#chunkingconfigsidget) | **GET** /chunking-configs/{id} | Get chunking config by ID |
| [**chunkingConfigsPost**](ChunkingConfigsApi.md#chunkingconfigspost) | **POST** /chunking-configs | Create new chunking config |



## chunkingConfigsActiveGet

> ChunkingConfigsChunkingConfig chunkingConfigsActiveGet()

Get active chunking config

Retrieve the currently active chunking configuration

### Example

```ts
import {
  Configuration,
  ChunkingConfigsApi,
} from '';
import type { ChunkingConfigsActiveGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChunkingConfigsApi(config);

  try {
    const data = await api.chunkingConfigsActiveGet();
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

[**ChunkingConfigsChunkingConfig**](ChunkingConfigsChunkingConfig.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active chunking config |  -  |
| **404** | Active config not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chunkingConfigsGet

> Array&lt;ChunkingConfigsChunkingConfig&gt; chunkingConfigsGet()

List all chunking configs

Get all chunking configurations

### Example

```ts
import {
  Configuration,
  ChunkingConfigsApi,
} from '';
import type { ChunkingConfigsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChunkingConfigsApi(config);

  try {
    const data = await api.chunkingConfigsGet();
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

[**Array&lt;ChunkingConfigsChunkingConfig&gt;**](ChunkingConfigsChunkingConfig.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of chunking configs |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chunkingConfigsIdActivatePost

> { [key: string]: string; } chunkingConfigsIdActivatePost(id)

Activate chunking config

Mark a chunking configuration as active (deactivates other versions)

### Example

```ts
import {
  Configuration,
  ChunkingConfigsApi,
} from '';
import type { ChunkingConfigsIdActivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChunkingConfigsApi(config);

  const body = {
    // string | Config ID (UUID)
    id: id_example,
  } satisfies ChunkingConfigsIdActivatePostRequest;

  try {
    const data = await api.chunkingConfigsIdActivatePost(body);
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
| **id** | `string` | Config ID (UUID) | [Defaults to `undefined`] |

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
| **200** | Activation status |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chunkingConfigsIdGet

> ChunkingConfigsChunkingConfig chunkingConfigsIdGet(id)

Get chunking config by ID

Retrieve a specific chunking configuration by its UUID

### Example

```ts
import {
  Configuration,
  ChunkingConfigsApi,
} from '';
import type { ChunkingConfigsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChunkingConfigsApi(config);

  const body = {
    // string | Config ID (UUID)
    id: id_example,
  } satisfies ChunkingConfigsIdGetRequest;

  try {
    const data = await api.chunkingConfigsIdGet(body);
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
| **id** | `string` | Config ID (UUID) | [Defaults to `undefined`] |

### Return type

[**ChunkingConfigsChunkingConfig**](ChunkingConfigsChunkingConfig.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Chunking config details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Config not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## chunkingConfigsPost

> ChunkingConfigsChunkingConfig chunkingConfigsPost(chunkingConfigsCreateChunkingConfigRequest)

Create new chunking config

Create a new chunking configuration (immutable - cannot edit existing)

### Example

```ts
import {
  Configuration,
  ChunkingConfigsApi,
} from '';
import type { ChunkingConfigsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChunkingConfigsApi(config);

  const body = {
    // ChunkingConfigsCreateChunkingConfigRequest | Chunking config request
    chunkingConfigsCreateChunkingConfigRequest: ...,
  } satisfies ChunkingConfigsPostRequest;

  try {
    const data = await api.chunkingConfigsPost(body);
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
| **chunkingConfigsCreateChunkingConfigRequest** | [ChunkingConfigsCreateChunkingConfigRequest](ChunkingConfigsCreateChunkingConfigRequest.md) | Chunking config request | |

### Return type

[**ChunkingConfigsChunkingConfig**](ChunkingConfigsChunkingConfig.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created chunking config |  -  |
| **400** | Bad request - invalid request body |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

