jQuery(document).ready(function() {
    $("#result").css('whitespace', 'pre');

    var rpc = new easyXDM.Rpc({ remote: "rpc.html" },
                              { remote : { compile : {} }});

    $("#submit").click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        rpc.compile($("#source").val(),
                    function(result) {
                        $("#result").text(result);
                    },
                    function(err) {
                        alert(err);
                    });
    });
});