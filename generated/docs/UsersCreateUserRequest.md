
# UsersCreateUserRequest


## Properties

Name | Type
------------ | -------------
`displayName` | string
`email` | string
`password` | string
`role` | [UsersUserRoleType](UsersUserRoleType.md)

## Example

```typescript
import type { UsersCreateUserRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "displayName": null,
  "email": null,
  "password": null,
  "role": null,
} satisfies UsersCreateUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsersCreateUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


