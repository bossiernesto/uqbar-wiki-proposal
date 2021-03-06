---
layout: article
title: Method lookup
---
Es el mecanismo por el cual se determina para el envío de un mensaje qué método se debe ejecutar. Este mecanismo puede variar en función de la tecnología usada, la explicación que se da a continuación se basa en Smalltalk usando clases, para leer sobre este mecanismo usando prototipos ver [Prototipado](prototipado.md).

¿Qué pasa cuando a un objeto **i** instancia de la clase **C** se le envía un mensaje de nombre **m**?

Tenemos (a efectos de entender el mecanismo porque esto lo hace internamente el ambiente) que mantener una referencia a la clase donde estamos buscando en un momento determinado.

Al principio la *clase actual* es **C** por ser la clase a partir de la cual instanciamos al objeto receptor del mensaje que es **i**.

El algoritmo es el siguiente:

**1.** se busca en la *clase actual* un método con el nombre **m**

**1a.** si se encuentra se ejecuta el método encontrado; se ejecuta el método en el objeto **i** y se terminó el method lookup

**1b.** si no se encuentra y la *clase actual* no es **Object** la *clase actual* pasa a ser la superclase de la *clase actual* y se vuelve a **1.**

**1c.** si no se encuentra y la clase actual es **Object** entonces el objeto **i** no entiende el mensaje **m**

El comportamiento por defecto en Smalltalk cuando un objeto no entiende un mensaje es lanzar un error. Esto se logra a través del envío de un mensaje llamado **\#doesNotUnderstand:** al objeto **i** (el método **\#doesNotUnderstand:** está definido en la clase **Object**)

Ejemplo básico
--------------

Si le enviamos el mensaje **asUppercase** al objeto `'hola'` (o sea, al string `'hola'`) ¿qué debería pasar?

Asumamos (porque no es así) que `'hola'` es instancia de **String**, que **String** es subclase de **Collection** y que **Collection** es subclase de **Object**.

Siguiendo el algorítmo de arriba a través de los pasos indicados con **-**

**i** es `'hola'`

*clase actual* es **String**

**m** es **\#asUppercase**

**-** se busca en **String** un método con el nombre **\#asUppercase**

**-** se encuentra el método **\#asUppercase** en la clase **String**

**-** se ejecuta el método **\#asUppercase** de la clase **String** sobre **i** el objeto receptor del mensaje (o sea `hola`)

Conclusión: `'hola'` entiende el mensaje **\#asUppercase**

Ejemplo (heredando un método)
-----------------------------

Basándonos en el ejemplo 1, si le enviamos el mensaje **isNil** al objeto `'hola'` (o sea, al string `'hola'`) ¿qué debería pasar?

**i** es `'hola'`

*clase actual* es **String**

**m** es **\#isNil**

**-** se busca en **String** un método con el nombre **\#isNil**

**-** no se encuentra el método **\#isNil** en **String** y la *clase actual* no es **Object** entonces la *clase actual* pasa a ser **Collection** (la superclase de la *clase actual*) y se vuelve a **1.**

**-** se busca en **Collection** un método con el nombre **\#isNil**

**-** no se encuentra el método **\#isNil** en **Collection** y la *clase actual* no es **Object** entonces la *clase actual* pasa a ser **Object** (la superclase de la *clase actual*) y se vuelve a **1.**

**-** se busca en **Object** un método con el nombre **\#isNil**

**-** se encuentra el método **\#isNil** en la clase **Object**

**-** se ejecuta el método **\#isNil** de la clase **Object** sobre **i** el objeto receptor del mensaje (o sea `hola`)

Conclusión: `'hola'` entiende el mensaje **\#isNil**

Es importante entender que, independientemente de dónde se mande un determinado mensaje (por ejemplo, podría ser en un método heredado donde se mande un mensaje a [self](self---pseudovariable.md)), el method lookup va a arrancar por la clase a partir de la cual se instanció el objeto. Lo único que puede alterar este mecanismo para empezar a buscar desde una clase distinta es si se mandó el mensaje a [super](super.md).

Ejemplo (no entiende el mensaje)
--------------------------------

Basándonos en el ejemplo 1, si le enviamos el mensaje **factorial** al objeto `'hola'` (o sea, al string `'hola'`) ¿qué debería pasar?

**i** es `'hola'`

*clase actual* es **String**

**m** es **\#factorial**

**-** se busca en **String** un método con el nombre **\#factorial**

**-** no se encuentra el método **\#factorial** en **String** y la *clase actual* no es **Object** entonces la *clase actual* pasa a ser **Collection** (la superclase de la *clase actual*) y se vuelve a **1.**

**-** se busca en **Collection** un método con el nombre **\#factorial**

**-** no se encuentra el método **\#factorial** en **Collection** y la *clase actual* no es **Object** entonces la *clase actual* pasa a ser **Object** (la superclase de la *clase actual*) y se vuelve a **1.**

**-** se busca en **Object** un método con el nombre **\#factorial**

**-** no se encuentra y la clase actual es **Object** entonces el objeto **i** no entiende el mensaje **m**

O dicho de otra forma, `'hola'` no entiende el mensaje **\#factorial**
