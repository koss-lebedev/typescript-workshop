type payload =
  | Failure(int)
  | Success(string)
  | NotFound;

let getMessage = (response: payload) => {
  switch (response) {
    | Success(theMessage) => "Success! " ++ theMessage
    | Failure(errorCode) => "Error ocurred. Code: " ++ string_of_int(errorCode)
    | NotFound => "Not found"
  };
};
