function getShorty(){

    let input = document.getElementById('url').value;

    $.ajax({
        method:'POST',
        type: 'POST',
        url:'http://localhost:4040/get-shorty',
        dataType: 'json',
        data:JSON.stringify(input),
        contentType: 'application/json; charset=urf-8',
    })
    .done(function(data, status, jqxhr){
        console.log("Great success!");
        console.log(data, status, jqxhr);
        document.getElementById('shorty').innerHTML = data;
    })

    .fail(function(jqxhr, status, error){
        console.log("Failure");
        console.log(jqxhr, status, error);
        document.getElementById('shorty').innerHTML = error;
    })

    document.getElementById('url').value = "";

}