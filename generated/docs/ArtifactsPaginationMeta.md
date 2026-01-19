
# ArtifactsPaginationMeta


## Properties

Name | Type
------------ | -------------
`hasNext` | boolean
`hasPrevious` | boolean
`page` | number
`pageSize` | number
`total` | number
`totalPages` | number

## Example

```typescript
import type { ArtifactsPaginationMeta } from ''

// TODO: Update the object below with actual values
const example = {
  "hasNext": null,
  "hasPrevious": null,
  "page": null,
  "pageSize": null,
  "total": null,
  "totalPages": null,
} satisfies ArtifactsPaginationMeta

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArtifactsPaginationMeta
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


