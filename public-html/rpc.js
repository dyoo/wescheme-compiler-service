// This provides an RPC using easyXDM


// If we're in embedded mode, start up a socket for cross domain messaging support.

(function() {

    var compile = function(program, onSuccess, onFail) {
        jQuery.ajax("/compile",
                    { data : {program : program},
                      success: function(data, textStatus, jqXHR) {
                          onSuccess(data);
                      },
                      error: function(jqXHR, textStatus, errorThrown) {
                          onFail(errorThrown);
                      }
                    });
                    
    };



    jQuery(document).ready(function() {
        var rpc = new easyXDM.Rpc({ local: "/js/easyXDM/name.html",
                                    swf: "/js/easyXDM/easyxdm.swf",
                                  },
                                  { local : { compile : compile }})});


}());