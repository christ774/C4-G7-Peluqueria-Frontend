const BASE_URL = "http://localhost:8080/"


export async function listaDiarys() {
    const options = { method: 'GET' };
    const res = await fetch(BASE_URL + 'agendas', options);
    return await res.json();
};

export async function saveDiary(diary) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(diary)
    };
    const res = await fetch(BASE_URL+"agendas", options);
    return await res.json();
};

export async function deleteDiaryPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"agendas/"+id, options);
    return await res.text();
};

export async function findAllEmployee() {
    const res = await fetch(BASE_URL+"empleado");
    return await res.json();
};

export async function findDiaryById(id) {
    const res = await fetch(BASE_URL+"agendas/"+id);
    return await res.json();
};