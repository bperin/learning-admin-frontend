# SystemInstructionsApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**systemInstructionsActiveGet**](SystemInstructionsApi.md#systeminstructionsactiveget) | **GET** /system-instructions/active | Get active system instruction |
| [**systemInstructionsGet**](SystemInstructionsApi.md#systeminstructionsget) | **GET** /system-instructions | List all system instructions |
| [**systemInstructionsIdActivatePost**](SystemInstructionsApi.md#systeminstructionsidactivatepost) | **POST** /system-instructions/{id}/activate | Activate system instruction |
| [**systemInstructionsIdGet**](SystemInstructionsApi.md#systeminstructionsidget) | **GET** /system-instructions/{id} | Get system instruction by ID |
| [**systemInstructionsPost**](SystemInstructionsApi.md#systeminstructionspost) | **POST** /system-instructions | Create new system instruction |



## systemInstructionsActiveGet

> SystemInstructionsSystemInstruction systemInstructionsActiveGet()

Get active system instruction

Retrieve the currently active system instruction

### Example

```ts
import {
  Configuration,
  SystemInstructionsApi,
} from '';
import type { SystemInstructionsActiveGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SystemInstructionsApi();

  try {
    const data = await api.systemInstructionsActiveGet();
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

[**SystemInstructionsSystemInstruction**](SystemInstructionsSystemInstruction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active system instruction |  -  |
| **404** | Active instruction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemInstructionsGet

> Array&lt;SystemInstructionsSystemInstruction&gt; systemInstructionsGet()

List all system instructions

Get all system instructions

### Example

```ts
import {
  Configuration,
  SystemInstructionsApi,
} from '';
import type { SystemInstructionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SystemInstructionsApi();

  try {
    const data = await api.systemInstructionsGet();
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

[**Array&lt;SystemInstructionsSystemInstruction&gt;**](SystemInstructionsSystemInstruction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of system instructions |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemInstructionsIdActivatePost

> { [key: string]: string; } systemInstructionsIdActivatePost(id)

Activate system instruction

Mark a system instruction as active (deactivates other versions)

### Example

```ts
import {
  Configuration,
  SystemInstructionsApi,
} from '';
import type { SystemInstructionsIdActivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SystemInstructionsApi();

  const body = {
    // string | Instruction ID (UUID)
    id: id_example,
  } satisfies SystemInstructionsIdActivatePostRequest;

  try {
    const data = await api.systemInstructionsIdActivatePost(body);
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
| **id** | `string` | Instruction ID (UUID) | [Defaults to `undefined`] |

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
| **200** | Activation status |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemInstructionsIdGet

> SystemInstructionsSystemInstruction systemInstructionsIdGet(id)

Get system instruction by ID

Retrieve a specific system instruction by its UUID

### Example

```ts
import {
  Configuration,
  SystemInstructionsApi,
} from '';
import type { SystemInstructionsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SystemInstructionsApi();

  const body = {
    // string | Instruction ID (UUID)
    id: id_example,
  } satisfies SystemInstructionsIdGetRequest;

  try {
    const data = await api.systemInstructionsIdGet(body);
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
| **id** | `string` | Instruction ID (UUID) | [Defaults to `undefined`] |

### Return type

[**SystemInstructionsSystemInstruction**](SystemInstructionsSystemInstruction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | System instruction details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Instruction not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemInstructionsPost

> SystemInstructionsSystemInstruction systemInstructionsPost(systemInstructionsCreateSystemInstructionRequest)

Create new system instruction

Create a new system instruction (immutable - cannot edit existing)

### Example

```ts
import {
  Configuration,
  SystemInstructionsApi,
} from '';
import type { SystemInstructionsPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new SystemInstructionsApi();

  const body = {
    // SystemInstructionsCreateSystemInstructionRequest | System instruction request
    systemInstructionsCreateSystemInstructionRequest: ...,
  } satisfies SystemInstructionsPostRequest;

  try {
    const data = await api.systemInstructionsPost(body);
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
| **systemInstructionsCreateSystemInstructionRequest** | [SystemInstructionsCreateSystemInstructionRequest](SystemInstructionsCreateSystemInstructionRequest.md) | System instruction request | |

### Return type

[**SystemInstructionsSystemInstruction**](SystemInstructionsSystemInstruction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created system instruction |  -  |
| **400** | Bad request - invalid request body |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

