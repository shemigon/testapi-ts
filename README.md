# Sample API

## Requirements

The application must expose restful endpoints that will parse data (passed in the request body) and return the value back to the client. The API will have two versions and depending on the version endpoint, the parsing of the data will return a different value back to the client. Use TypeScript interfaces so the code assumes the design / object properties.

### Endpoints

1. /api/v1/parse (POST)
1. /api/v2/parse (POST)

### Request Body

    {
        data: "JOHN0000MICHAEL0009994567"
    }

### Expected Results

1. **/api/v1/parse** – Response Body

	```
	{
        "statusCode": 200,
        "data":  {
            "firstName": "JOHN0000",
            "lastName": "MICHAEL000",
            "clientId": "9994567"
        }
    }
    ```

1. **/api/v2/parse** – Response Body

	```
    {
        "statusCode": 200,
        "data":  {
            "firstName": "JOHN",
            "lastName": "MICHAEL",
            "clientId": "999-4567"
        }
    }
    ```
