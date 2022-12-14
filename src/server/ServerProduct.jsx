const API_URL = "http://localhost:8080/";
export async function listaProducts() {
    const res = await fetch(API_URL+"product/");
    return await res.json();
}

export async function findProductById(id) {
    const res = await fetch(API_URL+"product/" + id);
    const data = await res.json();
    return data;
}

export async function deleteProductById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL+"product/" + id, options);
    const texto = await res.text();
    return texto;
}

export async function saveProduct(product) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(product)
    }
    const res = await fetch(API_URL+"product/", options);
    return await res.text();
}