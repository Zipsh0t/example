import { dbURL } from "../constants/appConstants"

const acceptableResponseCodes = [200, 201]

async function NetworkRequest(urlExtension, method, headers, body) {
        const response = await fetch(`${dbURL}${urlExtension}`,{
            method: method, 
            headers: headers,
            body: body
        })

        if (acceptableResponseCodes.includes(response.status)) {
            const data = await response.json()
            return data
        } else {
            const errorResponse = await response.json();
            const error =  errorResponse.error;
            if (error) {
                throw(error);
            }
            else {
                throw(errorResponse);
            }
        }
}

export default NetworkRequest