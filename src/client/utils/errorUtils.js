export class ExtendableError extends Error {
  constructor(message) {
    super(message || 'Error');
    this.name = 'ExtendableError';

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = (new Error(message)).stack;
    }
  }
}

ExtendableError.prototype = Object.create(Error.prototype);

export class ServerError extends ExtendableError {
  static DEFAULT_MESSAGE = 'Unknown Server Error';
  static DEFAULT_STATUS = 0;
  status;

  constructor(
    message = ServerError.DEFAULT_MESSAGE,
    status = ServerError.DEFAULT_STATUS
  ) {
    super(message);
    this.name = 'ServerError';
    this.status = status;
    this.message = message;
  }
}

export class NetworkError extends ExtendableError {
  static DEFAULT_MESSAGE = 'Network Request failed';

  constructor(message = NetworkError.DEFAULT_MESSAGE) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class FetchResponseError extends ExtendableError {
  static DEFAULT_MESSAGE = 'Unable to parse response';

  constructor(message = NetworkError.DEFAULT_MESSAGE) {
    super(message);
    this.name = 'FetchResponseError';
  }
}

export class ParseError extends ExtendableError {
  constructor() {
    super('An error occured while parsing a JSON string');
    this.name = 'ParseError';
  }
}
