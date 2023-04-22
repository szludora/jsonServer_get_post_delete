export function getAdatok(vegpont, callbackfv) {
    fetch(vegpont, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((data) => callbackfv(data))
        .catch((error) => console.log(error));
}

export function deleteAdatok(vegpont, id) {
    vegpont += "/" + id
    fetch(vegpont, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function postAdatok(vegpont, ujAdat) {
    fetch(vegpont, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ujAdat)
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}