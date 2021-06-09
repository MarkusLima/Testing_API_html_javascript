async function getURL(url) {

    const response = await fetch(url);
    const check = await response.json();
    const text = await JSON.stringify(check);
    var body_json = formater_response(text)

    console.log(check);
    document.getElementById("tbl").innerHTML = '<div style="color:#fff; font-size: 12px">' + body_json + '</div>';
}

async function postURL(url) {
    var inputs = {};
    inputs.body = document.querySelector('#txtarea').value;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(inputs)
    });
    const check = await response.json();
    const text = await JSON.stringify(check);
    var body_json = formater_response(text)

    console.log(check);
    document.getElementById("tbl").innerHTML = '<div style="color:#fff; font-size: 12px">' + body_json + '</div>';
}

async function deleteData(url) {
    var inputs = {};
    inputs.body = document.querySelector('#txtarea').value;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    const check = await response.json();
    const text = await JSON.stringify(check);
    var body_json = formater_response(text)

    console.log(check);
    document.getElementById("tbl").innerHTML = '<div style="color:#fff; font-size: 12px">' + body_json + '</div>';
}

async function postURL(url) {
    var inputs = {};
    inputs.body = document.querySelector('#txtarea').value;

    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(inputs)
    });
    const check = await response.json();
    const text = await JSON.stringify(check);
    var body_json = formater_response(text)

    console.log(check);
    document.getElementById("tbl").innerHTML = '<div style="color:#fff; font-size: 12px">' + body_json + '</div>';
}

async function SEND() {
    var method = document.querySelector('#method').value;
    var url = document.querySelector('#url').value;
    if (url) {
        if (method == "GET") { await getURL(url) }
        if (method == "POST") { await postURL(url) }
        if (method == "DELETE") { await deleteData(url) }
        if (method == "PUT") { await putData(url) }
    }
}

function formater_response(text){
    var body_json = text
    .replaceAll(':[', ':<div style="color:#f00">[</div>')
    .replaceAll(']', '<div style="color:#f00">]</div>')
    .replaceAll('{', '<span style="color:#0000ff">{</span>')
    .replaceAll('}', '<span style="color:#0000ff">}</span>')
    .replaceAll('}}', '</br>}}')
    .replaceAll('},{', '},</br>{')
    .replaceAll('","', '",</br>"');

    return body_json;
}
