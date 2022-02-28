function getShorty(){

    console.log("Calling this function")

    let url = document.getElementById('url').value

    $.ajax({
        type:'POST',
        url:'localhost:4040/get-shorty',
        data:url,
        headers: {'Access-Control-Allow-Origin' : 'localhost:4040'}
    })

    document.getElementById('shorty').innerHTML = "text"

    document.getElementById('url').value = ""

}