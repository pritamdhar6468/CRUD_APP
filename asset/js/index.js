

$("#add_user").submit(function(event){
    alert("data insrted sucessfully");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data={}

    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);

    var request={
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Sucessfully!");
    })
})



if(window.location.pathname =="/"){
    $ondelete =$(".table tbody tr td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request={
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE"
        }
        if(confirm("Do you really want it delete")){
            $.ajax(request).done(function(response){
                alert("Data deleted Sucessfully!");
                location.reload();
            })
        }
    })
}