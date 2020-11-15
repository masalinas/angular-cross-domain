# Tittle
Angular PoC Token Local Storage Cross Domain

# Description
In this PoC We could demostrate how with can propagate a token to any domain resolving the browser Web Storage API Policy called: 'local storage cross domain' using iframes and the [API postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) in Angular

# Running
### Start the main domain
```javascript
ng serve
```

### Start second and third domains
```javascript
ng serve --port=4201
ng serve --port=4202
```

### Open main domain and show that any token is created

![01](https://user-images.githubusercontent.com/1216181/99190706-7c465c00-2768-11eb-8cb1-01e3a464f934.png)

### Check all domain localstorages, any token not exists

![Main_Domain_LocalStorage](https://user-images.githubusercontent.com/1216181/99189491-b8c28980-2761-11eb-95ca-da19fc8b40d3.png)

### Click on the first Domain 'GSCC 01' and check that a new token is created on the main domains: 'http://localhost:4200'

![02](https://user-images.githubusercontent.com/1216181/99190741-a39d2900-2768-11eb-8772-08849b1ba4b0.png)

### Check that the same token created is showed on the first domain: 'http://localhost:4201'

![03](https://user-images.githubusercontent.com/1216181/99190770-c596ab80-2768-11eb-8687-5446d3d2974e.png)

### Check all domain local storages. The main and first domain local storage show the same token created before

![TF](https://user-images.githubusercontent.com/1216181/99189614-54ec9080-2762-11eb-9239-9fe2539e1035.png)

![Token_First_Domain_LS](https://user-images.githubusercontent.com/1216181/99189593-38505880-2762-11eb-973b-8fa4432a45cc.png)
