
# SchemaTemplatesCreateSchemaTemplateRequest


## Properties

Name | Type
------------ | -------------
`createdBy` | string
`generationType` | string
`isActive` | boolean
`lockedAt` | string
`schemaJson` | object

## Example

```typescript
import type { SchemaTemplatesCreateSchemaTemplateRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "createdBy": null,
  "generationType": null,
  "isActive": null,
  "lockedAt": null,
  "schemaJson": null,
} satisfies SchemaTemplatesCreateSchemaTemplateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchemaTemplatesCreateSchemaTemplateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


