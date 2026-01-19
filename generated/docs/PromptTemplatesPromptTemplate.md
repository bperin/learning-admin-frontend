
# PromptTemplatesPromptTemplate

Prompt template with versioning and activation support

## Properties

Name | Type
------------ | -------------
`createdAt` | string
`createdBy` | string
`description` | string
`generationType` | string
`id` | string
`isActive` | boolean
`metadata` | object
`template` | string
`title` | string
`updatedAt` | string
`version` | number

## Example

```typescript
import type { PromptTemplatesPromptTemplate } from ''

// TODO: Update the object below with actual values
const example = {
  "createdAt": 2026-01-19T03:40:00Z,
  "createdBy": admin@example.com,
  "description": Classifies documents,
  "generationType": CLASSIFICATION,
  "id": 550e8400-e29b-41d4-a716-446655440000,
  "isActive": true,
  "metadata": null,
  "template": Classify the following text...,
  "title": Classification Prompt v1,
  "updatedAt": 2026-01-19T03:40:00Z,
  "version": 1,
} satisfies PromptTemplatesPromptTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PromptTemplatesPromptTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


