/**
 * Banco de Preguntas de Esgrima Bíblico para Corintios Diario
 * Formato oficial de competencia: "Según [Referencia], ¿...?"
 * Cobertura exhaustiva de los versículos resaltados por defecto.
 */

const ESGRIMA_QUIZ_DATA = {
    // DÍA 1: 1ª de Corintios 1 al 4
    1: [
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
            reference: "2 Corintios 1:4",
            question: "Según 2 Corintios 1:4, ¿para qué nos consuela Dios en todas nuestras tribulaciones?",
            options: [
                "Para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios",
                "Para que nos jactemos de no sufrir nunca más",
                "Para que vivamos apartados de la sociedad",
                "Para que nos consideremos superiores a los afligidos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:4: «el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación...»."
        },
        {
            reference: "2 Corintios 1:8",
            question: "Según 2 Corintios 1:8, ¿en qué lugar experimentó Pablo una tribulación tan desmedida que perdió la esperanza de conservar la vida?",
            options: [
                "En Asia",
                "En Roma",
                "En Jerusalén",
                "En Atenas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:8: «Porque hermanos, no queremos que ignoréis acerca de nuestra tribulación que nos sobrevino en Asia...»."
        },
        {
            reference: "2 Corintios 1:9",
            question: "According to 2 Corintios 1:9, ¿para qué tuvieron los apóstoles en sí mismos sentencia de muerte?",
            options: [
                "Para que no confiásemos en nosotros mismos, sino en Dios que resucita a los muertos",
                "Para que abandonaran el ministerio apostólico",
                "Para pagar por sus pecados pasados",
                "Para ser admirados por su valentía humana"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:9: «Pero tuvimos en nosotros mismos sentencia de muerte, para que no confiásemos en nosotros mismos, sino en Dios que resucita a los muertos»."
        },
        {
            reference: "2 Corintios 1:22",
            question: "Según 2 Corintios 1:22, ¿qué ha puesto Dios en nuestros corazones como sello y garantía?",
            options: [
                "Nos selló, y nos dio las arras del Espíritu en nuestros corazones",
                "Un diploma de honor apostólico",
                "La promesa de prosperidad material",
                "Un mandamiento grabado en tablas de piedra"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 1:22: «el cual también nos ha sellado, y nos ha dado las arras del Espíritu en nuestros corazones»."
        },
        {
            reference: "2 Corintios 2:4",
            question: "According to 2 Corintios 2:4, ¿con qué sentimientos y de qué manera escribió Pablo su carta anterior a los corintios?",
            options: [
                "Por la mucha tribulación y angustia del corazón os escribí con muchas lágrimas, para que supieseis cuán grande es el amor que os tengo",
                "Con ira y deseo de venganza",
                "Con indiferencia y frialdad",
                "Con soberbia para demostrar su poderío"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:4: «Porque por la mucha tribulación y angustia del corazón os escribí con muchas lágrimas...»."
        },
        {
            reference: "2 Corintios 2:14",
            question: "Según 2 Corintios 2:14, ¿a quién da gracias Pablo, quien siempre nos lleva en triunfo en Cristo Jesús?",
            options: [
                "A Dios, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta el olor de su conocimiento",
                "A las autoridades de Macedonia por su apoyo",
                "A los filósofos de Corinto por su clemencia",
                "A los ejércitos del imperio romano"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:14: «Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús...»."
        },
        {
            reference: "2 Corintios 2:15",
            question: "According to 2 Corintios 2:15, ¿qué somos para Dios respecto a los que se salvan y a los que se pierden?",
            options: [
                "Grato olor de Cristo en los que se salvan, y en los que se pierden",
                "Jueces inflexibles de las naciones",
                "Maestros de retórica para Acaya",
                "Siervos de las leyes ceremoniales"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 2:15: «Porque para Dios somos grato olor de Cristo en los que se salvan, y en los que se pierden»."
        },
        {
            reference: "2 Corintios 3:2",
            question: "Según 2 Corintios 3:2, ¿qué carta son los propios creyentes para el testimonio de Pablo?",
            options: [
                "Nuestras cartas sois vosotros, escritas en nuestros corazones, conocidas y leídas por todos los hombres",
                "Cartas escritas con tinta en papiros de Roma",
                "Documentos sellados por el concilio de Jerusalén",
                "Escritos guardados en arcas secretas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:2: «Nuestras cartas sois vosotros, escritas en nuestros corazones, conocidas y leídas por todos los hombres»."
        },
        {
            reference: "2 Corintios 3:5-6",
            question: "According to 2 Corintios 3:5-6, ¿de dónde proviene nuestra suficiencia como ministros de un nuevo pacto?",
            options: [
                "Nuestra competencia proviene de Dios, el cual nos hizo ministros competentes no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica",
                "De nuestros títulos académicos bajo Gamaliel",
                "De la aprobación de los gobernantes",
                "De nuestra propia elocuencia y sabiduría humana"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:5-6: «nuestra competencia proviene de Dios... porque la letra mata, mas el espíritu vivifica»."
        },
        {
            reference: "2 Corintios 3:17",
            question: "Según 2 Corintios 3:17, ¿qué bendición hay donde está el Espíritu del Señor?",
            options: [
                "Donde está el Espíritu del Señor, allí hay libertad",
                "Allí hay servidumbre y temor de muerte",
                "Allí hay riquezas de este mundo",
                "Allí hay imposición de leyes humanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 3:17: «Porque el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad»."
        },
        {
            reference: "2 Corintios 4:5",
            question: "According to 2 Corintios 4:5, ¿a quién predicamos los siervos de Dios?",
            options: [
                "No nos predicamos a nosotros mismos, sino a Jesucristo como Señor, y a nosotros como vuestros siervos por amor de Jesús",
                "Predicamos nuestras propias virtudes y sufrimientos",
                "Predicamos la gloria de la nación de Israel",
                "Predicamos las opiniones de los sabios griegos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:5: «Porque no nos predicamos a nosotros mismos, sino a Jesucristo como Señor...»."
        },
        {
            reference: "2 Corintios 4:7",
            question: "Según 2 Corintios 4:7, ¿en qué recipiente tenemos este tesoro y para qué?",
            options: [
                "Tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros",
                "En copas de oro fino para ser admirados",
                "En fortalezas de piedra inexpugnables",
                "En libros sellados de la antigüedad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:7: «Pero tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros»."
        },
        {
            reference: "2 Corintios 4:8-9",
            question: "According to 2 Corintios 4:8-9, ¿cuál es la gloriosa paradoja de la perseverancia apostólica?",
            options: [
                "Atribulados en todo, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, pero no destruidos",
                "Vencedores sin dolor, ricos sin pobreza y sanos sin enfermedad",
                "Derrotados por el mundo y sin esperanza eterna",
                "Exentos de toda persecución y dificultad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:8-9: «atribulados en todo, mas no angustiados; en apuros, mas no desesperados...»."
        },
        {
            reference: "2 Corintios 4:18",
            question: "Según 2 Corintios 4:18, ¿en qué cosas ponemos nuestra mirada?",
            options: [
                "No mirando las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas",
                "En las riquezas y palacios de Acaya",
                "En los honores pasajeros de este siglo",
                "En las circunstancias visibles del presente"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 4:18: «no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas»."
        }
    ],

    // DÍA 6: 2ª de Corintios 5 al 8
    6: [
        {
            reference: "2 Corintios 5:1",
            question: "According to 2 Corintios 5:1, si nuestra morada terrestre se deshiere, ¿qué edificio tenemos de Dios en los cielos?",
            options: [
                "Tenemos de Dios un edificio, una casa no hecha de manos, eterna, en los cielos",
                "Una tumba perpetua en la tierra",
                "Un recuerdo glorioso entre los hombres",
                "Una morada terrenal reconstruida por hombres"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:1: «Porque sabemos que si nuestra morada terrestre, este tabernáculo, se deshiciere, tenemos de Dios un edificio...»."
        },
        {
            reference: "2 Corintios 5:7",
            question: "Según 2 Corintios 5:7, ¿cómo andamos los creyentes en esta vida?",
            options: [
                "Por fe andamos, no por vista",
                "Por vista andamos y por señales visibles",
                "Por los dictados de los filósofos de este siglo",
                "Por las certezas terrenales del dinero"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:7: «(porque por fe andamos, no por vista)»."
        },
        {
            reference: "2 Corintios 5:10",
            question: "According to 2 Corintios 5:10, ¿delante de qué tribunal es necesario que todos comparezcamos?",
            options: [
                "Del tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo",
                "Del tribunal imperial del César en Roma",
                "Del tribunal de los magistrados de Corinto",
                "Del juicio secreto de las naciones"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:10: «Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo...»."
        },
        {
            reference: "2 Corintios 5:17",
            question: "Según 2 Corintios 5:17, si alguno está en Cristo, ¿qué ocurre con su vida?",
            options: [
                "Nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas",
                "Mejora ligeramente sus hábitos antiguos",
                "Permanece bajo la condenación de sus faltas pasadas",
                "Adquiere honores según la carne"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:17: «De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas»."
        },
        {
            reference: "2 Corintios 5:20",
            question: "According to 2 Corintios 5:20, ¿qué título y misión tenemos en nombre de Cristo?",
            options: [
                "Somos embajadores en nombre de Cristo: Os rogamos en nombre de Cristo: Reconciliaos con Dios",
                "Somos jueces de las faltas ajenas",
                "Somos señores sobre las naciones paganas",
                "Somos defensores de leyes humanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:20: «Así que, somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios»."
        },
        {
            reference: "2 Corintios 5:21",
            question: "According to 2 Corintios 5:21, ¿qué hizo Dios con Aquel que no conoció pecado por nosotros?",
            options: [
                "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él",
                "Lo libró de la muerte terrenal",
                "Lo coronó rey terrenal en Jerusalén",
                "Lo envió únicamente como maestro moral"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 5:21: «Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él»."
        },
        {
            reference: "2 Corintios 6:2",
            question: "According to 2 Corintios 6:2, ¿cuándo es el tiempo aceptable y el día de salvación?",
            options: [
                "He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación",
                "En el siglo venidero tras muchas penitencias",
                "Cuando hayamos alcanzado perfección sin faltas",
                "Solo en los días festivos del calendario"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:2: «He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación»."
        },
        {
            reference: "2 Corintios 6:14",
            question: "According to 2 Corintios 6:14, ¿qué advertencia directa se da sobre las asociaciones espirituales?",
            options: [
                "No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia?",
                "Uníos a todos sin distinción de doctrina ni moral",
                "Aislaos por completo en los desiertos",
                "Comprometed la verdad para evitar conflictos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:14: «No os unáis en yugo desigual con los incrédulos...»."
        },
        {
            reference: "2 Corintios 6:16",
            question: "According to 2 Corintios 6:16, ¿qué relación tiene el templo de Dios con los ídolos?",
            options: [
                "¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente",
                "Pueden coexistir pacíficamente en la misma ciudad",
                "Los ídolos decoran la casa del Señor",
                "El templo de Dios necesita aprobación de los sacerdotes paganos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:16: «¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente...»."
        },
        {
            reference: "2 Corintios 6:18",
            question: "According to 2 Corintios 6:18, ¿qué promesa paternal nos da el Señor Todopoderoso?",
            options: [
                "Y seré para vosotros por Padre, y vosotros me seréis hijos e hijas, dice el Señor Todopoderoso",
                "Os concederé coronas de gloria terrenal en Corinto",
                "Os libraré de tener que predicar el evangelio",
                "Haré de vosotros gobernantes de las provincias romanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 6:18: «Y seré para vosotros por Padre, y vosotros me seréis hijos e hijas, dice el Señor Todopoderoso»."
        },
        {
            reference: "2 Corintios 7:10",
            question: "Según 2 Corintios 7:10, ¿cuál es la diferencia crucial entre la tristeza que es según Dios y la tristeza del mundo?",
            options: [
                "La tristeza que es según Dios produce arrepentimiento para salvación; pero la tristeza del mundo produce muerte",
                "La tristeza del mundo santifica y la de Dios angustia",
                "Ambas tristezas tienen el mismo resultado final",
                "La tristeza de Dios es pasajera y sin arrepentimiento"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 7:10: «Porque la tristeza que es según Dios produce arrepentimiento para salvación... pero la tristeza del mundo produce muerte»."
        },
        {
            reference: "2 Corintios 8:9",
            question: "Según 2 Corintios 8:9, ¿qué maravillosa gracia demostró nuestro Señor Jesucristo?",
            options: [
                "Que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos",
                "Que buscó reinar con pompa terrenal en Roma",
                "Que exigió tributos de todos los necesitados",
                "Que guardó sus riquezas en secreto"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:9: «Porque ya conocéis la gracia de nuestro Señor Jesucristo, que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos»."
        },
        {
            reference: "2 Corintios 8:21",
            question: "According to 2 Corintios 8:21, ¿cómo procura conducirse el apóstol en la administración de las ofrendas?",
            options: [
                "Procurando hacer las cosas honradamente, no sólo delante del Señor sino también delante de los hombres",
                "Manejando los recursos sin dar explicaciones a nadie",
                "Delegando todo sin supervisión",
                "Buscando únicamente la aprobación civil de Acaya"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 8:21: «procurando hacer las cosas honradamente, no sólo delante del Señor sino también delante de los hombres»."
        }
    ],

    // DÍA 7: 2ª de Corintios 9 al 12
    7: [
        {
            reference: "2 Corintios 9:6",
            question: "Según 2 Corintios 9:6, ¿cuál es el principio de la siembra y la cosecha espiritual?",
            options: [
                "El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará",
                "El que no siembra nada, cosechará en abundancia",
                "La siembra no tiene relación con los frutos recogidos",
                "El que siembra poco recibirá más galardón que todos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:6: «Pero esto digo: El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará»."
        },
        {
            reference: "2 Corintios 9:7",
            question: "Según 2 Corintios 9:7, ¿cómo debe dar cada uno y a quién ama Dios?",
            options: [
                "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre",
                "Por obligación y bajo presión pública",
                "Con pesar y murmuración constante",
                "Para ser alabado por la congregación"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:7: «Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre»."
        },
        {
            reference: "2 Corintios 9:8",
            question: "Según 2 Corintios 9:8, ¿qué es poderoso Dios para hacer en nosotros?",
            options: [
                "Poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que tengáis siempre en todas las cosas todo lo suficiente para toda buena obra",
                "Para concedernos fama y lujos mundanos",
                "Para librarnos de ayudar al prójimo",
                "Para hacernos señores sobre los pobres"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:8: «Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra»."
        },
        {
            reference: "2 Corintios 9:15",
            question: "Según 2 Corintios 9:15, ¿por qué don da gracias a Dios el apóstol Pablo?",
            options: [
                "¡Gracias a Dios por su don inefable!",
                "Por los tributos recibidos de Macedonia",
                "Por la elocuencia de los maestros griegos",
                "Por los títulos honoríficos concedidos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 9:15: «¡Gracias a Dios por su don inefable!»."
        },
        {
            reference: "2 Corintios 10:3-4",
            question: "Según 2 Corintios 10:3-4, ¿cómo son las armas de nuestra milicia espiritual?",
            options: [
                "No son carnales, sino poderosas en Dios para la destrucción de fortalezas",
                "Son espadas de hierro y lanzas de guerra romana",
                "Son argumentos de elocuencia y filosofía humana",
                "Son decretos emitidos por tribunales civiles"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:3-4: «Pues aunque andamos en la carne, no militamos según la carne; porque las armas de nuestra milicia no son carnales, sino poderosas en Dios para la destrucción de fortalezas»."
        },
        {
            reference: "2 Corintios 10:6",
            question: "Según 2 Corintios 10:6, ¿para qué estaban prontos los apóstoles y en qué momento?",
            options: [
                "Estando prontos para castigar toda desobediencia, cuando vuestra obediencia sea perfecta",
                "Para abandonar la ciudad de Corinto sin previo aviso",
                "Para apelar inmediatamente al tribunal del César",
                "Para exigir ofrendas obligatorias a los rebeldes"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:6: «y estando prontos para castigar toda desobediencia, cuando vuestra obediencia sea perfecta»."
        },
        {
            reference: "2 Corintios 10:7",
            question: "Según 2 Corintios 10:7, ¿según qué miraban las cosas y qué debía considerar el que confiaba ser de Cristo?",
            options: [
                "Miráis las cosas según la apariencia; si alguno está confiado en que es de Cristo, considere que como él es de Cristo, así también nosotros somos de Cristo",
                "Miraban según el juicio del Espíritu Santo sin equivocación",
                "Consideraban que solo los corintios pertenecían al Señor",
                "Miraban las cartas de recomendación del Sanedrín"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:7: «Miráis las cosas según la apariencia. Si alguno está confiado en sí mismo que es de Cristo, esto también vuelva a considerar por sí mismo, que como él es de Cristo, así también nosotros somos de Cristo»."
        },
        {
            reference: "2 Corintios 10:10",
            question: "Según 2 Corintios 10:10, ¿qué decían los detractores acerca de las cartas y de la presencia corporal de Pablo?",
            options: [
                "Las cartas son duras y fuertes; mas la presencia corporal débil, y la palabra menospreciable",
                "Las cartas son confusas y la presencia imponente",
                "Que hablaba con excesiva elocuencia filosófica",
                "Que nunca enviaba cartas doctrinales auténticas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:10: «Porque a la verdad, dicen, las cartas son duras y fuertes; mas la presencia corporal débil, y la palabra menospreciable»."
        },
        {
            reference: "2 Corintios 10:13",
            question: "Según 2 Corintios 10:13, ¿cómo se gloriaba Pablo en lugar de gloriarse desmedidamente?",
            options: [
                "Conforme a la regla de la medida que Dios nos ha dado por medida, para llegar también hasta vosotros",
                "En las obras y ministerios fundados por otros apóstoles",
                "En su elocuencia personal ante los gobernadores",
                "En su sabiduría secular y riquezas terrenales"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:13: «Pero nosotros no nos gloriaremos desmedidamente, sino conforme a la regla de la medida que Dios nos ha dado por medida, para llegar también hasta vosotros»."
        },
        {
            reference: "2 Corintios 10:16",
            question: "Según 2 Corintios 10:16, ¿dónde anhelaban anunciar el evangelio sin entrar en la obra de otro?",
            options: [
                "En los lugares más allá de vosotros, sin entrar en la obra de otro para gloriarnos en lo que ya estaba preparado",
                "Únicamente dentro de las sinagogas de Judea",
                "En las ciudades donde otros ya habían edificado",
                "En los palacios del emperador romano"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:16: «y que anunciaremos el evangelio en los lugares más allá de vosotros, sin entrar en la obra de otro para gloriarnos en lo que ya estaba preparado»."
        },
        {
            reference: "2 Corintios 10:17",
            question: "Según 2 Corintios 10:17, ¿en quién debe gloriarse el que se gloría?",
            options: [
                "Mas el que se gloría, gloríese en el Señor",
                "Gloríese en sus propias fuerzas y méritos",
                "Gloríese en su linaje y títulos humanos",
                "Gloríese en las alabanzas de la multitud"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:17: «Mas el que se gloría, gloríese en el Señor»."
        },
        {
            reference: "2 Corintios 10:18",
            question: "Según 2 Corintios 10:18, ¿quién es el verdaderamente aprobado?",
            options: [
                "No es aprobado el que se alaba a sí mismo, sino aquel a quien Dios alaba",
                "Aquel que tiene más seguidores y aplausos",
                "El que exhibe cartas de recomendación terrenales",
                "El que nunca ha padecido debilidades ni vituperios"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 10:18: «porque no es aprobado el que se alaba a sí mismo, sino aquel a quien Dios alaba»."
        },
        {
            reference: "2 Corintios 11:2-3",
            question: "Según 2 Corintios 11:2-3, ¿con qué celo cela Pablo a la iglesia y a quién teme que sean extraviados como Eva?",
            options: [
                "Os celo con celo de Dios para presentaros como una virgen pura a Cristo; temiendo que como la serpiente engañó a Eva, vuestros sentidos sean extraviados",
                "Celo humano por mantener control sobre la congregación",
                "Temor a las amenazas de las autoridades imperiales",
                "Celo por preservar los ritos ceremoniales antiguos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:2-3: «Porque os celo con celo de Dios; pues os he desposado con un solo esposo, para presentaros como una virgen pura a Cristo. Pero temo que como la serpiente con su astucia engañó a Eva, vuestros sentidos sean de alguna manera extraviados de la sincera fidelidad a Cristo»."
        },
        {
            reference: "2 Corintios 11:6",
            question: "Según 2 Corintios 11:6, ¿en qué reconoce Pablo que podía ser tosco, pero en qué no lo era?",
            options: [
                "Aunque sea tosco en la palabra, no lo soy en el conocimiento; en todo y por todo os lo hemos demostrado",
                "Tosco en el conocimiento teológico pero refinado en la oratoria",
                "Tosco en el carácter pero débil en la doctrina",
                "Tosco en la disciplina pero tolerante con el pecado"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:6: «Pues aunque sea tosco en la palabra, no lo soy en el conocimiento; en todo y por todo os lo hemos demostrado»."
        },
        {
            reference: "2 Corintios 11:9",
            question: "Según 2 Corintios 11:9, ¿quiénes suplieron lo que le faltaba a Pablo para no ser gravoso a Corinto?",
            options: [
                "Lo suplieron los hermanos que vinieron de Macedonia, guardándose de serles gravoso",
                "Los magistrados y cónsules de la ciudad",
                "Los mercaderes del puerto de Cencrea",
                "Los recaudadores de impuestos de Galacia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:9: «pues lo que me faltaba, lo suplieron los hermanos que vinieron de Macedonia, y en todo me guardé y me guardaré de seros gravoso»."
        },
        {
            reference: "2 Corintios 11:10",
            question: "Según 2 Corintios 11:10, ¿en qué regiones no se le impediría a Pablo este motivo de gloria?",
            options: [
                "En las regiones de Acaya",
                "En las islas de Creta y Chipre",
                "En la provincia de Capadocia",
                "En las costas de Alejandría"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:10: «Por la verdad de Cristo que está en mí, que no se me impedirá esta mi gloria en las regiones de Acaya»."
        },
        {
            reference: "2 Corintios 11:13-14",
            question: "Según 2 Corintios 11:13-14, ¿cómo describe Pablo a los falsos obreros y cómo se disfraza Satanás?",
            options: [
                "Son falsos apóstoles, obreros fraudulentos; y el mismo Satanás se disfraza como ángel de luz",
                "Son ministros sinceros pero con poca experiencia",
                "Satanás se presenta siempre como una bestia tenebrosa",
                "Son profetas aprobados por el concilio de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:13-14: «Porque éstos son falsos apóstoles, obreros fraudulentos, que se disfrazan como apóstoles de Cristo. Y no es maravilla, porque el mismo Satanás se disfraza como ángel de luz»."
        },
        {
            reference: "2 Corintios 11:21-22",
            question: "Según 2 Corintios 11:21-22, ¿qué responde Pablo respecto a su identidad y linaje ante quienes presumen?",
            options: [
                "¿Son hebreos? Yo también. ¿Son israelitas? Yo también. ¿Son descendientes de Abraham? También yo",
                "Reconoce que él no tenía ascendencia israelita",
                "Afirma que el linaje no tenía ningún valor histórico",
                "Dice que solo los apóstoles de Jerusalén eran hebreos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:22: «¿Son hebreos? Yo también. ¿Son israelitas? Yo también. ¿Son descendientes de Abraham? También yo»."
        },
        {
            reference: "2 Corintios 11:23",
            question: "Según 2 Corintios 11:23, ¿de qué maneras demostró Pablo ser más ministro de Cristo?",
            options: [
                "En trabajos más abundante; en azotes sin número; en cárceles más; en peligros de muerte muchas veces",
                "En honores recibidos y posiciones de poder eclesial",
                "En riquezas acumuladas y templos construidos",
                "En banquetes y reconocimientos públicos de las autoridades"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:23: «¿Son ministros de Cristo? (Como si estuviera loco hablo.) Yo más; en trabajos más abundante; en azotes sin número; en cárceles más; en peligros de muerte muchas veces»."
        },
        {
            reference: "2 Corintios 11:24-25",
            question: "Según 2 Corintios 11:24-25, ¿cuántos azotes de los judíos, cuántas veces azotado con varas y cuántos naufragios sufrió Pablo?",
            options: [
                "De los judíos cinco veces 39 azotes; tres veces azotado con varas; una vez apedreado; tres veces naufragio (una noche y un día en alta mar)",
                "Diez veces azotado y un solo naufragio",
                "Nunca fue encarcelado ni azotado",
                "Dos veces apedreado en Atenas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:24-25: «De los judíos cinco veces he recibido cuarenta azotes menos uno. Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar»."
        },
        {
            reference: "2 Corintios 11:30",
            question: "Según 2 Corintios 11:30, si es necesario gloriarse, ¿en qué se gloriará Pablo?",
            options: [
                "Me gloriaré en lo que es de mi debilidad",
                "En sus grandes riquezas y posesiones",
                "En su dominio sobre los gentiles",
                "En sus victorias políticas en Acaya"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:30: «Si es necesario gloriarse, me gloriaré en lo que es de mi debilidad»."
        },
        {
            reference: "2 Corintios 11:32-33",
            question: "Según 2 Corintios 11:32-33, ¿cómo escapó Pablo en Damasco del gobernador del rey Aretas?",
            options: [
                "Fue descolgado del muro en un canasto por una ventana, y escapó de sus manos",
                "Disfrazado de soldado romano por la puerta principal",
                "Mediante un salvoconducto firmado por los magistrados",
                "A través de un túnel subterráneo bajo el palacio"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 11:32-33: «En Damasco, el gobernador de la provincia del rey Aretas guardaba la ciudad de los damascenos para prenderme; y fui descolgado del muro en un canasto por una ventana, y escapé de sus manos»."
        },
        {
            reference: "2 Corintios 12:2-4",
            question: "Según 2 Corintios 12:2-4, ¿hace cuántos años fue arrebatado el hombre en Cristo hasta el tercer cielo (al paraíso)?",
            options: [
                "Hace catorce años; fue arrebatado al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar",
                "Hace siete años en la ciudad de Jerusalén",
                "Durante su infancia en Tarso de Cilicia",
                "Ayer en una visión pública en Corinto"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:2-4: «Conozco a un hombre en Cristo, que hace catorce años... fue arrebatado hasta el tercer cielo... al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar»."
        },
        {
            reference: "2 Corintios 12:5",
            question: "Según 2 Corintios 12:5, ¿de qué se gloriaría Pablo respecto a sí mismo?",
            options: [
                "De mí mismo en nada me gloriaré, sino en mis debilidades",
                "En sus grandes revelaciones místicas y conocimientos",
                "En haber fundado más iglesias que todos los demás",
                "En sus títulos de fariseo instruido por Gamaliel"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:5: «De tal hombre me gloriaré; pero de mí mismo en nada me gloriaré, sino en mis debilidades»."
        },
        {
            reference: "2 Corintios 12:7",
            question: "Según 2 Corintios 12:7, para no enaltecerse por la grandeza de las revelaciones, ¿qué le fue dado a Pablo?",
            options: [
                "Me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera",
                "Una enfermedad mortal que lo postró",
                "Una orden de arresto en Macedonia",
                "La pérdida de su ciudadanía romana"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:7: «Y para que la grandeza de las revelaciones no me exaltase desmedidamente, me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera»."
        },
        {
            reference: "2 Corintios 12:8-9",
            question: "Según 2 Corintios 12:8-9, tras rogar tres veces al Señor que quitase el aguijón, ¿qué le respondió Cristo?",
            options: [
                "Bástate mi gracia; porque mi poder se perfecciona en la debilidad",
                "Te libraré de toda molestia inmediatamente",
                "Debes ayunar cuarenta días más",
                "No has tenido suficiente fe para ser sano"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:9: «Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo»."
        },
        {
            reference: "2 Corintios 12:14",
            question: "Según 2 Corintios 12:14, ¿por qué no sería gravoso Pablo a los corintios en su tercera visita?",
            options: [
                "No os seré gravoso, porque no busco lo vuestro, sino a vosotros, pues no deben atesorar los hijos para los padres, sino los padres para los hijos",
                "Porque había recibido una cuantiosa herencia en Tarso",
                "Porque los magistrados de Acaya pagarían sus gastos",
                "Porque solo permanecería unas pocas horas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:14: «He aquí, por tercera vez estoy preparado para ir a vosotros; y no os seré gravoso, porque no busco lo vuestro, sino a vosotros, pues no deben atesorar los hijos para los padres, sino los padres para los hijos»."
        },
        {
            reference: "2 Corintios 12:15",
            question: "Según 2 Corintios 12:15, ¿con qué amor y entrega estaba dispuesto Pablo a desgastarse por la iglesia?",
            options: [
                "Con el mayor placer gastaré lo mío, y aun yo mismo me gastaré del todo por amor de vuestras almas, aunque amándoos más, sea amado menos",
                "Exigiendo compensación material por cada sermón",
                "Solo si era tratado con los mayores honores eclesiásticos",
                "Con amargura y reproche constante por su frialdad"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:15: «Y yo con el mayor placer gastaré lo mío, y aun yo mismo me gastaré del todo por amor de vuestras almas, aunque amándoos más, sea amado menos»."
        },
        {
            reference: "2 Corintios 12:18",
            question: "Según 2 Corintios 12:18, ¿a quién envió Pablo a Corinto y con qué testimonio de integridad?",
            options: [
                "Rogué a Tito, y envié con él al hermano. ¿Os engañó acaso Tito? ¿No hemos procedido con el mismo espíritu y en las mismas pisadas?",
                "Envió a Bernabé para recaudar fondos privados",
                "Envió mensajeros anónimos sin instrucciones claras",
                "Envió emisarios a exigir tributos para Galacia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:18: «Rogué a Tito, y envié con él al hermano. ¿Os engañó acaso Tito? ¿No hemos procedido con el mismo espíritu y en las mismas pisadas?»."
        },
        {
            reference: "2 Corintios 12:21",
            question: "Según 2 Corintios 12:21, ¿qué temía Pablo tener que hacer al volver si hallaba a los que pecaron sin arrepentirse?",
            options: [
                "Temía que Dios lo humillase entre ellos y tuviese que llorar por los que no se han arrepentido de la inmundicia, fornicación y lascivia",
                "Temía que los corintios lo expulsasen de la ciudad",
                "Temía tener que clausurar permanentemente la congregación",
                "Temía perder su salario apostólico de Acaya"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 12:21: «que cuando vuelva, me humille Dios entre vosotros, y quizá tenga que llorar por muchos de los que antes han pecado, y no se han arrepentido de la inmundicia y fornicación y lascivia que han cometido»."
        }
    ],

    // DÍA 8: 2ª de Corintios 13
    8: [
        {
            reference: "2 Corintios 13:1",
            question: "Según 2 Corintios 13:1, ¿por boca de cuántos testigos se decidirá todo asunto en la tercera visita de Pablo?",
            options: [
                "Por boca de dos o de tres testigos se decidirá todo asunto",
                "Por el juicio de un solo magistrado de Acaya",
                "Por votación popular de toda la asamblea de Corinto",
                "Por decisión secreta de los ancianos de Jerusalén"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:1: «Esta es la tercera vez que voy a vosotros. Por boca de dos o de tres testigos se decidirá todo asunto»."
        },
        {
            reference: "2 Corintios 13:5",
            question: "Según 2 Corintios 13:5, ¿a qué examen vital exhorta Pablo a cada creyente?",
            options: [
                "Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos. ¿O no os conocéis a vosotros mismos, que Jesucristo está en vosotros, a menos que estéis reprobados?",
                "Examinad las faltas y pecados de vuestros vecinos",
                "Contad cuántas ofrendas habéis entregado en el templo",
                "Comprobad si tenéis la aprobación de los gobernadores romanos"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:5: «Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos. ¿O no os conocéis a vosotros mismos, que Jesucristo está en vosotros, a menos que estéis reprobados?»."
        },
        {
            reference: "2 Corintios 13:7",
            question: "Según 2 Corintios 13:7, ¿qué ora Pablo a Dios respecto a las acciones de los creyentes?",
            options: [
                "Oramos a Dios que ninguna cosa mala hagáis; no para que nosotros aparezcamos aprobados, sino para que vosotros hagáis lo bueno",
                "Que alcancen grandes riquezas materiales en Acaya",
                "Que derroten a todos sus opositores en los tribunales",
                "Que le envíen cartas de elogio a Macedonia"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:7: «Y oramos a Dios que ninguna cosa mala hagáis; no para que nosotros aparezcamos aprobados, sino para que vosotros hagáis lo bueno, aunque nosotros seamos como reprobados»."
        },
        {
            reference: "2 Corintios 13:11",
            question: "Según 2 Corintios 13:11, ¿cuáles son las exhortaciones finales para que el Dios de paz y de amor esté con nosotros?",
            options: [
                "Tened gozo, perfeccionaos, consolaos, sed de un mismo parecer, y vivid en paz; y el Dios de paz y de amor estará con vosotros",
                "Disputad con los que difieren y separaos de la asamblea",
                "Buscad el honor propio y la revancha personal",
                "Aislaos de toda comunión eclesial"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:11: «Por lo demás, hermanos, tened gozo, perfeccionaos, consolaos, sed de un mismo parecer, y vivid en paz; y el Dios de paz y de amor estará con vosotros»."
        },
        {
            reference: "2 Corintios 13:12",
            question: "Según 2 Corintios 13:12, ¿cómo instruye Pablo que se saluden los unos a los otros?",
            options: [
                "Saludaos los unos a los otros con ósculo santo",
                "Con reverencias formales de estilo romano",
                "Con apretón de manos en silencio",
                "Únicamente mediante cartas selladas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:12: «Saludaos los unos a los otros con ósculo santo»."
        },
        {
            reference: "2 Corintios 13:13",
            question: "Según 2 Corintios 13:13, ¿quiénes envían saludos a la iglesia de Corinto?",
            options: [
                "Todos los santos os saludan",
                "Únicamente los apóstoles de Judea",
                "Los magistrados de Acaya y Macedonia",
                "Solamente la familia de Estéfanas"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:13: «Todos los santos os saludan»."
        },
        {
            reference: "2 Corintios 13:14",
            question: "Según 2 Corintios 13:14, ¿cuál es la bendición apostólica trinitaria con la que finaliza la epístola?",
            options: [
                "La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén",
                "La paz del imperio romano y la salud corporal sean con vosotros",
                "El favor de los gobernadores y la prosperidad terrenal os acompañen",
                "La sabiduría de los filósofos y el honor de Acaya sea vuestra porción"
            ],
            correctIndex: 0,
            explanation: "2 Corintios 13:14: «La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén»."
        }
    ]
};

// Exportar globalmente
window.esgrimaQuizData = ESGRIMA_QUIZ_DATA;
