# PromptTemplatesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**promptTemplatesGenerationTypeGenerationTypeGet**](PromptTemplatesApi.md#prompttemplatesgenerationtypegenerationtypeget) | **GET** /prompt-templates/generation-type/{generationType} | Get active prompt template by generation type |
| [**promptTemplatesGet**](PromptTemplatesApi.md#prompttemplatesget) | **GET** /prompt-templates | List prompt templates by generation type |
| [**promptTemplatesIdActivatePost**](PromptTemplatesApi.md#prompttemplatesidactivatepost) | **POST** /prompt-templates/{id}/activate | Activate prompt template |
| [**promptTemplatesIdDeactivatePost**](PromptTemplatesApi.md#prompttemplatesiddeactivatepost) | **POST** /prompt-templates/{id}/deactivate | Deactivate prompt template |
| [**promptTemplatesIdGet**](PromptTemplatesApi.md#prompttemplatesidget) | **GET** /prompt-templates/{id} | Get prompt template by ID |
| [**promptTemplatesPost**](PromptTemplatesApi.md#prompttemplatespost) | **POST** /prompt-templates | Create new prompt template version |



## promptTemplatesGenerationTypeGenerationTypeGet

> PromptTemplatesPromptTemplate promptTemplatesGenerationTypeGenerationTypeGet(generationType)

Get active prompt template by generation type

Retrieve the currently active prompt template for a specific generation type

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesGenerationTypeGenerationTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // string | Generation type (CLASSIFICATION or QUESTIONS)
    generationType: generationType_example,
  } satisfies PromptTemplatesGenerationTypeGenerationTypeGetRequest;

  try {
    const data = await api.promptTemplatesGenerationTypeGenerationTypeGet(body);
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
| **generationType** | `string` | Generation type (CLASSIFICATION or QUESTIONS) | [Defaults to `undefined`] |

### Return type

[**PromptTemplatesPromptTemplate**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active prompt template |  -  |
| **400** | Bad request - missing generation_type |  -  |
| **404** | Active template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promptTemplatesGet

> Array&lt;PromptTemplatesPromptTemplate&gt; promptTemplatesGet(generationType)

List prompt templates by generation type

Get all prompt templates for a specific generation type

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // string | Generation type (CLASSIFICATION or QUESTIONS)
    generationType: generationType_example,
  } satisfies PromptTemplatesGetRequest;

  try {
    const data = await api.promptTemplatesGet(body);
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
| **generationType** | `string` | Generation type (CLASSIFICATION or QUESTIONS) | [Defaults to `undefined`] |

### Return type

[**Array&lt;PromptTemplatesPromptTemplate&gt;**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of prompt templates |  -  |
| **400** | Bad request - missing generation_type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promptTemplatesIdActivatePost

> PromptTemplatesPromptTemplate promptTemplatesIdActivatePost(id)

Activate prompt template

Mark a prompt template version as active (deactivates other versions)

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesIdActivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // string | Template ID (UUID)
    id: id_example,
  } satisfies PromptTemplatesIdActivatePostRequest;

  try {
    const data = await api.promptTemplatesIdActivatePost(body);
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
| **id** | `string` | Template ID (UUID) | [Defaults to `undefined`] |

### Return type

[**PromptTemplatesPromptTemplate**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activated prompt template |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promptTemplatesIdDeactivatePost

> PromptTemplatesPromptTemplate promptTemplatesIdDeactivatePost(id)

Deactivate prompt template

Mark a prompt template version as inactive

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesIdDeactivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // string | Template ID (UUID)
    id: id_example,
  } satisfies PromptTemplatesIdDeactivatePostRequest;

  try {
    const data = await api.promptTemplatesIdDeactivatePost(body);
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
| **id** | `string` | Template ID (UUID) | [Defaults to `undefined`] |

### Return type

[**PromptTemplatesPromptTemplate**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deactivated prompt template |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promptTemplatesIdGet

> PromptTemplatesPromptTemplate promptTemplatesIdGet(id)

Get prompt template by ID

Retrieve a specific prompt template by its UUID

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // string | Template ID (UUID)
    id: id_example,
  } satisfies PromptTemplatesIdGetRequest;

  try {
    const data = await api.promptTemplatesIdGet(body);
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
| **id** | `string` | Template ID (UUID) | [Defaults to `undefined`] |

### Return type

[**PromptTemplatesPromptTemplate**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Prompt template details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## promptTemplatesPost

> PromptTemplatesPromptTemplate promptTemplatesPost(promptTemplatesCreatePromptTemplateVersionRequest)

Create new prompt template version

Create a new version of a prompt template (immutable - cannot edit existing)

### Example

```ts
import {
  Configuration,
  PromptTemplatesApi,
} from '';
import type { PromptTemplatesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new PromptTemplatesApi();

  const body = {
    // PromptTemplatesCreatePromptTemplateVersionRequest | Template version request
    promptTemplatesCreatePromptTemplateVersionRequest: ...,
  } satisfies PromptTemplatesPostRequest;

  try {
    const data = await api.promptTemplatesPost(body);
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
| **promptTemplatesCreatePromptTemplateVersionRequest** | [PromptTemplatesCreatePromptTemplateVersionRequest](PromptTemplatesCreatePromptTemplateVersionRequest.md) | Template version request | |

### Return type

[**PromptTemplatesPromptTemplate**](PromptTemplatesPromptTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created prompt template |  -  |
| **400** | Bad request - invalid request body |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

