
# ContentDiscoveryBookListResponse


## Properties

Name | Type
------------ | -------------
`books` | [Array&lt;ContentDiscoveryBookWithSubject&gt;](ContentDiscoveryBookWithSubject.md)
`message` | string
`total` | number

## Example

```typescript
import type { ContentDiscoveryBookListResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "books": null,
  "message": null,
  "total": null,
} satisfies ContentDiscoveryBookListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContentDiscoveryBookListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


