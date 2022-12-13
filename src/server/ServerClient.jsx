const API_URL = "http://localhost:8080/";

export async function listaClients() {
    const res = await fetch(API_URL+"clientes/");
    return await res.json();
}

export async function findClientById(id) {
    const res = await fetch(API_URL+"clientes/" + id);
    const data = await res.json();
    return data;
}

export async function deleteClientById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL+"clientes/" + id, options);
    const texto = await res.text();
    return texto;
}

export async function saveClient(client) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(client)
    }
    const res = await fetch(API_URL+"clientes/", options);
    return await res.text();
}