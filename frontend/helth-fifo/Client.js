
export default function Client() { }

const url = 'https://6bc5-213-25-77-242.ngrok-free.app'

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
        .then(response => response.json())
        .then(json => json.data)
        .catch(error => {
            console.error('Error ', error);
        })
};

Client.postpone = async (number) => {
    const postponeUrl = `${url}/api/v1/Patient/Visit/Postpone?`
    console.log("nssssumber = ", number)
    console.log("url", postponeUrl + new URLSearchParams({
        number: number,
        places: 1
    }))
    return await fetch(postponeUrl + new URLSearchParams({
        number: number,
        places: 1
    }),
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(json => json.data)
        .catch(error => {
            console.error('Error ', error);
        })
};



