export type JSONValue =
	| string
	| number
	| boolean
	| { [property: string]: JSONValue }
	| Array<JSONValue>

