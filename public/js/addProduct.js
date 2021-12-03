const addForm = document.forms.addProduct


addForm.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let child = e.target.elements[i];
        // console.log(child);
        if(child.name) {
            body[child.name] = child.value
        }
    }
    console.log(body);
    sendForm(body, e.target.method, "/api/add")
})

const sendForm = async (body, method, path) => {
    let response = await fetch(path, {
        method: method,
        headers: {
            "Accept": "application/json", // ответ. с сервера на клиента
            "Content-Type": "application/json" // с клиента на сервер
        },
        body: JSON.stringify(body)
    })
    let data = await response.json();
    console.log(data)
}



