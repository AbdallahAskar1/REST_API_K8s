# REST_API_K8s

### local deployment 

- Follow these steps to access API locally
*clone repo*
1. run minikube cluster 
```
minikube start 
```
2. Run MySQL deployment 
```
cd deployment-config
Kubecrl apply -f mysql-deployment.yaml 
```
3. Run API deployment 

```
kubectl apply -f api-deployment.yaml 

```
4. Forward API service to access API

```
kubectl port-forward service/api-service 3000:3000
```

5. Go to API 
```
http://http://127.0.0.1:3000/
```
# 6. Go to Swagger docs
```
http://127.0.0.1:3000/doc/
```
