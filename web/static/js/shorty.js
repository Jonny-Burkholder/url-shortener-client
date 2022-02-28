function getShorty(){
    let url = document.getElementById(`url`).value

    let text = $.ajax({
        type:`GET`,
        url:`localhost:4040/get-shorty`,
        data:url,
    })

    document.getElementById('shorty').innerHTML = text

}