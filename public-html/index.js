jQuery(document).ready(function() {

    var rpc = new easyXDM.Rpc({ remote: "rpc.html" },
                              { remote : { compile : {} }});

    $("#submit").click(function(e) {
        e.preventDefault();
        e.stopPropagation();


        rpc.compile($("#source").text(),
                    function(result) {
                        $("#result").text(result);
                    },
                    function(err) {
                        alert(err);
                    });
    });



    


});