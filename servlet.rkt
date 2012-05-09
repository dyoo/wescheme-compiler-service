#lang racket/base

(require web-server/servlet
         web-server/servlet-env
         racket/runtime-path
         (for-syntax racket/base))

(define-runtime-path public-html-path (build-path "public-html"))


(define (serve-compile-requests req)
  (response/xexpr '(html (body (p "ok")))))

(serve/servlet serve-compile-requests 
               #:command-line? #t
               #:servlet-path "/compile"
               #:extra-files-paths (list public-html-path))