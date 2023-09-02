# REST_API_K8s

### local deployment 
- follow this steps to acces api localy

1. run minikube cluster 
```
minikube start 
```
2. run mysql deploymet 
```
cd deployment-config
kubect apply -f mysql-deployment.yaml 
```
3. run api deployment 

```
kubectl apply -f api-deployment.yaml 

```
4. forward api service to access api


```
kubectl port-forward service/api-service 3000:3000
```

5. go to api 
```
http://http://127.0.0.1:3000/
```
6. go to swagger docs
```
ttp://127.0.0.1:3000/doc/
```
