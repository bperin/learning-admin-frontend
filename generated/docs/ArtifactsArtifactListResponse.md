
# ArtifactsArtifactListResponse


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;ArtifactsArtifact&gt;](ArtifactsArtifact.md)
`pagination` | [ArtifactsPaginationMeta](ArtifactsPaginationMeta.md)

## Example

```typescript
import type { ArtifactsArtifactListResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "pagination": null,
} satisfies ArtifactsArtifactListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArtifactsArtifactListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


