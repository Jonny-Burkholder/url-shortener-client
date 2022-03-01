function getShorty(){

    console.log("Calling this function");

    let input = document.getElementById('url').value;

    $.ajax({
        type:'post',
        url:'http://localhost:4040/get-shorty',
        dataType: 'json',
        data:input,
        headers: {'Access-Control-Allow-Origin' : '*'},
        contentType: 'application/json; charset=urf-8',
    })
    .done(function(data, status, jqxhr){
        console.log("Great success!");
        console.log(data, status, jqxhr);
    })

    .fail(function(jqxhr, status, error){
        console.log("Failure");
        console.log(jqxhr, status, error);
    })

    document.getElementById('shorty').innerHTML = "text";

    document.getElementById('url').value = "";

}