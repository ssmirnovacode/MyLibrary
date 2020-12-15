import $ from '../core';

$.prototype.get = async function(url, dataTypeAnswer = 'json') {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        //more cases can be added
    }
};

$.prototype.post = async function(url, data, dataTypeAnswer = 'text') {
    let res = await fetch_(url, {
        method: "POST",
        body: data
    });

    switch (dataTypeAnswer) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
    }
}