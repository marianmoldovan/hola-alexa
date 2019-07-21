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
