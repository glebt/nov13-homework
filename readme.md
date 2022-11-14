## build
docker build . -t glebtulukin/node-web-app:1.2

## push 
docker push glebtulukin/node-web-app:1.2

## run locally
docker run -p 49160:8080 -d glebtulukin/node-web-app:1.2

## deploy specs to kubernetes - the entire dir
kubectl apply -f k8s/

## port-forward
kubectl port-forward svc/homework-numbers-svc :8080
```
will look like:
Forwarding from 127.0.0.1:38523 -> 8080
Forwarding from [::1]:38523 -> 8080
```

## in browser number from the previous line
http://localhost:38523/numbers?size=5

## or curl
```
▶curl -i "localhost:38523/numbers?size=6"
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 18
ETag: W/"12-jgDFnyPH9FyaMDFeCXSRjfu7BhM"
Date: Mon, 14 Nov 2022 00:28:36 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[0, 1, 2, 3, 4, 5]
```

## delete kubernetes resources
kubectl delete -f k8s/

## TODO: helm create homework
