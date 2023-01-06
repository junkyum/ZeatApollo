"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delete_fetch = exports.put = exports.patch = exports.get = exports.post = void 0;
const fetch = __importStar(require("node-fetch"));
async function get(url) {
    const res = await fetch(url);
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        throw Error(data);
    }
}
exports.get = get;
;
async function post(url, body, headers = {}) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        throw Error(data);
    }
}
exports.post = post;
;
async function put(url, body, headers = {}) {
    const options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: JSON.stringify(body)
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        throw Error(data);
    }
}
exports.put = put;
;
async function patch(url, headers = {}) {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    };
    const res = await fetch(url, options);
    if (res.ok) {
        return res;
    }
    else {
        throw Error(res);
    }
}
exports.patch = patch;
;
async function delete_fetch(url) {
    const options = {
        method: "DELETE"
    };
    const res = await fetch(url, options);
    const data = await res.json();
    if (res.ok) {
        return data;
    }
    else {
        throw Error(data);
    }
}
exports.delete_fetch = delete_fetch;
;
