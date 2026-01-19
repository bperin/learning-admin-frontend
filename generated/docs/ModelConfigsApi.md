# ModelConfigsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**modelConfigsActiveGet**](ModelConfigsApi.md#modelconfigsactiveget) | **GET** /model-configs/active | Get active model config |
| [**modelConfigsGet**](ModelConfigsApi.md#modelconfigsget) | **GET** /model-configs | List all model configs |
| [**modelConfigsIdActivatePost**](ModelConfigsApi.md#modelconfigsidactivatepost) | **POST** /model-configs/{id}/activate | Activate model config |
| [**modelConfigsIdGet**](ModelConfigsApi.md#modelconfigsidget) | **GET** /model-configs/{id} | Get model config by ID |
| [**modelConfigsPost**](ModelConfigsApi.md#modelconfigspost) | **POST** /model-configs | Create model config |



## modelConfigsActiveGet

> ModelConfigsModelConfig modelConfigsActiveGet()

Get active model config

Retrieve the currently active model configuration

### Example

```ts
import {
  Configuration,
  ModelConfigsApi,
} from '';
import type { ModelConfigsActiveGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModelConfigsApi();

  try {
    const data = await api.modelConfigsActiveGet();
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

[**ModelConfigsModelConfig**](ModelConfigsModelConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active model config |  -  |
| **404** | Active config not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelConfigsGet

> Array&lt;ModelConfigsModelConfig&gt; modelConfigsGet()

List all model configs

Get all model configurations

### Example

```ts
import {
  Configuration,
  ModelConfigsApi,
} from '';
import type { ModelConfigsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModelConfigsApi();

  try {
    const data = await api.modelConfigsGet();
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

[**Array&lt;ModelConfigsModelConfig&gt;**](ModelConfigsModelConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of model configs |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelConfigsIdActivatePost

> { [key: string]: string; } modelConfigsIdActivatePost(id)

Activate model config

Mark a model configuration as active

### Example

```ts
import {
  Configuration,
  ModelConfigsApi,
} from '';
import type { ModelConfigsIdActivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModelConfigsApi();

  const body = {
    // string | Config ID (UUID)
    id: id_example,
  } satisfies ModelConfigsIdActivatePostRequest;

  try {
    const data = await api.modelConfigsIdActivatePost(body);
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success message |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Config not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelConfigsIdGet

> ModelConfigsModelConfig modelConfigsIdGet(id)

Get model config by ID

Retrieve a specific model configuration by its UUID

### Example

```ts
import {
  Configuration,
  ModelConfigsApi,
} from '';
import type { ModelConfigsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModelConfigsApi();

  const body = {
    // string | Config ID (UUID)
    id: id_example,
  } satisfies ModelConfigsIdGetRequest;

  try {
    const data = await api.modelConfigsIdGet(body);
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

[**ModelConfigsModelConfig**](ModelConfigsModelConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Model config details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Config not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## modelConfigsPost

> ModelConfigsModelConfig modelConfigsPost(modelConfigsCreateModelConfigRequest)

Create model config

Create a new model configuration

### Example

```ts
import {
  Configuration,
  ModelConfigsApi,
} from '';
import type { ModelConfigsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new ModelConfigsApi();

  const body = {
    // ModelConfigsCreateModelConfigRequest | Model config data
    modelConfigsCreateModelConfigRequest: ...,
  } satisfies ModelConfigsPostRequest;

  try {
    const data = await api.modelConfigsPost(body);
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
| **modelConfigsCreateModelConfigRequest** | [ModelConfigsCreateModelConfigRequest](ModelConfigsCreateModelConfigRequest.md) | Model config data | |

### Return type

[**ModelConfigsModelConfig**](ModelConfigsModelConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created model config |  -  |
| **400** | Bad request |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

