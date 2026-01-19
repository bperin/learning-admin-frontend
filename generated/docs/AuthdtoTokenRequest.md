
# AuthdtoTokenRequest


## Properties

Name | Type
------------ | -------------
`email` | string
`grantType` | string
`password` | string
`refreshToken` | string

## Example

```typescript
import type { AuthdtoTokenRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "email": user@example.com,
  "grantType": password,
  "password": secret123,
  "refreshToken": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...,
} satisfies AuthdtoTokenRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthdtoTokenRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


