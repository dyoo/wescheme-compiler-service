wescheme-compiler-service
=========================

wescheme compiler service


Currently working out the design...



A servlet for servicing compilation requests for WeScheme.


Parameters per request:

   name: the name of the program
   language: the language (should be a restricted set)
   at_toplevel: boolean, whether we're compiling a toplevel expression or a module
   source: the text of the program


The output should include the compiled program, as well as version
information to detect whether or not the compiled program can run
under the available runtime.
   

----------------------------------------------------------------------

Configuration for the compiler itself:

    dynamic module loader.  Programs may refer to existing programs on
    WeScheme.org.  We should be able to perform module lookup on those
    programs.


----------------------------------------------------------------------

Concerns:

    Logging each request?  Might be useful to know what programs are being compiled.

    Caching?

    Reliability?  How do we guarantee that the service never goes down
    or uses too much space or time?