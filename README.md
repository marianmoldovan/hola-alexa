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

![Add slot](https://github.com/marianmoldovan/hola-alexa/blob/master/images/add-slot.jpg)

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

Para ello nos vamos a la pestaña **Code** de nuestra Skill.

![Code tab](https://github.com/marianmoldovan/hola-alexa/blob/master/images/code-tab.png)

Por defecto, la plataforma nos deja el código para responder al usuario a los Intents obligatorios del sistema y al HelloWorldIntent que hemos borrado antes. Además, también nos deja el código del evento cuando el usuario activa la Skill, se trata del método **LaunchRequestHandler**. Igualmente pasa con el método **ErrorHandler**, si ocurre algún error con nuestra skill, saltará ese evento y la interacción que programemos ahí es lo que le llegará al usuario.

#### 1. Crear el handler para el intent PlantCareIntent

Vamos a crear un nuevo handler para poder responder al usuario cuando el Intent **PlantCareIntent** sea detectado. En el fichero **index.js** añadimos el siguiente código despues del LaunchRequest:

```
const PlantCareIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PlantCareIntent';
    },
    handle(handlerInput) {
        const speechText = 'El intent PlantCareIntent ha sido detectado';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
```

#### 2. Registrar el Handler

Y en la lista de handlers registrados añadimos el recien creado, por lo tanto, las últimas lineas del fichero **index.js** quedarían así:

```
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        PlantCareIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();
```

#### 3. Añadir lógica al Handler

Creamos un nuevo fichero, llamado **plants.js** en la carpeta lambda y copiamos el código disponible [aquí](https://raw.githubusercontent.com/marianmoldovan/hola-alexa/master/lambda/plants.js). Le damos a guardar y volvemos al fichero **index.js**.

Importamos la libreria que acabamos de crear usando el código:

```const plants = require('./plants')```

Y posteriormente actualizamos el handler PlantCareIntentHandler con el siguiente código:

```
const PlantCareIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'PlantCareIntent';
    },
    handle(handlerInput) {
        // Obtenemos el valor del Slot Plant
        let plant = handlerInput.requestEnvelope.request.intent.slots.Plant.value
        // Buscamos la planta en nuestra 'base de datos'
        let plantCaring = plants.findPlant(plant)
        let speechText = 'Vaya, no conozco la planta ' + plant + ', intenta con otra.'
        // Si conocemos la planta construimos el texto con los cuidados
        if(plantCaring) {
            speechText = 'Hay que regarla ' + plantCaring.agua + '. Recuerda que es una planta de ' + plantCaring.sol
        }
        // Retornamos la respuesta al usuario
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
```

También vamos a cambiar el mensaje de bienvenida cuando el usuario abre la skill. Para ello, nos vamos a la función **LaunchRequestHandler** y cambiamos la variable **speechText** a algo como: *Hola, soy el jardinero, te ayudo a cuidar tus plantas.*

Le damos al botón de **Save** y posteriormente a **Deploy**. Esto va a desplegar nuestro código en una función Lambda y lo va a dejar listo para poder probar nuestra Skill.

### Paso 5. Probar nuestra skill

Llegó el momento de probar nuestra skill, para ello, nos vamos a la pestaña **Test** de la consola de Alexa Developer. Habilitamos el testing para desarrollo y a continuación podemos interactuar con la consola como si fuese un dispositivo Alexa. Por lo tanto, primero tenemos que invocar la skill diciéndole algo como: 'Abre la skill el jardinero'. Posteriormente le podemos preguntar 'Como cuidar una planta' y probar toda la interacción que hemos desarrollado.

![Alexa test](https://github.com/marianmoldovan/hola-alexa/blob/master/images/alexa-test.png)


## Hasta aquí has aprendido a desarrollar una Skill sencilla, 100% funcional, los siguientes pasos son opcionales, para mejorar la skill.

### Mejora 1. Cambiar textos

Volvamos un momento al código de la skill. Busca todos los textos devueltos al usuario y cambialos con algo que tenga más sentido. Vé al fichero **index.js** y escribe otros textos, en español.

### Mejora 2. Añadir aleatoriedad en los textos

Vamos a añadir más textos para cada Intent para que la interacción no sea tan monòtona, para no responderle siempre con la misma frase. Para ello añadimos en el fichero **index.js** el siguiente código:

```
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}
```

Esto va a añadirle un método a las listas para poder elegir aleatoriamente un elemente. Por lo tanto, ahora, en cada handler, en lugar de tener un solo texto, podemos tener varios y elegir uno aleatoriamente. Por ejemplo, en el **LaunchRequestHandler** podríamos tener lo siguiente:
```
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const availableTexts = [
            'Hola, soy el jardinero, te ayudo a cuidar de tus plantas',
            'Buenas, soy el qué sabe de plantas, el jardinero',
            'Aquí el jardinero, ¿en qué puedo ayudarte amante de las plantas?'
        ]
        const speechText = availableTexts.randomElement()
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
```

De manera que el saludo inicial de la skill ya no va a ser siempre el mismo. Cambia algún intent más, como el de despedida o de ayuda.

Si quieres más información de como gestionar de manera más elegante los textos y las localización de ellos, [aquí](https://developer.amazon.com/es-mx/blogs/alexa/post/285a6778-0ed0-4467-a602-d9893eae34d7/how-to-localize-your-alexa-skills) tienes una buena guía de Amazon.

### Mejora 3. Más funcionalidades

Vamos a extender la skill. En lugar de tener un solo Intent para el sol y el riego necesario, vamos a crear dos Intents diferentes, uno que indiqué solo el riego necesario y otro que indiqué la luz que necesita una planta.

### 1. Crea un Intent llamado **WaterIntent** y otro llamado **LightIntent**
### 2. Añade los textos de entrenamiento (utterances)
### 3. Implementa los handlers para responder a dichos Intents
