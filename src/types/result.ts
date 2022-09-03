export type Result<Value, Error> = Success<Value, Error> | Failure<Value, Error>

export class Success<Value, Error> {
	readonly value: Value

	constructor(value: Value) {
		this.value = value
	}

	isSuccess(): this is Success<Value, Error> {
		return true
	}

	isFailure(): this is Failure<Value, Error> {
		return false
	}
}

export class Failure<Value, Error> {
	readonly error: Error

	constructor(error: Error) {
		this.error = error
	}

	isSuccess(): this is Success<Value, Error> {
		return false
	}

	isFailure(): this is Failure<Value, Error> {
		return true
	}
}

export const success = <Value, Error>(value: Value): Result<Value, Error> => {
	return new Success(value)
}

export const failure = <Value, Error>(error: Error): Result<Value, Error> => {
	return new Failure<Value, Error>(error)
}
