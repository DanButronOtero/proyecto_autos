# ¿ Como instalar ?

para instalar los modulos unicamente ejecutamos

```shell
npm install
```

para correr el servidor podemos usar el comando
```
npm test
```

```
📦proyecto_autos
 ┣ 📂complements
 ┃ ┣ 📂assets
 ┣ 📂database
 ┃ ┣ 📜constants.js
 ┃ ┗ 📜database.js
 ┣ 📂tables
 ┃ ┣ 📜coches.js
 ┃ ┣ 📜general.js
 ┃ ┗ 📜modelos.js
 ┣ 📂views
 ┃ ┗ 📂pages
 ┃ ┃ ┣ 📂cruds
 ┃ ┃ ┃ ┣ 📂coches
 ┃ ┃ ┃ ┃ ┣ 📜coches.ejs
 ┃ ┃ ┃ ┃ ┣ 📜create.ejs
 ┃ ┃ ┃ ┃ ┗ 📜update.ejs
 ┃ ┃ ┃ ┣ 📂modelos
 ┃ ┃ ┃ ┃ ┣ 📜create.ejs
 ┃ ┃ ┃ ┃ ┣ 📜modelos.ejs
 ┃ ┃ ┃ ┃ ┗ 📜update.ejs
 ┃ ┃ ┃ ┗ 📂puestos
 ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┣ 📜footer.ejs
 ┃ ┃ ┃ ┣ 📜footer_login.ejs
 ┃ ┃ ┃ ┣ 📜header.ejs
 ┃ ┃ ┃ ┗ 📜header_login.ejs
 ┃ ┃ ┣ 📜404.ejs
 ┃ ┃ ┣ 📜index.ejs
 ┃ ┃ ┗ 📜login.ejs
 ┣ 📜.gitignore
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```



## Database 

```
📦database
 ┣ 📜constants.js
 ┗ 📜database.js
```

contiene los scripts necesarios para la conneccion con mysql,constant contiene los parametros para realizar la connecion como el host,base datos,etc



## Tables

```
📦tables
 ┣ 📜coches.js
 ┣ 📜general.js
 ┗ 📜modelos.js
```

contiene todas las rutas de la web separados por tablas y  general contiene el index.

## VIews

```
📦views
 ┗ 📂pages
 ┃ ┣ 📂cruds
 ┃ ┃ ┣ 📂coches
 ┃ ┃ ┃ ┣ 📜coches.ejs
 ┃ ┃ ┃ ┣ 📜create.ejs
 ┃ ┃ ┃ ┗ 📜update.ejs
 ┃ ┃ ┣ 📂modelos
 ┃ ┃ ┃ ┣ 📜create.ejs
 ┃ ┃ ┃ ┣ 📜modelos.ejs
 ┃ ┃ ┃ ┗ 📜update.ejs
 ┃ ┃ ┗ 📂puestos
 ┃ ┣ 📂templates
 ┃ ┃ ┣ 📜footer.ejs
 ┃ ┃ ┣ 📜footer_login.ejs
 ┃ ┃ ┣ 📜header.ejs
 ┃ ┃ ┗ 📜header_login.ejs
 ┃ ┣ 📜404.ejs
 ┃ ┣ 📜index.ejs
 ┃ ┗ 📜login.ejs
```

El motor de renderizado exige que las paginas se encuentren en una carpeta con nombre views por lo que se encuentran dentro de esta carpeta, a su vez la carpeta tiene subcarpetas con las vistas de cada **CRUD** por vista, templates contiene los headers y footers necesarios para su correcto funcionamiento

## index.js

contiene algunas configuraciones e importa las rutas de que se crean en la carpeta Tables.

