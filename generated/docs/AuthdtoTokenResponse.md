
# AuthdtoTokenResponse


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`expiresIn` | number
`refreshToken` | string
`role` | string
`tokenType` | string

## Example

```typescript
import type { AuthdtoTokenResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "accessToken": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...,
  "expiresIn": 3600,
  "refreshToken": eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...,
  "role": user,
  "tokenType": Bearer,
} satisfies AuthdtoTokenResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuthdtoTokenResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


