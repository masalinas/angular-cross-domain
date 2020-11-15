# Description
Angular PoC Token Cross Domain

# Running
Start the main domain
```javascript
ng serve
```

Start second and third domains
```javascript
ng serve --port=4201
ng serve --port=4202
```

Open main domain and check the localstorage

![Main_Domain](https://user-images.githubusercontent.com/1216181/99189478-a1839c00-2761-11eb-8367-69afe11b1e64.png)

Check the localstorage of all domains

![Main_Domain_LocalStorage](https://user-images.githubusercontent.com/1216181/99189491-b8c28980-2761-11eb-95ca-da19fc8b40d3.png)

Click on the first Domain and check that the token is showed

![Token_Main_Domain](https://user-images.githubusercontent.com/1216181/99189575-0dfe9b00-2762-11eb-9b79-a8ca6d4721b6.png)

Check the localstorage of the main domain

![Token_First_Domain png](https://user-images.githubusercontent.com/1216181/99189580-1951c680-2762-11eb-8bb5-7befbe010351.png)

Check the second domain show the same token from the main one

![TF](https://user-images.githubusercontent.com/1216181/99189614-54ec9080-2762-11eb-9239-9fe2539e1035.png)

Check the second domain localstorage

![Token_First_Domain_LS](https://user-images.githubusercontent.com/1216181/99189593-38505880-2762-11eb-973b-8fa4432a45cc.png)
