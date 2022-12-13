const API_URL = "http://localhost:8080/";

export async function listaDiarys() {
    const res = await fetch(API_URL+"agendas/");
    const data = await res.json();
    return data;

};

export async function findDiaryById(id){
    const res = await fetch(API_URL+"agendas/"+id);
    const data = await res.json();
    return data;
};
export async function saveDiary(diary){
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(diary)
    }
    const res = await fetch(API_URL+"agendas",options);
    return await res.json();
}