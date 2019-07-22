## Alexa 101 - Taller de introducción al desarrollo de Skills para Alexa

El objetivo de este taller es del de aprender a desarrollar una skill muy sencilla para Alexa. Programaremos una skill llamada 'El Jardinero' para que nos diga el cuidado de las plantas, el riego y la luz necesaria. Vamos a utilizar exclusivamente la consola de desarrollo de Alexa y los recursos de cómputo que nos da por defecto el entorno de Alexa.

### Paso 1. Crear una cuenta de desarrollo de Alexa Skills

#### 1. Regístrate en [Amazon Developer](developer.amazon.com) para poder comenzar a desarrollar
#### 2. Una vez que estás registrado, ve al [Dashboard de Alexa Skills](https://developer.amazon.com/alexa/console/ask)

![Alexa Dashboard](https://github.com/marianmoldovan/hola-alexa/blob/master/images/dashboard-alexa.png)


### Paso 2. Crear una nueva Skill

Vamos a crear nuestra skill del jardinero

#### 1. Primero le damos al botón de crear skill
#### 2. Nos pedirá una serie de datos
* Nombre de invocación. **El jardinero**
* Idioma por defecto. Seleccionamos **Spanish (MX)**
* Modelo de skill. Selecciona **Custom**
* Método de hospedake. Elegimos **Alexa-Hosted**

![New Alexa Skill](https://github.com/marianmoldovan/hola-alexa/blob/master/images/new-skill.jpg)

### Paso 3. Modelo de interacción. Intents y Slots

Vamos a crear nuestro modelo de interacción conversacional. Vamos a crear un intent y un slot para poder dar funcionalidad a nuestra Skill.

#### 1. Primero editamos el nombre de invocación de la skill, ¿como vamos a llamar a nuestra skill? Pongamos "el jardinero"

![Invocation name](https://github.com/marianmoldovan/hola-alexa/blob/master/images/invocation-name.png)

#### 2. Intents

Por defecto, la plataforma nos da los 4 intents obligatorios, *AMAZON.CancelIntent*, *AMAZON.HelpIntent*, *AMAZON.StopIntent*, *AMAZON.NavigateHomeIntent* y *HelloWorldIntent*.

Borramos el intent **HelloWorldIntent**, es un intent que se nos crea por defecto, como un Hello World, no lo vamos a necesitar.

![Delete and add intent](https://github.com/marianmoldovan/hola-alexa/blob/master/images/delete-add.png)

Creamos un nuevo Intent de tipo **Custom** al cual llamaremos **PlantCareIntent**. Éste es el intent que queremos que sea detectado cuando los usuarios soliciten el cuidado de una planta.

![Custom intent](https://github.com/marianmoldovan/hola-alexa/blob/master/images/custom-intent.png)

Ahora tenemos que añadir frases de ejemplo de entrenamiento. Tenemos que pensar de qué manera (la más natural posible) alguien pediria instrucciones de cuidado de una planta. Añadimos algunos ejemplos como:
* *Cuidados de una flor*
* *Cuidar una planta*
* *Dime los cuidados de una planta*
* *Cuanto sol le hace falta a una flor*
* *Cuanto agua necesita un helecho*

![Utterances](https://github.com/marianmoldovan/hola-alexa/blob/master/images/utterances.png)

A continuación le damos a **Save model** y seguidamente a **Build model**. Va a tardar unos segundos, lo qué pasa durante este tiempo de espera es qué la plataforma de NLU de Alexa construye el modelo conversacional.

![Utterances](https://github.com/marianmoldovan/hola-alexa/blob/master/images/save-build.png)

Ahora podemos probar el modelo y comprobar si funciona. Pulsamos el botón **Utterance profiler** e introducimos alguna frase similar, como *Como cuido de un cactus*, si todo ha ido bien, nos va a indicar el Intent detectado.

![Utterance profiler](https://github.com/marianmoldovan/hola-alexa/blob/master/images/utterance-profiler.png)

#### 3. Slots

Vamos a crear un slot para detectar el tipo de planta al que se refiere el usuario. Para eso necesitamos crear un Slot a medida, custom. Nos vamos a la opción **Slot Types** del menu de la izquierda y le damos al botón de **Add**. Le ponemos el nombre de **Plant** y lo creamos.

![Add slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/add-slot.png)

Ahora toca escribir los valores de nuesto slot. Vamos a definir el número máximo de valores para qué la detección se lo más eficiente posible. Puedes irte al fichero json con las plantas para hacerte una idea de algunos nombres, [plants.json](https://github.com/marianmoldovan/hola-alexa/blob/master/lambda/plants.js). Añade por lo menos algunos, como:
* *Peperonia*
* *Telefono*
* *Helecho*
* *Peperonia*
* *Lengua de suegra*
* *Palma*
* *Suculenta*

También puedes añadir sinónimos, de manera que si alguien lo usa, se va a detectar y te lo notificará con el nombre original. Por ejemplo, podriamos añadir los nombres *Photo* y *Photus* que son otros nombres con los que se conocen al *Teléfono*.

![Plant slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/plant-slot.png)

Para terminar de editar el slot, le damos a **Save model**.

#### 4. Entities, Slots y gestión del diálogo

Ahora tenemos que conecter el Slot con el Intent adecuado, indicar como reconocer el tipo de planta en el intent PlantCare. Para eso nos vamos a editar otra vez el intent **PlantCareIntent**.

Vamos a bajar a área **Intent Slots** y vamos a añadir un Slot llamado **Plant** del tipo **Plant**, que acabamos de crear.

![Plant slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/intent-slot.png)

Ahora vamos a volver a añadir frases de ejemplo, esta vez incluyendo el Slot, frases como:
* *Como cuidar una {Plant}*
* *Cuanto regar a la {Plant}*
* *Cuanto tengo que regar la planta {Plant}*
* *Qué sabes de la {Plant}*

![Intent with slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/intent-with-slot.png)

Para facilitar nuestro trabajo, vamos a delegar parte de la gestión del diálogo a la plataforma de Alexa. Vamos a hacer que sea la propia Alexa la qué gestione la conversación en caso de qué el usuario no nos diga el nombre de la planta. Y cuando el usuario responda con el nombre de la planta, Alexa va a marcar como completado el Intent. Para ello, vamos a ir otra vez al área **Slot Intents** del Intent **PlantCareIntent** y en la fila del Slot Plant, vamos a clickar en **Edit Dialog**.

Una vez en la pantalla de edición, activamos el checkbox **Is this slot required to fulfill the intent?**. Una vez activada la opción, se nos aparecerán dos opciones nuevas, Alexa speech prompts y User utterances. En la primera, debemos indicar qué frases queremos que Alexa diga al usuario para solicitarle de nuevo el valor del Slot Plant. Por ejemplo:
* *¿De qué planta quieres que te diga los cuidados?*
* *¿Sobre qué planta quieres que te hable?*

De ésta manera, estamos pidiendo de forma explicita que nos digan el nombre de la planta y así poder reconocer el Slot. En el segundo área, de User utterances, debemos indicar de nuevo, maneras en las que el usuario puede decirnos el nombre de la planta. Frases como:
* *{Plant}*. En la que el usuario únicamente nos indica únicamente el nombre de la planta.
* *Creo que es {Plant}*
* *Es {Plant}*
* *Es la {Plant}*

![Intent with slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/slot-filling.jpg)

Y ya tenemos nuestro modelo de interacción conversacional, solamente le damos a **Save model** y luego a **Build model**. Y esperamos a qué se acabe de entrenar.

### Paso 4. Código

Es hora de darle vida a nuestra Skill. Para eso vamos a utilizar la librería Alexa Skills Kit de Javascript/Node.JS y los recursos de cómputo hospedados por Alexa (en AWS).
