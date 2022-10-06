/* Utility functions for fetching data */

function makeOptions(method, body) {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
}

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}

/* facade functions */

function getAllPersons() {
    return fetch("https://markchomin.com/ca1/api/person/")
        .then(handleHttpErrors)
}

function getPersonByPhone(phoneNumber) {
    return fetch("https://markchomin.com/ca1/api/person/phone/"+ phoneNumber)
        .then(handleHttpErrors)
}

function getPersonsByHobby(hobby) {
    return fetch("http://markchomin.com/ca1/api/person/hobby/" + hobby)
        .then(handleHttpErrors)
}

function getPersonsByZip(zip) {
    return fetch("http://markchomin.com/ca1/api/person/cityzip/" + zip)
        .then(handleHttpErrors)
}

function addPerson(person) {
    const options = makeOptions("POST", person);
    return fetch("http://markchomin.com/ca1/api/person/", options)
        .then(handleHttpErrors)
}

function updatePerson(person, id) {
    const options = makeOptions("PUT", person);
    return fetch("http://markchomin.com/ca1/api/person/" + id, options)
        .then(handleHttpErrors)
}

function deletePerson(id) {
    const options = makeOptions("DELETE");
    return fetch("http://markchomin.com/ca1/api/person/" + id, options)
        .then(handleHttpErrors)
}

/* Make sure you understand what we create here, it involves VITAL JavaScript knowledge */
const personFacade = {
    getAllPersons,
    getPersonByPhone,
    getPersonsByHobby,
    getPersonsByZip,
    addPerson,
    updatePerson,
    deletePerson
}

export default personFacade;