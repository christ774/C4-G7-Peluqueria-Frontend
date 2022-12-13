const API_URL = "http://localhost:8080/";
export async function listaEmployees() {
    const res = await fetch(API_URL+"empleado/");
    return await res.json();
}

export async function findProductById(id) {
    const res = await fetch(API_URL+"empleado/" + id);
    const data = await res.json();
    return data;
}

export async function deleteEmployeeById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(API_URL+"empleado/" + id, options);
    const texto = await res.text();
    return texto;
}

export async function saveEmployee(employee) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(employee)
    }
    const res = await fetch(API_URL+"empleado/", options);
    return await res.text();
}