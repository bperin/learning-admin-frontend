
# ModelConfigsCreateModelConfigRequest


## Properties

Name | Type
------------ | -------------
`createdBy` | string
`isActive` | boolean
`maxTokens` | number
`mimeType` | string
`modelName` | string
`temperature` | number
`topK` | number
`topP` | number

## Example

```typescript
import type { ModelConfigsCreateModelConfigRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "createdBy": null,
  "isActive": null,
  "maxTokens": null,
  "mimeType": null,
  "modelName": null,
  "temperature": null,
  "topK": null,
  "topP": null,
} satisfies ModelConfigsCreateModelConfigRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelConfigsCreateModelConfigRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


