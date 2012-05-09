#lang racket/base

(require web-server/servlet
         web-server/servlet-env
         racket/runtime-path
         (for-syntax racket/base))

(define-runtime-path public-html-path (build-path "public-html"))


(define (serve-compile-requests req)
  (define the-source (extract-binding/single 'source (request-bindings req)))
  (response/xexpr `(html (body (p "ok, I saw"
                                  ,(format "~s" the-source))))))

(serve/servlet serve-compile-requests 
               #:command-line? #t
               #:servlet-path "/compile"
               #:extra-files-paths (list public-html-path))