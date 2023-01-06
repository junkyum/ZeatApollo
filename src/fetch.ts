import * as fetch from 'node-fetch';

async function get(url) {
    const res = await fetch(url);
    const data = await res.json();
    if(res.ok){
        return data;
    } else {
        throw Error(data);
    }
};

async function post(url, body, headers = {}) {
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            ...headers
        },
        body : JSON.stringify(body)
    };
    const res = await fetch(url,options);
    const data = await res.json();
    if(res.ok){
        return data;
    } else {
        throw Error(data);
    }
};

async function put(url, body, headers = {}) {
    const options = {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
            ...headers
        },
        body : JSON.stringify(body)
    };
    const res = await fetch(url,options);
    const data = await res.json();
    if(res.ok){
        return data;
    } else {
        throw Error(data);
    }
};

async function patch(url ,headers = {}) {
    const options = {
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json",
            ...headers
        }
    };
    const res = await fetch(url,options);
    if(res.ok){
        return res;
    } else {
        throw Error(res);
    }
};

async function delete_fetch(url) {
    const options = {
        method : "DELETE"
    };
    const res = await fetch(url,options);
    const data = await res.json();
    if(res.ok){
        return data;
    } else {
        throw Error(data);
    }
};

export {post, get, patch, put, delete_fetch};