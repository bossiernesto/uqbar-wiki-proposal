---
layout: article
title: Guia de instalacion de maven
---
### Instalación default

Pueden seguir [estas instrucciones](http://maven.apache.org/download.cgi#Installation)

### Instalación en SO Unix-based (Linux, Solaris y Mac OS X)

#### Mediante apt-get

`$ sudo apt-get install maven`
`$ sudo ln -s /usr/share/maven3/bin/mvn /usr/bin/mvn`

#### Manualmente

Descargar Apache Maven 3 desde [este link](http://apache.dattatec.com/maven/maven-3/3.3.1/binaries/apache-maven-3.3.1-bin.tar.gz).

Descomprimir el tarball y mover el directorio a donde usualmente se guardan los programas. Ejemplo: */home/john/programs/*.

`$ tar -xzvf apache-maven-3.3.1-bin.tar.gz`
`$ mv apache-maven-3.3.1 /home/john/programs/`

Agregar la siguiente línea al archivo **.bashrc**. Este archivo oculto (su nombre empieza con '.') contiene comandos que se ejecutan cuando se abre una terminal (consola). Se puede abrir con cualquier editor de textos (Gedit, vim, Emacs, Notepad++, etc) y se encuentra en el directorio **home** del usuario.

`export PATH=$PATH:$HOME/programs/apache-maven-3.3.1/bin`

Una forma sencilla de hacer ésto (sin tener que abrir un editor) es usando el programa **echo** y *appendeando* (redireccionando y agregando al final) el output al archivo. **Prestar atención al hecho de que se usan dos signos mayor**:

`$ echo 'export PATH=$PATH:$HOME/programs/apache-maven-3.3.1/bin' >> .bashrc`

#### Verificación de la instalación

Corroboramos que podemos usar Maven. El output sería algo parecido a ésto:

`john@notebook:~$ mvn -v`
`Apache Maven 3.3.1 (r...)`
`Maven home: /home/john/programs/apache-maven-3.3.1`
`Java version: 1....`
`Java home: /usr/lib/jvm/...`
`Default locale: en_US, platform encoding: UTF-8`
`OS name: "linux", version: "3.0.0-19-generic", arch: "i386", family: "unix"`

### Configuración de Maven

La configuración general de Maven se encuentra en el archivo . Hay varios lugares donde se puede ubicar este archivo de configuración, habitualmente utilizaremos el que se encuentra en el directorio del usuario, en la ruta . La ruta exacta dependiendo de cada sistema operativo. Por ejemplo en Linux, si el usuario es pablo, la ruta sería . Si trabajan con Windows, instalado en el drive C: y el nombre del usuario es Fernando, el directorio será .

Es posible que la primera vez que agregamos una configuración, este archivo no exista. En ese caso se debe crearlo.

### Propiedades de Maven en Eclipse

Window &gt; Preferences te permite configurar algunas propiedades para Maven. Te recomendamos

-   tener chequeado "Do not automatically update dependencies from remote repositories" para que no intente bajarte permanentemente nuevas versiones de los componentes que utilices. Esto requiere que lo hagas en forma manual, algo que quizás sea más recomendable.
-   tener chequeado "Download artifact sources" te permite ver el código fuente de los .jars que te bajes, esta opción hace que las descargas inicialmente tarden un poco más de tiempo pero es bueno cuando tenés algún error y necesitás entender cómo funciona alguna parte de un componente.
-   también es bueno chequear "Download artifact javadocs" para obtener documentación de los componentes que utilizamos
-   Y por último tener deschequeada la opción "Update Maven projects on startup" permite que manualmente vos actualices los proyectos solamente ante un cambio y no cuando levantes el Eclipse.

Una configuración más que puede ser útil para encontrar versiones nuevas de artefactos en los repositorios es dejar chequeada:

-   La opción "Download repository index on startup" (opción por defecto chequeada): para más información pueden leer <http://stackoverflow.com/questions/8647769/what-is-eclipse-doing-when-it-says-that-its-updating-indexes>.

### Uso de Maven

Hay dos formas de trabajar con Maven, integrándose con el entorno de desarrollo (Eclipse, IntelliJ, etc.) o bien trabajando directamente por consola.

#### Plugin de Eclipse (M2E)

Las versiones recientes de Eclipse (al menos desde la versión Luna) no requieren que descargues el plugin M2E, en todo caso si no lo ves entrá a <http://eclipse.org/m2e/> y seguí las instrucciones de instalación. Cuando quieras ejecutar algún goal de Maven, simplemente te parás sobre el proyecto, Run As y elegís un Maven Goal de tu preferencia: build, clean, generate-sources, install o test. En el caso de elegir un build, tenés que completar un goal específico, p. ej: compile. También podés armar tu goal a partir del menú Run Configurations, y modificarle las opciones en el cuadro de diálogo.

#### Por consola

El trabajo por consola directa requiere ubicarse en el mismo directorio donde está el proyecto en el que estás en tu IDE y ejecutar los goals desde allí.

Una sutil diferencia entre trabajar con el entorno integrado es que si contás con dos proyectos

-   un proyecto Saraza-Domain
-   y otro proyecto de UI Saraza-Arena que tiene una dependencia a Saraza-Domain

Cuando lo debuggeen en el IDE podrán ver (y updatear) su proyecto de dominio corriendo el de Arena. En cambio si lo usan desde la consola cuando cambien algo en el dominio tendrán que instalar la versión del dominio y después actualizar la dependencia del proyecto arena en el archivo pom.

### Guías de referencia

Cualquiera sea la opción que elijas te dejamos estos links para trabajar:

-   Una guía de referencia rápida: <https://maven.apache.org/guides/MavenQuickReferenceCard.pdf>
-   Un manual completo de Maven: <http://books.sonatype.com/mvnref-book/reference/>

Y si necesitás arrancar, acá te dejamos instrucciones iniciales:

#### Creación de un proyecto básico

Una vez instaladas todas las herramientas, se puede crear un proyecto en esta plataforma siguiendo [este tutorial](creacion-de-un-proyecto-maven-basico.md) (ojo, este es un tutorial básico, si necesitan usar otras tecnologías de presentación busquen los tutoriales en las páginas de las tecnologías correspondientes).

-   Creamos un proyecto Maven. Desde la consola

`$ mvn archetype:generate -DgroupId=ar.edu.demo -DartifactId=demo -DinteractiveMode=false`

A todas las opciones que nos pregunte le damos enter para aceptar las default.

-   Copiamos nuestro código al directorio generado para el groupId. En el ejemplo: .

<!-- -->

-   Probamos hacer una compilación e instalación local.

`$ mvn install`
