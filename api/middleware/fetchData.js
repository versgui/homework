const fetchOptions = {
    crossDomain: true,
    method: 'GET',
    header: {'Content-Type': 'application/json'},
}

async function fetchData(endpoint, params) {
    const queryString = params ? '?' + Object.keys(params).map(key => key + '=' + params[key]).join('&') : null;

    const response = await fetch(endpoint + queryString, fetchOptions);

    if (response.ok) {
        return await response.json();
    } else {
        console.log('HTTP error: ' + response.status);
    }
}

export default fetchData;
