const API_URL = "http://129.213.214.60:8080/";
export async function listaProducts() {
    const res = await fetch(API_URL+"servicios/");
    return await res.json();
}

export async function findProductById(id) {
    const res = await fetch(API_URL+"servicios/" + id);
    const data = await res.json();
    return data;
}

export async function deleteProductById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL+"servicios/" + id, options);
    const texto = await res.text();
    return texto;
}

export async function saveProduct(product) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(product)
    }
    const res = await fetch(API_URL+"servicios/", options);
    return await res.text();
}