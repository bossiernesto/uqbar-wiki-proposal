---
layout: article
title: Paradigma de objetos
---
Un objeto es un ente computacional que exhibe comportamiento (podemos comunicarnos con él mediante mensajes) y puede (o no) tener un estado interno (referencias a otros objetos).

Un programa basado en este paradigma es un conjunto de objetos que interactúan entre sí en un ambiente mandándose mensajes para lograr un objetivo determinado.

Intuición
---------

Intuitivamente, nuestra realidad parece estar conformada por muchos objetos: automóviles, mesas, frascos de mermelada, papeles, computadoras, cables. Esos objetos están allí, se pueden diferenciar entre ellos: una mesa y una silla son diferentes. Más importante aún, si tengo dos sillas, aunque hayan sido fabricadas en el mismo lugar, tengan la misma cantidad de patas y mismo tapizado, las puedo distinguir. Es decir, aunque dos objetos se vean muy parecidos, siguen siendo... ¡dos objetos diferentes! Los objetos se pueden diferenciar, porque tienen identidad propia.

¿Y por qué nos interesan los objetos? Cuando programamos, queremos resolver problemas, entonces no nos van a interesar tanto los objetos por sí mismos, sino que estos pueden resolver problemas. ¿Cómo es esto de resolver problemas? Simple: las hojas de papel nos sirven para escribir en ellas, los cables para conducir energía, los automóviles, para transportarnos. Es decir, no nos va a interesar la mesa porque tenga cuatro patas y una tabla de madera, sino porque esas cuatro patas y tabla nos permitirán resolver el problema de apoyar nuestro almuerzo. De los objetos, entonces, nos va a interesar que son capaces de hacer cosas: tienen comportamiento.

Hay algo más que es interesante en los objetos: a veces estos cambian con el tiempo. Por ejemplo, las mesas se deterioran después de servir de sostén por mucho tiempo, el frasco de mermelada se vacía después de sacarle mermelada varias veces, el automóvil pierde nafta cuando se mueve, y gana nafta cuando se lo recarga. Los objetos pueden tener un estado, y el mismo puede cambiar.

**Entonces parece que la pregunta de qué es un objeto se responde fácil... es una cosa, pero no cualquier cosa: tiene identidad, estado y comportamiento.**

Ahora nos queda realizar un último salto: en realidad hay más cosas, más objetos en nuestro mundo, que sólo automoviles, hojas o mesas. Hay por ejemplo, países, culturas,trabajos, problemas, ideas, sentimientos. Y una idea se puede diferenciar de otra (identidad), un trabajo puede resolverlos el problema de tener dinero a fin de mes (comportamiento), y un país puede cambiar (estado). Los objetos, entonces, pueden ser también cosas que no podemos tocar: cosas intangibles.

El paradigma de objetos nos propone justamente resolver nuestros problemas usando, adivinen.....¡objetos!. Y para eso, tendremos que zambullirnos en un mundo de objetos.

Teoría
------

-   [Mensajes y métodos](mensajes-y-metodos.md)
-   Referencias: [Variables](variables.md) y [Pseudovariables](pseudovariable.md)
-   [Encapsulamiento](encapsulamiento.md)
-   [Polimorfismo](polimorfismo-en-el-paradigma-de-objetos.md)
-   [Modelando objetos - Responsabilidades y delegación](modelando-objetos---responsabilidades-y-delegacion.md)
-   [Manejo de errores](manejo-de-errores.md)
-   [Prototipado](prototipado.md)
-   [Clases](clases.md)
-   [Prototipado vs Clases](prototipado-vs-clases.md)
-   [Herencia](herencia.md)
-   [Method lookup](method-lookup.md)
-   [Redefinición](redefinicion.md)
-   [Variables y métodos de clase](variables-y-metodos-de-clase.md)
-   [igual o idéntico - = vs ==](igual-o-identico-----vs---.md)
-   [Inmutabilidad](inmutabilidad.md)
-   [Composición (OOP)](Composición_(OOP) "wikilink")
-   [Garbage collector](garbage-collector.md)

Sintaxis
--------

-   [Sintaxis de Smalltalk](sintaxis-de-smalltalk.md)
-   [Tipos de mensajes en Smalltalk](tipos-de-mensajes-en-smalltalk.md)
-   [Variables locales en métodos](variables-locales-en-metodos.md)
-   [Precedencia de Mensajes](precedencia-de-mensajes.md)

Objetos básicos
---------------

-   [Manejo de booleanos](manejo-de-booleanos.md)
-   [min: y max:](min--y-max-.md)
-   [Bloques](bloques.md)

Colecciones
-----------

-   [Intro a colecciones](intro-a-colecciones.md)
-   [Sabores de colecciones](sabores-de-colecciones.md)
-   [Mensajes de colecciones](mensajes-de-colecciones.md)
-   [Errores comunes con select: y collect:](errores-comunes-con-select--y-collect-.md)
-   <inject:into:>
-   [Arrays literales en Smalltalk](arrays-literales-en-smalltalk.md)
-   [Diccionarios](diccionarios.md)

Cosas que pueden servir para pensar en cómo modelar un enunciado
----------------------------------------------------------------

-   [Diferencia entre objetos y procedural - con un ejercicio de la guía 1](diferencia-entre-objetos-y-procedural---con-un-ejercicio-de-la-guia-1.md)
-   [Nombres de clases](nombres-de-clases.md)
-   [Ley de demeter](ley-de-demeter.md)
-   [Cuestiones básicas para resolver el parcial de objetos](cuestiones-basicas-para-resolver-el-parcial-de-objetos.md)
-   [Puntos de entrada](puntos-de-entrada.md)

Cosas que pueden servir para el TP
----------------------------------

-   [Preguntas Frecuentes](preguntas-frecuentes.md)
-   [Métodos de clase para crear objetos inicializados](metodos-de-clase-para-crear-objetos-inicializados.md)
-   [Cómo hacer para que de un objeto muestre lo que yo quiero](como-hacer-para-que-de-un-objeto-muestre-lo-que-yo-quiero.md)
-   [Tutorial de Squeak y Pharo](tutorial-de-squeak-y-pharo.md)
-   [Cómo crear una subclase en Squeak](como-crear-una-subclase-en-squeak.md)
-   [Testing](testing.md)
-   [Pharo para programadores Ozonosos](pharo-para-programadores-ozonosos.md)
-   [Manual de Ozono](http://www.pdep.com.ar/Home/software/software-pharo/object-browser-ultima-version/ObjectBrowser-manual.pdf?attredirects=0)

Miscelánea
----------

-   [Máquina\_Virtual](maquina-virtual.md)
-   [Diagrama de clases](diagrama-de-clases.md)
-   [Lenguajes](lenguajes.md)

