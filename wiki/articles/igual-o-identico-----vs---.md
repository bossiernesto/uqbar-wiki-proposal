---
layout: article
title: Igual o identico     vs   
---
Definiciones
------------

**Identidad:** decimos que dos objetos son idénticos si son el mismo objeto. Dentro del ambiente podemos tener dos referencias diferentes al mismo objeto.

**Igualdad:** (o **equivalencia**) *por defecto dos* objetos son iguales si son el mismo objeto (en Object se define el mensaje = como self == anObject). La igualdad puede ser redefinida (Ver [Redefinición](redefinicion.md)) si el problema lo amerita.

Ejemplos
--------

Algunos objetos literales como los números y los símbolos (son como los strings pero arrancan con \#) son únicos en el sistema, por ese motivo evaluar \#hola == \#hola da true.

Sin embargo, lo normal es hacer las comparaciones con `=` y no con `==`.

La razón contada muy rápido: imaginate que por alguna razón en la imagen de Smalltalk (o de cualquier lenguaje que trabaja con objetos) en un momento hay dos String "hola", que están apuntados por las variables str1 y str2. La comparación

`   str1 = str2`

da true, porque representan al mismo ente. Pero la comparación

`   str1 == str2`

da false, porque no son exactamente el mismo objeto, la imagen los reconoce como distintos.

Dando un paso más, en qué casos podría ser útil redefinir el =? Hay algunos objetos que tienen como principal objetivo representar datos más allá de los literales que ya conocemos, como ser las fechas. Si yo evalúo esto en un workspace:

`d1 := Date newDay: 22 month: 10 year: 1987. `
`d2 := Date newDay: 22 month: 10 year: 1987. `

`d1 = d2.`
`d1 == d2.`

Esperaría que la consulta de igualdad sea cierta pero no la de identidad. Si vemos la implementación de Pharo que se encuentra en Timespan (superclase de Date) encontramos esto:

`= comparand`
` ^ self class = comparand class `
`    and: [ self start = comparand start `
`     and: [ self duration = comparand duration ]]`

De la misma forma podríamos redefinir la igualdad en alguna clase propia, como ser Direccion que tiene una calle y una numeración.

`#Direccion`
`= otraDireccion`
` ^ self class = otraDireccion class `
`      and: [ self calle = otraDireccion calle`
`        and: [ self numeracion = otraDireccion numeracion]]`

**Importante** Sólo debería redefinirse la igualdad basado en valores que no vayan a cambiar, en nuestro ejemplo una vez construido el objeto dirección con la calle y la numeración, no debería poder cambiar esas referencias, ya que la relación de igualdad entre dos objetos debería mantenerse a lo largo del tiempo. O sea, el objeto no necesita ser totalmente [inmutable](inmutabilidad.md) pero sí debemos garantizar que lo sea respecto a los valores usados para la igualdad.

Cuando redefinimos el = hay que redefinir también el método hash que es usado, por ejemplo, por las colecciones. De esa forma si queremos tener un Set de direcciones funcione como esperamos de modo que no hayan dos direcciones iguales. El hash (no sólo en objetos) es una función que retorna un número para un determinado elemento y se usa para algoritmos bien conocidos, y normalmente está definida en función del hash de otros objetos para simplificar la generación de una buena clave para dichos algoritmos.

Por ejemplo para las direcciones:

`#Direccion`
`hash`
` ^ self calle hash + self numeracion hash`

Es importante que el hash se defina en función de los mismos atributos que se usaron para la igualdad para que aquellos que trabajan usando el hash se comporten de forma esperada.
