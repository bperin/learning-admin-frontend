
# SchemaTemplatesSchemaTemplate

Schema template with versioning and activation support

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`createdBy` | string
`generationType` | string
`id` | string
`isActive` | boolean
`lockedAt` | string
`schemaJson` | object
`version` | number

## Example

```typescript
import type { SchemaTemplatesSchemaTemplate } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2026-01-19T03:40:00Z,
  "createdBy": 550e8400-e29b-41d4-a716-446655440000,
  "generationType": CLASSIFICATION,
  "id": 550e8400-e29b-41d4-a716-446655440000,
  "isActive": true,
  "lockedAt": 2026-01-19T03:40:00Z,
  "schemaJson": null,
  "version": 1,
} satisfies SchemaTemplatesSchemaTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SchemaTemplatesSchemaTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


