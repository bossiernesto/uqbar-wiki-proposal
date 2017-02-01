---
layout: article
title: Preguntas frecuentes del paradigma logico
---
"Agregar" elementos a una lista
-------------------------------

### Pregunta

### Respuesta

Acordate de que el paradigma lógico no tiene efectos colaterales, por lo tanto "agregar" un elemento a una lista no es algo que se pueda hacer...

Sí puedo relacionar una lista con otra que tenga un elemento más:

`X = [Head|Tail]`

Va a unificar Head con la cabeza de X y Tail con la cola. Por lo tanto X tendrá un elemento más que Tail (que sería Head). Eso se puede usar tanto para conseguir una lista X con un elemento más que Tail como para obtener un Tail con un elemento X.

Lo que nunca podrías hacer es:

`X = [Head|X]`

*(Nótese que en los ejemplos se utiliza el igual de una forma que en un predicado probablemente no sería necesario. Casi casi casi siempre el igual está de más.)*
