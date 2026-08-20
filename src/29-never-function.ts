function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!");