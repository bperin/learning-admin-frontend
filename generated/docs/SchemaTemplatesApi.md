# SchemaTemplatesApi

All URIs are relative to *https://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**schemaTemplatesGenerationTypeGenerationTypeGet**](SchemaTemplatesApi.md#schematemplatesgenerationtypegenerationtypeget) | **GET** /schema-templates/generation-type/{generationType} | Get active schema template by generation type |
| [**schemaTemplatesGet**](SchemaTemplatesApi.md#schematemplatesget) | **GET** /schema-templates | List schema templates by generation type |
| [**schemaTemplatesIdActivatePost**](SchemaTemplatesApi.md#schematemplatesidactivatepost) | **POST** /schema-templates/{id}/activate | Activate schema template |
| [**schemaTemplatesIdGet**](SchemaTemplatesApi.md#schematemplatesidget) | **GET** /schema-templates/{id} | Get schema template by ID |
| [**schemaTemplatesPost**](SchemaTemplatesApi.md#schematemplatespost) | **POST** /schema-templates | Create new schema template |



## schemaTemplatesGenerationTypeGenerationTypeGet

> SchemaTemplatesSchemaTemplate schemaTemplatesGenerationTypeGenerationTypeGet(generationType)

Get active schema template by generation type

Retrieve the currently active schema template for a specific generation type

### Example

```ts
import {
  Configuration,
  SchemaTemplatesApi,
} from '';
import type { SchemaTemplatesGenerationTypeGenerationTypeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SchemaTemplatesApi(config);

  const body = {
    // string | Generation type (CLASSIFICATION or QUESTIONS)
    generationType: generationType_example,
  } satisfies SchemaTemplatesGenerationTypeGenerationTypeGetRequest;

  try {
    const data = await api.schemaTemplatesGenerationTypeGenerationTypeGet(body);
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

[**SchemaTemplatesSchemaTemplate**](SchemaTemplatesSchemaTemplate.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Active schema template |  -  |
| **400** | Bad request - missing generation_type |  -  |
| **404** | Active template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## schemaTemplatesGet

> Array&lt;SchemaTemplatesSchemaTemplate&gt; schemaTemplatesGet(generationType)

List schema templates by generation type

Get all schema templates for a specific generation type

### Example

```ts
import {
  Configuration,
  SchemaTemplatesApi,
} from '';
import type { SchemaTemplatesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SchemaTemplatesApi(config);

  const body = {
    // string | Generation type (CLASSIFICATION or QUESTIONS)
    generationType: generationType_example,
  } satisfies SchemaTemplatesGetRequest;

  try {
    const data = await api.schemaTemplatesGet(body);
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

[**Array&lt;SchemaTemplatesSchemaTemplate&gt;**](SchemaTemplatesSchemaTemplate.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of schema templates |  -  |
| **400** | Bad request - missing generation_type |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## schemaTemplatesIdActivatePost

> SchemaTemplatesSchemaTemplate schemaTemplatesIdActivatePost(id)

Activate schema template

Mark a schema template version as active (deactivates other versions)

### Example

```ts
import {
  Configuration,
  SchemaTemplatesApi,
} from '';
import type { SchemaTemplatesIdActivatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SchemaTemplatesApi(config);

  const body = {
    // string | Template ID (UUID)
    id: id_example,
  } satisfies SchemaTemplatesIdActivatePostRequest;

  try {
    const data = await api.schemaTemplatesIdActivatePost(body);
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

[**SchemaTemplatesSchemaTemplate**](SchemaTemplatesSchemaTemplate.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Activated schema template |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## schemaTemplatesIdGet

> SchemaTemplatesSchemaTemplate schemaTemplatesIdGet(id)

Get schema template by ID

Retrieve a specific schema template by its UUID

### Example

```ts
import {
  Configuration,
  SchemaTemplatesApi,
} from '';
import type { SchemaTemplatesIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SchemaTemplatesApi(config);

  const body = {
    // string | Template ID (UUID)
    id: id_example,
  } satisfies SchemaTemplatesIdGetRequest;

  try {
    const data = await api.schemaTemplatesIdGet(body);
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

[**SchemaTemplatesSchemaTemplate**](SchemaTemplatesSchemaTemplate.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Schema template details |  -  |
| **400** | Bad request - invalid ID format |  -  |
| **404** | Template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## schemaTemplatesPost

> SchemaTemplatesSchemaTemplate schemaTemplatesPost(schemaTemplatesCreateSchemaTemplateRequest)

Create new schema template

Create a new schema template (immutable - cannot edit existing)

### Example

```ts
import {
  Configuration,
  SchemaTemplatesApi,
} from '';
import type { SchemaTemplatesPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: OAuth2 password
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new SchemaTemplatesApi(config);

  const body = {
    // SchemaTemplatesCreateSchemaTemplateRequest | Schema template request
    schemaTemplatesCreateSchemaTemplateRequest: ...,
  } satisfies SchemaTemplatesPostRequest;

  try {
    const data = await api.schemaTemplatesPost(body);
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
| **schemaTemplatesCreateSchemaTemplateRequest** | [SchemaTemplatesCreateSchemaTemplateRequest](SchemaTemplatesCreateSchemaTemplateRequest.md) | Schema template request | |

### Return type

[**SchemaTemplatesSchemaTemplate**](SchemaTemplatesSchemaTemplate.md)

### Authorization

[OAuth2 password](../README.md#OAuth2-password)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created schema template |  -  |
| **400** | Bad request - invalid request body |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

