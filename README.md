#Aplicacion de comandos que registra tareas.

para instalar todas las dependencias:
```
npm instal
```

Para crear una tarea:
```
node app crear -d "correr" 
```
donde ```-d "correr"``` es la descripción de la tarea

Para listar todas las tareas:
```
node app crear listar
```

Para actualizar el estado de una tarea:
```
node app actualizar -d "correr" -c true
```

Para borrar una tarea:
```
node app borrar -d "correr"
```
