
export default function Client() { }

const url = 'https://7bb2-213-25-77-242.ngrok-free.app'

Client.getDetails = async () => {
    const getDetailsUrl = `${url}/api/v1/Patient/Visit/GetDetails`

    return await fetch(getDetailsUrl)
        .then(response => response.json())
        .then(json => json.data)
        .catch(error => {
            console.error('Error ', error);
        })
};



Client.scanId = async () => {
    const getScanIdUrl = `${url}/api/v1/Patient/Visit/ScanId`

    console.log("SKANUJ")
    return await fetch(getScanIdUrl,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
        })
        .then(response => {
            console.log("response z js", response)
            return response
        })
        // .then(response => response.json())
        // .then(json => json.data)
        .catch(error => {
            console.error('Error ', error);
        })
};


