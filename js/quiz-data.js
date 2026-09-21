/**
 * Banco de Preguntas de Esgrima Bíblico para Corintios Diario
 * Formato oficial de competencia: "Según [Referencia], ¿...?"
 * Cobertura exhaustiva de los versículos resaltados por defecto.
 */

const ESGRIMA_QUIZ_DATA = {
    // DÍA 1: 1ª de Corintios 1 al 4
    1: [
        {
            reference: "1 Corintios 1:1",
            question: "Según 1 Corintios 1:1, ¿por qué voluntad fue llamado Pablo a ser apóstol de Jesucristo y qué hermano lo acompañaba?",
            options: [
                "Por la voluntad de Dios, y el hermano Sóstenes",
                "Por nombramiento del concilio de Jerusalén, y el hermano Bernabé",
                "Por elección de los magistrados de Acaya, y el hermano Silas",
                "Por voluntad de los ancianos de Tarso, y el hermano Timoteo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:1: «Pablo, llamado a ser apóstol de Jesucristo por la voluntad de Dios, y el hermano Sóstenes»."
        },
        {
            reference: "1 Corintios 1:5",
            question: "Según 1 Corintios 1:5, ¿en qué cosas fueron enriquecidos los corintios en Cristo?",
            options: [
                "En todas las cosas fuisteis enriquecidos en él, en toda palabra y en toda ciencia",
                "En riquezas materiales y tierras en la provincia de Acaya",
                "En tributos comerciales y cargos públicos en la ciudad",
                "En honores imperiales y renombre militar romano"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:5: «porque en todas las cosas fuisteis enriquecidos en él, en toda palabra y en toda ciencia»."
        },
        {
            reference: "1 Corintios 1:7",
            question: "Según 1 Corintios 1:7, ¿de qué manera se encontraba la iglesia de Corinto respecto a los dones?",
            options: [
                "De tal manera que nada les faltaba en ningún don",
                "Carecían de profecía y conocimiento",
                "Buscaban afanosamente los dones menores",
                "Solo poseían dones de sabiduría humana"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:7 declara: «de tal manera que nada os falta en ningún don, esperando la manifestación de nuestro Señor Jesucristo»."
        },
        {
            reference: "1 Corintios 1:9",
            question: "Según 1 Corintios 1:9, ¿a qué fuimos llamados por Dios, quien es fiel?",
            options: [
                "A la comunión con su Hijo Jesucristo nuestro Señor",
                "A juzgar a los príncipes de este siglo",
                "A buscar sabiduría terrenal",
                "A formar partidos doctrinales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:9: «Fiel es Dios, por el cual fuisteis llamados a la comunión con su Hijo Jesucristo nuestro Señor»."
        },
        {
            reference: "1 Corintios 1:11",
            question: "Según 1 Corintios 1:11, ¿por quiénes fue informado Pablo acerca de las contiendas en Corinto?",
            options: [
                "Por los de Cloé",
                "Por Bernabé y Silas",
                "Por los magistrados de Acaya",
                "Por Apolos de Alejandría"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:11: «Porque he sido informado acerca de vosotros, hermanos míos, por los de Cloé, que hay entre vosotros contiendas»."
        },
        {
            reference: "1 Corintios 1:14",
            question: "Según 1 Corintios 1:14, ¿a quiénes da gracias a Dios Pablo por haber bautizado en Corinto?",
            options: [
                "A Crispo y a Gayo",
                "A Cefas y a Timoteo",
                "A Estéfanas y a Sóstenes",
                "A Aquila y a Priscila"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:14: «Doy gracias a Dios de que a ninguno de vosotros he bautizado, sino a Crispo y a Gayo»."
        },
        {
            reference: "1 Corintios 1:16",
            question: "Según 1 Corintios 1:16, ¿a qué familia también bautizó Pablo?",
            options: [
                "A la familia de Estéfanas",
                "A la familia de Cornelio",
                "A la familia de Lidia",
                "A la familia de Filemón"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:16: «También bauticé a la familia de Estéfanas; de los demás, no sé si he bautizado a algún otro»."
        },
        {
            reference: "1 Corintios 1:17",
            question: "Según 1 Corintios 1:17, ¿a qué envió Cristo a Pablo?",
            options: [
                "No a bautizar, sino a predicar el evangelio",
                "A debatir con los filósofos griegos",
                "A fundar sinagogas en Acaya",
                "A imponer ritos de la ley"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:17: «Pues no me envió Cristo a bautizar, sino a predicar el evangelio; no con sabiduría de palabras, para que no se haga vana la cruz de Cristo»."
        },
        {
            reference: "1 Corintios 1:18",
            question: "Según 1 Corintios 1:18, ¿qué es la palabra de la cruz para los que se pierden y para los que se salvan?",
            options: [
                "Locura a los que se pierden; pero poder de Dios a los que se salvan",
                "Misterio a los sabios y tropiezo a los creyentes",
                "Filosofía vana a los griegos y juicio a los gentiles",
                "Ley a los judíos y doctrina a los romanos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:18: «Porque la palabra de la cruz es locura a los que se pierden; pero a los que se salvan, esto es, a nosotros, es poder de Dios»."
        },
        {
            reference: "1 Corintios 1:19",
            question: "Según 1 Corintios 1:19, ¿qué está escrito que hará Dios con la sabiduría de los sabios?",
            options: [
                "Destruiré la sabiduría de los sabios, y desecharé el entendimiento de los entendidos",
                "Exaltará la sabiduría de los sabios sobre las naciones",
                "Guardará el entendimiento para el siglo venidero",
                "Corregirá los escritos de los filósofos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:19: «Pues está escrito: Destruiré la sabiduría de los sabios, y desecharé el entendimiento de los entendidos»."
        },
        {
            reference: "1 Corintios 1:22",
            question: "Según 1 Corintios 1:22, ¿qué piden los judíos y qué buscan los griegos?",
            options: [
                "Los judíos piden señales, y los griegos buscan sabiduría",
                "Los judíos buscan poder, y los griegos piden sacrificios",
                "Los judíos piden leyes, y los griegos buscan riqueza",
                "Los judíos buscan señales, y los griegos piden milagros"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:22: «Porque los judíos piden señales, y los griegos buscan sabiduría»."
        },
        {
            reference: "1 Corintios 1:23",
            question: "Según 1 Corintios 1:23, ¿qué predican los apóstoles que resulta tropezadero para los judíos y locura para los gentiles?",
            options: [
                "A Cristo crucificado",
                "La circuncisión de la carne",
                "El cumplimiento de las tradiciones",
                "El juicio sobre el imperio romano"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:23: «pero nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero, y para los gentiles locura»."
        },
        {
            reference: "1 Corintios 1:27-29",
            question: "Según 1 Corintios 1:27-29, ¿qué cosas escogió Dios para avergonzar a los sabios y a lo fuerte, y con qué propósito?",
            options: [
                "Lo necio, lo débil, lo vil y lo menospreciado del mundo, a fin de que nadie se jacte en su presencia",
                "A los ejércitos más poderosos de Roma para conquistar los pueblos",
                "A los filósofos más reconocidos de Atenas para debatir la ley",
                "A los reyes y sacerdotes más ricos de la tierra para honrar su nombre"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:27-29: «sino que lo necio del mundo escogió Dios, para avergonzar a los sabios; y lo débil del mundo escogió Dios, para avergonzar a lo fuerte; y lo vil del mundo y lo menospreciado escogió Dios... a fin de que nadie se jacte en su presencia»."
        },
        {
            reference: "1 Corintios 1:30",
            question: "Según 1 Corintios 1:30, ¿qué cuatro cosas nos ha sido hecho Cristo Jesús por Dios?",
            options: [
                "Sabiduría, justificación, santificación y redención",
                "Riqueza, poder terrenal, honor y victoria militar",
                "Ley, juicio, condenación y autoridad humana",
                "Fama, elocuencia, filosofía y dominio político"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 1:30: «Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención»."
        },
        {
            reference: "1 Corintios 2:1",
            question: "Según 1 Corintios 2:1, ¿cómo no fue Pablo a anunciar el testimonio de Dios cuando llegó a Corinto?",
            options: [
                "No fui con excelencia de palabras o de sabiduría",
                "No fui con vestiduras sacerdotales judías",
                "No fui con cartas de escolta militar romana",
                "No fui con provisiones de alimentos de Macedonia"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:1: «Así que, hermanos, cuando fui a vosotros para anunciaros el testimonio de Dios, no fui con excelencia de palabras o de sabiduría»."
        },
        {
            reference: "1 Corintios 2:4",
            question: "Según 1 Corintios 2:4, ¿cómo fue la palabra y predicación de Pablo a los corintios?",
            options: [
                "No con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder",
                "Con retórica de los filósofos de la academia griega",
                "Con decretos formales y amenazas de la ley de Moisés",
                "Con fábulas y genealogías interminables"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:4: «y ni mi palabra ni mi predicación fue con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder»."
        },
        {
            reference: "1 Corintios 3:12-13",
            question: "Según 1 Corintios 3:12-13, ¿qué materiales pueden edificarse sobre el fundamento y cómo será probada la obra de cada uno?",
            options: [
                "Oro, plata, piedras preciosas, madera, heno, hojarasca; y la obra será probada y revelada por el fuego",
                "Bronce, hierro y barro probados por el agua del diluvio",
                "Piedras de cantera probadas por el peso de los siglos",
                "Ladrillos y paja probados por los tribunales civiles"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:12-13: «Y si sobre este fundamento alguno edificare oro, plata, piedras preciosas, madera, heno, hojarasca, la obra de cada uno se hará manifiesta; porque el día la declarará, pues por el fuego será revelada; y la obra de cada uno cuál sea, el fuego la probará»."
        },
        {
            reference: "1 Corintios 3:19",
            question: "Según 1 Corintios 3:19, ¿qué es la sabiduría de este mundo para con Dios?",
            options: [
                "La sabiduría de este mundo es insensatez para con Dios; pues Él prende a los sabios en la astucia de ellos",
                "Es el camino principal para alcanzar la santidad perfecta",
                "Es igual de valiosa que la revelación profética",
                "Es el fundamento sobre el cual edificar la iglesia"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:19: «Porque la sabiduría de este mundo es insensatez para con Dios; pues escrito está: El prende a los sabios en la astucia de ellos»."
        },
        {
            reference: "1 Corintios 2:3",
            question: "Según 1 Corintios 2:3, ¿de qué manera estuvo Pablo entre los corintios?",
            options: [
                "Con debilidad, y mucho temor y temblor",
                "Con elocuencia y gran autoridad militar",
                "Con riquezas y honores de sabios",
                "Con jactancia y palabras persuasivas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:3: «Y estuve entre vosotros con debilidad, y mucho temor y temblor»."
        },
        {
            reference: "1 Corintios 2:5",
            question: "Según 1 Corintios 2:5, ¿en qué debe estar fundada nuestra fe?",
            options: [
                "No en la sabiduría de los hombres, sino en el poder de Dios",
                "En la retórica de los maestros",
                "En las señales y maravillas visibles",
                "En el conocimiento de este siglo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:5: «para que vuestra fe no esté fundada en la sabiduría de los hombres, sino en el poder de Dios»."
        },
        {
            reference: "1 Corintios 2:6",
            question: "Según 1 Corintios 2:6, ¿entre quiénes habla sabiduría el apóstol?",
            options: [
                "Entre los que han alcanzado madurez",
                "Entre los filósofos del Areópago",
                "Entre los príncipes de este siglo",
                "Entre los escribas de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:6: «Sin embargo, hablamos sabiduría entre los que han alcanzado madurez; y sabiduría, no de este siglo, ni de los príncipes de este siglo, que perecen»."
        },
        {
            reference: "1 Corintios 2:10",
            question: "Según 1 Corintios 2:10, ¿por medio de quién reveló Dios lo que tiene preparado para los que le aman?",
            options: [
                "Por el Espíritu, porque el Espíritu todo lo escudriña, aun lo profundo de Dios",
                "Por visiones secretas de los ángeles",
                "Por la tradición de los ancianos",
                "Por la sabiduría natural del hombre"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:10: «Pero Dios nos las reveló a nosotros por el Espíritu; porque el Espíritu todo lo escudriña, aun lo profundo de Dios»."
        },
        {
            reference: "1 Corintios 2:12",
            question: "Según 1 Corintios 2:12, ¿qué Espíritu hemos recibido los creyentes?",
            options: [
                "El Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido",
                "El espíritu del mundo y de sabiduría carnal",
                "El espíritu de temor y servidumbre",
                "El espíritu de los gobernantes de este siglo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:12: «Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido»."
        },
        {
            reference: "1 Corintios 2:14",
            question: "Según 1 Corintios 2:14, ¿por qué el hombre natural no percibe las cosas del Espíritu de Dios?",
            options: [
                "Porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente",
                "Porque no ha leído la ley de Moisés",
                "Porque no tiene suficiente educación humana",
                "Porque los gobernantes se lo impiden"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 2:14: «Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente»."
        },
        {
            reference: "1 Corintios 3:1",
            question: "Según 1 Corintios 3:1, ¿cómo tuvo que hablar Pablo a los corintios debido a su condición?",
            options: [
                "Como a carnales, como a niños en Cristo",
                "Como a maestros de sabiduría",
                "Como a jueces de los misterios",
                "Como a perfectos y espirituales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:1: «De manera que yo, hermanos, no pude hablaros como a espirituales, sino como a carnales, como a niños en Cristo»."
        },
        {
            reference: "1 Corintios 3:3",
            question: "Según 1 Corintios 3:3, ¿qué evidencias mostraban que los corintios aún eran carnales?",
            options: [
                "Habiendo entre ellos celos, contiendas y disensiones",
                "Falta de recursos económicos",
                "No hablar en lenguas",
                "No observar los días de fiesta"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:3: «porque aún sois carnales; pues habiendo entre vosotros celos, contiendas y disensiones, ¿no sois carnales, y andáis como hombres?»."
        },
        {
            reference: "1 Corintios 3:6",
            question: "Según 1 Corintios 3:6, ¿qué función cumplió Pablo, qué hizo Apolos y quién dio el crecimiento?",
            options: [
                "Pablo plantó, Apolos regó; pero el crecimiento lo ha dado Dios",
                "Pablo regó, Apolos plantó y los apóstoles edificaron",
                "Pablo edificó, Apolos probó y la iglesia creció",
                "Apolos sembró, Pablo cosechó y Dios juzgó"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:6: «Yo planté, Apolos regó; pero el crecimiento lo ha dado Dios»."
        },
        {
            reference: "1 Corintios 3:8",
            question: "Según 1 Corintios 3:8, ¿qué recibirán el que planta y el que riega?",
            options: [
                "Cada uno recibirá su recompensa conforme a su labor",
                "El mismo elogio de parte de los hombres",
                "La gloria terrenal por su trabajo",
                "Una corona corruptible en la tierra"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:8: «Y el que planta y el que riega son una misma cosa; aunque cada uno recibirá su recompensa conforme a su labor»."
        },
        {
            reference: "1 Corintios 3:9",
            question: "Según 1 Corintios 3:9, ¿qué somos nosotros y qué es la iglesia?",
            options: [
                "Somos colaboradores de Dios, y vosotros sois labranza de Dios, edificio de Dios",
                "Somos señores de la fe y vosotros siervos nuestros",
                "Somos maestros de la ley y vosotros discípulos carnales",
                "Somos arquitectos del mundo y vosotros la obra humana"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:9: «Porque nosotros somos colaboradores de Dios, y vosotros sois labranza de Dios, edificio de Dios»."
        },
        {
            reference: "1 Corintios 3:11",
            question: "Según 1 Corintios 3:11, ¿cuál es el único fundamento que nadie puede sustituir?",
            options: [
                "Jesucristo",
                "El apóstol Pablo",
                "La sabiduría de los profetas",
                "La ley de Moisés"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:11: «Porque nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo»."
        },
        {
            reference: "1 Corintios 3:17",
            question: "Según 1 Corintios 3:17, ¿qué le sucederá a quien destruya el templo de Dios?",
            options: [
                "Dios le destruirá a él; porque el templo de Dios, el cual sois vosotros, santo es",
                "Será juzgado únicamente por hombres",
                "Perderá su recompensa pero no su cuerpo",
                "Tendrá que reconstruirlo con plata y oro"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 3:17: «Si alguno destruyere el templo de Dios, Dios le destruirá a él; porque el templo de Dios, el cual sois vosotros, santo es»."
        },
        {
            reference: "1 Corintios 4:1",
            question: "Según 1 Corintios 4:1, ¿cómo deben considerarnos los hombres?",
            options: [
                "Por servidores de Cristo, y administradores de los misterios de Dios",
                "Por sabios y gobernadores de la congregación",
                "Por señores de la doctrina y la ley",
                "Por jueces de las conciencias humanas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 4:1: «Así, pues, téngannos los hombres por servidores de Cristo, y administradores de los misterios de Dios»."
        },
        {
            reference: "1 Corintios 4:2",
            question: "Según 1 Corintios 4:2, ¿qué requisito indispensable se exige a los administradores?",
            options: [
                "Que cada uno sea hallado fiel",
                "Que posean elocuencia pública",
                "Que tengan gran fortuna",
                "Que sean aprobados por los sabios"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 4:2: «Ahora bien, se requiere de los administradores, que cada uno sea hallado fiel»."
        },
        {
            reference: "1 Corintios 4:5",
            question: "Según 1 Corintios 4:5, ¿qué hará el Señor cuando venga?",
            options: [
                "Aclarará lo oculto de las tinieblas y manifestará las intenciones de los corazones",
                "Establecerá tribunales humanos en Corinto",
                "Premiará a los que hablaron con sabiduría de palabras",
                "Condenará a los que no bautizaron a muchos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 4:5: «el cual aclarará también lo oculto de las tinieblas, y manifestará las intenciones de los corazones; y entonces cada uno recibirá su alabanza de Dios»."
        },
        {
            reference: "1 Corintios 4:10",
            question: "Según 1 Corintios 4:10, ¿qué contraste presenta Pablo entre los apóstoles y los corintios?",
            options: [
                "Nosotros insensatos por amor de Cristo, mas vosotros prudentes en Cristo; nosotros débiles, mas vosotros fuertes",
                "Nosotros ricos en bienes, mas vosotros necesitados",
                "Nosotros sabios en la ley, mas vosotros ignorantes",
                "Nosotros reyes en la tierra, mas vosotros siervos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 4:10: «Nosotros insensatos por amor de Cristo, mas vosotros prudentes en Cristo; nosotros débiles, mas vosotros fuertes; vosotros honorables, mas nosotros despreciados»."
        },
        {
            reference: "1 Corintios 4:11",
            question: "Según 1 Corintios 4:11, ¿cuáles eran las penurias cotidianas de los apóstoles?",
            options: [
                "Hambre, sed, desnudez, son abofeteados y no tienen morada fija",
                "Abundancia de honores y comodidades en las ciudades",
                "Exención de tributos y protección de los gobernantes",
                "Viajes sin tribulación ni persecución"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 4:11: «Hasta esta hora nos batimos con el hambre, la sed, la desnudez, somos abofeteados, y no tenemos morada fija»."
        }
    ],

    // DÍA 2: 1ª de Corintios 5 al 8
    2: [
        {
            reference: "1 Corintios 5:1",
            question: "Según 1 Corintios 5:1, ¿qué pecado inmoral se oía que ocurría en Corinto que ni aun entre los gentiles se nombraba?",
            options: [
                "Que alguno tenía la mujer de su padre",
                "Que robaban las ofrendas del templo",
                "Que consultaban a adivinos paganos",
                "Que pleiteaban por herencias familiares"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 5:1: «De cierto se oye que hay entre vosotros fornicación, y tal fornicación cual ni aun se nombra entre los gentiles; tanto que alguno tiene la mujer de su padre»."
        },
        {
            reference: "1 Corintios 5:5",
            question: "Según 1 Corintios 5:5, ¿con qué propósito espiritual debía ser entregado el transgresor a Satanás?",
            options: [
                "Para destrucción de la carne, a fin de que el espíritu sea salvo en el día del Señor Jesús",
                "Para que muera sin misericordia terrenal",
                "Para que pierda toda esperanza de vida",
                "Para avergonzar a su familia ante Acaya"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 5:5: «el tal sea entregado a Satanás para destrucción de la carne, a fin de que el espíritu sea salvo en el día del Señor Jesús»."
        },
        {
            reference: "1 Corintios 5:6",
            question: "Según 1 Corintios 5:6, ¿qué advertencia hace Pablo sobre la levadura?",
            options: [
                "¿No sabéis que un poco de levadura leuda toda la masa?",
                "Que la levadura es indispensable para el pan",
                "Que solo la gran cantidad de levadura corrompe",
                "Que la levadura vieja no afecta la masa"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 5:6: «No es buena vuestra jactancia. ¿No sabéis que un poco de levadura leuda toda la masa?»."
        },
        {
            reference: "1 Corintios 5:7",
            question: "Según 1 Corintios 5:7, ¿quién es nuestra pascua que ya fue sacrificada por nosotros?",
            options: [
                "Cristo",
                "El cordero del tabernáculo",
                "El sumo sacerdote de Jerusalén",
                "El testimonio apostólico"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 5:7: «Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros»."
        },
        {
            reference: "1 Corintios 5:8",
            question: "Según 1 Corintios 5:8, ¿con qué panes debemos celebrar la fiesta?",
            options: [
                "Con panes sin levadura, de sinceridad y de verdad",
                "Con panes de sabiduría humana",
                "Con la levadura de malicia y de maldad",
                "Con panes preparados según ritos antiguos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 5:8: «Así que celebremos la fiesta, no con la vieja levadura, ni con la levadura de malicia y de maldad, sino con panes sin levadura, de sinceridad y de verdad»."
        },
        {
            reference: "1 Corintios 6:1",
            question: "Según 1 Corintios 6:1, ¿delante de quiénes reprende Pablo que no deben ir a juicio los creyentes cuando tienen pleito entre sí?",
            options: [
                "Delante de los injustos (incrédulos), sino que deben resolverse delante de los santos",
                "Delante de los magistrados romanos en las plazas públicas",
                "Delante de los filósofos de la academia de Acaya",
                "Delante de los sacerdotes de los templos paganos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:1: «¿Osa alguno de vosotros, cuando tiene algo con otro, ir a juicio delante de los injustos, y no delante de los santos?»."
        },
        {
            reference: "1 Corintios 6:4",
            question: "Según 1 Corintios 6:4, en cuanto a litigios cotidianos, ¿a quiénes ponían erróneamente para juzgar?",
            options: [
                "A los que son de menor estima en la iglesia",
                "A los apóstoles y ancianos",
                "A los ángeles del cielo",
                "A los creyentes más espirituales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:4: «Si, pues, tenéis juicios sobre cosas de esta vida, ¿ponéis para juzgar a los que son de menor estima en la iglesia?»."
        },
        {
            reference: "1 Corintios 6:5",
            question: "Según 1 Corintios 6:5, ¿por qué dice Pablo estas palabras para avergonzarlos?",
            options: [
                "Porque parecía no haber entre ellos ni aun un sabio que pudiese juzgar entre sus hermanos",
                "Porque no recogían suficientes ofrendas",
                "Porque no asistían a las reuniones",
                "Porque no hablaban en lenguas extrañas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:5: «Para avergonzaros lo digo. ¿Pues qué, no hay entre vosotros sabio, ni aun uno, que pueda juzgar entre sus hermanos»."
        },
        {
            reference: "1 Corintios 6:7",
            question: "Según 1 Corintios 6:7, ¿qué alternativa propone Pablo ante las ofensas entre hermanos?",
            options: [
                "¿Por qué no sufrís más bien el agravio? ¿Por qué no sufrís más bien el ser defraudados?",
                "Acudir de inmediato al tribunal romano",
                "Exigir el pago con intereses",
                "Contratar defensores paganos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:7: «Así que, ya es de cierto una falta en vosotros que tengáis pleitos entre vosotros mismos. ¿Por qué no sufrís más bien el agravio? ¿Por qué no sufrís más bien el ser defraudados?»."
        },
        {
            reference: "1 Corintios 6:9-10",
            question: "Según 1 Corintios 6:9-10, ¿quiénes NO heredarán el reino de Dios?",
            options: [
                "Los injustos, fornicarios, idólatras, adúlteros, ladrones, avaros, borrachos ni estafadores",
                "Los que no poseen riquezas terrenales",
                "Los que comen viandas sacrificadas",
                "Los que no conocen la ley de Moisés"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:9-10 declara enfáticamente que los injustos y pecadores impenitentes no heredarán el reino de Dios."
        },
        {
            reference: "1 Corintios 6:11",
            question: "Según 1 Corintios 6:11, ¿cuáles tres cosas han ocurrido con los creyentes en el nombre del Señor Jesús y por el Espíritu de Dios?",
            options: [
                "Ya habéis sido lavados, ya habéis sido santificados, ya habéis sido justificados",
                "Ya habéis sido examinados, probados y coronados reyes en la tierra",
                "Ya habéis sido enriquecidos en oro, plata y bienes temporales",
                "Ya habéis recibido títulos, honores y autoridad política"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:11: «Y esto erais algunos; mas ya habéis sido lavados, ya habéis sido santificados, ya habéis sido justificados en el nombre del Señor Jesús, y por el Espíritu de nuestro Dios»."
        },
        {
            reference: "1 Corintios 6:12",
            question: "Según 1 Corintios 6:12, ¿cuál es el principio cristiano sobre la libertad y el dominio propio?",
            options: [
                "Todas las cosas me son lícitas, mas no todas convienen; todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna",
                "Todo lo que deseo me es permitido sin restricción",
                "Las costumbres del mundo rigen mi libertad",
                "Lo que la ley prohíbe es lo único que importa"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:12: «Todas las cosas me son lícitas, mas no todas convienen; todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna»."
        },
        {
            reference: "1 Corintios 6:13",
            question: "Según 1 Corintios 6:13, ¿para qué NO es el cuerpo y para quién es?",
            options: [
                "El cuerpo no es para la fornicación, sino para el Señor, y el Señor para el cuerpo",
                "El cuerpo es para todos los apetitos de la carne",
                "El cuerpo es solo para los placeres terrenales",
                "El cuerpo no tiene relación con el Señor"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:13: «Pero el cuerpo no es para la fornicación, sino para el Señor, y el Señor para el cuerpo»."
        },
        {
            reference: "1 Corintios 6:14",
            question: "Según 1 Corintios 6:14, ¿qué hará Dios con nosotros así como levantó al Señor?",
            options: [
                "Y Dios, que levantó al Señor, también a nosotros nos levantará con su poder",
                "Nos librará de todo sufrimiento en esta vida terrenal",
                "Nos otorgará coronas corruptibles de gloria humana",
                "Nos establecerá como gobernadores de las provincias"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:14: «Y Dios, que levantó al Señor, también a nosotros nos levantará con su poder»."
        },
        {
            reference: "1 Corintios 6:15",
            question: "Según 1 Corintios 6:15, ¿de quién son miembros nuestros cuerpos?",
            options: [
                "Son miembros de Cristo",
                "Son miembros del templo terrenal",
                "Son propiedad exclusiva del mundo",
                "Son instrumentos sin valor espiritual"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:15: «¿No sabéis que vuestros cuerpos son miembros de Cristo? ¿Quitaré, pues, los miembros de Cristo y los haré miembros de una ramera? De ningún modo»."
        },
        {
            reference: "1 Corintios 6:17",
            question: "Según 1 Corintios 6:17, ¿qué llega a ser el que se une al Señor?",
            options: [
                "Un espíritu es con él",
                "Un sabio en la filosofía de este siglo",
                "Un maestro superior a los ángeles",
                "Un siervo de las opiniones humanas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:17: «Pero el que se une al Señor, un espíritu es con él»."
        },
        {
            reference: "1 Corintios 6:18",
            question: "Según 1 Corintios 6:18, ¿qué mandamiento directo se da respecto a la fornicación?",
            options: [
                "Huid de la fornicación; el que fornica, contra su propio cuerpo peca",
                "Toleren la fornicación con prudencia",
                "Debatan sobre la moralidad del acto",
                "Oculten las faltas carnales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:18: «Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca»."
        },
        {
            reference: "1 Corintios 6:19",
            question: "Según 1 Corintios 6:19, ¿de quién es templo nuestro cuerpo?",
            options: [
                "Templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios",
                "Templo de la sabiduría humana de Acaya",
                "Templo de las leyes romanas",
                "Templo de los filósofos del Areópago"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:19: «¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?»."
        },
        {
            reference: "1 Corintios 6:20",
            question: "Según 1 Corintios 6:20, ¿por qué debemos glorificar a Dios en nuestro cuerpo y en nuestro espíritu?",
            options: [
                "Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios",
                "Porque así obtendremos la admiración y el respeto de los magistrados",
                "Para evitar las sanciones civiles de los tribunales de Corinto",
                "Porque el cuerpo pertenece a las costumbres y leyes de Acaya"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 6:20: «Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios»."
        },
        {
            reference: "1 Corintios 7:1",
            question: "Según 1 Corintios 7:1, ¿qué responde Pablo en cuanto a las cosas que le consultaron por carta?",
            options: [
                "Bueno le sería al hombre no tocar mujer",
                "Es obligatorio que todos se casen inmediatamente",
                "Nadie debe formar matrimonio bajo ninguna circunstancia",
                "El celibato está prohibido para los siervos de Dios"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:1: «En cuanto a las cosas de que me escribisteis, bueno le sería al hombre no tocar mujer»."
        },
        {
            reference: "1 Corintios 7:2",
            question: "Según 1 Corintios 7:2, a causa de las fornicaciones, ¿qué instrucción da el apóstol?",
            options: [
                "Cada uno tenga su propia mujer, y cada una tenga su propio marido",
                "Todos deben permanecer estrictamente célibes",
                "Evitar el matrimonio a toda costa",
                "Separarse de la vida conyugal"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:2: «pero a causa de las fornicaciones, cada uno tenga su propia mujer, y cada una tenga su propio marido»."
        },
        {
            reference: "1 Corintios 7:7",
            question: "Según 1 Corintios 7:7, ¿qué desearía Pablo respecto a todos los hombres y qué aclara sobre el don de cada uno?",
            options: [
                "Quisiera más bien que todos los hombres fuesen como yo; pero cada uno tiene su propio don de Dios, uno a la verdad de un modo, y otro de otro",
                "Quisiera que todos estuviesen casados sin excepción",
                "Que nadie reciba dones espirituales para el celibato",
                "Que todos adopten las costumbres conyugales romanas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:7: «Quisiera más bien que todos los hombres fuesen como yo; pero cada uno tiene su propio don de Dios, uno a la verdad de un modo, y otro de otro»."
        },
        {
            reference: "1 Corintios 7:17",
            question: "Según 1 Corintios 7:17, ¿cuál es la regla que Pablo ordena en todas las iglesias sobre el llamamiento?",
            options: [
                "Cada uno como el Señor le repartió, y como Dios llamó a cada uno, así haga; esto ordeno en todas las iglesias",
                "Que todos cambien de profesión y estado al convertirse",
                "Que abandonen sus familias y ciudades de origen",
                "Que se sometan a los ritos ceremoniales de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:17: «Pero cada uno como el Señor le repartió, y como Dios llamó a cada uno, así haga; esto ordeno en todas las iglesias»."
        },
        {
            reference: "1 Corintios 7:22",
            question: "Según 1 Corintios 7:22, ¿qué es el que en el Señor fue llamado siendo esclavo, y qué es el libre?",
            options: [
                "El esclavo es liberto del Señor, y el libre es esclavo de Cristo",
                "El esclavo sigue en servidumbre terrenal y el libre no tiene amo",
                "Ambos son gobernantes de Acaya",
                "El libre debe hacerse esclavo de los hombres"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:22: «Porque el que en el Señor fue llamado siendo esclavo, liberto es del Señor; asimismo el que fue llamado siendo libre, esclavo es de Cristo»."
        },
        {
            reference: "1 Corintios 7:23",
            question: "Según 1 Corintios 7:23, ¿cuál es la exhortación final sobre nuestro valor y libertad?",
            options: [
                "Por precio fuisteis comprados; no os hagáis esclavos de los hombres",
                "Busquen comprar su libertad con oro",
                "Ríndanse a los mandatos de los sabios",
                "Sean siervos de las opiniones humanas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:23: «Por precio fuisteis comprados; no os hagáis esclavos de los hombres»."
        },
        {
            reference: "1 Corintios 7:24",
            question: "Según 1 Corintios 7:24, ¿cómo debe permanecer cada creyente para con Dios?",
            options: [
                "Cada uno, hermanos, en el estado en que fue llamado, así permanezca para con Dios",
                "Buscando cambiar desesperadamente su condición social",
                "Trasladándose de inmediato a otra provincia",
                "Exigiendo ser reconocido como maestro público"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:24: «Cada uno, hermanos, en el estado en que fue llamado, así permanezca para con Dios»."
        },
        {
            reference: "1 Corintios 7:25",
            question: "Según 1 Corintios 7:25, ¿qué aclara Pablo respecto a las instrucciones sobre las vírgenes?",
            options: [
                "De las vírgenes no tengo mandamiento del Señor; mas doy mi parecer, como quien ha alcanzado misericordia del Señor para ser fiel",
                "Tengo un mandamiento estricto e inmutable del Señor para todas",
                "Las vírgenes tienen prohibido consagrarse a la obra",
                "Solo los apóstoles de Judea pueden legislar sobre el matrimonio"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:25: «De las vírgenes no tengo mandamiento del Señor; mas doy mi parecer, como quien ha alcanzado misericordia del Señor para ser fiel»."
        },
        {
            reference: "1 Corintios 7:34-35",
            question: "Según 1 Corintios 7:34-35, ¿de qué tiene cuidado la doncella no casada y cuál es el propósito de Pablo al aconsejar esto?",
            options: [
                "Tiene cuidado de las cosas del Señor, para ser santa en cuerpo y espíritu; para que sin impedimento os acerquéis al Señor",
                "Tiene cuidado de las fiestas y diversiones de la ciudad",
                "Para imponerles una carga pesada e innecesaria",
                "Para que se aparten de toda comunión con la iglesia"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 7:34-35: «La doncella tiene cuidado de las cosas del Señor, para ser santa así en el cuerpo como en el espíritu... para lo que es honesto y decente, y para que sin impedimento os acerquéis al Señor»."
        },
        {
            reference: "1 Corintios 8:1",
            question: "Según 1 Corintios 8:1, ¿cuál es el contraste entre el conocimiento y el amor?",
            options: [
                "El conocimiento envanece, pero el amor edifica",
                "El conocimiento salva, pero el amor confunde",
                "El amor juzga, pero el conocimiento perdona",
                "El conocimiento edifica, pero el amor divide"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:1: «El conocimiento envanece, pero el amor edifica»."
        },
        {
            reference: "1 Corintios 8:2",
            question: "Según 1 Corintios 8:2, ¿qué dice Pablo sobre el que se imagina que sabe algo?",
            options: [
                "Y si alguno se imagina que sabe algo, aún no sabe nada como debe saberlo",
                "Demuestra que ha alcanzado la madurez espiritual perfecta",
                "Debe ser nombrado de inmediato maestro de la congregación",
                "Posee la sabiduría más sublime de toda Acaya"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:2: «Y si alguno se imagina que sabe algo, aún no sabe nada como debe saberlo»."
        },
        {
            reference: "1 Corintios 8:3",
            question: "Según 1 Corintios 8:3, si alguno ama a Dios, ¿qué se dice de él?",
            options: [
                "Es conocido por él",
                "Posee toda sabiduría terrenal",
                "Será alabado por los hombres",
                "Nunca sufrirá tribulaciones"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:3: «Pero si alguno ama a Dios, es conocido por él»."
        },
        {
            reference: "1 Corintios 8:4",
            question: "Según 1 Corintios 8:4, ¿qué sabemos acerca de un ídolo y de Dios?",
            options: [
                "Un ídolo nada es en el mundo, y no hay más que un Dios",
                "Los ídolos tienen poder en los cielos",
                "Hay muchos dioses creadores del universo",
                "Los ídolos deben ser temidos por los santos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:4: «sabemos que un ídolo nada es en el mundo, y que no hay más que un Dios»."
        },
        {
            reference: "1 Corintios 8:6",
            question: "Según 1 Corintios 8:6, ¿cuál es la confesión de fe cristiana respecto a Dios el Padre y al Señor Jesucristo?",
            options: [
                "Para nosotros sólo hay un Dios, el Padre, del cual proceden todas las cosas; y un Señor, Jesucristo, por medio del cual son todas las cosas",
                "Existen múltiples deidades intermediarias en el universo",
                "El Padre y el Hijo son dioses separados con diferentes propósitos",
                "Las cosas proceden de la naturaleza y no del Creador"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:6: «para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él»."
        },
        {
            reference: "1 Corintios 8:9",
            question: "Según 1 Corintios 8:9, ¿qué cuidado debemos tener con nuestra libertad?",
            options: [
                "Mirad que esta libertad vuestra no venga a ser tropezadero para los débiles",
                "Usarla para demostrar superioridad teológica",
                "Imponerla sobre todas las conciencias",
                "Guardarla únicamente en secreto"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:9: «Pero mirad que esta libertad vuestra no venga a ser tropezadero para los débiles»."
        },
        {
            reference: "1 Corintios 8:12",
            question: "Según 1 Corintios 8:12, cuando pecamos contra los hermanos hiriendo su débil conciencia, ¿contra quién pecamos en realidad?",
            options: [
                "Contra Cristo pecáis",
                "Únicamente contra las costumbres de la asamblea",
                "Contra la ley civil de los magistrados",
                "Contra nosotros mismos sin ofender al Señor"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:12: «De esta manera, pues, pecando contra los hermanos e hiriendo su débil conciencia, contra Cristo pecáis»."
        },
        {
            reference: "1 Corintios 8:13",
            question: "Según 1 Corintios 8:13, ¿qué determinación toma Pablo si la comida es ocasión de caer a su hermano?",
            options: [
                "No comeré carne jamás, para no poner tropiezo a mi hermano",
                "Comeré en privado sin que nadie me vea",
                "Obligaré a mi hermano a adquirir conocimiento",
                "Ignoraré la debilidad de su conciencia"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 8:13: «Por lo cual, si la comida le es a mi hermano ocasión de caer, no comeré carne jamás, para no poner tropiezo a mi hermano»."
        }
    ],

    // DÍA 3: 1ª de Corintios 9 al 12
    3: [
        {
            reference: "1 Corintios 9:2",
            question: "Según 1 Corintios 9:2, ¿qué son los creyentes de Corinto para el ministerio de Pablo?",
            options: [
                "El sello de su apostolado en el Señor",
                "Su motivo de jactancia humana",
                "Sus jueces en las cosas espirituales",
                "Sus colaboradores en el negocio de tiendas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:2: «porque el sello de mi apostolado sois vosotros en el Señor»."
        },
        {
            reference: "1 Corintios 9:9",
            question: "Según 1 Corintios 9:9, ¿qué mandamiento de la ley de Moisés cita Pablo?",
            options: [
                "No pondrás bozal al buey que trilla",
                "No comerás carne sacrificada",
                "Guardarás el día de reposo",
                "Amarás a tu prójimo como a ti mismo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:9: «Porque en la ley de Moisés está escrito: No pondrás bozal al buey que trilla»."
        },
        {
            reference: "1 Corintios 9:14",
            question: "Según 1 Corintios 9:14, ¿qué ordenó el Señor a los que anuncian el evangelio?",
            options: [
                "Que vivan del evangelio",
                "Que busquen riquezas del imperio",
                "Que cobren por cada bautismo",
                "Que dependan del tesoro de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:14: «Así también ordenó el Señor a los que anuncian el evangelio, que vivan del evangelio»."
        },
        {
            reference: "1 Corintios 9:18",
            question: "Según 1 Corintios 9:18, ¿cuál era la recompensa de Pablo al predicar?",
            options: [
                "Presentar gratuitamente el evangelio de Cristo, para no abusar de su derecho",
                "Recibir tributos de todas las iglesias de Grecia",
                "Ser nombrado gobernador de Acaya",
                "Adquirir fama entre los filósofos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:18: «¿Cuál, pues, es mi recompensa? Que predicando el evangelio, presente gratuitamente el evangelio de Cristo, para no abusar de mi derecho en el evangelio»."
        },
        {
            reference: "1 Corintios 9:24",
            question: "Según 1 Corintios 9:24, ¿cómo debemos correr en la carrera cristiana?",
            options: [
                "Corred de tal manera que lo obtengáis",
                "Corred lentamente para no cansaros",
                "Corred compitiendo con soberbia",
                "Corred mirando el aplauso humano"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:24: «¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis»."
        },
        {
            reference: "1 Corintios 9:25",
            question: "Según 1 Corintios 9:25, ¿qué tipo de corona buscamos los creyentes a diferencia de los atletas del mundo?",
            options: [
                "Una corona incorruptible",
                "Una corona corruptible de laureles",
                "Una corona de oro imperial",
                "Un reconocimiento pasajero"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:25: «ellos, a la verdad, para recibir una corona corruptible, pero nosotros, una incorruptible»."
        },
        {
            reference: "1 Corintios 9:27",
            question: "Según 1 Corintios 9:27, ¿qué disciplina aplica Pablo sobre su propio cuerpo?",
            options: [
                "Golpeo mi cuerpo, y lo pongo en servidumbre, no sea que habiendo sido heraldo para otros, yo mismo venga a ser eliminado",
                "Lo consiento con deleites y descanso",
                "Lo expongo a la admiración pública",
                "Lo desprecio considerándolo maligno"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 9:27: «sino que golpeo mi cuerpo, y lo pongo en servidumbre, no sea que habiendo sido heraldo para otros, yo mismo venga a ser eliminado»."
        },
        {
            reference: "1 Corintios 10:1",
            question: "Según 1 Corintios 10:1, ¿bajo qué estuvieron todos nuestros padres en el desierto?",
            options: [
                "Todos estuvieron bajo la nube, y todos pasaron el mar",
                "Bajo las leyes de Egipto",
                "Bajo tiendas de plata y oro",
                "Bajo el dominio de los reyes de Canaán"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:1: «Porque no quiero, hermanos, que ignoréis que nuestros padres todos estuvieron bajo la nube, y todos pasaron el mar»."
        },
        {
            reference: "1 Corintios 10:2",
            question: "Según 1 Corintios 10:2, ¿en quién fueron todos bautizados en la nube y en el mar?",
            options: [
                "En Moisés",
                "En Josué",
                "En Aarón",
                "En Abraham"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:2: «y todos en Moisés fueron bautizados en la nube y en el mar»."
        },
        {
            reference: "1 Corintios 10:4",
            question: "Según 1 Corintios 10:4, ¿de qué roca espiritual bebían los padres en el desierto?",
            options: [
                "De la roca espiritual que los seguía, y la roca era Cristo",
                "De la roca que Moisés golpeó con ira",
                "De las cisternas cavadas en Horeb",
                "De las aguas del mar Rojo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:4: «y la roca era Cristo»."
        },
        {
            reference: "1 Corintios 10:8",
            question: "Según 1 Corintios 10:8, ¿cuántos cayeron en un solo día por haber fornicado en el desierto?",
            options: [
                "Veintitrés mil",
                "Diez mil",
                "Cincuenta mil",
                "Siete mil"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:8: «Ni forniquemos, como algunos de ellos fornicaron, y cayeron en un día veintitrés mil»."
        },
        {
            reference: "1 Corintios 10:10",
            question: "Según 1 Corintios 10:10, ¿por quién perecieron aquellos que murmuraron?",
            options: [
                "Por el destructor",
                "Por los ejércitos de Faraón",
                "Por fieras del desierto",
                "Por hambre y sed"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:10: «Ni murmuréis, como algunos de ellos murmuraron, y perecieron por el destructor»."
        },
        {
            reference: "1 Corintios 10:12",
            question: "Según 1 Corintios 10:12, ¿qué advertencia solemne se da al que se siente seguro?",
            options: [
                "El que piensa estar firme, mire que no caiga",
                "El que está firme juzgue a los débiles",
                "El que tropieza no volverá a levantarse",
                "El que sabe no necesita orar"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:12: «Así que, el que piensa estar firme, mire que no caiga»."
        },
        {
            reference: "1 Corintios 10:14",
            question: "Según 1 Corintios 10:14, ¿de qué deben huir los amados creyentes?",
            options: [
                "Huid de la idolatría",
                "Huid de los hermanos débiles",
                "Huid de los deberes conyugales",
                "Huid del trabajo manual"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:14: «Por tanto, amados míos, huid de la idolatría»."
        },
        {
            reference: "1 Corintios 10:23",
            question: "Según 1 Corintios 10:23, ¿cuál es el principio de conveniencia y edificación?",
            options: [
                "Todo me es lícito, pero no todo conviene; todo me es lícito, pero no todo edifica",
                "Todo lo permitido debe practicarse sin consideración",
                "Lo que a mí me agrada siempre edifica a otros",
                "La ley humana determina lo que es lícito"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:23: «Todo me es lícito, pero no todo conviene; todo me es lícito, pero no todo edifica»."
        },
        {
            reference: "1 Corintios 10:31",
            question: "Según 1 Corintios 10:31, ¿con qué propósito supremo debemos comer, beber o hacer cualquier otra cosa?",
            options: [
                "Hacedlo todo para la gloria de Dios",
                "Hacedlo para agradar a los sabios del mundo",
                "Hacedlo para enriquecer vuestra reputación",
                "Hacedlo para disfrutar sin límites terrenales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 10:31: «Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios»."
        },
        {
            reference: "1 Corintios 11:2",
            question: "Según 1 Corintios 11:2, ¿por qué motivos alaba Pablo a los corintios?",
            options: [
                "Porque en todo se acordaban de él y retenían las instrucciones tal como se las entregó",
                "Porque habían recaudado grandes ofrendas para Macedonia",
                "Porque todos hablaban en lenguas con perfección",
                "Porque habían edificado un gran templo en Acaya"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:2: «Os alabo, hermanos, porque en todo os acordáis de mí, y retenéis las instrucciones tal como os las entregué»."
        },
        {
            reference: "1 Corintios 11:3",
            question: "Según 1 Corintios 11:3, ¿cuál es el orden divino de autoridad espiritual establecido?",
            options: [
                "Cristo es la cabeza de todo varón, el varón es la cabeza de la mujer, y Dios la cabeza de Cristo",
                "El sumo sacerdote es cabeza de los creyentes",
                "La iglesia es cabeza de Cristo",
                "Los magistrados son cabeza de los santos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:3: «Pero quiero que sepáis que Cristo es la cabeza de todo varón, y el varón es la cabeza de la mujer, y Dios la cabeza de Cristo»."
        },
        {
            reference: "1 Corintios 11:4-5",
            question: "Según 1 Corintios 11:4-5, ¿quién afrenta su cabeza al orar o profetizar con la cabeza cubierta y quién con la cabeza descubierta?",
            options: [
                "El varón afrenta su cabeza si ora cubierto; la mujer afrenta su cabeza si ora descubierta",
                "Ambos deben orar siempre con la cabeza cubierta",
                "Ninguno debe cubrirse la cabeza bajo ninguna circunstancia",
                "La mujer afrenta su cabeza si ora en silencio"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:4-5: «Todo varón que ora o profetiza con la cabeza cubierta, afrenta su cabeza. Pero toda mujer que ora o profetiza con la cabeza descubierta, afrenta su cabeza»."
        },
        {
            reference: "1 Corintios 11:7",
            question: "Según 1 Corintios 11:7, ¿de quién es imagen y gloria el varón, y de quién es gloria la mujer?",
            options: [
                "El varón es imagen y gloria de Dios; pero la mujer es gloria del varón",
                "Ambos son exclusivamente gloria de los ángeles",
                "El varón es gloria del sacerdote y la mujer de la asamblea",
                "La mujer es imagen de los profetas y el varón de la ley"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:7: «Porque el varón no debe cubrirse la cabeza, pues él es imagen y gloria de Dios; pero la mujer es gloria del varón»."
        },
        {
            reference: "1 Corintios 11:14",
            question: "Según 1 Corintios 11:14, ¿qué nos enseña la naturaleza misma sobre el cabello del varón?",
            options: [
                "Que al varón le es deshonroso dejarse crecer el cabello",
                "Que el cabello largo es señal de realeza",
                "Que el varón debe cubrirse siempre",
                "Que no hay diferencia natural entre varón y mujer"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:14: «La naturaleza misma ¿no os enseña que al varón le es deshonroso dejarse crecer el cabello?»."
        },
        {
            reference: "1 Corintios 11:27-28",
            question: "Según 1 Corintios 11:27-28, ¿qué debe hacer cada persona antes de comer del pan y beber de la copa de la Santa Cena?",
            options: [
                "Pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa",
                "Confesar públicamente todas sus riquezas",
                "Ayunar durante siete días seguidos",
                "Pedir autorización a los magistrados de Acaya"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 11:28: «Por tanto, pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa»."
        },
        {
            reference: "1 Corintios 12:2",
            question: "Según 1 Corintios 12:2, ¿cómo eran llevados los creyentes cuando eran gentiles?",
            options: [
                "Hacia los ídolos mudos, como erais llevados",
                "Hacia la verdad sin engaño",
                "Hacia las sinagogas de Judea",
                "Hacia las cortes romanas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:2: «Sabéis que cuando erais gentiles, se os extraviaba llevándoos, como se os llevaba, a los ídolos mudos»."
        },
        {
            reference: "1 Corintios 12:11",
            question: "Según 1 Corintios 12:11, ¿quién reparte a cada uno los dones espirituales en particular como él quiere?",
            options: [
                "Uno y el mismo Espíritu",
                "La asamblea de creyentes por votación",
                "Los gobernantes de la ciudad",
                "El mérito personal del hombre"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:11: «Pero todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular como él quiere»."
        },
        {
            reference: "1 Corintios 12:13",
            question: "Según 1 Corintios 12:13, ¿por qué fuimos todos bautizados en un solo cuerpo?",
            options: [
                "Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres",
                "Por imposición de las autoridades civiles",
                "Para formar facciones según nacionalidades",
                "Para competir por los mejores puestos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:13: «Porque por un solo Espíritu fuimos todos bautizados en un cuerpo... y a todos se nos dio a beber de un mismo Espíritu»."
        },
        {
            reference: "1 Corintios 12:18",
            question: "Según 1 Corintios 12:18, ¿cómo ha colocado Dios los miembros en el cuerpo?",
            options: [
                "Dios ha colocado cada uno de los miembros en el cuerpo como él quiso",
                "Según la elección de cada creyente",
                "Por casualidad y destino natural",
                "Conforme al estatus económico de cada uno"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:18: «Mas ahora Dios ha colocado los miembros cada uno de ellos en el cuerpo, como él quiso»."
        },
        {
            reference: "1 Corintios 12:22-23",
            question: "Según 1 Corintios 12:22-23, ¿cómo describe Pablo a los miembros del cuerpo que parecen más débiles o menos dignos?",
            options: [
                "Los que parecen más débiles son los más necesarios; y a los menos dignos vestimos con mayor dignidad y decoro",
                "Son desechables y deben ser apartados de la congregación",
                "No tienen ninguna función útil en la iglesia",
                "Deben ser tratados con severidad y desprecio"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:22-23: «Antes bien los miembros del cuerpo que parecen más débiles, son los más necesarios; y a aquellos del cuerpo que nos parecen menos dignos, a éstos vestimos más dignamente; y los que en nosotros son menos decorosos, se tratan con más decoro»."
        },
        {
            reference: "1 Corintios 12:26",
            question: "Según 1 Corintios 12:26, ¿qué sucede cuando un miembro del cuerpo padece o recibe honra?",
            options: [
                "Si un miembro padece, todos se duelen con él; y si un miembro recibe honra, todos con él se gozan",
                "Cada miembro vela únicamente por sí mismo",
                "Los miembros fuertes se desentienden de los débiles",
                "Se generan divisiones inevitables"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:26: «De manera que si un miembro padece, todos los miembros se duelen con él; y si un miembro recibe honra, todos los miembros con él se gozan»."
        },
        {
            reference: "1 Corintios 12:27",
            question: "Según 1 Corintios 12:27, ¿qué somos nosotros colectiva e individualmente?",
            options: [
                "Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular",
                "Una asociación de filósofos religiosos",
                "Siervos de los maestros de Corinto",
                "Una secta separada de la fe"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:27: «Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular»."
        },
        {
            reference: "1 Corintios 12:28",
            question: "Según 1 Corintios 12:28, ¿cuáles ministerios puso Dios en la iglesia primeramente, luego y en tercer lugar?",
            options: [
                "Primeramente apóstoles, luego profetas, lo tercero maestros; luego los que hacen milagros",
                "Primeramente reyes, luego sabios, lo tercero escribas",
                "Primeramente recaudadores, luego jueces, lo tercero soldados",
                "Primeramente ancianos, luego músicos, lo tercero diáconos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:28: «Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros...»."
        },
        {
            reference: "1 Corintios 12:31",
            question: "Según 1 Corintios 12:31, ¿qué debemos procurar y qué camino más excelente se nos muestra?",
            options: [
                "Procurad los dones mejores. Mas yo os muestro un camino aun más excelente (el amor)",
                "Procurad la gloria terrenal y el aplauso",
                "Buscad únicamente el don de lenguas",
                "Conformaos con la inmadurez espiritual"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 12:31: «Procurad, pues, los dones mejores. Mas yo os muestro un camino aun más excelente»."
        }
    ],

    // DÍA 4: 1ª de Corintios 13 al 16
    4: [
        {
            reference: "1 Corintios 13:1",
            question: "Según 1 Corintios 13:1, ¿qué soy si hablo lenguas humanas y angélicas pero no tengo amor?",
            options: [
                "Vengo a ser como metal que resuena, o címbalo que retiñe",
                "El mayor de los predicadores",
                "Un apóstol respetado por los sabios",
                "Un maestro de misterios ocultos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:1: «Si yo hablase lenguas humanas y angélicas, y no tengo amor, vengo a ser como metal que resuena, o címbalo que retiñe»."
        },
        {
            reference: "1 Corintios 13:4",
            question: "According to 1 Corintios 13:4, ¿qué virtudes caracterizan inicialmente al amor?",
            options: [
                "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece",
                "El amor es impaciente y exige pronta respuesta",
                "El amor compite con orgullo por honores",
                "El amor se jacta de sus sacrificios personales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:4: «El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece»."
        },
        {
            reference: "1 Corintios 13:5",
            question: "Según 1 Corintios 13:5, ¿qué conductas NO comete el verdadero amor?",
            options: [
                "No hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor",
                "No perdona las ofensas cometidas",
                "No respeta los mandamientos",
                "No comparte con los necesitados"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:5: «no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor»."
        },
        {
            reference: "1 Corintios 13:6",
            question: "Según 1 Corintios 13:6, ¿de qué no se goza el amor y de qué sí se goza?",
            options: [
                "No se goza de la injusticia, mas se goza de la verdad",
                "Se goza del error ajeno y oculta la verdad",
                "Se alegra del juicio y condena a los débiles",
                "Se deleita en las contiendas doctrinales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:6: «no se goza de la injusticia, mas se goza de la verdad»."
        },
        {
            reference: "1 Corintios 13:7",
            question: "Según 1 Corintios 13:7, ¿cuáles son las cuatro acciones completas del amor?",
            options: [
                "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta",
                "Todo lo cuestiona, todo lo juzga, todo lo vence, todo lo divide",
                "Todo lo guarda en secreto y nada revela",
                "Todo lo calcula conforme al interés"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:7: «Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta»."
        },
        {
            reference: "1 Corintios 13:8",
            question: "Según 1 Corintios 13:8, ¿qué cualidad eterna distingue al amor frente a las profecías y lenguas?",
            options: [
                "El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas",
                "El amor dura solo mientras haya armonía humana",
                "El amor es inferior al don de ciencia",
                "El amor desaparecerá cuando venga lo perfecto"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:8: «El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará»."
        },
        {
            reference: "1 Corintios 13:10",
            question: "Según 1 Corintios 13:10, ¿qué sucederá con lo que es en parte cuando venga lo perfecto?",
            options: [
                "Cuando venga lo perfecto, entonces lo que es en parte se acabará",
                "Lo que es en parte permanecerá junto con lo perfecto",
                "Se renovarán las señales terrenales para siempre",
                "Lo perfecto será destruido por el fuego"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:10: «mas cuando venga lo perfecto, entonces lo que es en parte se acabará»."
        },
        {
            reference: "1 Corintios 13:11",
            question: "Según 1 Corintios 13:11, ¿qué hizo Pablo cuando llegó a ser hombre hecho?",
            options: [
                "Dejé lo que era de niño",
                "Volví a las discusiones infantiles",
                "Exigí privilegios especiales",
                "Olvidé todas las Escrituras"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:11: «Cuando yo era niño, hablaba como niño... mas cuando ya fui hombre, dejé lo que era de niño»."
        },
        {
            reference: "1 Corintios 13:13",
            question: "According to 1 Corintios 13:13, ¿cuáles tres virtudes permanecen y cuál es la mayor de ellas?",
            options: [
                "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor",
                "La sabiduría, el conocimiento y el poder; el mayor es el poder",
                "Las profecías, las lenguas y la fe; la mayor es la lengua",
                "El celo, la ley y el sacrificio; el mayor es el sacrificio"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 13:13: «Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor»."
        },
        {
            reference: "1 Corintios 14:1",
            question: "Según 1 Corintios 14:1, ¿qué debemos seguir y qué don debemos procurar sobre todo?",
            options: [
                "Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis",
                "Seguid la elocuencia y procurad interpretar sueños",
                "Buscad el honor y procurad el aplauso de los griegos",
                "Seguid las tradiciones y guardad silencio perpetuo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:1: «Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis»."
        },
        {
            reference: "1 Corintios 14:2",
            question: "Según 1 Corintios 14:2, ¿a quién habla el que habla en lenguas y qué habla por el Espíritu?",
            options: [
                "No habla a los hombres, sino a Dios; pues nadie le entiende, aunque por el Espíritu habla misterios",
                "Habla a los magistrados para convencerlos con sabiduría",
                "Habla a los gentiles para debatir la filosofía",
                "Habla a los ángeles para recibir revelaciones secretas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:2: «Porque el que habla en lenguas no habla a los hombres, sino a Dios; pues nadie le entiende, aunque por el Espíritu habla misterios»."
        },
        {
            reference: "1 Corintios 14:3",
            question: "Según 1 Corintios 14:3, ¿para qué tres propósitos habla a los hombres el que profetiza?",
            options: [
                "Para edificación, exhortación y consolación",
                "Para condenación, juicio y castigo",
                "Para debate, contienda y separación",
                "Para jactancia personal y enriquecimiento"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:3: «Pero el que profetiza habla a los hombres para edificación, exhortación y consolación»."
        },
        {
            reference: "1 Corintios 14:4",
            question: "Según 1 Corintios 14:4, ¿a quién edifica el que habla en lengua extraña y a quién el que profetiza?",
            options: [
                "El que habla en lengua extraña, a sí mismo se edifica; pero el que profetiza, edifica a la iglesia",
                "Ambos edifican únicamente a sí mismos",
                "El de lenguas edifica a los gentiles y el profeta a los apóstoles",
                "Ninguno de los dos aporta edificación"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:4: «El que habla en lengua extraña, a sí mismo se edifica; pero el que profetiza, edifica a la iglesia»."
        },
        {
            reference: "1 Corintios 14:5",
            question: "According to 1 Corintios 14:5, ¿quién es mayor, el que profetiza o el que habla en lenguas?",
            options: [
                "Mayor es el que profetiza que el que habla en lenguas, a no ser que las interprete para que la iglesia reciba edificación",
                "Mayor es siempre el que habla en lenguas",
                "Ambos son iguales sin necesidad de interpretación",
                "Ninguno tiene mayor estima en la asamblea"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:5: «porque mayor es el que profetiza que el que habla en lenguas, a no ser que las interprete para que la iglesia reciba edificación»."
        },
        {
            reference: "1 Corintios 14:9",
            question: "Según 1 Corintios 14:9, ¿qué sucede si con la lengua no diereis palabra bien comprensible?",
            options: [
                "¿Cómo se entenderá lo que decís? Porque hablaréis al aire",
                "Los ángeles entenderán y aplaudirán",
                "La asamblea recibirá gran revelación secreta",
                "Los sabios griegos se convertirán de inmediato"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:9: «Así también vosotros, si por la lengua no diereis palabra bien comprensible, ¿cómo se entenderá lo que decís? Porque hablaréis al aire»."
        },
        {
            reference: "1 Corintios 14:20",
            question: "According to 1 Corintios 14:20, ¿en qué debemos ser niños y en qué maduros?",
            options: [
                "Sed niños en la malicia, pero maduros en el modo de pensar",
                "Sed niños en el conocimiento y maduros en el pecado",
                "Sed ignorantes de la verdad y sabios en la carne",
                "Sed severos con los débiles y débiles con el mal"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:20: «Hermanos, no seáis niños en el modo de pensar, sino sed niños en la malicia, pero maduros en el modo de pensar»."
        },
        {
            reference: "1 Corintios 14:22",
            question: "Según 1 Corintios 14:22, ¿para quiénes son por señal las lenguas y para quiénes la profecía?",
            options: [
                "Las lenguas son por señal no a los creyentes, sino a los incrédulos; pero la profecía, a los creyentes",
                "Las lenguas son para los apóstoles y la profecía para los magistrados",
                "Ambas son señal exclusiva para los sacerdotes",
                "Las lenguas son para los sabios y la profecía para los niños"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 14:22: «Así que, las lenguas son por señal, no a los creyentes, sino a los incrédulos; pero la profecía, no a los incrédulos, sino a los creyentes»."
        },
        {
            reference: "1 Corintios 15:3",
            question: "Según 1 Corintios 15:3, ¿qué entregó Pablo en primer lugar a los corintios?",
            options: [
                "Que Cristo murió por nuestros pecados, conforme a las Escrituras",
                "Las leyes ceremoniales del templo",
                "Los debates contra los filósofos",
                "Las costumbres de Tarso"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:3: «Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras»."
        },
        {
            reference: "1 Corintios 15:5-6",
            question: "Según 1 Corintios 15:5-6, ¿a quién apareció Cristo resucitado primeramente y luego a cuántos hermanos juntos?",
            options: [
                "A Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez",
                "A Herodes y luego al senado romano",
                "A los escribas de Jerusalén solamente",
                "A setenta discípulos en el desierto"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:5-6: «y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez...»."
        },
        {
            reference: "1 Corintios 15:7",
            question: "According to 1 Corintios 15:7, ¿a quién apareció Cristo resucitado después de los quinientos hermanos y antes de Pablo?",
            options: [
                "Después apareció a Jacobo; después a todos los apóstoles",
                "A Nicodemo y luego a José de Arimatea",
                "A los sacerdotes del Sanedrín de Jerusalén",
                "A Pilato y a los centuriones romanos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:7: «Después apareció a Jacobo; después a todos los apóstoles»."
        },
        {
            reference: "1 Corintios 15:8",
            question: "According to 1 Corintios 15:8, ¿cómo se describe Pablo a sí mismo al recibir la aparición de Cristo resucitado?",
            options: [
                "Y al último de todos, como a un abortivo, me apareció a mí",
                "Como al más sabio de todos los apóstoles",
                "Como al príncipe de los profetas",
                "Como al gobernante de las iglesias gentiles"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:8: «y al último de todos, como a un abortivo, me apareció a mí»."
        },
        {
            reference: "1 Corintios 15:14",
            question: "Según 1 Corintios 15:14, ¿qué consecuencia fatal habría si Cristo no resucitó?",
            options: [
                "Vana es entonces nuestra predicación, vana es también vuestra fe",
                "Nuestra fe seguiría siendo útil terrenalmente",
                "Las profecías se habrían cumplido en otro profeta",
                "La iglesia mantendría su autoridad moral"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:14: «Y si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe»."
        },
        {
            reference: "1 Corintios 15:20",
            question: "According to 1 Corintios 15:20, ¿qué es Cristo resucitado respecto a los que durmieron?",
            options: [
                "Primicias de los que durmieron es hecho",
                "Un espíritu incorpóreo sin sustancia",
                "El último profeta de Israel",
                "Un símbolo alegórico de renovación"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:20: «Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho»."
        },
        {
            reference: "1 Corintios 15:22",
            question: "Según 1 Corintios 15:22, ¿qué paralelismo existe entre Adán y Cristo?",
            options: [
                "Porque así como en Adán todos mueren, también en Cristo todos serán vivificados",
                "En Adán todos son justificados y en Cristo todos juzgados",
                "Adán trajo la gloria y Cristo la disciplina",
                "Ambos fueron creados mortales para siempre"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:22: «Porque así como en Adán todos mueren, también en Cristo todos serán vivificados»."
        },
        {
            reference: "1 Corintios 15:26",
            question: "According to 1 Corintios 15:26, ¿cuál es el postrer enemigo que será destruido?",
            options: [
                "La muerte",
                "El imperio romano",
                "La sabiduría de los griegos",
                "La pobreza terrenal"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:26: «Y el postrer enemigo que será destruido es la muerte»."
        },
        {
            reference: "1 Corintios 15:32",
            question: "Según 1 Corintios 15:32, si los muertos no resucitan, ¿cuál sería la vana filosofía del mundo?",
            options: [
                "Comamos y bebamos, porque mañana moriremos",
                "Oremos y ayunemos sin esperanza",
                "Busquemos sabiduría en los libros",
                "Guardemos la ley sin gozo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:32: «Si los muertos no resucitan, comamos y bebamos, porque mañana moriremos»."
        },
        {
            reference: "1 Corintios 15:42-44",
            question: "Según 1 Corintios 15:42-44, ¿cómo es sembrado el cuerpo y cómo resucita?",
            options: [
                "Se siembra en corrupción, resucita en incorrupción; se siembra cuerpo animal, resucitará cuerpo espiritual",
                "Se siembra en gloria y resucita en debilidad",
                "Se siembra espíritu y resucita carne mortal",
                "Se siembra inmortal y resucita perecedero"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:42-44 detalla la glorificación del cuerpo: de debilidad a poder, de cuerpo animal a cuerpo espiritual."
        },
        {
            reference: "1 Corintios 15:45",
            question: "According to 1 Corintios 15:45, ¿qué fue hecho el primer hombre Adán y qué el postrer Adán?",
            options: [
                "Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante",
                "El primer Adán fue rey y el postrer Adán siervo",
                "El primer Adán fue sacerdote y el segundo juez",
                "Ambos fueron hechos almas terrenales"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:45: «Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante»."
        },
        {
            reference: "1 Corintios 15:52",
            question: "Según 1 Corintios 15:52, ¿en qué lapso de tiempo ocurrirá la transformación en la final trompeta?",
            options: [
                "En un momento, en un abrir y cerrar de ojos, a la final trompeta",
                "A lo largo de varios años de purificación",
                "En una ceremonia en el templo de Corinto",
                "Solo después de que todos los filósofos crean"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:52: «en un momento, en un abrir y cerrar de ojos, a la final trompeta... y los muertos serán resucitados incorruptibles»."
        },
        {
            reference: "1 Corintios 15:55",
            question: "Según 1 Corintios 15:55, ¿cuál es el cántico de victoria sobre la muerte?",
            options: [
                "¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?",
                "La muerte ha triunfado para siempre",
                "El sepulcro retendrá a los cuerpos terrenales",
                "La vida eterna es solo una alegoría"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 15:55: «¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?»."
        },
        {
            reference: "1 Corintios 16:1",
            question: "According to 1 Corintios 16:1, ¿en cuanto a qué ofrenda da instrucciones Pablo tal como ordenó en las iglesias de Galacia?",
            options: [
                "En cuanto a la ofrenda para los santos",
                "Para la compra de un templo en Éfeso",
                "Para el pago de tributos a Roma",
                "Para los viajes de los filósofos"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 16:1: «En cuanto a la ofrenda para los santos, haced vosotros también de la manera que ordené en las iglesias de Galacia»."
        },
        {
            reference: "1 Corintios 16:10",
            question: "Según 1 Corintios 16:10, ¿cómo pide Pablo que reciban a Timoteo y por qué razón?",
            options: [
                "Mirad que esté con vosotros sin temor, porque él hace la obra del Señor asimismo como yo",
                "Recibidle con tributos y honores imperiales",
                "Examinadle con debates filosóficos antes de escucharle",
                "Impedidle hablar en la asamblea por ser joven"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 16:10: «Y si llega Timoteo, mirad que esté con vosotros sin temor, porque él hace la obra del Señor asimismo como yo»."
        },
        {
            reference: "1 Corintios 16:13-14",
            question: "Según 1 Corintios 16:13-14, ¿cuáles son las cinco exhortaciones clave de cierre de Pablo?",
            options: [
                "Velad, estad firmes en la fe; portaos varonilmente, y esforzaos. Todas vuestras cosas sean hechas con amor",
                "Descansad, callad, guardad la ley y buscad riquezas",
                "Debatid en las plazas, acusad a los débiles y dividíos",
                "Temed a los perseguidores y ocultad vuestra fe"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 16:13-14: «Velad, estad firmes en la fe; portaos varonilmente, y esforzaos. Todas vuestras cosas sean hechas con amor»."
        },
        {
            reference: "1 Corintios 16:16",
            question: "Según 1 Corintios 16:16, ¿hacia quiénes exhorta Pablo a los creyentes a sujetarse?",
            options: [
                "Que os sujetéis a personas como ellos (la familia de Estéfanas), y a todos los que ayudan y trabajan",
                "A los recaudadores y gobernadores romanos de la ciudad",
                "A los filósofos y sabios más reconocidos de Grecia",
                "A cualquiera que traiga novedades y nuevas doctrinas"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 16:16: «que os sujetéis a personas como ellos, y a todos los que ayudan y trabajan»."
        },
        {
            reference: "1 Corintios 16:19-20",
            question: "According to 1 Corintios 16:19-20, ¿quiénes envían muchos saludos en el Señor con la iglesia que está en su casa?",
            options: [
                "Aquila y Priscila",
                "Crispo y Gayo",
                "Filemón y Onésimo",
                "Lucas y Teófilo"
            ],
            correctIndex: 0,
            explanation: "1 Corintios 16:19: «Aquila y Priscila, con la iglesia que está en su casa, os saludan mucho en el Señor»."
        }
    ],

    // DÍA 5: 2ª de Corintios 1 al 4
    5: [
        {
            reference: "2 Corintios 1:3",
            question: "Según 2 Corintios 1:3, ¿con qué dos títulos llenos de consuelo describe Pablo a Dios?",
            options: [
                "Padre de misericordias y Dios de toda consolación",
                "Juez inflexible y Señor de las naciones",
                "Creador del universo y Legislador de la ley",
                "Gobernante supremo y Rey de reyes"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:3: «Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación»."
        },
        {
            reference: "2 Corintios 1:4",
            question: "Según 2 Corintios 1:4, ¿cuál es el propósito de Dios al consolarnos en nuestras dificultades?",
            options: [
                "Para que podamos consolar a otros con el mismo consuelo que recibimos de Dios",
                "Para librarnos de cualquier aflicción futura en esta vida",
                "Para que nos sintamos superiores a los que sufren",
                "Para aislarnos de los problemas de los demás"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:4: «el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios»."
        },
        {
            reference: "2 Corintios 1:8",
            question: "Según 2 Corintios 1:8, ¿en qué región geográfica sufrió Pablo una prueba tan severa que casi perdió la esperanza de vivir?",
            options: [
                "En la provincia de Asia",
                "En la ciudad de Roma",
                "En Judea",
                "En la isla de Chipre"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:8: «Porque hermanos, no queremos que ignoréis acerca de nuestra tribulación que nos sobrevino en Asia; pues fuimos abrumados sobremanera más allá de nuestras fuerzas, de tal modo que aun perdimos la esperanza de conservar la vida»."
        },
        {
            reference: "2 Corintios 1:9",
            question: "Según 2 Corintios 1:9, ¿qué lección espiritual aprendieron los apóstoles al sentirse al borde de la muerte?",
            options: [
                "A no confiar en sus propias fuerzas, sino en Dios que resucita a los muertos",
                "A abandonar los viajes misioneros peligrosos",
                "A buscar la protección de los ejércitos romanos",
                "A no volver a predicar en lugares hostiles"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:9: «Pero tuvimos en nosotros mismos sentencia de muerte, para que no confiásemos en nosotros mismos, sino en Dios que resucita a los muertos»."
        },
        {
            reference: "2 Corintios 1:16",
            question: "Según 2 Corintios 1:16, ¿cuál era la ruta de viaje que Pablo había planeado originalmente?",
            options: [
                "Pasar por Corinto hacia Macedonia, regresar luego a Corinto y de allí ser despedido hacia Judea",
                "Viajar directamente de Éfeso a Roma por mar",
                "Permanecer en Atenas y no volver a Corinto",
                "Ir a Galacia y luego a las costas de Antioquía"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:16: «y por vosotros pasar a Macedonia, y desde Macedonia venir otra vez a vosotros, y ser encaminado por vosotros a Judea»."
        },
        {
            reference: "2 Corintios 1:20",
            question: "Según 2 Corintios 1:20, ¿qué afirmación hace Pablo sobre el cumplimiento de las promesas de Dios en Cristo?",
            options: [
                "Que en Cristo todas las promesas de Dios son «Sí» y «Amén»",
                "Que son dudosas y dependen de nuestras obras",
                "Que eran válidas únicamente para el pueblo del Antiguo Pacto",
                "Que se cumplirán solo después del fin del mundo"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:20: «porque todas las promesas de Dios son en él Sí, y en él Amén, por medio de nosotros, para la gloria de Dios»."
        },
        {
            reference: "2 Corintios 1:22",
            question: "Según 2 Corintios 1:22, ¿qué ha puesto Dios en nuestros corazones como sello y garantía de lo que vendrá?",
            options: [
                "El Espíritu Santo como arras (garantía) en nuestros corazones",
                "Un mandamiento escrito en tablas de piedra",
                "La promesa de riquezas y honores terrenales",
                "Un certificado de conducta intachable"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:22: «el cual también nos ha sellado, y nos ha dado las arras del Espíritu en nuestros corazones»."
        },
        {
            reference: "2 Corintios 2:4",
            question: "Según 2 Corintios 2:4, ¿con qué sentimientos y propósito les escribió Pablo su carta anterior?",
            options: [
                "Con gran angustia y muchas lágrimas, no para entristecerlos sino para mostrarles su profundo amor",
                "Con enojo para imponer su autoridad apostólica",
                "Con indiferencia ante los problemas de la iglesia",
                "Para cortar definitivamente la relación con la asamblea"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:4: «Porque por la mucha tribulación y angustia del corazón os escribí con muchas lágrimas, no para que fueseis contristados, sino para que supieseis cuán grande es el amor que os tengo»."
        },
        {
            reference: "2 Corintios 2:7",
            question: "Según 2 Corintios 2:7, ¿cómo debía la iglesia tratar al hermano que se había arrepentido de su falta?",
            options: [
                "Perdonarlo y consolarlo para que no se hunda en una tristeza excesiva",
                "Mantenerlo apartado permanentemente de la comunión",
                "Exigirle una compensación económica",
                "Publicar sus errores en otras iglesias como escarmiento"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:7: «así que, al contrario, vosotros más bien debéis perdonarle y consolarle, para que no sea consumido de demasiada tristeza»."
        },
        {
            reference: "2 Corintios 2:14",
            question: "Según 2 Corintios 2:14, ¿qué victoria y testimonio concede Dios a sus siervos a través de Cristo?",
            options: [
                "Nos lleva siempre en triunfo y esparce por medio de nosotros el aroma de su conocimiento",
                "Nos libra de sufrir persecución en las ciudades",
                "Nos concede triunfos políticos y militares sobre las naciones",
                "Nos garantiza aprobación unánime de toda la sociedad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:14: «Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta en todo lugar el olor de su conocimiento»."
        },
        {
            reference: "2 Corintios 2:15",
            question: "Según 2 Corintios 2:15, ¿qué representamos los creyentes para Dios delante del mundo?",
            options: [
                "Somos el grato aroma de Cristo, tanto entre los que se salvan como entre los que se pierden",
                "Somos jueces encargados de condenar a las naciones",
                "Somos maestros de filosofía terrenal",
                "Somos siervos de las leyes ceremoniales antiguas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:15: «Porque para Dios somos grato olor de Cristo en los que se salvan, y en los que se pierden»."
        },
        {
            reference: "2 Corintios 3:2",
            question: "Según 2 Corintios 3:2, ¿cuál es la mejor «carta de recomendación» del ministerio de Pablo?",
            options: [
                "La propia vida de los creyentes, una carta grabada en el corazón y leída por todos",
                "Un documento oficial sellado por el concilio de Jerusalén",
                "Las cartas de elogio de los gobernantes de Acaya",
                "Los títulos académicos recibidos en Tarso"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:2: «Nuestras cartas sois vosotros, escritas en nuestros corazones, conocidas y leídas por todos los hombres»."
        },
        {
            reference: "2 Corintios 3:3",
            question: "Según 2 Corintios 3:3, ¿cómo y en qué material está escrita la carta de Cristo en los creyentes?",
            options: [
                "No con tinta ni en tablas de piedra, sino por el Espíritu del Dios vivo en los corazones humanos",
                "Con tinta indeleble en rollos sagrados de papiro",
                "En columnas de mármol del templo de Corinto",
                "En registros civiles de las autoridades romanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:3: «siendo manifiesto que sois carta de Cristo expedida por nosotros, escrita no con tinta, sino con el Espíritu del Dios vivo; no en tablas de piedra, sino en tablas de carne del corazón»."
        },
        {
            reference: "2 Corintios 3:5-6",
            question: "Según 2 Corintios 3:5-6, ¿de dónde proviene nuestra capacidad ministerial y qué contraste hay entre la letra y el Espíritu?",
            options: [
                "Nuestra suficiencia viene de Dios; la letra mata, pero el Espíritu da vida",
                "Viene de nuestra propia inteligencia y elocuencia humana",
                "La letra da salvación y el Espíritu impone castigo",
                "Proviene de los méritos personales alcanzados por la ley"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:5-6: «no que seamos competentes por nosotros mismos para pensar algo como de nosotros mismos, sino que nuestra competencia proviene de Dios, el cual asimismo nos hizo ministros competentes de un nuevo pacto, no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica»."
        },
        {
            reference: "2 Corintios 3:9",
            question: "Según 2 Corintios 3:9, ¿qué ministerio supera con creces en gloria al ministerio de condenación de la ley?",
            options: [
                "El ministerio de la justificación",
                "El sacerdocio de la orden levítica",
                "El gobierno terrenal de los reyes de Judá",
                "Los tribunales de justicia humana"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:9: «Porque si el ministerio de condenación fue con gloria, mucho más abundará en gloria el ministerio de justificación»."
        },
        {
            reference: "2 Corintios 3:11",
            question: "Según 2 Corintios 3:11, ¿qué comparación hace Pablo entre lo temporal del antiguo pacto y lo permanente del nuevo?",
            options: [
                "Si lo que era pasajero tuvo gloria, mucho más glorioso es lo que permanece",
                "Lo pasajero tiene más valor que lo eterno",
                "Ambos pactos tienen idéntica duración y gloria",
                "Lo que permanece carece de gloria visible"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:11: «Porque si lo que perece tuvo gloria, mucho más glorioso será lo que permanece»."
        },
        {
            reference: "2 Corintios 3:17",
            question: "Según 2 Corintios 3:17, ¿qué bendición y realidad existe donde está presente el Espíritu del Señor?",
            options: [
                "Libertad",
                "Temor y servidumbre a los ritos",
                "Riquezas materiales garantizadas",
                "Imposición de normas humanas rígidas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:17: «Porque el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad»."
        },
        {
            reference: "2 Corintios 4:3",
            question: "Según 2 Corintios 4:3, ¿para quiénes permanece oculto o velado el mensaje del evangelio?",
            options: [
                "Para los que se pierden (los incrédulos cegados)",
                "Para los apóstoles y discípulos",
                "Para quienes buscan con humildad a Dios",
                "Para los ángeles en el cielo"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:3: «Pero si nuestro evangelio está aún encubierto, entre los que se pierden está encubierto»."
        },
        {
            reference: "2 Corintios 4:5",
            question: "Según 2 Corintios 4:5, ¿a quién anuncian los apóstoles y cómo se consideran ellos mismos?",
            options: [
                "Proclaman a Jesucristo como Señor, y a ellos mismos como siervos por amor a Jesús",
                "Se proclaman a sí mismos como líderes indiscutibles",
                "Anuncian las doctrinas de los filósofos de Acaya",
                "Promueven la grandeza histórica de la nación de Israel"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:5: «Porque no nos predicamos a nosotros mismos, sino a Jesucristo como Señor, y a nosotros como vuestros siervos por amor de Jesús»."
        },
        {
            reference: "2 Corintios 4:7",
            question: "Según 2 Corintios 4:7, ¿por qué llevamos este glorioso tesoro espiritual en frágiles «vasos de barro»?",
            options: [
                "Para que se reconozca que el inmenso poder es de Dios y no procede de nosotros",
                "Para que el mensaje permanezca oculto a las multitudes",
                "Para que los creyentes vivan siempre con miedo",
                "Para no tener responsabilidades en la congregación"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:7: «Pero tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros»."
        },
        {
            reference: "2 Corintios 4:8-9",
            question: "Según 2 Corintios 4:8-9, ¿cómo describe Pablo la asombrosa resistencia de los siervos de Dios frente a las adversidades?",
            options: [
                "Apretados pero no aplastados, en apuros pero no desesperados, perseguidos pero no abandonados, derribados pero no destruidos",
                "Vencedores sin dolor físico ni ningún tipo de sufrimiento",
                "Completamente derrotados y sin esperanza de salir adelante",
                "Protegidos en palacios sin enfrentar peligros reales"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:8-9: «que estamos atribulados en todo, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, pero no destruidos»."
        },
        {
            reference: "2 Corintios 4:10",
            question: "Según 2 Corintios 4:10, ¿con qué propósito los apóstoles llevan constantemente en el cuerpo la muerte de Jesús?",
            options: [
                "Para que también la vida de Jesús se manifieste en sus propios cuerpos",
                "Para dar lástima a las autoridades civiles",
                "Para practicar castigos corporales como mérito propio",
                "Para demostrar superioridad física ante los enemigos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:10: «llevando en el cuerpo siempre por todas partes la muerte de Jesús, para que también la vida de Jesús se manifieste en nuestros cuerpos»."
        },
        {
            reference: "2 Corintios 4:17",
            question: "Según 2 Corintios 4:17, ¿qué efecto y recompensa eterna produce en nosotros el sufrimiento pasajero del presente?",
            options: [
                "Produce un eterno y extraordinario peso de gloria que supera todo límite",
                "Una angustia prolongada que destruye la fe",
                "El olvido total de las promesas de salvación",
                "Un castigo perpetuo sin fruto alguno"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:17: «Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria»."
        },
        {
            reference: "2 Corintios 4:18",
            question: "Según 2 Corintios 4:18, ¿hacia qué realidad debemos enfocar nuestra mirada y perspectiva?",
            options: [
                "Hacia las cosas invisibles y eternas, no hacia las visibles y temporales",
                "Hacia las posesiones materiales que podemos acumular",
                "Hacia el reconocimiento y fama terrenal pasajera",
                "Hacia los problemas inmediatos del día a día"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:18: «no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas»."
        }
    ],

    // DÍA 6: 2ª de Corintios 5 al 8
    6: [
        {
            reference: "2 Corintios 5:1",
            question: "Según 2 Corintios 5:1, ¿qué certeza y morada tenemos de parte de Dios cuando este cuerpo terrenal se desgaste?",
            options: [
                "Una casa eterna en los cielos, construida por Dios y no por manos humanas",
                "Una tumba perpetua en la tierra",
                "Un simple recuerdo en la memoria de los hombres",
                "Una reencarnación en otro cuerpo terrenal"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:1: «Porque sabemos que si nuestra morada terrestre, este tabernáculo, se deshiciere, tenemos de Dios un edificio, una casa no hecha de manos, eterna, en los cielos»."
        },
        {
            reference: "2 Corintios 5:7",
            question: "Según 2 Corintios 5:7, ¿cuál es el principio fundamental que guía la vida del creyente?",
            options: [
                "Vivimos por fe y no por lo que vemos (por vista)",
                "Vivimos guiados por las apariencias del momento",
                "Vivimos buscando señales visibles constantes",
                "Vivimos según las opiniones de la sociedad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:7: «(porque por fe andamos, no por vista)»."
        },
        {
            reference: "2 Corintios 5:9",
            question: "Según 2 Corintios 5:9, ¿cuál es nuestra mayor aspiración, ya sea en esta vida terrenal o en la presencia del Señor?",
            options: [
                "Serle siempre agradables al Señor",
                "Acumular riquezas y comodidades",
                "Evitar cualquier tipo de problema",
                "Recibir el elogio y admiración de los hombres"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:9: «Por tanto procuramos también, o ausentes o presentes, serle agradables»."
        },
        {
            reference: "2 Corintios 5:10",
            question: "Según 2 Corintios 5:10, ¿ante quién compareceremos todos para rendir cuentas de lo hecho en el cuerpo?",
            options: [
                "Ante el tribunal de Cristo, para recibir recompensa según lo que hayamos hecho, sea bueno o malo",
                "Ante los tribunales de las leyes civiles romanas",
                "Ante el juicio exclusivo de nuestros familiares",
                "Ante la asamblea de los filósofos de Grecia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:10: «Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo, sea bueno o sea malo»."
        },
        {
            reference: "2 Corintios 5:17",
            question: "Según 2 Corintios 5:17, ¿qué gran transformación experimenta quien está unido a Cristo?",
            options: [
                "Es una nueva creación: las cosas viejas quedaron atrás y todo fue hecho nuevo",
                "Solo mejora un poco sus modales externos",
                "Sigue atado a la condenación de sus errores del pasado",
                "Adquiere privilegios políticos en la sociedad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:17: «De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas»."
        },
        {
            reference: "2 Corintios 5:20",
            question: "Según 2 Corintios 5:20, ¿qué misión y mensaje representamos en el mundo como embajadores de Cristo?",
            options: [
                "Rogar a las personas en nombre de Cristo: «Reconciliaos con Dios»",
                "Imponer castigos y juicios sobre los no creyentes",
                "Defender leyes y tradiciones humanas",
                "Buscar posiciones de poder e influencia económica"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:20: «Así que, somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios»."
        },
        {
            reference: "2 Corintios 5:21",
            question: "Según 2 Corintios 5:21, ¿qué hizo Dios con Cristo para que nosotros pudiéramos ser justificados?",
            options: [
                "Al que no cometió pecado, Dios lo trató como pecador por nosotros, para que en Él fuésemos hechos justicia de Dios",
                "Lo libró de morir para que no sufriera aflicción",
                "Lo envió únicamente como un maestro moral de buena conducta",
                "Lo coronó de inmediato rey terrenal en Jerusalén"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:21: «Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él»."
        },
        {
            reference: "2 Corintios 6:1",
            question: "Según 2 Corintios 6:1, como colaboradores de Dios, ¿a qué exhorta Pablo con urgencia a los creyentes?",
            options: [
                "A no recibir en vano ni desaprovechar la gracia de Dios",
                "A competir por los mejores cargos en la iglesia",
                "A aislarse de toda relación con la sociedad",
                "A juzgar con severidad las debilidades ajenas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:1: «Así, pues, nosotros, como colaboradores juntamente con él, os exhortamos también a que no recibáis en vano la gracia de Dios»."
        },
        {
            reference: "2 Corintios 6:2",
            question: "Según 2 Corintios 6:2, ¿cuándo es el momento oportuno para responder a la gracia y salvación de Dios?",
            options: [
                "Ahora es el tiempo favorable y el día de salvación",
                "En el futuro cuando nos sintamos perfectos",
                "Solo en días festivos y ceremoniales",
                "Después de haber cumplido muchos años de penitencia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:2: «Porque dice: En tiempo aceptable te he oído, y en día de salvación te he socorrido. He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación»."
        },
        {
            reference: "2 Corintios 6:3",
            question: "Según 2 Corintios 6:3, ¿por qué cuidaba Pablo su testimonio evitando poner motivos de tropiezo?",
            options: [
                "Para que nadie pudiera desacreditar o criticar el ministerio",
                "Para ganarse el aplauso de las autoridades romanas",
                "Para evitar tener que trabajar manualmente",
                "Para cobrar por sus predicaciones"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:3: «No damos a nadie ningún motivo de tropiezo, para que nuestro ministerio no sea vituperado»."
        },
        {
            reference: "2 Corintios 6:12",
            question: "Según 2 Corintios 6:12, ¿dónde residía la verdadera falta de afecto en la relación de los corintios con Pablo?",
            options: [
                "En sus propios corazones, que estaban cerrados hacia él",
                "En la distancia geográfica que los separaba",
                "En la falta de recursos económicos de la congregación",
                "En las diferencias culturales entre griegos y judíos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:12: «No estáis estrechos en nosotros, pero sí estáis estrechos en vuestro propio corazón»."
        },
        {
            reference: "2 Corintios 6:14",
            question: "Según 2 Corintios 6:14, ¿qué advertencia fundamental da Pablo sobre asociarse en «yugo desigual»?",
            options: [
                "No unirse en yugo desigual con los no creyentes, pues la justicia no tiene comunión con la injusticia ni la luz con las tinieblas",
                "Aislarse por completo de todo contacto humano en el trabajo",
                "Aceptar cualquier creencia para mantener la paz social",
                "Unirse únicamente con personas de alto estatus social"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:14: «No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia? ¿Y qué comunión la luz con las tinieblas?»."
        },
        {
            reference: "2 Corintios 6:16",
            question: "Según 2 Corintios 6:16, ¿por qué el pueblo de Dios no puede mezclarse con la idolatría?",
            options: [
                "Porque nosotros somos el templo del Dios viviente",
                "Porque los ídolos tienen poderes reales en el cielo",
                "Porque las leyes civiles de Roma lo prohibían",
                "Porque los templos antiguos eran más costosos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:16: «¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente, como Dios dijo: Habitaré y andaré entre ellos, y seré su Dios, y ellos serán mi pueblo»."
        },
        {
            reference: "2 Corintios 6:18",
            question: "Según 2 Corintios 6:18, ¿qué entrañable promesa de paternidad nos hace el Señor Todopoderoso?",
            options: [
                "«Seré para vosotros por Padre, y vosotros me seréis hijos e hijas»",
                "«Os otorgaré coronas de oro y fama terrenal»",
                "«Os libraré de cualquier esfuerzo en esta vida»",
                "«Haré de vosotros gobernantes de las provincias»"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:18: «Y seré para vosotros por Padre, y vosotros me seréis hijos e hijas, dice el Señor Todopoderoso»."
        },
        {
            reference: "2 Corintios 7:1",
            question: "Según 2 Corintios 7:1, al tener tan grandes promesas divinas, ¿a qué compromiso de pureza estamos llamados?",
            options: [
                "A limpiarnos de toda contaminación de cuerpo y de espíritu, perfeccionando la santidad con reverencia a Dios",
                "A exigir honores y reconocimientos públicos",
                "A descuidar nuestras responsabilidades cotidianas",
                "A juzgar y condenar a quienes no piensan igual"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 7:1: «Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios»."
        },
        {
            reference: "2 Corintios 7:10",
            question: "Según 2 Corintios 7:10, ¿cuál es la diferencia vital entre la tristeza según Dios y la tristeza del mundo?",
            options: [
                "La tristeza según Dios produce arrepentimiento para salvación; la del mundo solo produce muerte",
                "La tristeza del mundo santifica y la de Dios genera angustia",
                "Ambas tristezas tienen el mismo desenlace espiritual",
                "La tristeza según Dios no requiere ningún cambio de conducta"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 7:10: «Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte»."
        },
        {
            reference: "2 Corintios 7:12",
            question: "Según 2 Corintios 7:12, ¿cuál fue el propósito más profundo de Pablo al escribirles sobre la falta ocurrida?",
            options: [
                "Hacer evidente ante Dios el sincero amor y preocupación que los apóstoles tenían por la iglesia",
                "Exigir el castigo público y humillante del ofensor",
                "Cobrar una indemnización de dinero para la obra",
                "Romper lazos fraternales con los creyentes de Acaya"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 7:12: «Así que, aunque os escribí, no fue por causa del que cometió el agravio, ni por causa del que lo padeció, sino para que se os hiciese manifiesta nuestra solicitud que tenemos por vosotros delante de Dios»."
        },
        {
            reference: "2 Corintios 7:15",
            question: "Según 2 Corintios 7:15, ¿por qué motivo creció tanto el afecto de Tito hacia la iglesia de Corinto?",
            options: [
                "Al recordar la obediencia y el gran respeto con que todos lo recibieron",
                "Porque le entregaron valiosos regalos de despedida",
                "Porque lo eligieron como su líder principal",
                "Porque lo defendieron en los tribunales civiles"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 7:15: «Y su cariño para con vosotros es aun más abundante, cuando se acuerda de la obediencia de todos vosotros, de cómo le recibisteis con temor y temblor»."
        },
        {
            reference: "2 Corintios 8:3-4",
            question: "Según 2 Corintios 8:3-4, ¿cómo mostraron su generosidad los hermanos de Macedonia a pesar de su pobreza?",
            options: [
                "Dieron con gozo según sus posibilidades e incluso más allá de sus fuerzas, pidiendo el honor de colaborar para los santos",
                "Dieron únicamente lo que les sobraba de sus ahorros",
                "Colaboraron de mala gana obligados por los líderes",
                "Pidieron que se les devolviera el dinero con intereses"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:3-4: «Pues doy testimonio de que con agrado han dado conforme a sus fuerzas, y aun más allá de sus fuerzas, pidiéndonos con muchos ruegos que les concediésemos el privilegio de participar en este servicio para los santos»."
        },
        {
            reference: "2 Corintios 8:9",
            question: "Según 2 Corintios 8:9, ¿en qué consistió el supremo acto de generosidad de nuestro Señor Jesucristo?",
            options: [
                "Siendo rico se hizo pobre por amor a nosotros, para enriquecernos espiritualmente a través de su pobreza",
                "Buscó gobernar con lujos y honores en Roma",
                "Exigió tributos a los más necesitados",
                "Guardó en secreto sus riquezas divinas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:9: «Porque ya conocéis la gracia de nuestro Señor Jesucristo, que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos»."
        },
        {
            reference: "2 Corintios 8:15",
            question: "Según 2 Corintios 8:15, ¿qué principio de equidad y ayuda mutua resalta Pablo usando la cita del maná?",
            options: [
                "«El que recogió mucho no tuvo más, y el que recogió poco no tuvo menos»",
                "«El que tiene más debe acumular para sí mismo»",
                "«Cada quien debe velar únicamente por su propio bienestar»",
                "«La ayuda económica solo debe darse a cambio de favores»"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:15: «como está escrito: El que recogió mucho, no tuvo más, y el que poco, no tuvo menos»."
        },
        {
            reference: "2 Corintios 8:21",
            question: "According to 2 Corintios 8:21, ¿con qué estándar de integridad se conducían en la administración de las ofrendas?",
            options: [
                "Procurando hacer las cosas con total honradez, tanto delante del Señor como ante los hombres",
                "Manejando el dinero en secreto sin dar explicaciones",
                "Delegando los fondos sin supervisión alguna",
                "Buscando únicamente la aprobación de los gobernantes"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:21: «procurando hacer las cosas honradamente, no sólo delante del Señor sino también delante de los hombres»."
        }
    ],

    // DÍA 7: 2ª de Corintios 9 al 12
    7: [
        {
            reference: "2 Corintios 9:6",
            question: "Según 2 Corintios 9:6, ¿cuál es la ley de la siembra y la cosecha en la generosidad cristiana?",
            options: [
                "El que siembra escasamente cosechará poco; el que siembra generosamente cosechará en abundancia",
                "El que no siembra nada recibirá la mayor bendición",
                "La cantidad de siembra no tiene ningún impacto en los frutos",
                "Sembrar poco garantiza mayores recompensas espirituales"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:6: «Pero esto digo: El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará»."
        },
        {
            reference: "2 Corintios 9:7",
            question: "Según 2 Corintios 9:7, ¿de qué manera debe dar cada persona y a quién ama Dios?",
            options: [
                "De corazón, no con tristeza ni por obligación, porque Dios ama al dador alegre",
                "Por presión social y para recibir elogios públicos",
                "Con pesar y murmurando por el gasto realizado",
                "Únicamente bajo amenazas de castigo"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:7: «Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre»."
        },
        {
            reference: "2 Corintios 9:8",
            question: "Según 2 Corintios 9:8, ¿qué es poderoso Dios para concedernos con respecto a nuestras necesidades?",
            options: [
                "Hacer que sobreabunde toda gracia para tener siempre lo suficiente y poder apoyar toda buena obra",
                "Otorgarnos riquezas extravagantes sin necesidad de trabajar",
                "Eximirnos de cualquier deber hacia los pobres",
                "Hacernos gobernantes con privilegios sobre los demás"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:8: «Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra»."
        },
        {
            reference: "2 Corintios 9:15",
            question: "Según 2 Corintios 9:15, ¿por qué regalo supremo y maravilloso da gracias a Dios el apóstol Pablo?",
            options: [
                "Por su don inefable (el incomparable regalo de Jesucristo)",
                "Por las donaciones materiales recibidas de Macedonia",
                "Por la fama alcanzada entre los filósofos de Grecia",
                "Por los cargos honoríficos concedidos por la ciudad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:15: «¡Gracias a Dios por su don inefable!»."
        },
        {
            reference: "2 Corintios 10:3-4",
            question: "Según 2 Corintios 10:3-4, ¿cuál es el carácter y alcance de las armas con que luchamos espiritualmente?",
            options: [
                "No son armas humanas ni materiales, sino poderosas en Dios para derribar fortalezas",
                "Son espadas, lanzas e instrumentos de fuerza física",
                "Son argumentos de elocuencia y filosofía terrenal",
                "Son influencias políticas ante los tribunales romanos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:3-4: «Pues aunque andamos en la carne, no militamos según la carne; porque las armas de nuestra milicia no son carnales, sino poderosas en Dios para la destrucción de fortalezas»."
        },
        {
            reference: "2 Corintios 10:6",
            question: "Según 2 Corintios 10:6, ¿cuándo estaban preparados los apóstoles para disciplinar cualquier desobediencia?",
            options: [
                "Cuando la obediencia de la iglesia estuviera plenamente afirmada y completa",
                "Inmediatamente sin dar tiempo a la reflexión",
                "Solo después de recibir una orden de los magistrados civiles",
                "Cuando todos los miembros entregaran sus ofrendas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:6: «y estando prontos para castigar toda desobediencia, cuando vuestra obediencia sea perfecta»."
        },
        {
            reference: "2 Corintios 10:7",
            question: "Según 2 Corintios 10:7, ¿qué advertencia hace Pablo a quienes juzgan la autoridad espiritual superficialmente?",
            options: [
                "No juzgar por las apariencias externas, recordando que los apóstoles pertenecen a Cristo tanto como cualquiera",
                "Evaluar a las personas por sus títulos académicos y riquezas",
                "Creer que solo los líderes de Corinto son verdaderamente de Cristo",
                "Aceptar únicamente a quienes traen cartas de recomendación humanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:7: «Miráis las cosas según la apariencia. Si alguno está confiado en sí mismo que es de Cristo, esto también vuelva a considerar por sí mismo, que como él es de Cristo, así también nosotros somos de Cristo»."
        },
        {
            reference: "2 Corintios 10:10",
            question: "Según 2 Corintios 10:10, ¿qué crítica hacían los detractores sobre las cartas y la presencia física de Pablo?",
            options: [
                "Que sus cartas eran duras y enérgicas, pero su presencia corporal débil y su oratoria poco impresionante",
                "Que sus cartas eran confusas y su presencia imponente y aterradora",
                "Que hablaba con excesiva vanidad y elocuencia",
                "Que nunca escribía cartas con doctrina sólida"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:10: «Porque a la verdad, dicen, las cartas son duras y fuertes; mas la presencia corporal débil, y la palabra menospreciable»."
        },
        {
            reference: "2 Corintios 10:13",
            question: "Según 2 Corintios 10:13, ¿cuál era el marco y límite que Pablo respetaba al evaluar su trabajo misionero?",
            options: [
                "No gloriarse desmedidamente, sino mantenerse dentro del campo de labor que Dios mismo les asignó",
                "Apropiarse del fruto y trabajo de otros apóstoles",
                "Jactarse de su prestigio e influencia personal",
                "Compararse constantemente con los oradores griegos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:13: «Pero nosotros no nos gloriaremos desmedidamente, sino conforme a la regla de la medida que Dios nos ha dado por medida, para llegar también hasta vosotros»."
        },
        {
            reference: "2 Corintios 10:16",
            question: "Según 2 Corintios 10:16, ¿cuál era la meta misionera de Pablo respecto a nuevos territorios?",
            options: [
                "Anunciar el evangelio en regiones más lejanas, sin atribuirse el trabajo ya iniciado por otros",
                "Predicar únicamente en las sinagogas de Judea",
                "Establecerse cómodamente donde otros ya habían fundado iglesias",
                "Buscar únicamente las ciudades más ricas del imperio"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:16: «y que anunciaremos el evangelio en los lugares más allá de vosotros, sin entrar en la obra de otro para gloriarnos en lo que ya estaba preparado»."
        },
        {
            reference: "2 Corintios 10:17",
            question: "Según 2 Corintios 10:17, ¿en quién debe fundamentarse todo motivo de orgullo y alabanza?",
            options: [
                "El que se gloría, que se gloríe únicamente en el Señor",
                "En las propias capacidades y logros humanos",
                "En la posición social y abolengo familiar",
                "En el reconocimiento y aplauso de la multitud"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:17: «Mas el que se gloría, gloríese en el Señor»."
        },
        {
            reference: "2 Corintios 10:18",
            question: "Según 2 Corintios 10:18, ¿quién es la persona verdaderamente aprobada delante de Dios?",
            options: [
                "No quien se alaba a sí mismo, sino aquel a quien el Señor aprueba y elogia",
                "Quien cuenta con mayor número de seguidores",
                "Quien posee más cartas de recomendación humanas",
                "Quien nunca ha enfrentado críticas ni oposiciones"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:18: «porque no es aprobado el que se alaba a sí mismo, sino aquel a quien Dios alaba»."
        },
        {
            reference: "2 Corintios 11:2-3",
            question: "Según 2 Corintios 11:2-3, ¿cuál era el anhelo pastoral de Pablo y qué engaño temía para la iglesia?",
            options: [
                "Presentarla como una novia pura a Cristo, temiendo que sean extraviados de la sincera fidelidad tal como Eva fue engañada",
                "Controlar todas las decisiones personales de los creyentes",
                "Preservar ritos ceremoniales antiguos a toda costa",
                "Evitar que la iglesia creciera hacia otras regiones"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:2-3: «Porque os celo con celo de Dios; pues os he desposado con un solo esposo, para presentaros como una virgen pura a Cristo. Pero temo que como la serpiente con su astucia engañó a Eva, vuestros sentidos sean de alguna manera extraviados de la sincera fidelidad a Cristo»."
        },
        {
            reference: "2 Corintios 11:6",
            question: "Según 2 Corintios 11:6, ¿qué reconoce Pablo sobre su oratoria y qué defiende con seguridad?",
            options: [
                "Aunque no fuera un orador elocuente o refinado, no carecía de conocimiento de la verdad",
                "Que era ignorante en doctrina pero un gran maestro de retórica",
                "Que carecía tanto de palabras como de conocimiento",
                "Que utilizaba trucos de oratoria para convencer a la multitud"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:6: «Pues aunque sea tosco en la palabra, no lo soy en el conocimiento; en todo y por todo os lo hemos demostrado»."
        },
        {
            reference: "2 Corintios 11:9",
            question: "Según 2 Corintios 11:9, ¿cómo cubrió Pablo sus necesidades mientras predicaba el evangelio en Corinto?",
            options: [
                "Con la ayuda que le trajeron los hermanos de Macedonia, cuidando de no ser una carga económica para ellos",
                "Cobrando un sueldo obligatorio a cada familia de Corinto",
                "Pidiendo subsidios a los magistrados de la ciudad",
                "Viviendo de préstamos comerciales en Cencrea"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:9: «Y cuando estaba entre vosotros y tuve necesidad, a ninguno fui carga, pues lo que me faltaba, lo suplieron los hermanos que vinieron de Macedonia, y en todo me guardé y me guardaré de seros gravoso»."
        },
        {
            reference: "2 Corintios 11:10",
            question: "According to 2 Corintios 11:10, ¿en qué territorio afirmó Pablo que nadie le impediría el orgullo de predicar gratuitamente?",
            options: [
                "En todas las regiones de Acaya",
                "En la isla de Creta",
                "En las costas de Egipto",
                "En las ciudades de Galacia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:10: «Por la verdad de Cristo que está en mí, que no se me impedirá esta mi gloria en las regiones de Acaya»."
        },
        {
            reference: "2 Corintios 11:13-14",
            question: "Según 2 Corintios 11:13-14, ¿cómo desenmascara Pablo a los falsos apóstoles y qué táctica usa Satanás?",
            options: [
                "Son obreros engañosos que fingen ser apóstoles de Cristo, tal como Satanás se disfraza de ángel de luz",
                "Son líderes sinceros pero con poca preparación teológica",
                "Satanás se manifiesta siempre de forma aterradora e inconfundible",
                "Son mensajeros aprobados por los apóstoles de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:13-14: «Porque éstos son falsos apóstoles, obreros fraudulentos, que se disfrazan como apóstoles de Cristo. Y no es maravilla, porque el mismo Satanás se disfraza como ángel de luz»."
        },
        {
            reference: "2 Corintios 11:21-22",
            question: "Según 2 Corintios 11:21-22, ¿qué afirma Pablo sobre sus raíces e identidad frente a los rivales que presumían?",
            options: [
                "Que él es igualmente hebreo, israelita y descendiente de Abraham",
                "Que renunció a su linaje y no tenía ascendencia judía",
                "Que sus opositores tenían mejor linaje espiritual que él",
                "Que el origen familiar era la única garantía de salvación"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:22: «¿Son hebreos? Yo también. ¿Son israelitas? Yo también. ¿Son descendientes de Abraham? También yo»."
        },
        {
            reference: "2 Corintios 11:23",
            question: "Según 2 Corintios 11:23, ¿cuáles son las credenciales de sufrimiento que demuestran que Pablo sirvió más a Cristo?",
            options: [
                "Mucho más trabajo, mayores encarcelamientos, incontables azotes y frecuentes peligros de muerte",
                "Posiciones de prestigio en los templos y honores públicos",
                "Grandes sumas de dinero acumuladas y bienes personales",
                "Una vida tranquila y libre de cualquier persecución"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:23: «¿Son ministros de Cristo? (Como si estuviera loco hablo.) Yo más; en trabajos más abundante; en azotes sin número; en cárceles más; en peligros de muerte muchas veces»."
        },
        {
            reference: "2 Corintios 11:24-25",
            question: "According to 2 Corintios 11:24-25, ¿cuáles son los castigos físicos y peligros que Pablo enumera en su trayectoria?",
            options: [
                "Cinco veces 39 azotes de los judíos, tres veces golpeado con varas, una vez apedreado y tres naufragios",
                "Diez veces en prisión y ningún naufragio",
                "Una vida protegida sin agresiones físicas",
                "Castigado únicamente con multas económicas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:24-25: «De los judíos cinco veces he recibido cuarenta azotes menos uno. Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar»."
        },
        {
            reference: "2 Corintios 11:30",
            question: "Según 2 Corintios 11:30, si es necesario presumir de algo, ¿cuál es el único motivo en el que Pablo elige gloriarse?",
            options: [
                "En las cosas que muestran su propia debilidad",
                "En sus grandes riquezas e influencia social",
                "En su elocuencia frente a los sabios de Acaya",
                "En el número de discípulos que lo siguen"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:30: «Si es necesario gloriarse, me gloriaré en lo que es de mi debilidad»."
        },
        {
            reference: "2 Corintios 11:32-33",
            question: "Según 2 Corintios 11:32-33, ¿cómo logró escapar Pablo de la persecución del gobernador en Damasco?",
            options: [
                "Fue descolgado del muro en una canasta a través de una ventana",
                "Salió disfrazado de soldado romano por la puerta principal",
                "Presentó un salvoconducto firmado por las autoridades",
                "Escapó por túneles secretos bajo el palacio"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:32-33: «En Damasco, el gobernador de la provincia del rey Aretas guardaba la ciudad de los damascenos para prenderme; y fui descolgado del muro en un canasto por una ventana, y escapé de sus manos»."
        },
        {
            reference: "2 Corintios 12:2-4",
            question: "Según 2 Corintios 12:2-4, ¿qué experiencia espiritual vivió el creyente mencionado hace catorce años?",
            options: [
                "Fue arrebatado hasta el tercer cielo (el paraíso) y escuchó palabras inexpresables que no es lícito al hombre pronunciar",
                "Tuvo un sueño sobre la caída del imperio romano",
                "Recibió una visión para construir un templo monumental",
                "Fue transportado físicamente a la ciudad de Tarso"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:2-4: «Conozco a un hombre en Cristo, que hace catorce años... fue arrebatado hasta el tercer cielo... al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar»."
        },
        {
            reference: "2 Corintios 12:5",
            question: "Según 2 Corintios 12:5, ¿de qué decidió Pablo gloriarse respecto a su propia persona?",
            options: [
                "Únicamente de sus debilidades y limitaciones",
                "De sus visiones místicas extraordinarias",
                "De haber fundado iglesias en toda Grecia",
                "De su intachable formación bajo Gamaliel"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:5: «De tal hombre me gloriaré; pero de mí mismo en nada me gloriaré, sino en mis debilidades»."
        },
        {
            reference: "2 Corintios 12:7",
            question: "Según 2 Corintios 12:7, ¿qué dificultad permitió Dios en la vida de Pablo para protegerlo del orgullo por tantas revelaciones?",
            options: [
                "Un aguijón en la carne, un mensajero de Satanás que lo abofeteara para mantenerlo humilde",
                "Una enfermedad mortal que lo retiró del ministerio",
                "La pérdida total de sus posesiones materiales",
                "El rechazo permanente de todas las iglesias"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:7: «Y para que la grandeza de las revelaciones no me exaltase desmedidamente, me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera»."
        },
        {
            reference: "2 Corintios 12:8-9",
            question: "Según 2 Corintios 12:8-9, ¿cuál fue la respuesta de Cristo cuando Pablo le rogó tres veces que le quitara el aguijón?",
            options: [
                "«Bástate mi gracia; porque mi poder se perfecciona en la debilidad»",
                "«Te quitaré toda molestia inmediatamente»",
                "«Debes hacer más ayunos para ser escuchado»",
                "«Tu oración no tiene suficiente fe»"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:9: «Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo»."
        },
        {
            reference: "2 Corintios 12:14",
            question: "Según 2 Corintios 12:14, ¿por qué no sería Pablo una carga económica en su tercera visita a Corinto?",
            options: [
                "Porque no busca los bienes materiales de ellos sino a ellos mismos, tal como los padres ahorran para los hijos y no al revés",
                "Porque había recibido una gran fortuna en Macedonia",
                "Porque los magistrados pagarían su estancia",
                "Porque solo se quedaría por unas pocas horas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:14: «He aquí, por tercera vez estoy preparado para ir a vosotros; y no os seré gravoso, porque no busco lo vuestro, sino a vosotros, pues no deben atesorar los hijos para los padres, sino los padres para los hijos»."
        },
        {
            reference: "2 Corintios 12:15",
            question: "According to 2 Corintios 12:15, ¿con qué grado de entrega y amor estaba dispuesto Pablo a desgastarse por los creyentes?",
            options: [
                "Con el mayor agrado gastaría sus recursos e incluso su propia vida por ellos, aun si amándolos más fuera amado menos",
                "Solo si la iglesia le garantizaba un sueldo fijo",
                "Exigiendo reconocimientos públicos en cada visita",
                "Con resentimiento por la frialdad de su trato"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:15: «Y yo con el mayor placer gastaré lo mío, y aun yo mismo me gastaré del todo por amor de vuestras almas, aunque amándoos más, sea amado menos»."
        },
        {
            reference: "2 Corintios 12:18",
            question: "Según 2 Corintios 12:18, ¿qué testimonio de honradez compartían Pablo y Tito al servir a la iglesia?",
            options: [
                "Que procedieron con el mismo espíritu íntegro y siguieron exactamente las mismas pisadas de rectitud",
                "Que Tito recaudó fondos privados para beneficio propio",
                "Que actuaron sin normas claras ni supervisión",
                "Que buscaron ventajas económicas en Acaya"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:18: «Rogué a Tito, y envié con él al hermano. ¿Os engañó acaso Tito? ¿No hemos procedido con el mismo espíritu y en las mismas pisadas?»."
        },
        {
            reference: "2 Corintios 12:21",
            question: "Según 2 Corintios 12:21, ¿cuál era la gran preocupación y dolor de Pablo al volver a visitarlos?",
            options: [
                "Tener que lamentarse por muchos que habían pecado de impureza e inmoralidad y todavía no se habían arrepentido",
                "Ser rechazado por las autoridades civiles de la ciudad",
                "No recaudar suficientes fondos para su viaje a Roma",
                "Perder su prestigio ante los sabios de Grecia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:21: «que cuando vuelva, me humille Dios entre vosotros, y quizá tenga que llorar por muchos de los que antes han pecado, y no se han arrepentido de la inmundicia y fornicación y lascivia que han cometido»."
        }
    ],

    // DÍA 8: 2ª de Corintios 13
    8: [
        {
            reference: "2 Corintios 13:1",
            question: "Según 2 Corintios 13:1, ¿cuál es la norma bíblica para verificar y resolver cualquier asunto o acusación?",
            options: [
                "Por boca de dos o de tres testigos se decidirá todo asunto",
                "Por la decisión unilateral de un solo líder",
                "Por votación popular de toda la asamblea",
                "Por la opinión de los magistrados civiles"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:1: «Esta es la tercera vez que voy a vosotros. Por boca de dos o de tres testigos se decidirá todo asunto»."
        },
        {
            reference: "2 Corintios 13:5",
            question: "Según 2 Corintios 13:5, ¿a qué autoexamen vital exhorta Pablo a cada creyente?",
            options: [
                "A examinarse a sí mismos para comprobar si están firmes en la fe y si Cristo vive en ellos",
                "A vigilar y criticar la conducta de los demás",
                "A calcular cuántas obras buenas han realizado",
                "A buscar la aprobación y elogio de la sociedad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:5: «Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos. ¿O no os conocéis a vosotros mismos, que Jesucristo está en vosotros, a menos que estéis reprobados?»."
        },
        {
            reference: "2 Corintios 13:7",
            question: "Según 2 Corintios 13:7, ¿cuál es la oración de los apóstoles con respecto a la conducta de los corintios?",
            options: [
                "Que no hagan ninguna cosa mala, sino que practiquen lo que es bueno y recto",
                "Que acumulen grandes riquezas en la provincia",
                "Que derroten a todos sus rivales en los debates",
                "Que les envíen cartas de recomendación a Macedonia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:7: «Y oramos a Dios que ninguna cosa mala hagáis; no para que nosotros aparezcamos aprobados, sino para que vosotros hagáis lo bueno, aunque nosotros seamos como reprobados»."
        },
        {
            reference: "2 Corintios 13:11",
            question: "According to 2 Corintios 13:11, ¿cuáles son las actitudes fraternales que aseguran que el Dios de amor y de paz esté con nosotros?",
            options: [
                "Tener gozo, buscar la madurez espiritual, animarse unos a otros, vivir en armonía y mantener la paz",
                "Discutir constantemente sobre doctrinas menores",
                "Buscar el beneficio propio antes que el de la comunidad",
                "Aislarse de la comunión con los demás creyentes"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:11: «Por lo demás, hermanos, tened gozo, perfeccionaos, consolaos, sed de un mismo parecer, y vivid en paz; y el Dios de paz y de amor estará con vosotros»."
        },
        {
            reference: "2 Corintios 13:12",
            question: "Según 2 Corintios 13:12, ¿con qué expresión de afecto fraternal debían saludarse en la iglesia?",
            options: [
                "Con ósculo santo (saludo de sincero afecto y respeto cristiano)",
                "Con una reverencia formal de estilo romano",
                "Con un apretón de manos distante y silencioso",
                "Únicamente a través de cartas escritas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:12: «Saludaos los unos a los otros con ósculo santo»."
        },
        {
            reference: "2 Corintios 13:13",
            question: "Según 2 Corintios 13:13, ¿quiénes envían saludos fraternales a la iglesia de Corinto?",
            options: [
                "Todos los santos (toda la comunidad de creyentes)",
                "Únicamente los apóstoles de Jerusalén",
                "Los magistrados de Acaya y Macedonia",
                "Solamente los parientes de Pablo"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:13: «Todos los santos os saludan»."
        },
        {
            reference: "2 Corintios 13:14",
            question: "Según 2 Corintios 13:14, ¿cuál es la bendición trinitaria con la que concluye la segunda epístola a los Corintios?",
            options: [
                "La gracia del Señor Jesucristo, el amor de Dios el Padre y la comunión del Espíritu Santo",
                "La paz del imperio romano y la salud física",
                "El éxito en los negocios y la prosperidad terrenal",
                "La sabiduría de los filósofos y el honor humano"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:14: «La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén»."
        }
    ]
};

// Exportar globalmente
window.esgrimaQuizData = ESGRIMA_QUIZ_DATA;
