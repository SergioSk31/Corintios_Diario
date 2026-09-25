// Versículos clave destacados predeterminados para todos los visitantes (Esgrima Bíblico)
const DEFAULT_HIGHLIGHTS = {
    // 1ª de Corintios
    "1_1": [1, 5, 7, 9, 11, 14, 16, 17, 18, 19, 22, 23, 27, 28, 29, 30],
    "1_2": [1, 3, 4, 5, 6, 10, 12, 14],
    "1_3": [1, 3, 6, 8, 9, 11, 12, 13, 17, 19],
    "1_4": [1, 2, 5, 10, 11],
    "1_5": [1, 5, 6, 7, 8],
    "1_6": [1, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20],
    "1_7": [1, 2, 7, 17, 22, 23, 24, 25, 34, 35],
    "1_8": [1, 2, 3, 4, 6, 9, 12, 13],
    "1_9": [2, 9, 14, 18, 24, 25, 27],
    "1_10": [1, 2, 4, 8, 10, 12, 14, 23, 31],
    "1_11": [2, 3, 4, 5, 7, 14, 27, 28],
    "1_12": [2, 11, 13, 18, 22, 23, 26, 27, 28, 31],
    "1_13": [1, 4, 5, 6, 7, 8, 10, 11, 13],
    "1_14": [1, 2, 3, 4, 5, 9, 20, 22],
    "1_15": [3, 5, 6, 7, 8, 14, 20, 22, 26, 32, 42, 43, 44, 45, 52, 55],
    "1_16": [1, 5, 8, 10, 12, 15, 16, 17, 18, 19, 20],

    // 2ª de Corintios
    "2_1": [3, 4, 8, 9, 15, 16, 19, 20, 22],
    "2_2": [4, 7, 12, 13, 14, 15],
    "2_3": [2, 3, 5, 6, 7, 9, 11, 13, 16, 17],
    "2_4": [3, 5, 7, 8, 9, 10, 11, 14, 17, 18],
    "2_5": [1, 5, 7, 9, 10, 13, 17, 20, 21],
    "2_6": [1, 2, 3, 12, 14, 16, 18],
    "2_7": [1, 5, 6, 8, 9, 10, 11, 12, 15],
    "2_8": [1, 2, 3, 4, 5, 7, 9, 12, 15, 18, 21, 23],
    "2_9": [1, 2, 5, 6, 7, 8, 12, 15],
    "2_10": [1, 3, 4, 6, 7, 8, 10, 13, 16, 17, 18],
    "2_11": [2, 3, 6, 9, 10, 13, 14, 21, 22, 23, 24, 25, 30, 32, 33],
    "2_12": [2, 3, 4, 5, 7, 8, 9, 14, 15, 18, 21],
    "2_13": [1, 2, 5, 7, 11, 12, 13, 14]
};

// Introducción histórica y contexto cronológico de Pablo y las cartas a los Corintios
const HISTORICAL_INTRO = {
    title: "Pablo y las Cartas a la Iglesia de Corinto",
    subtitle: "Historia, Época, Lugar de Redacción y Trasfondo Apostólico",
    author: {
        name: "El Apóstol Pablo (Saulo de Tarso)",
        bio: "Nacido en Tarso de Cilicia, educado a los pies de Gamaliel y ciudadano romano, Saulo fue un celoso fariseo que perseguía a los primeros cristianos. Alrededor del año 33-35 d.C., experimentó una dramática conversión camino a Damasco al encontrarse con Jesucristo resucitado. Fue apartado por Dios como el 'apóstol de los gentiles', llevando el Evangelio por todo el Mediterráneo oriental y fundando comunidades de fe en Asia Menor y Grecia."
    },
    city: {
        name: "La Ciudad de Corinto",
        description: "Ubicada en el estrecho istmo que une el Peloponeso con la Grecia continental, Corinto era la próspera capital de la provincia romana de Acaya. Con dos puertos estratégicos (Lequeo en el golfo de Corinto y Cencrea en el golfo Sarónico), era un epicentro comercial, cultural y cosmopolita donde confluían griegos, romanos, judíos y mercaderes de todo el imperio. La ciudad era famosa por su riqueza, los Juegos Ístmicos y un ambiente marcado por el pluralismo religioso y profundas tentaciones morales."
    },
    lettersContext: [
        {
            book: "1ª de Corintios",
            year: "Aproximadamente 54 - 55 d.C.",
            place: "Escrita desde Éfeso (Asia Menor)",
            background: "Durante su tercer viaje misionero, mientras residía en Éfeso (donde ministró durante casi tres años), Pablo recibió noticias alarmantes de los sirvientes de Cloé sobre divisiones, pleitos y desórdenes éticos en la iglesia de Corinto (que él mismo había fundado entre los años 50-52 d.C., Hechos 18). Además, la congregación le envió una carta con preguntas doctrinales y prácticas. Pablo redacta 1ª de Corintios para restaurar la unidad en la sabiduría de la Cruz, responder sobre el matrimonio, la carne sacrificada a ídolos, el orden en la Santa Cena, los dones del Espíritu y defender la gloriosa verdad de la Resurrección."
        },
        {
            book: "2ª de Corintios",
            year: "Aproximadamente 55 - 56 d.C.",
            place: "Escrita desde Macedonia (Filipos o Tesalónica)",
            background: "Tras una dolorosa crisis de relaciones y haber tenido que enviar una 'carta severa' con lágrimas, Pablo salió de Éfeso y se dirigió a Macedonia. Allí se encontró con su colaborador Tito, quien le trajo la reconfortante noticia de que la mayoría de los corintios se habían arrepentido y reafirmado su amor hacia el apóstol. Desde Macedonia, Pablo escribe 2ª de Corintios: la carta más íntima, emocional y vulnerable de todas sus epístolas, donde abre su corazón sobre las tribulaciones ministeriales, expone el consuelo de Dios, el ministerio de la reconciliación, la gracia de la generosidad y cómo el poder divino se perfecciona en la debilidad humana ('Bástate mi gracia')."
        }
    ],
    timeline: [
        { period: "c. 50 - 52 d.C.", event: "Pablo funda la iglesia en Corinto durante su 2º viaje misionero y permanece allí 18 meses junto a Aquila y Priscila (Hechos 18)." },
        { period: "c. 52 - 55 d.C.", event: "Pablo establece su base en Éfeso durante su 3er viaje misionero." },
        { period: "c. 54 - 55 d.C.", event: "Redacción de 1ª de Corintios desde Éfeso tras recibir informes de Cloé y la carta de los corintios." },
        { period: "c. 55 d.C.", event: "Visita dolorosa de Pablo a Corinto y envío de Tito con una carta de lágrimas." },
        { period: "c. 55 - 56 d.C.", event: "Encuentro con Tito en Macedonia y redacción de 2ª de Corintios." },
        { period: "c. 56 - 57 d.C.", event: "Tercera visita de Pablo a Corinto (permanece 3 meses, desde donde escribe la Epístola a los Romanos)." }
    ]
};

// 1 Corintios (16 capítulos) y 2 Corintios (13 capítulos) = 29 capítulos completos con texto íntegro
const ALL_CHAPTERS = [
    // 1 CORINTIOS - CAPÍTULO 1 (31 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 1,
        title: "Llamamiento, divisiones y la sabiduría de la Cruz",
        context: "Pablo saluda a la iglesia en Corinto recordándoles su santificación en Cristo. Confronta las divisiones y el sectarismo (partidos de Pablo, Apolos, Cefas), y contrapone la sabiduría vana del mundo con el poder de la Cruz, donde Dios escogió lo humilde para glorificarse.",
        verses: [
            { num: 1, text: "Pablo, llamado a ser apóstol de Jesucristo por la voluntad de Dios, y el hermano Sóstenes," },
            { num: 2, text: "a la iglesia de Dios que está en Corinto, a los santificados en Cristo Jesús, llamados a ser santos con todos los que en cualquier lugar invocan el nombre de nuestro Señor Jesucristo, Señor de ellos y nuestro:" },
            { num: 3, text: "Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo." },
            { num: 4, text: "Gracias doy a mi Dios siempre por vosotros, por la gracia de Dios que os fue dada en Cristo Jesús;" },
            { num: 5, text: "porque en todas las cosas fuisteis enriquecidos en él, en toda palabra y en toda ciencia;" },
            { num: 6, text: "así como el testimonio acerca de Cristo ha sido confirmado en vosotros," },
            { num: 7, text: "de tal manera que nada os falta en ningún don, esperando la manifestación de nuestro Señor Jesucristo;" },
            { num: 8, text: "el cual también os confirmará hasta el fin, para que seáis irreprensibles en el día de nuestro Señor Jesucristo." },
            { num: 9, text: "Fiel es Dios, por el cual fuisteis llamados a la comunión con su Hijo Jesucristo nuestro Señor." },
            { num: 10, text: "Os ruego, pues, hermanos, por el nombre de nuestro Señor Jesucristo, que habléis todos una misma cosa, y que no haya entre vosotros divisiones, sino que estéis perfectamente unidos en una misma mente y en un mismo parecer." },
            { num: 11, text: "Porque he sido informado acerca de vosotros, hermanos míos, por los de Cloé, que hay entre vosotros contiendas." },
            { num: 12, text: "Quiero decir, que cada uno de vosotros dice: Yo soy de Pablo; y yo de Apolos; y yo de Cefas; y yo de Cristo." },
            { num: 13, text: "¿Acaso está dividido Cristo? ¿Fue crucificado Pablo por vosotros? ¿O fuisteis bautizados en el nombre de Pablo?" },
            { num: 14, text: "Doy gracias a Dios de que a ninguno de vosotros he bautizado, sino a Crispo y a Gayo," },
            { num: 15, text: "para que ninguno diga que fuisteis bautizados en mi nombre." },
            { num: 16, text: "También bauticé a la familia de Estéfanas; de los demás, no sé si he bautizado a algún otro." },
            { num: 17, text: "Pues no me envió Cristo a bautizar, sino a predicar el evangelio; no con sabiduría de palabras, para que no se haga vana la cruz de Cristo." },
            { num: 18, text: "Porque la palabra de la cruz es locura a los que se pierden; pero a los que se salvan, esto es, a nosotros, es poder de Dios." },
            { num: 19, text: "Pues está escrito: Destruiré la sabiduría de los sabios, y desecharé el entendimiento de los entendidos." },
            { num: 20, text: "¿Dónde está el sabio? ¿Dónde está el escriba? ¿Dónde está el disputador de este siglo? ¿No ha enloquecido Dios la sabiduría del mundo?" },
            { num: 21, text: "Pues ya que en la sabiduría de Dios, el mundo no conoció a Dios mediante la sabiduría, agradó a Dios salvar a los creyentes por la locura de la predicación." },
            { num: 22, text: "Porque los judíos piden señales, y los griegos buscan sabiduría;" },
            { num: 23, text: "pero nosotros predicamos a Cristo crucificado, para los judíos ciertamente tropezadero, y para los gentiles locura;" },
            { num: 24, text: "mas para los llamados, así judíos como griegos, Cristo poder de Dios, y sabiduría de Dios." },
            { num: 25, text: "Porque lo insensato de Dios es más sabio que los hombres, y lo débil de Dios es más fuerte que los hombres." },
            { num: 26, text: "Pues mirad, hermanos, vuestra vocación, que no sois muchos sabios según la carne, ni muchos poderosos, ni muchos nobles;" },
            { num: 27, text: "sino que lo necio del mundo escogió Dios, para avergonzar a los sabios; y lo débil del mundo escogió Dios, para avergonzar a lo fuerte;" },
            { num: 28, text: "y lo vil del mundo y lo menospreciado escogió Dios, y lo que no es, para deshacer lo que es," },
            { num: 29, text: "a fin de que nadie se jacte en su presencia." },
            { num: 30, text: "Mas por él estáis vosotros en Cristo Jesús, el cual nos ha sido hecho por Dios sabiduría, justificación, santificación y redención;" },
            { num: 31, text: "para que, como está escrito: El que se gloría, gloríese en el Señor." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 2 (16 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 2,
        title: "La proclamación del Evangelio y la mente de Cristo",
        context: "Pablo explica que su ministerio en Corinto no se basó en palabras persuasivas de humana sabiduría, sino en el poder del Espíritu. Enseña sobre la revelación espiritual que Dios concede a quienes le aman.",
        verses: [
            { num: 1, text: "Así que, hermanos, cuando fui a vosotros para anunciaros el testimonio de Dios, no fui con excelencia de palabras o de sabiduría." },
            { num: 2, text: "Pues me propuse no saber entre vosotros cosa alguna sino a Jesucristo, y a éste crucificado." },
            { num: 3, text: "Y estuve entre vosotros con debilidad, y mucho temor y temblor;" },
            { num: 4, text: "y ni mi palabra ni mi predicación fue con palabras persuasivas de humana sabiduría, sino con demostración del Espíritu y de poder," },
            { num: 5, text: "para que vuestra fe no esté fundada en la sabiduría de los hombres, sino en el poder de Dios." },
            { num: 6, text: "Sin embargo, hablamos sabiduría entre los que han alcanzado madurez; y sabiduría, no de este siglo, ni de los príncipes de este siglo, que perecen." },
            { num: 7, text: "Mas hablamos sabiduría de Dios en misterio, la sabiduría oculta, la cual Dios predestinó antes de los siglos para nuestra gloria," },
            { num: 8, text: "la que ninguno de los príncipes de este siglo conoció; porque si la hubieran conocido, nunca habrían crucificado al Señor de gloria." },
            { num: 9, text: "Antes bien, como está escrito: Cosas que ojo no vio, ni oído oyó, ni han subido en corazón de hombre, son las que Dios ha preparado para los que le aman." },
            { num: 10, text: "Pero Dios nos las reveló a nosotros por el Espíritu; porque el Espíritu todo lo escudriña, aun lo profundo de Dios." },
            { num: 11, text: "Porque ¿quién de los hombres sabe las cosas del hombre, sino el espíritu del hombre que está en él? Así tampoco nadie conoció las cosas de Dios, sino el Espíritu de Dios." },
            { num: 12, text: "Y nosotros no hemos recibido el espíritu del mundo, sino el Espíritu que proviene de Dios, para que sepamos lo que Dios nos ha concedido," },
            { num: 13, text: "lo cual también hablamos, no con palabras enseñadas por sabiduría humana, sino con las que enseña el Espíritu, acomodando lo espiritual a lo espiritual." },
            { num: 14, text: "Pero el hombre natural no percibe las cosas que son del Espíritu de Dios, porque para él son locura, y no las puede entender, porque se han de discernir espiritualmente." },
            { num: 15, text: "En cambio el espiritual juzga todas las cosas; pero él no es juzgado de nadie." },
            { num: 16, text: "Porque ¿quién conoció la mente del Señor? ¿Quién le instruirá? Mas nosotros tenemos la mente de Cristo." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 3 (23 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 3,
        title: "Colaboradores de Dios y el templo del Espíritu",
        context: "Pablo califica las divisiones como inmadurez carnal. Los ministros son sembradores, pero Dios da el crecimiento. Jesucristo es el único fundamento y la iglesia es templo santo de Dios.",
        verses: [
            { num: 1, text: "De manera que yo, hermanos, no pude hablaros como a espirituales, sino como a carnales, como a niños en Cristo." },
            { num: 2, text: "Os di a beber leche, y no vianda; porque aún no erais capaces, ni sois capaces todavía," },
            { num: 3, text: "porque aún sois carnales; pues habiendo entre vosotros celos, contiendas y disensiones, ¿no sois carnales, y andáis como hombres?" },
            { num: 4, text: "Porque diciendo el uno: Yo ciertamente soy de Pablo; y el otro: Yo soy de Apolos, ¿no sois carnales?" },
            { num: 5, text: "¿Qué, pues, es Pablo, y qué es Apolos? Servidores por medio de los cuales habéis creído; y eso según lo que a cada uno concedió el Señor." },
            { num: 6, text: "Yo planté, Apolos regó; pero el crecimiento lo ha dado Dios." },
            { num: 7, text: "Así que ni el que planta es algo, ni el que riega, sino Dios, que da el crecimiento." },
            { num: 8, text: "Y el que planta y el que riega son una misma cosa; aunque cada uno recibirá su recompensa conforme a su labor." },
            { num: 9, text: "Porque nosotros somos colaboradores de Dios, y vosotros sois labranza de Dios, edificio de Dios." },
            { num: 10, text: "Conforme a la gracia de Dios que me ha sido dada, yo como perito arquitecto puse el fundamento, y otro edifica encima; pero cada uno mire cómo sobreedifica." },
            { num: 11, text: "Porque nadie puede poner otro fundamento que el que está puesto, el cual es Jesucristo." },
            { num: 12, text: "Y si sobre este fundamento alguno edificare oro, plata, piedras preciosas, madera, heno, hojarasca," },
            { num: 13, text: "la obra de cada uno se hará manifiesta; porque el día la declarará, pues por el fuego será revelada; y la obra de cada uno cuál sea, el fuego la probará." },
            { num: 14, text: "Si permaneciere la obra de alguno que sobreedificó, recibirá recompensa." },
            { num: 15, text: "Si la obra de alguno se quemare, él sufrirá pérdida, si bien él mismo será salvo, aunque así como por fuego." },
            { num: 16, text: "¿No sabéis que sois templo de Dios, y que el Espíritu de Dios mora en vosotros?" },
            { num: 17, text: "Si alguno destruyere el templo de Dios, Dios le destruirá a él; porque el templo de Dios, el cual sois vosotros, santo es." },
            { num: 18, text: "Nadie se engañe a sí mismo; si alguno entre vosotros se cree sabio en este siglo, hágase ignorante, para que llegue a ser sabio." },
            { num: 19, text: "Porque la sabiduría de este mundo es insensatez para con Dios; pues escrito está: Él prende a los sabios en la astucia de ellos." },
            { num: 20, text: "Y otra vez: El Señor conoce los pensamientos de los sabios, que son vanos." },
            { num: 21, text: "Así que, ninguno se gloríe en los hombres; porque todo es vuestro:" },
            { num: 22, text: "sea Pablo, sea Apolos, sea Cefas, sea el mundo, sea la vida, sea la muerte, sea lo presente, sea lo por venir, todo es vuestro," },
            { num: 23, text: "y vosotros de Cristo, y Cristo de Dios." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 4 (21 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 4,
        title: "Administradores de Dios y el testimonio apostólico",
        context: "Pablo enseña sobre la fidelidad requerida a los administradores de los misterios de Dios, cuyo único juez es el Señor. Contrasta la suficiencia de Corinto con los sufrimientos de los apóstoles.",
        verses: [
            { num: 1, text: "Así, pues, téngannos los hombres por servidores de Cristo, y administradores de los misterios de Dios." },
            { num: 2, text: "Ahora bien, se requiere de los administradores, que cada uno sea hallado fiel." },
            { num: 3, text: "Yo en muy poco tengo el ser juzgado por vosotros, o por tribunal humano; y ni aun yo me juzgo a mí mismo." },
            { num: 4, text: "Porque aunque de nada tengo mala conciencia, no por eso soy justificado; pero el que me juzga es el Señor." },
            { num: 5, text: "Así que, no juzguéis nada antes de tiempo, hasta que venga el Señor, el cual aclarará también lo oculto de las tinieblas, y manifestará las intenciones de los corazones; y entonces cada uno recibirá su alabanza de Dios." },
            { num: 6, text: "Pero esto, hermanos, lo he presentado como ejemplo en mí y en Apolos por amor de vosotros, para que en nosotros aprendáis a no pensar más de lo que está escrito, no sea que por causa de uno, os envanezcáis unos contra otros." },
            { num: 7, text: "Porque ¿quién te distingue? ¿o qué tienes que no hayas recibido? Y si lo recibiste, ¿por qué te jactas como si no hubieras recibido?" },
            { num: 8, text: "Ya estáis saciados, ya estáis ricos, sin nosotros reináis. ¡Y ojalá reinaseis, para que nosotros reinásemos también juntamente con vosotros!" },
            { num: 9, text: "Porque según pienso, Dios nos ha exhibido a nosotros los apóstoles como postreros, como a sentenciados a muerte; pues hemos llegado a ser espectáculo al mundo, a los ángeles y a los hombres." },
            { num: 10, text: "Nosotros insensatos por amor de Cristo, mas vosotros prudentes en Cristo; nosotros débiles, mas vosotros fuertes; vosotros honorables, mas nosotros despreciados." },
            { num: 11, text: "Hasta esta hora nos batimos con el hambre, la sed, la desnudez, somos abofeteados, y no tenemos morada fija." },
            { num: 12, text: "Nos fatigamos trabajando con nuestras propias manos; nos maldicen, y bendecimos; padecemos persecución, y la soportamos." },
            { num: 13, text: "Nos difaman, y rogamos; hemos venido a ser hasta ahora como la escoria del mundo, el desecho de todos." },
            { num: 14, text: "No escribo esto para avergonzaros, sino para amonestaros como a hijos míos amados." },
            { num: 15, text: "Porque aunque tengáis diez mil ayos en Cristo, no tendréis muchos padres; pues en Cristo Jesús yo os engendré por medio del evangelio." },
            { num: 16, text: "Por tanto, os ruego que me imitéis." },
            { num: 17, text: "Por esto mismo os he enviado a Timoteo, que es mi hijo amado y fiel en el Señor, el cual os recordará mi proceder en Cristo, de la manera que enseño en todas partes y en todas las iglesias." },
            { num: 18, text: "Mas algunos están envanecidos, como si yo nunca hubiese de ir a vosotros." },
            { num: 19, text: "Pero iré pronto a vosotros, si el Señor quiere, y conoceré, no las palabras de los que andan envanecidos, sino el poder." },
            { num: 20, text: "Porque el reino de Dios no consiste en palabras, sino en poder." },
            { num: 21, text: "¿Qué queréis? ¿Iré a vosotros con vara, o con amor y espíritu de mansedumbre?" }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 5 (13 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 5,
        title: "La disciplina en la iglesia y la pureza comunitaria",
        context: "Pablo confronta la tolerancia de la iglesia hacia el pecado inmoral y exhorta a limpiar la vieja levadura para ser una masa nueva y santa en Cristo.",
        verses: [
            { num: 1, text: "De cierto se oye que hay entre vosotros fornicación, y tal fornicación cual ni aun se nombra entre los gentiles; tanto que alguno tiene la mujer de su padre." },
            { num: 2, text: "Y vosotros estáis envanecidos. ¿No debierais más bien lamentarlo, para que fuese quitado de en medio de vosotros el que cometió tal acción?" },
            { num: 3, text: "Ciertamente yo, como ausente en cuerpo, pero presente en espíritu, ya como presente he juzgado al que tal cosa ha hecho." },
            { num: 4, text: "En el nombre de nuestro Señor Jesucristo, reunidos vosotros y mi espíritu, con el poder de nuestro Señor Jesucristo," },
            { num: 5, text: "el tal sea entregado a Satanás para destrucción de la carne, a fin de que el espíritu sea salvo en el día del Señor Jesús." },
            { num: 6, text: "No es buena vuestra jactancia. ¿No sabéis que un poco de levadura leuda toda la masa?" },
            { num: 7, text: "Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros." },
            { num: 8, text: "Así que celebremos la fiesta, no con la vieja levadura, ni con la levadura de malicia y de maldad, sino con panes sin levadura, de sinceridad y de verdad." },
            { num: 9, text: "Os he escrito por carta, que no os juntéis con los fornicarios;" },
            { num: 10, text: "no absolutamente con los fornicarios de este mundo, o con los avaros, o con los ladrones, o con los idólatras; pues en tal caso os sería necesario salir del mundo." },
            { num: 11, text: "Más bien os escribí que no os juntéis con ninguno que, llamándose hermano, fuere fornicario, o avaro, o idólatra, o maldiciente, o borracho, o ladrón; con el tal ni aun comáis." },
            { num: 12, text: "Porque ¿qué razón tendría yo para juzgar a los que están fuera? ¿No juzgáis vosotros a los que están dentro?" },
            { num: 13, text: "Porque a los que están fuera, Dios juzgará. Quitad, pues, a ese perverso de entre vosotros." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 6 (20 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 6,
        title: "Pleitos entre creyentes y el cuerpo santificado",
        context: "Instrucciones sobre solucionar disputas fraternales en la fe sin acudir a tribunales paganos. Pablo enseña que nuestros cuerpos fueron comprados por precio y son morada sagrada del Espíritu.",
        verses: [
            { num: 1, text: "¿Osa alguno de vosotros, cuando tiene algo contra otro, ir a juicio delante de los injustos, y no delante de los santos?" },
            { num: 2, text: "¿O no sabéis que los santos han de juzgar al mundo? Y si el mundo ha de ser juzgado por vosotros, ¿sois indignos de juzgar cosas muy pequeñas?" },
            { num: 3, text: "¿O no sabéis que hemos de juzgar a los ángeles? ¿Cuánto más las cosas de esta vida?" },
            { num: 4, text: "Si, pues, tenéis juicios sobre cosas de esta vida, ¿ponéis para juzgar a los que son de menor estima en la iglesia?" },
            { num: 5, text: "Para avergonzaros lo digo. ¿Pues qué, no hay entre vosotros sabio, ni aun uno, que pueda juzgar entre sus hermanos," },
            { num: 6, text: "sino que el hermano con el hermano pleitea en juicio, y esto delante de los incrédulos?" },
            { num: 7, text: "Así que, ya es de cierto una falta en vosotros que tengáis pleitos entre vosotros mismos. ¿Por qué no sufrís más bien el agravio? ¿Por qué no sufrís más bien el ser defraudados?" },
            { num: 8, text: "Pero vosotros cometéis el agravio, y defraudáis, y esto a los hermanos." },
            { num: 9, text: "¿No sabéis que los injustos no heredarán el reino de Dios? No erréis; ni los fornicarios, ni los idólatras, ni los adúlteros, ni los afeminados, ni los que se echan con varones," },
            { num: 10, text: "ni los ladrones, ni los avaros, ni los borrachos, ni los maldicientes, ni los estafadores, heredarán el reino de Dios." },
            { num: 11, text: "Y esto erais algunos; mas ya habéis sido lavados, ya habéis sido santificados, ya habéis sido justificados en el nombre del Señor Jesús, y por el Espíritu de nuestro Dios." },
            { num: 12, text: "Todas las cosas me son lícitas, mas no todas convienen; todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna." },
            { num: 13, text: "Las viandas para el vientre, y el vientre para las viandas; pero tanto al uno como a las otras destruirá Dios. Pero el cuerpo no es para la fornicación, sino para el Señor, y el Señor para el cuerpo." },
            { num: 14, text: "Y Dios, que levantó al Señor, también a nosotros nos levantará con su poder." },
            { num: 15, text: "¿No sabéis que vuestros cuerpos son miembros de Cristo? ¿Quitaré, pues, los miembros de Cristo y los haré miembros de una ramera? De ningún modo." },
            { num: 16, text: "¿O no sabéis que el que se une con una ramera, es un cuerpo con ella? Porque dice: Los dos serán una sola carne." },
            { num: 17, text: "Pero el que se une al Señor, un espíritu es con él." },
            { num: 18, text: "Huid de la fornicación. Cualquier otro pecado que el hombre cometa, está fuera del cuerpo; mas el que fornica, contra su propio cuerpo peca." },
            { num: 19, text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?" },
            { num: 20, text: "Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 7 (40 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 7,
        title: "Orientaciones sobre el matrimonio, la soltería y la vocación",
        context: "Pablo responde minuciosamente a preguntas sobre la vida matrimonial, la fidelidad conyugal, los matrimonios mixtos, la consagración célibe y el servicio pleno al Señor.",
        verses: [
            { num: 1, text: "En cuanto a las cosas de que me escribisteis, bueno le sería al hombre no tocar mujer;" },
            { num: 2, text: "pero a causa de las fornicaciones, cada uno tenga su propia mujer, y cada una tenga su propio marido." },
            { num: 3, text: "El marido cumpla con la mujer el deber conyugal, y asimismo la mujer con el marido." },
            { num: 4, text: "La mujer no tiene potestad sobre su propio cuerpo, sino el marido; ni tampoco tiene el marido potestad sobre su propio cuerpo, sino la mujer." },
            { num: 5, text: "No os neguéis el uno al otro, a no ser por algún tiempo de mutuo consentimiento, para ocuparos sosegadamente en la oración; y volved a juntaros en uno, para que no os tiente Satanás a causa de vuestra incontinencia." },
            { num: 6, text: "Mas esto digo por vía de concesión, no por mandamiento." },
            { num: 7, text: "Quisiera más bien que todos los hombres fuesen como yo; pero cada uno tiene su propio don de Dios, uno a la verdad de un modo, y otro de otro." },
            { num: 8, text: "Digo, pues, a los solteros y a las viudas, que bueno les fuera quedarse como yo;" },
            { num: 9, text: "pero si no tienen don de continencia, cásense, pues mejor es casarse que estarse quemando." },
            { num: 10, text: "Pero a los que están unidos en matrimonio, mando, no yo, sino el Señor: Que la mujer no se separe del marido;" },
            { num: 11, text: "y si se separa, quédese sin casar, o reconcíliese con su marido; y que el marido no abandone a su mujer." },
            { num: 12, text: "Y a los demás yo digo, no el Señor: Si algún hermano tiene mujer que no sea creyente, y ella consiente en vivir con él, no la abandone." },
            { num: 13, text: "Y si una mujer tiene marido que no sea creyente, y él consiente en vivir con ella, no lo abandone." },
            { num: 14, text: "Porque el marido incrédulo es santificado en la mujer, y la mujer incrédula en el marido; pues de otra manera vuestros hijos serían inmundos, mientras que ahora son santos." },
            { num: 15, text: "Pero si el incrédulo se separa, sepárese; pues no está el hermano o la hermana sujeto a servidumbre en semejante caso, sino que a paz nos llamó Dios." },
            { num: 16, text: "Porque ¿qué sabes tú, oh mujer, si quizá harás salvo a tu marido? ¿O qué sabes tú, oh marido, si quizá harás salva a tu mujer?" },
            { num: 17, text: "Pero cada uno como el Señor le repartió, y como Dios llamó a cada uno, así haga; esto ordeno en todas las iglesias." },
            { num: 18, text: "¿Fue llamado alguno siendo circunciso? Quédese circunciso. ¿Fue llamado alguno siendo incircunciso? No se circuncide." },
            { num: 19, text: "La circuncisión nada es, y la incircuncisión nada es, sino el guardar los mandamientos de Dios." },
            { num: 20, text: "Cada uno en el estado en que fue llamado, en él se quede." },
            { num: 21, text: "¿Fuiste llamado siendo esclavo? No te dé cuidado; pero también, si puedes hacerte libre, procúralo más." },
            { num: 22, text: "Porque el que en el Señor fue llamado siendo esclavo, liberto es del Señor; asimismo el que fue llamado siendo libre, esclavo es de Cristo." },
            { num: 23, text: "Por precio fuisteis comprados; no os hagáis esclavos de los hombres." },
            { num: 24, text: "Cada uno, hermanos, en el estado en que fue llamado, así permanezca para con Dios." },
            { num: 25, text: "En cuanto a las vírgenes no tengo mandamiento del Señor; mas doy mi parecer, como quien ha alcanzado misericordia del Señor para ser fiel." },
            { num: 26, text: "Tengo, pues, esto por bueno a causa de la necesidad que apremia; que hará bien el hombre en quedarse como está." },
            { num: 27, text: "¿Estás ligado a mujer? No procures soltarte. ¿Estás libre de mujer? No procures casarte." },
            { num: 28, text: "Mas también si te casas, no pecas; y si la doncella se casa, no pecas; pero los tales tendrán aflicción de la carne, y yo os la quisiera evitar." },
            { num: 29, text: "Pero esto digo, hermanos: que el tiempo es corto; resta, pues, que los que tienen esposa sean como si no la tuviesen;" },
            { num: 30, text: "y los que lloran, como si no llorasen; y los que se alegran, como si no se alegrasen; y los que compran, como si no poseyesen;" },
            { num: 31, text: "y los que disfrutan de este mundo, como si no lo disfrutasen; porque la apariencia de este mundo se pasa." },
            { num: 32, text: "Quisiera, pues, que estuvieseis sin congoja. El soltero tiene cuidado de las cosas del Señor, de cómo agradar al Señor;" },
            { num: 33, text: "pero el casado tiene cuidado de las cosas del mundo, de cómo agradar a su mujer." },
            { num: 34, text: "Hay asimismo diferencia entre la casada y la doncella. La doncella tiene cuidado de las cosas del Señor, para ser santa así en cuerpo como en espíritu; pero la casada tiene cuidado de las cosas del mundo, de cómo agradar a su marido." },
            { num: 35, text: "Esto digo para vuestro provecho; no para tenderos lazo, sino para lo honesto y decente, y para que sin impedimento os acerquéis al Señor." },
            { num: 36, text: "Pero si alguno piensa que es impropio para su hija doncella que pase ya de la edad, y es necesario que así sea, haga lo que quiera, no peca; que se case." },
            { num: 37, text: "Pero el que está firme en su corazón, sin tener necesidad, sino que es dueño de su propia voluntad, y ha resuelto en su corazón guardar a su hija doncella, bien hace." },
            { num: 38, text: "De manera que el que la da en casamiento hace bien, y el que no la da en casamiento hace mejor." },
            { num: 39, text: "La mujer casada está ligada por la ley mientras su marido vive; pero si su marido muriere, libre es para casarse con quien quiera, con tal que sea en el Señor." },
            { num: 40, text: "Pero a mi juicio, más dichosa será si se quedare así; y pienso que también yo tengo el Espíritu de Dios." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 8 (13 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 8,
        title: "El conocimiento y el amor que edifica",
        context: "Pablo analiza los alimentos ofrecidos a ídolos paganos. El conocimiento teológico sin amor envanece; la libertad cristiana debe subordinarse al cuidado de la conciencia del hermano débil.",
        verses: [
            { num: 1, text: "En cuanto a lo sacrificado a los ídolos, sabemos que todos tenemos conocimiento. El conocimiento envanece, pero el amor edifica." },
            { num: 2, text: "Y si alguno se imagina que sabe algo, aún no sabe nada como debe saberlo." },
            { num: 3, text: "Pero si alguno ama a Dios, es conocido por él." },
            { num: 4, text: "Acerca, pues, de las viandas que se sacrifican a los ídolos, sabemos que un ídolo nada es en el mundo, y que no hay más que un Dios." },
            { num: 5, text: "Pues aunque haya algunos que se llamen dioses, sea en el cielo, o en la tierra (como hay muchos dioses y muchos señores)," },
            { num: 6, text: "para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él." },
            { num: 7, text: "Pero no en todos hay este conocimiento; porque algunos, habituados hasta aquí a los ídolos, comen como sacrificado a ídolos, y su conciencia, siendo débil, se contamina." },
            { num: 8, text: "Si bien la vianda no nos hace más aceptos ante Dios; pues ni porque comamos, seremos más, ni porque no comamos, seremos menos." },
            { num: 9, text: "Pero mirad que esta libertad vuestra no venga a ser tropezadero para los débiles." },
            { num: 10, text: "Porque si alguno te ve a ti, que tienes conocimiento, sentado a la mesa en un lugar de ídolos, la conciencia de aquel que es débil, ¿no será estimulada a comer de lo sacrificado a los ídolos?" },
            { num: 11, text: "Y por el conocimiento tuyo, se perderá el hermano débil por quien Cristo murió." },
            { num: 12, text: "De esta manera, pues, pecando contra los hermanos e hiriendo su débil conciencia, contra Cristo pecáis." },
            { num: 13, text: "Por lo cual, si la comida le es a mi hermano ocasión de caer, no comeré carne jamás, para no poner tropiezo a mi hermano." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 9 (27 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 9,
        title: "La renuncia apostólica y la carrera de la fe",
        context: "Pablo defiende su autoridad apostólica y explica cómo renuncia voluntariamente a sus derechos legítimos para no poner obstáculos al Evangelio, corriendo la carrera de la fe con disciplina.",
        verses: [
            { num: 1, text: "¿No soy apóstol? ¿No soy libre? ¿No he visto a Jesús el Señor nuestro? ¿No sois vosotros mi obra en el Señor?" },
            { num: 2, text: "Si para otros no soy apóstol, para vosotros ciertamente lo soy; porque el sello de mi apostolado sois vosotros en el Señor." },
            { num: 3, text: "Contra los que me acusan, esta es mi defensa:" },
            { num: 4, text: "¿Acaso no tenemos derecho de comer y beber?" },
            { num: 5, text: "¿No tenemos derecho de traer con nosotros una hermana por esposa como también los otros apóstoles, y los hermanos del Señor, y Cefas?" },
            { num: 6, text: "¿O sólo yo y Bernabé no tenemos derecho de no trabajar?" },
            { num: 7, text: "¿Quién fue jamás soldado a sus propias expensas? ¿Quién planta viña y no come de su fruto? ¿O quién apacienta el rebaño y no toma de la leche del rebaño?" },
            { num: 8, text: "¿Digo esto sólo por criterio humano? ¿No dice esto también la ley?" },
            { num: 9, text: "Porque en la ley de Moisés está escrito: No pondrás bozal al buey que trilla. ¿Tiene Dios cuidado de los bueyes," },
            { num: 10, text: "o lo dice enteramente por nosotros? Pues por nosotros se escribió; porque con esperanza debe arar el que ara, y el que trilla, con esperanza de recibir del fruto." },
            { num: 11, text: "Si nosotros sembramos entre vosotros lo espiritual, ¿es gran cosa si segáremos de vosotros lo material?" },
            { num: 12, text: "Si otros participan de este derecho sobre vosotros, ¿cuánto más nosotros? Pero no hemos usado de este derecho, sino que lo soportamos todo, por no poner ningún obstáculo al evangelio de Cristo." },
            { num: 13, text: "¿No sabéis que los que trabajan en las cosas sagradas, comen del templo, y que los que sirven al altar, del altar participan?" },
            { num: 14, text: "Así también ordenó el Señor a los que anuncian el evangelio, que vivan del evangelio." },
            { num: 15, text: "Pero yo de nada de esto me he aprovechado, ni tampoco he escrito esto para que se haga así conmigo; porque prefiero morir, antes que nadie desvanezca esta mi gloria." },
            { num: 16, text: "Pues si anuncio el evangelio, no tengo por qué gloriarme; porque me es impuesta necesidad; y ¡ay de mí si no anunciare el evangelio!" },
            { num: 17, text: "Por lo cual, si lo hago de buena voluntad, recompensa tendré; pero si de mala voluntad, la comisión me ha sido encomendada." },
            { num: 18, text: "¿Cuál, pues, es mi recompensa? Que predicando el evangelio, presente gratuitamente el evangelio de Cristo, para no abusar de mi derecho en el evangelio." },
            { num: 19, text: "Por lo cual, siendo libre de todos, me he hecho siervo de todos para ganar a mayor número." },
            { num: 20, text: "Me he hecho a los judíos como judío, para ganar a los judíos; a los que están sujetos a la ley (aunque yo no esté sujeto a la ley) como sujeto a la ley, para ganar a los que están sujetos a la ley;" },
            { num: 21, text: "a los que están sin ley, como si yo estuviera sin ley (no estando yo sin ley de Dios, sino bajo la ley de Cristo), para ganar a los que están sin ley." },
            { num: 22, text: "Me he hecho débil a los débiles, para ganar a los débiles; a todos me he hecho de todo, para que de todos modos salve a algunos." },
            { num: 23, text: "Y esto hago por causa del evangelio, para hacerme copartícipe de él." },
            { num: 24, text: "¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis." },
            { num: 25, text: "Todo aquel que lucha, de todo se abstiene; ellos, a la verdad, para recibir una corona corruptible, pero nosotros, una incorruptible." },
            { num: 26, text: "Así que, yo de esta manera corro, no como a la ventura; de esta manera peleo, no como quien golpea el aire," },
            { num: 27, text: "sino que golpeo mi cuerpo, y lo pongo en servidumbre, no sea que habiendo sido heraldo para otros, yo mismo venga a ser eliminado." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 10 (33 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 10,
        title: "Advertencias de Israel y la gloria de Dios en todo",
        context: "Pablo utiliza el peregrinaje de Israel en el desierto para advertir contra la complacencia espiritual y la idolatría. Dios provee escape en la tentación y nos llama a glorificarle en cada acción.",
        verses: [
            { num: 1, text: "Porque no quiero, hermanos, que ignoréis que nuestros padres todos estuvieron bajo la nube, y todos pasaron el mar;" },
            { num: 2, text: "y todos en Moisés fueron bautizados en la nube y en el mar," },
            { num: 3, text: "y todos comieron el mismo alimento espiritual," },
            { num: 4, text: "y todos bebieron la misma bebida espiritual; porque bebían de la roca espiritual que los seguía, y la roca era Cristo." },
            { num: 5, text: "Pero de los más de ellos no se agradó Dios; por lo cual quedaron postrados en el desierto." },
            { num: 6, text: "Mas estas cosas sucedieron como ejemplos para nosotros, para que no codiciemos cosas malas, como ellos codiciaron." },
            { num: 7, text: "Ni seáis idólatras, como algunos de ellos, según está escrito: Se sentó el pueblo a comer y a beber, y se levantó a jugar." },
            { num: 8, text: "Ni forniquemos, como algunos de ellos fornicaron, y cayeron en un día veintitrés mil." },
            { num: 9, text: "Ni tentemos al Señor, como también algunos de ellos le tentaron, y perecieron por las serpientes." },
            { num: 10, text: "Ni murmuréis, como algunos de ellos murmuraron, y perecieron por el destructor." },
            { num: 11, text: "Y estas cosas les acontecieron como ejemplo, y están escritas para amonestarnos a nosotros, a quienes han alcanzado los fines de los siglos." },
            { num: 12, text: "Así que, el que piensa estar firme, mire que no caiga." },
            { num: 13, text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
            { num: 14, text: "Por tanto, amados míos, huid de la idolatría." },
            { num: 15, text: "Como a sensatos os hablo; juzgad vosotros lo que digo." },
            { num: 16, text: "La copa de bendición que bendecimos, ¿no es la comunión de la sangre de Cristo? El pan que partimos, ¿no es la comunión del cuerpo de Cristo?" },
            { num: 17, text: "Siendo uno solo el pan, nosotros, con ser muchos, somos un cuerpo; pues todos participamos de aquel mismo pan." },
            { num: 18, text: "Mirad a Israel según la carne; los que comen de los sacrificios, ¿no son partícipes del altar?" },
            { num: 19, text: "¿Qué digo, pues? ¿Que el ídolo es algo, o que sea algo lo que se sacrifica a los ídolos?" },
            { num: 20, text: "Antes digo que lo que los gentiles sacrifican, a los demonios lo sacrifican, y no a Dios; y no quiero que vosotros os hagáis partícipes con los demonios." },
            { num: 21, text: "No podéis beber la copa del Señor, y la copa de los demonios; no podéis participar de la mesa del Señor, y de la mesa de los demonios." },
            { num: 22, text: "¿O provocaremos a celos al Señor? ¿Somos más fuertes que él?" },
            { num: 23, text: "Todo me es lícito, pero no todo conviene; todo me es lícito, pero no todo edifica." },
            { num: 24, text: "Ninguno busque su propio bien, sino el del otro." },
            { num: 25, text: "De todo lo que se vende en la carnicería, comed, sin preguntar nada por motivos de conciencia;" },
            { num: 26, text: "porque del Señor es la tierra y su plenitud." },
            { num: 27, text: "Si algún incrédulo os invita, y queréis ir, de todo lo que se os ponga delante comed, sin preguntar nada por motivos de conciencia." },
            { num: 28, text: "Mas si alguien os dijere: Esto fue sacrificado a los ídolos; no lo comáis, por causa de aquel que lo declaró, y por motivos de conciencia; porque del Señor es la tierra y su plenitud." },
            { num: 29, text: "La conciencia, digo, no la tuya, sino la del otro. Pues ¿por qué se ha de juzgar mi libertad por la conciencia de otro?" },
            { num: 30, text: "Y si yo con agradecimiento participo, ¿por qué he de ser censurado por aquello de que doy gracias?" },
            { num: 31, text: "Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios." },
            { num: 32, text: "No seáis tropiezo ni a judíos, ni a gentiles, ni a la iglesia de Dios;" },
            { num: 33, text: "como también yo en todas las cosas agrado a todos, no buscando mi propio provecho, sino el de muchos, para que sean salvos." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 11 (34 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 11,
        title: "El orden en el culto y la institución de la Santa Cena",
        context: "Instrucciones sobre la dignidad en las asambleas de oración y el relato canónico fundacional de la Santa Cena del Señor, exhortando a una profunda introspección antes de participar.",
        verses: [
            { num: 1, text: "Sed imitadores de mí, así como yo de Cristo." },
            { num: 2, text: "Os alabo, hermanos, porque en todo os acordáis de mí, y retenéis las instrucciones tal como os las entregué." },
            { num: 3, text: "Pero quiero que sepáis que Cristo es la cabeza de todo varón, y el varón es la cabeza de la mujer, y Dios la cabeza de Cristo." },
            { num: 4, text: "Todo varón que ora o profetiza con la cabeza cubierta, afrenta su cabeza." },
            { num: 5, text: "Pero toda mujer que ora o profetiza con la cabeza descubierta, afrenta su cabeza; porque lo mismo es que si se hubiese rapado." },
            { num: 6, text: "Porque si la mujer no se cubre, que se corte también el cabello; y si le es vergonzoso a la mujer cortarse el cabello o raparse, que se cubra." },
            { num: 7, text: "Porque el varón no debe cubrirse la cabeza, pues él es imagen y gloria de Dios; pero la mujer es gloria del varón." },
            { num: 8, text: "Porque el varón no procede de la mujer, sino la mujer del varón," },
            { num: 9, text: "y tampoco el varón fue creado por causa de la mujer, sino la mujer por causa del varón." },
            { num: 10, text: "Por lo cual la mujer debe tener señal de autoridad sobre su cabeza, por causa de los ángeles." },
            { num: 11, text: "Pero en el Señor, ni el varón es sin la mujer, ni la mujer sin el varón;" },
            { num: 12, text: "porque así como la mujer procede del varón, también el varón nace de la mujer; pero todo procede de Dios." },
            { num: 13, text: "Juzgad vosotros mismos: ¿Es propio que la mujer ore a Dios sin cubrirse la cabeza?" },
            { num: 14, text: "La naturaleza misma ¿no os enseña que al varón le es deshonroso dejarse crecer el cabello?" },
            { num: 15, text: "Por el contrario, a la mujer dejar crecer el cabello le es honroso; porque en lugar de velo le es dado el cabello." },
            { num: 16, text: "Con todo eso, si alguno quiere ser contencioso, nosotros no tenemos tal costumbre, ni las iglesias de Dios." },
            { num: 17, text: "Pero al anunciaros esto que sigue, no os alabo; porque no os congregáis para lo mejor, sino para lo peor." },
            { num: 18, text: "Pues en primer lugar, cuando os reunís como iglesia, oigo que hay entre vosotros divisiones; y en parte lo creo." },
            { num: 19, text: "Porque es preciso que entre vosotros haya disensiones, para que se hagan manifiestos entre vosotros los que son aprobados." },
            { num: 20, text: "Cuando, pues, os reunís vosotros, esto no es comer la cena del Señor." },
            { num: 21, text: "Porque al comer, cada uno se adelanta a tomar su propia cena; y uno tiene hambre, y otro se embriaga." },
            { num: 22, text: "Pues qué, ¿no tenéis casas en que comáis y bebáis? ¿O menospreciáis la iglesia de Dios, y avergonzáis a los que no tienen nada? ¿Qué os diré? ¿Os alabaré? En esto no os alabo." },
            { num: 23, text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;" },
            { num: 24, text: "y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí." },
            { num: 25, text: "Asimismo tomó también la copa, después de haber cenado, diciendo: Esta copa es el nuevo pacto en mi sangre; haced esto todas las veces que la bebiereis, en memoria de mí." },
            { num: 26, text: "Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor proclamáis hasta que él venga." },
            { num: 27, text: "De manera que cualquiera que comiere este pan o bebiere esta copa del Señor indignamente, será culpado del cuerpo y de la sangre del Señor." },
            { num: 28, text: "Por tanto, pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa." },
            { num: 29, text: "Porque el que come y bebe indignamente, sin discernir el cuerpo del Señor, juicio come y bebe para sí." },
            { num: 30, text: "Por lo cual hay muchos enfermos y debilitados entre vosotros, y muchos duermen." },
            { num: 31, text: "Si, pues, nos examinásemos a nosotros mismos, no seríamos juzgados;" },
            { num: 32, text: "mas siendo juzgados, somos castigados por el Señor, para que no seamos condenados con el mundo." },
            { num: 33, text: "Así que, hermanos míos, cuando os reunís a comer, esperaos unos a otros." },
            { num: 34, text: "Si alguno tuviere hambre, coma en su casa, para que no os reunáis para juicio. Las demás cosas las pondré en orden cuando yo fuere." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 12 (31 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 12,
        title: "Los dones del Espíritu y la unidad de un solo cuerpo",
        context: "Exposición magisterial sobre la diversidad de dones carismáticos otorgados por un único Espíritu. Pablo compara a los creyentes con los miembros de un cuerpo humano, indispensables y unidos en armonía.",
        verses: [
            { num: 1, text: "No quiero, hermanos, que ignoréis acerca de los dones espirituales." },
            { num: 2, text: "Sabéis que cuando erais gentiles, se os extraviaba llevándoos, como se os llevaba, a los ídolos mudos." },
            { num: 3, text: "Por tanto, os hago saber que nadie que hable por el Espíritu de Dios llama anatema a Jesús; y nadie puede llamar a Jesús Señor, sino por el Espíritu Santo." },
            { num: 4, text: "Ahora bien, hay diversidad de dones, pero el Espíritu es el mismo." },
            { num: 5, text: "Y hay diversidad de ministerios, pero el Señor es el mismo." },
            { num: 6, text: "Y hay diversidad de operaciones, pero Dios, que hace todas las cosas en todos, es el mismo." },
            { num: 7, text: "Pero a cada uno le es dada la manifestación del Espíritu para provecho." },
            { num: 8, text: "Porque a éste es dada por el Espíritu palabra de sabiduría; a otro, palabra de ciencia según el mismo Espíritu;" },
            { num: 9, text: "a otro, fe por el mismo Espíritu; y a otro, dones de sanidades por el mismo Espíritu." },
            { num: 10, text: "A otro, el hacer milagros; a otro, profecía; a otro, discernimiento de espíritus; a otro, diversos géneros de lenguas; y a otro, interpretación de lenguas." },
            { num: 11, text: "Pero todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular como él quiere." },
            { num: 12, text: "Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también Cristo." },
            { num: 13, text: "Porque por un solo Espíritu fuimos todos bautizados en un cuerpo, sean judíos o griegos, sean esclavos o libres; y a todos se nos dio a beber de un mismo Espíritu." },
            { num: 14, text: "Además, el cuerpo no es un solo miembro, sino muchos." },
            { num: 15, text: "Si dijere el pie: Porque no soy mano, no soy del cuerpo, ¿por eso no será del cuerpo?" },
            { num: 16, text: "Y si dijere la oreja: Porque no soy ojo, no soy del cuerpo, ¿por eso no será del cuerpo?" },
            { num: 17, text: "Si todo el cuerpo fuese ojo, ¿dónde estaría el oído? Si todo fuese oído, ¿dónde estaría el olfato?" },
            { num: 18, text: "Mas ahora Dios ha colocado los miembros cada uno de ellos en el cuerpo, como él quiso." },
            { num: 19, text: "Porque si todos fueran un solo miembro, ¿dónde estaría el cuerpo?" },
            { num: 20, text: "Pero ahora son muchos los miembros, pero el cuerpo es uno solo." },
            { num: 21, text: "Ni el ojo puede decir a la mano: No te necesito, ni tampoco la cabeza a los pies: No tengo necesidad de vosotros." },
            { num: 22, text: "Antes bien los miembros del cuerpo que parecen más débiles, son los más necesarios;" },
            { num: 23, text: "y a aquellos del cuerpo que nos parecen menos dignos, a éstos vestimos más dignamente; y los que en nosotros son menos decorosos, se tratan con más decoro." },
            { num: 24, text: "Porque los que en nosotros son más decorosos, no tienen necesidad; pero Dios ordenó el cuerpo, dando más abundante honor al que le faltaba," },
            { num: 25, text: "para que no haya desavenencia en el cuerpo, sino que los miembros todos se preocupen los unos por los otros." },
            { num: 26, text: "De manera que si un miembro padece, todos los miembros se duelen con él, y si un miembro recibe honra, todos los miembros con él se gozan." },
            { num: 27, text: "Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular." },
            { num: 28, text: "Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros, luego los que hacen milagros, después los que sanan, los que ayudan, los que administran, los que tienen don de lenguas." },
            { num: 29, text: "¿Son todos apóstoles? ¿son todos profetas? ¿todos maestros? ¿hacen todos milagros?" },
            { num: 30, text: "¿Tienen todos dones de sanidad? ¿hablan todos lenguas? ¿interpretan todos?" },
            { num: 31, text: "Procurad, pues, los dones mejores. Mas yo os muestro un camino aun más excelente." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 13 (13 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 13,
        title: "El himno al amor: el camino más excelente",
        context: "La cumbre lírica y teológica del amor ágape. Sin amor, los mayores dones carismáticos y sacrificios son estériles. El amor es paciente, servicial, incorruptible y eterno.",
        verses: [
            { num: 1, text: "Si yo hablase lenguas humanas y angélicas, y no tengo amor, vengo a ser como metal que resuena, o címbalo que retiñe." },
            { num: 2, text: "Y si tuviese profecía, y entendiese todos los misterios y toda ciencia, y si tuviese toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy." },
            { num: 3, text: "Y si repartiese todos mis bienes para dar de comer a los pobres, y si entregase mi cuerpo para ser quemado, y no tengo amor, de nada me sirve." },
            { num: 4, text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece;" },
            { num: 5, text: "no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor;" },
            { num: 6, text: "no se goza de la injusticia, mas se goza de la verdad." },
            { num: 7, text: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta." },
            { num: 8, text: "El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará." },
            { num: 9, text: "Porque en parte conocemos, y en parte profetizamos;" },
            { num: 10, text: "mas cuando venga lo perfecto, entonces lo que es en parte se acabará." },
            { num: 11, text: "Cuando yo era niño, hablaba como niño, pensaba como niño, juzgaba como niño; mas cuando ya fui hombre, dejé lo que era de niño." },
            { num: 12, text: "Ahora vemos por espejo, oscuramente; mas entonces veremos cara a cara. Ahora conozco en parte; pero entonces conoceré como fui conocido." },
            { num: 13, text: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 14 (40 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 14,
        title: "La profecía, las lenguas y el orden en la asamblea",
        context: "Pablo regula el uso de dones en la adoración pública, priorizando la profecía inteligible que edifica a la congregación, y estableciendo que Dios es Dios de paz y no de desorden.",
        verses: [
            { num: 1, text: "Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis." },
            { num: 2, text: "Porque el que habla en lenguas no habla a los hombres, sino a Dios; pues nadie le entiende, aunque por el Espíritu habla misterios." },
            { num: 3, text: "Pero el que profetiza habla a los hombres para edificación, exhortación y consolación." },
            { num: 4, text: "El que habla en lengua extraña, a sí mismo se edifica; pero el que profetiza, edifica a la iglesia." },
            { num: 5, text: "Así que, quisiera que todos vosotros hablaseis en lenguas, pero más que profetizaseis; porque mayor es el que profetiza que el que habla en lenguas, a no ser que las interprete para que la iglesia reciba edificación." },
            { num: 6, text: "Ahora pues, hermanos, si yo voy a vosotros hablando en lenguas, ¿qué os aprovechará, si no os hablare con revelación, o con ciencia, o con profecía, o con doctrina?" },
            { num: 7, text: "Ciertamente las cosas inanimadas que producen sonidos, como la flauta o la cítara, si no dieren distinción de voces, ¿cómo se sabrá lo que se toca con la flauta o con la cítara?" },
            { num: 8, text: "Y si la trompeta diere sonido incierto, ¿quién se preparará para la batalla?" },
            { num: 9, text: "Así también vosotros, si por la lengua no diereis palabra bien comprensible, ¿cómo se entenderá lo que decís? Porque hablaréis al aire." },
            { num: 10, text: "Tantas clases de idiomas hay seguramente en el mundo, y ninguno de ellos carece de significado." },
            { num: 11, text: "Pero si yo ignoro el valor de las palabras, seré como extranjero para el que habla, y el que habla será como extranjero para mí." },
            { num: 12, text: "Así también vosotros; pues que anheláis dones espirituales, procurad abundar en ellos para edificación de la iglesia." },
            { num: 13, text: "Por lo cual, el que habla en lengua extraña, pida en oración poder interpretarla." },
            { num: 14, text: "Porque si yo oro en lengua desconocida, mi espíritu ora, pero mi entendimiento queda sin fruto." },
            { num: 15, text: "¿Qué, pues? Oraré con el espíritu, pero oraré también con el entendimiento; cantaré con el espíritu, pero cantaré también con el entendimiento." },
            { num: 16, text: "Porque si bendices sólo con el espíritu, el que ocupa lugar de simple oyente, ¿cómo dirá el Amén a tu acción de gracias? pues no sabe lo que has dicho." },
            { num: 17, text: "Porque tú, a la verdad, bien das gracias; pero el otro no es edificado." },
            { num: 18, text: "Doy gracias a Dios que hablo en lenguas más que todos vosotros;" },
            { num: 19, text: "pero en la iglesia prefiero hablar cinco palabras con mi entendimiento, para enseñar también a otros, que diez mil palabras en lengua desconocida." },
            { num: 20, text: "Hermanos, no seáis niños en el modo de pensar, sino sed niños en la malicia, pero maduros en el modo de pensar." },
            { num: 21, text: "En la ley está escrito: En otras lenguas y con otros labios hablaré a este pueblo; y ni aun así me oirán, dice el Señor." },
            { num: 22, text: "Así que, las lenguas son por señal, no a los creyentes, sino a los incrédulos; pero la profecía, no a los incrédulos, sino a los creyentes." },
            { num: 23, text: "Si, pues, toda la iglesia se reúne en un solo lugar, y todos hablan en lenguas, y entran indoctos o incrédulos, ¿no dirán que estáis locos?" },
            { num: 24, text: "Pero si todos profetizan, y entra algún incrédulo o indocto, por todos es convencido, por todos es juzgado;" },
            { num: 25, text: "lo oculto de su corazón se hace manifiesto; y así, postrándose sobre el rostro, adorará a Dios, declarando que verdaderamente Dios está entre vosotros." },
            { num: 26, text: "¿Qué hay, pues, hermanos? Cuando os reunís, cada uno de vosotros tiene salmo, tiene doctrina, tiene lengua, tiene revelación, tiene interpretación. Hágase todo para edificación." },
            { num: 27, text: "Si habla alguno en lengua extraña, sea esto por dos, o a lo más tres, y por turno; y uno interprete." },
            { num: 28, text: "Y si no hay intérprete, calle en la iglesia, y hable para sí mismo y para Dios." },
            { num: 29, text: "Asimismo, los profetas hablen dos o tres, y los demás juzguen." },
            { num: 30, text: "Y si algo le fuere revelado a otro que estuviere sentado, calle el primero." },
            { num: 31, text: "Porque podéis profetizar todos uno por uno, para que todos aprendan, y todos sean exhortados." },
            { num: 32, text: "Y los espíritus de los profetas están sujetos a los profetas;" },
            { num: 33, text: "pues Dios no es Dios de confusión, sino de paz. Como en todas las iglesias de los santos," },
            { num: 34, text: "vuestras mujeres callen en las congregaciones; porque no les es permitido hablar, sino que estén sujetas, como también la ley lo dice." },
            { num: 35, text: "Y si quieren aprender algo, pregunten en casa a sus maridos; porque es indecoroso que una mujer hable en la congregación." },
            { num: 36, text: "¿Acaso ha salido de vosotros la palabra de Dios, o sólo a vosotros ha llegado?" },
            { num: 37, text: "Si alguno se cree profeta, o espiritual, reconozca que lo que os escribo son mandamientos del Señor." },
            { num: 38, text: "Mas el que ignora, ignore." },
            { num: 39, text: "Así que, hermanos, procurad profetizar, y no impidáis el hablar en lenguas;" },
            { num: 40, text: "pero hágase todo decentemente y con orden." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 15 (58 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 15,
        title: "La resurrección de Cristo y la victoria final",
        context: "La proclamación central y triunfal del Evangelio: la resurrección física de Jesús como primicia, la transformación incorruptible de los creyentes y la victoria absoluta sobre la muerte.",
        verses: [
            { num: 1, text: "Además os declaro, hermanos, el evangelio que os he predicado, el cual también recibisteis, en el cual también perseveráis;" },
            { num: 2, text: "por el cual asimismo, si retenéis la palabra que os he predicado, sois salvos, si no creísteis en vano." },
            { num: 3, text: "Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras;" },
            { num: 4, text: "y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras;" },
            { num: 5, text: "y que apareció a Cefas, y después a los doce." },
            { num: 6, text: "Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen." },
            { num: 7, text: "Después apareció a Jacobo; después a todos los apóstoles;" },
            { num: 8, text: "y al último de todos, como a un abortivo, me apareció a mí." },
            { num: 9, text: "Porque yo soy el más pequeño de los apóstoles, que no soy digno de ser llamado apóstol, porque perseguí a la iglesia de Dios." },
            { num: 10, text: "Pero por la gracia de Dios soy lo que soy; y su gracia no ha sido en vano para conmigo, antes he trabajado más que todos ellos; pero no yo, sino la gracia de Dios conmigo." },
            { num: 11, text: "Porque o sea yo o sean ellos, así predicamos, y así habéis creído." },
            { num: 12, text: "Pero si se predica de Cristo que resucitó de los muertos, ¿cómo dicen algunos entre vosotros que no hay resurrección de muertos?" },
            { num: 13, text: "Porque si no hay resurrección de muertos, tampoco Cristo resucitó." },
            { num: 14, text: "Y si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe." },
            { num: 15, text: "Y somos hallados falsos testigos de Dios; porque hemos testificado de Dios que él resucitó a Cristo, al cual no resucitó, si en verdad los muertos no resucitan." },
            { num: 16, text: "Porque si los muertos no resucitan, tampoco Cristo resucitó;" },
            { num: 17, text: "y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados." },
            { num: 18, text: "Entonces también los que durmieron en Cristo perecieron." },
            { num: 19, text: "Si en esta vida solamente esperamos en Cristo, somos los más dignos de conmiseración de todos los hombres." },
            { num: 20, text: "Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho." },
            { num: 21, text: "Porque por cuanto la muerte entró por un hombre, también por un hombre la resurrección de los muertos." },
            { num: 22, text: "Porque así como en Adán todos mueren, también en Cristo todos serán vivificados." },
            { num: 23, text: "Pero cada uno en su debido orden: Cristo, las primicias; luego los que son de Cristo, en su venida." },
            { num: 24, text: "Luego el fin, cuando entregue el reino al Dios y Padre, cuando haya suprimido todo dominio, toda autoridad y potencia." },
            { num: 25, text: "Porque preciso es que él reine hasta que haya puesto a todos sus enemigos debajo de sus pies." },
            { num: 26, text: "Y el postrer enemigo que será destruido es la muerte." },
            { num: 27, text: "Porque todas las cosas las sujetó debajo de sus pies. Y cuando dice que todas las cosas han sido sujetadas a él, claramente se exceptúa aquel que sujetó a él todas las cosas." },
            { num: 28, text: "Pero luego que todas las cosas le estén sujetas, entonces también el Hijo mismo se sujetará al que le sujetó a él todas las cosas, para que Dios sea todo en todos." },
            { num: 29, text: "De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?" },
            { num: 30, text: "¿Y por qué nosotros peligramos a toda hora?" },
            { num: 31, text: "Os aseguro, hermanos, por la gloria que de vosotros tengo en nuestro Señor Jesucristo, que cada día muero." },
            { num: 32, text: "Si como hombre batallé en Éfeso contra fieras, ¿qué me aprovecha? Si los muertos no resucitan, comamos y bebamos, porque mañana moriremos." },
            { num: 33, text: "No erréis; las malas conversaciones corrompen las buenas costumbres." },
            { num: 34, text: "Velad debidamente, y no pequéis; porque algunos no conocen a Dios; para vergüenza vuestra lo digo." },
            { num: 35, text: "Pero dirá alguno: ¿Cómo resucitarán los muertos? ¿Con qué cuerpo vendrán?" },
            { num: 36, text: "Necio, lo que tú siembras no se vivifica, si no muere antes." },
            { num: 37, text: "Y lo que siembras no es el cuerpo que ha de salir, sino el grano desnudo, ya sea de trigo o de otro grano;" },
            { num: 38, text: "pero Dios le da el cuerpo como él quiso, y a cada semilla su propio cuerpo." },
            { num: 39, text: "No toda carne es la misma carne, sino que una carne es la de los hombres, otra carne la de las bestias, otra la de los peces, y otra la de las aves." },
            { num: 40, text: "Y hay cuerpos celestiales, y cuerpos terrenales; pero una es la gloria de los celestiales, y otra la de los terrenales." },
            { num: 41, text: "Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas, pues una estrella es diferente de otra en gloria." },
            { num: 42, text: "Así también es la resurrección de los muertos. Se siembra en corrupción, resucitará en incorrupción." },
            { num: 43, text: "Se siembra en deshonor, resucitará en gloria; se siembra en debilidad, resucitará en poder." },
            { num: 44, text: "Se siembra cuerpo animal, resucitará cuerpo espiritual. Hay cuerpo animal, y hay cuerpo espiritual." },
            { num: 45, text: "Así también está escrito: Fue hecho el primer hombre Adán alma viviente; el postrer Adán, espíritu vivificante." },
            { num: 46, text: "Mas lo espiritual no es primero, sino lo animal; luego lo espiritual." },
            { num: 47, text: "El primer hombre es de la tierra, terrenal; el segundo hombre, que es el Señor, es del cielo." },
            { num: 48, text: "Cual el terrenal, tales también los terrenales; y cual el celestial, tales también los celestiales." },
            { num: 49, text: "Y así como hemos traído la imagen del terrenal, traeremos también la imagen del celestial." },
            { num: 50, text: "Pero esto digo, hermanos: que la carne y la sangre no pueden heredar el reino de Dios, ni la corrupción hereda la incorrupción." },
            { num: 51, text: "He aquí, os digo un misterio: No todos dormiremos; pero todos seremos transformados," },
            { num: 52, text: "en un momento, en un abrir y cerrar de ojos, a la final trompeta; porque se tocará la trompeta, y los muertos serán resucitados incorruptibles, y nosotros seremos transformados." },
            { num: 53, text: "Porque es necesario que esto corruptible se vista de incorrupción, y esto mortal se vista de inmortalidad." },
            { num: 54, text: "Y cuando esto corruptible se haya vestido de incorrupción, y esto mortal se haya vestido de inmortalidad, entonces se cumplirá la palabra que está escrita: Sorbida es la muerte en victoria." },
            { num: 55, text: "¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?" },
            { num: 56, text: "ya que el aguijón de la muerte es el pecado, y el poder del pecado, la ley." },
            { num: 57, text: "Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo." },
            { num: 58, text: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." }
        ]
    },

    // 1 CORINTIOS - CAPÍTULO 16 (24 versículos)
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 16,
        title: "La ofrenda fraternal, proyectos y bendición apostólica",
        context: "Instrucciones prácticas sobre la ofrenda para los santos en Jerusalén, los planes misioneros de Pablo y Timoteo, y las cálidas salutaciones y bendiciones finales.",
        verses: [
            { num: 1, text: "En cuanto a la ofrenda para los santos, haced vosotros también de la manera que ordené en las iglesias de Galacia." },
            { num: 2, text: "Cada primer día de la semana cada uno de vosotros ponga aparte algo, según haya prosperado, guardándolo, para que cuando yo llegue no se recojan entonces ofrendas." },
            { num: 3, text: "Y cuando haya llegado, a quienes hubiereis designado por carta, a éstos enviaré para que lleven vuestro donativo a Jerusalén." },
            { num: 4, text: "Y si fuere conveniente que yo también vaya, irán conmigo." },
            { num: 5, text: "Iré a vosotros, cuando haya pasado por Macedonia, pues por Macedonia tengo que pasar." },
            { num: 6, text: "Y podrá ser que me quede con vosotros, o aun pase el invierno, para que vosotros me encaminéis a donde haya de ir." },
            { num: 7, text: "Porque no quiero veros ahora de paso, pues espero estar con vosotros algún tiempo, si el Señor lo permite." },
            { num: 8, text: "Pero estaré en Éfeso hasta Pentecostés;" },
            { num: 9, text: "porque se me ha abierto puerta grande y eficaz, y muchos son los adversarios." },
            { num: 10, text: "Y si llega Timoteo, mirad que esté con vosotros con tranquilidad, porque él hace la obra del Señor así como yo." },
            { num: 11, text: "Por tanto, nadie le tenga en poco, sino encaminadle en paz, para que venga a mí, porque le espero con los hermanos." },
            { num: 12, text: "Acerca del hermano Apolos, mucho le rogué que fuese a vosotros con los hermanos, mas de ninguna manera tuvo voluntad de ir por ahora; pero irá cuando tenga oportunidad." },
            { num: 13, text: "Velad, estad firmes en la fe; portaos varonilmente, y esforzaos." },
            { num: 14, text: "Todas vuestras cosas sean hechas con amor." },
            { num: 15, text: "Hermanos, ya sabéis que la familia de Estéfanas es las primicias de Acaya, y que ellos se han dedicado al servicio de los santos." },
            { num: 16, text: "Os ruego que os sujetéis a personas como ellos, y a todos los que ayudan y trabajan." },
            { num: 17, text: "Me regocijo con la venida de Estéfanas, de Fortunato y de Acaico, pues ellos han suplido vuestra ausencia." },
            { num: 18, text: "Porque confortaron mi espíritu y el vuestro; reconoced, pues, a tales personas." },
            { num: 19, text: "Las iglesias de Asia os saludan. Aquila y Priscila, con la iglesia que está en su casa, os saludan mucho en el Señor." },
            { num: 20, text: "Os saludan todos los hermanos. Saludaos los unos a los otros con ósculo santo." },
            { num: 21, text: "Yo, Pablo, os escribo este saludo de mi propia mano." },
            { num: 22, text: "El que no amare al Señor Jesucristo, sea anatema. El Señor viene." },
            { num: 23, text: "La gracia del Señor Jesucristo esté con vosotros." },
            { num: 24, text: "Mi amor en Cristo Jesús esté con todos vosotros. Amén." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 1 (24 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 1,
        title: "El Dios de toda consolación en las tribulaciones",
        context: "Pablo abre su segunda carta alabando al Padre de misericordias que nos consuela en las aflicciones para consolar a otros. Explica las pruebas mortales sufridas en Asia y la fidelidad divina.",
        verses: [
            { num: 1, text: "Pablo, apóstol de Jesucristo por la voluntad de Dios, y el hermano Timoteo, a la iglesia de Dios que está en Corinto, con todos los santos que están en toda Acaya:" },
            { num: 2, text: "Gracia y paz a vosotros, de Dios nuestro Padre y del Señor Jesucristo." },
            { num: 3, text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación," },
            { num: 4, text: "el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios." },
            { num: 5, text: "Porque de la manera que abundan en nosotros las aflicciones de Cristo, así abunda también por el mismo Cristo nuestra consolación." },
            { num: 6, text: "Pero si somos atribulados, es para vuestra consolación y salvación; o si somos consolados, es para vuestra consolación y salvación, la cual se opera en el sufrir las mismas aflicciones que nosotros también padecemos." },
            { num: 7, text: "Y nuestra esperanza respecto de vosotros es firme, pues sabemos que así como sois compañeros en las aflicciones, también lo sois en la consolación." },
            { num: 8, text: "Porque hermanos, no queremos que ignoréis acerca de nuestra tribulación que nos sobrevino en Asia; pues fuimos abrumados sobremanera más allá de nuestras fuerzas, de tal modo que aun perdimos la esperanza de conservar la vida." },
            { num: 9, text: "Pero tuvimos en nosotros mismos sentencia de muerte, para que no confiásemos en nosotros mismos, sino en Dios que resucita a los muertos;" },
            { num: 10, text: "el cual nos libró, y nos libra, y en quien esperamos que aún nos librará, de tan gran muerte;" },
            { num: 11, text: "cooperando también vosotros a favor nuestro con la oración, para que por muchas personas sean dadas gracias a favor nuestro por el don concedido a nosotros por medio de muchos." },
            { num: 12, text: "Porque nuestra gloria es esta: el testimonio de nuestra conciencia, que con sencillez y sinceridad de Dios, no con sabiduría carnal, sino con la gracia de Dios, nos hemos conducido en el mundo, y mucho más con vosotros." },
            { num: 13, text: "Porque no os escribimos otras cosas de las que leéis, o también entendéis; y espero que hasta el fin las entenderéis;" },
            { num: 14, text: "como también en parte nos habéis entendido, que somos vuestra gloria, así como también vosotros la nuestra, para el día del Señor Jesús." },
            { num: 15, text: "Con esta confianza quise ir primero a vosotros, para que tuvieseis una segunda gracia," },
            { num: 16, text: "y por vosotros pasar a Macedonia, y desde Macedonia venir otra vez a vosotros, y ser encaminado por vosotros a Judea." },
            { num: 17, text: "Así que, al proponerme esto, ¿usé quizá de ligereza? ¿O lo que pienso hacer, lo pienso según la carne, para que haya en mí Sí y No?" },
            { num: 18, text: "Mas, como Dios es fiel, nuestra palabra a vosotros no es Sí y No." },
            { num: 19, text: "Porque el Hijo de Dios, Jesucristo, que entre vosotros ha sido predicado por nosotros, por mí, Silvano y Timoteo, no ha sido Sí y No; mas ha sido Sí en él;" },
            { num: 20, text: "porque todas las promesas de Dios son en él Sí, y en él Amén, por medio de nosotros, para la gloria de Dios." },
            { num: 21, text: "Y el que nos confirma con vosotros en Cristo, y el que nos ungió, es Dios," },
            { num: 22, text: "el cual también nos ha sellado, y nos ha dado las arras del Espíritu en nuestros corazones." },
            { num: 23, text: "Mas yo invoco a Dios por testigo sobre mi alma, que por ser indulgente con vosotros no he pasado todavía a Corinto." },
            { num: 24, text: "No que nos enseñoreemos de vuestra fe, sino que colaboramos para vuestro gozo; porque por la fe estáis firmes." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 2 (17 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 2,
        title: "El perdón al ofensor y el grato olor de Cristo",
        context: "Pablo alienta a perdonar y consolar con amor al hermano arrepentido para evitar artimañas del enemigo, celebrando el triunfo del Evangelio como fragancia de vida.",
        verses: [
            { num: 1, text: "Esto, pues, determiné para conmigo, no ir otra vez a vosotros con tristeza." },
            { num: 2, text: "Porque si yo os entristezco, ¿quién será luego el que me alegre, sino aquel a quien yo entristecí?" },
            { num: 3, text: "Y esto mismo os escribí, para que cuando llegue no tenga tristeza de parte de aquellos de quienes me debiera gozar; confiando en todos vosotros de que mi gozo es el de todos vosotros." },
            { num: 4, text: "Porque por la mucha tribulación y angustia del corazón os escribí con muchas lágrimas, no para que fueseis entristecidos, sino para que supieseis cuán grande es el amor que os tengo." },
            { num: 5, text: "Pero si alguno me ha causado tristeza, no me la ha causado a mí solo, sino en cierto modo (por no exagerar) a todos vosotros." },
            { num: 6, text: "Le basta a tal persona esta reprensión hecha por muchos;" },
            { num: 7, text: "así que, al contrario, vosotros más bien debéis perdonarle y consolarle, para que no sea consumido de demasiada tristeza." },
            { num: 8, text: "Por lo cual os ruego que confirméis el amor para con él." },
            { num: 9, text: "Porque también para este fin os escribí, para tener la prueba de si sois obedientes en todo." },
            { num: 10, text: "Y al que vosotros perdonáis, yo también; porque también yo lo que he perdonado, si algo he perdonado, por vosotros lo he hecho en presencia de Cristo," },
            { num: 11, text: "para que Satanás no gane ventaja alguna sobre nosotros; pues no ignoramos sus maquinaciones." },
            { num: 12, text: "Cuando llegué a Troas para predicar el evangelio de Cristo, aunque se me abrió puerta en el Señor," },
            { num: 13, text: "no tuve reposo en mi espíritu, por no haber hallado a mi hermano Tito; así, despidiéndome de ellos, partí para Macedonia." },
            { num: 14, text: "Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta en todo lugar el olor de su conocimiento." },
            { num: 15, text: "Porque para Dios somos grato olor de Cristo en los que se salvan, y en los que se pierden;" },
            { num: 16, text: "a éstos ciertamente olor de muerte para muerte, y a aquéllos olor de vida para vida. Y para estas cosas, ¿quién es suficiente?" },
            { num: 17, text: "Pues no somos como muchos, que medran falsificando la palabra de Dios, sino que con sinceridad, como de parte de Dios, y delante de Dios, hablamos en Cristo." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 3 (18 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 3,
        title: "Ministros del Nuevo Pacto y transformación de gloria en gloria",
        context: "Nuestra suficiencia proviene de Dios. El ministerio del Espíritu sobrepasa la gloria del antiguo pacto, trayendo libertad y transformándonos a la imagen de Cristo.",
        verses: [
            { num: 1, text: "¿Comenzamos otra vez a recomendarnos a nosotros mismos? ¿O tenemos necesidad, como algunos, de cartas de recomendación para vosotros, o de recomendación de vosotros?" },
            { num: 2, text: "Nuestras cartas sois vosotros, escritas en nuestros corazones, conocidas y leídas por todos los hombres;" },
            { num: 3, text: "siendo manifiesto que sois carta de Cristo expedida por nosotros, escrita no con tinta, sino con el Espíritu del Dios vivo; no en tablas de piedra, sino en tablas de carne del corazón." },
            { num: 4, text: "Y tal confianza tenemos mediante Cristo para con Dios;" },
            { num: 5, text: "no que seamos competentes por nosotros mismos para pensar algo como de nosotros mismos, sino que nuestra competencia proviene de Dios," },
            { num: 6, text: "el cual asimismo nos hizo ministros competentes de un nuevo pacto, no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica." },
            { num: 7, text: "Y si el ministerio de muerte grabado con letras en piedras fue con gloria, tanto que los hijos de Israel no pudieron fijar la vista en el rostro de Moisés a causa de la gloria de su rostro, la cual había de perecer," },
            { num: 8, text: "¿cómo no será más bien con gloria el ministerio del espíritu?" },
            { num: 9, text: "Porque si el ministerio de condenación fue con gloria, mucho más abundará en gloria el ministerio de justificación." },
            { num: 10, text: "Porque aun lo que fue glorioso, no es glorioso en este respecto, en comparación con la gloria más eminente." },
            { num: 11, text: "Porque si lo que perece tuvo gloria, mucho más será glorioso lo que permanece." },
            { num: 12, text: "Así que, teniendo tal esperanza, usamos de mucha franqueza;" },
            { num: 13, text: "y no como Moisés, que ponía un velo sobre su rostro, para que los hijos de Israel no fijasen la vista en el fin de aquello que había de ser abolido." },
            { num: 14, text: "Pero el entendimiento de ellos se embotó; porque hasta el día de hoy, cuando leen el antiguo pacto, les queda el mismo velo no descubierto, el cual por Cristo es quitado." },
            { num: 15, text: "Y aun hasta el día de hoy, cuando se lee a Moisés, el velo está puesto sobre el corazón de ellos." },
            { num: 16, text: "Pero cuando se conviertan al Señor, el velo se quitará." },
            { num: 17, text: "Porque el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad." },
            { num: 18, text: "Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 4 (18 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 4,
        title: "Tesoros en vasos de barro y la renovación interior",
        context: "La luz divina brilla en corazones frágiles. Aunque atribulados y desgastados en lo exterior, el ser interior se renueva contemplando las realidades eternas e invisibles.",
        verses: [
            { num: 1, text: "Por lo cual, teniendo nosotros este ministerio según la misericordia que hemos recibido, no desmayamos." },
            { num: 2, text: "Antes bien renunciamos a lo oculto y vergonzoso, no andando con astucia, ni adulterando la palabra de Dios, sino por la manifestación de la verdad recomendándonos a toda conciencia humana delante de Dios." },
            { num: 3, text: "Pero si nuestro evangelio está aún encubierto, entre los que se pierden está encubierto;" },
            { num: 4, text: "en los cuales el dios de este siglo cegó el entendimiento de los incrédulos, para que no les resplandezca la luz del evangelio de la gloria de Cristo, el cual es la imagen de Dios." },
            { num: 5, text: "Porque no nos predicamos a nosotros mismos, sino a Jesucristo como Señor, y a nosotros como vuestros siervos por amor de Jesús." },
            { num: 6, text: "Porque Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones, para iluminación del conocimiento de la gloria de Dios en la faz de Jesucristo." },
            { num: 7, text: "Pero tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros," },
            { num: 8, text: "que estamos atribulados en todo, mas no angustiados; en apuros, mas no desesperados;" },
            { num: 9, text: "perseguidos, mas no desamparados; derribados, pero no destruidos;" },
            { num: 10, text: "llevando en el cuerpo siempre por todas partes la muerte de Jesús, para que también la vida de Jesús se manifieste en nuestros cuerpos." },
            { num: 11, text: "Porque nosotros que vivimos, siempre estamos entregados a muerte por causa de Jesús, para que también la vida de Jesús se manifieste en nuestra carne mortal." },
            { num: 12, text: "De manera que la muerte actúa en nosotros, y en vosotros la vida." },
            { num: 13, text: "Pero teniendo el mismo espíritu de fe, conforme a lo que está escrito: Creí, por lo cual hablé, nosotros también creemos, por lo cual también hablamos," },
            { num: 14, text: "sabiendo que el que resucitó al Señor Jesús, a nosotros también nos resucitará con Jesús, y nos presentará juntamente con vosotros." },
            { num: 15, text: "Porque todas estas cosas padecemos por amor a vosotros, para que abundando la gracia por medio de muchos, la acción de gracias sobreabunde para gloria de Dios." },
            { num: 16, text: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día." },
            { num: 17, text: "Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria;" },
            { num: 18, text: "no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 5 (21 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 5,
        title: "Nueva criatura y el ministerio de la reconciliación",
        context: "La esperanza de la morada celestial y el caminar por fe. En Cristo somos hechos nueva criatura y comisionados como embajadores de Dios para proclamar la reconciliación.",
        verses: [
            { num: 1, text: "Porque sabemos que si nuestra morada terrestre, este tabernáculo, se deshiciere, tenemos de Dios un edificio, una casa no hecha de manos, eterna, en los cielos." },
            { num: 2, text: "Y por esto también gemimos, deseando ser revestidos de aquella nuestra habitación celestial;" },
            { num: 3, text: "pues así seremos hallados vestidos, y no desnudos." },
            { num: 4, text: "Porque asimismo los que estamos en este tabernáculo gemimos con angustia; porque no quisiéramos ser desnudados, sino revestidos, para que lo mortal sea absorbido por la vida." },
            { num: 5, text: "Mas el que nos hizo para esto mismo es Dios, quien nos ha dado las arras del Espíritu." },
            { num: 6, text: "Así que vivimos confiados siempre, y sabiendo que entre tanto que estamos en el cuerpo, estamos ausentes del Señor" },
            { num: 7, text: "(porque por fe andamos, no por vista);" },
            { num: 8, text: "pero confiamos, y más quisiéramos estar ausentes del cuerpo, y presentes al Señor." },
            { num: 9, text: "Por tanto procuramos también, o ausentes o presentes, serle agradables." },
            { num: 10, text: "Porque es necesario que todos nosotros comparezcamos ante el tribunal de Cristo, para que cada uno reciba según lo que haya hecho mientras estaba en el cuerpo, sea bueno o sea malo." },
            { num: 11, text: "Conociendo, pues, el temor del Señor, persuadimos a los hombres; pero a Dios le es manifiesto lo que somos; y espero que también lo sea a vuestras conciencias." },
            { num: 12, text: "No nos recomendamos otra vez a vosotros, sino os damos ocasión de gloriaros por nosotros, para que tengáis con qué responder a los que se glorían en las apariencias y no en el corazón." },
            { num: 13, text: "Porque si estamos locos, es para Dios; y si somos cuerdos, es para vosotros." },
            { num: 14, text: "Porque el amor de Cristo nos constriñe, pensando esto: que si uno murió por todos, luego todos murieron;" },
            { num: 15, text: "y por todos murió, para que los que viven, ya no vivan para sí, sino para aquel que murió y resucitó por ellos." },
            { num: 16, text: "De manera que nosotros de aquí en adelante a nadie conocemos según la carne; y aun si a Cristo conocimos según la carne, ya no lo conocemos así." },
            { num: 17, text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." },
            { num: 18, text: "Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación;" },
            { num: 19, text: "que Dios estaba en Cristo reconciliando consigo al mundo, no tomándoles en cuenta a los hombres sus pecados, y nos encargó a nosotros la palabra de la reconciliación." },
            { num: 20, text: "Así que, somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios." },
            { num: 21, text: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 6 (18 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 6,
        title: "El ministerio probado y el templo del Dios viviente",
        context: "Pablo expone las pruebas y virtudes de su servicio, e insta a una vida de santidad y devoción pura como santuario del Dios viviente.",
        verses: [
            { num: 1, text: "Así, pues, nosotros, como colaboradores juntamente con él, os exhortamos también a que no recibáis en vano la gracia de Dios." },
            { num: 2, text: "Porque dice: En tiempo aceptable te he oído, Y en día de salvación te he socorrido. He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación." },
            { num: 3, text: "No damos a nadie ningún motivo de tropiezo, para que nuestro ministerio no sea vituperado;" },
            { num: 4, text: "antes bien, nos recomendamos en todo como ministros de Dios, en mucha paciencia, en tribulaciones, en necesidades, en angustias;" },
            { num: 5, text: "en azotes, en cárceles, en tumultos, en trabajos, en desvelos, en ayunos;" },
            { num: 6, text: "en pureza, en ciencia, en longanimidad, en bondad, en el Espíritu Santo, en amor sincero," },
            { num: 7, text: "en palabra de verdad, en poder de Dios, con armas de justicia a diestra y a siniestra;" },
            { num: 8, text: "por honra y por deshonra, por mala fama y por buena fama; como engañadores, pero veraces;" },
            { num: 9, text: "como desconocidos, pero bien conocidos; como moribundos, mas he aquí vivimos; como castigados, mas no muertos;" },
            { num: 10, text: "como entristecidos, mas siempre gozosos; como pobres, mas enriqueciendo a muchos; como no teniendo nada, mas poseyéndolo todo." },
            { num: 11, text: "Nuestra boca se ha abierto a vosotros, oh corintios; nuestro corazón se ha ensanchado." },
            { num: 12, text: "No estáis estrechos en nosotros, pero sí estáis estrechos en vuestro propio corazón." },
            { num: 13, text: "Pues, para corresponder del mismo modo (como a hijos hablo), ensanchaos también vosotros." },
            { num: 14, text: "No os unáis en yugo desigual con los incrédulos; porque ¿qué compañerismo tiene la justicia con la injusticia? ¿Y qué comunión la luz con las tinieblas?" },
            { num: 15, text: "¿Y qué concordia Cristo con Belial? ¿O qué parte el creyente con el incrédulo?" },
            { num: 16, text: "¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente, como Dios dijo: Habitaré y andaré entre ellos, Y seré su Dios, Y ellos serán mi pueblo." },
            { num: 17, text: "Por lo cual, Salid de en medio de ellos, y apartaos, dice el Señor, Y no toquéis lo inmundo; Y yo os recibiré," },
            { num: 18, text: "Y seré para vosotros por Padre, Y vosotros me seréis hijos e hijas, dice el Señor Todopoderoso." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 7 (16 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 7,
        title: "La tristeza según Dios que produce arrepentimiento",
        context: "Pablo expresa su gozo y consuelo por la respuesta sincera de los corintios traída por Tito, distinguiendo el arrepentimiento piadoso del remordimiento estéril.",
        verses: [
            { num: 1, text: "Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios." },
            { num: 2, text: "Admitidnos: a nadie hemos agraviado, a nadie hemos corrompido, a nadie hemos engañado." },
            { num: 3, text: "No lo digo para condenaros; pues ya he dicho antes que estáis en nuestros corazones, para morir y para vivir juntamente." },
            { num: 4, text: "Mucha franqueza tengo con vosotros; mucho me glorío con respecto de vosotros; lleno estoy de consolación; sobreabundo de gozo en todas nuestras tribulaciones." },
            { num: 5, text: "Porque de cierto, cuando vinimos a Macedonia, ningún reposo tuvo nuestro cuerpo, sino que en todo fuimos atribulados; de fuera, conflictos; de dentro, temores." },
            { num: 6, text: "Pero Dios, que consuela a los humildes, nos consoló con la venida de Tito;" },
            { num: 7, text: "y no sólo con su venida, sino también con la consolación con que él había sido consolado en cuanto a vosotros, haciéndonos saber vuestro gran afecto, vuestro llanto, vuestro celo por mí, de manera que me regocijé aún más." },
            { num: 8, text: "Porque aunque os entristecí con la carta, no me pesa, aunque entonces sí me pesó; porque veo que aquella carta, aunque por algún tiempo, os entristeció." },
            { num: 9, text: "Ahora me gozo, no porque hayáis sido entristecidos, sino porque fuisteis entristecidos para arrepentimiento; porque habéis sido entristecidos según Dios, para que ninguna pérdida padecieseis por nuestra parte." },
            { num: 10, text: "Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte." },
            { num: 11, text: "Porque he aquí, esto mismo de que hayáis sido entristecidos según Dios, ¡qué solicitud produjo en vosotros, qué defensa, qué indignación, qué temor, qué ardiente afecto, qué celo, y qué vindicación! En todo os habéis mostrado limpios en el asunto." },
            { num: 12, text: "Así que, aunque os escribí, no fue por causa del que cometió el agravio, ni por causa del que lo padeció, sino para que se os hiciese manifiesta nuestra solicitud que tenemos por vosotros delante de Dios." },
            { num: 13, text: "Por tanto, hemos sido consolados en vuestra consolación; pero mucho más nos gozamos por el gozo de Tito, que haya sido confortado su espíritu por todos vosotros." },
            { num: 14, text: "Pues si de algo me he gloriado con él respecto de vosotros, no he sido avergonzado, sino que así como en todo os hemos hablado con verdad, también nuestro gloriarnos con Tito resultó verdad." },
            { num: 15, text: "Y su cariño para con vosotros es aun más abundante, cuando se acuerda de la obediencia de todos vosotros, de cómo lo recibisteis con temor y temblor." },
            { num: 16, text: "Me gozo de que en todo tengo confianza en vosotros." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 8 (24 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 8,
        title: "La gracia de la generosidad y el modelo de Cristo",
        context: "Pablo motiva a la generosidad presentando el ejemplo de las iglesias de Macedonia y la suprema entrega de Cristo, quien siendo rico se hizo pobre por nosotros.",
        verses: [
            { num: 1, text: "Asimismo, hermanos, os hacemos saber la gracia de Dios que se ha dado a las iglesias de Macedonia;" },
            { num: 2, text: "que en grande prueba de tribulación, la abundancia de su gozo y su profunda pobreza abundaron en riquezas de su generosidad." },
            { num: 3, text: "Pues doy testimonio de que con agrado han dado conforme a sus fuerzas, y aun más allá de sus fuerzas," },
            { num: 4, text: "pidiéndonos con muchos ruegos que les concediésemos el privilegio de participar en este servicio para los santos." },
            { num: 5, text: "Y no como esperábamos, sino que a sí mismos se dieron primeramente al Señor, y luego a nosotros por la voluntad de Dios;" },
            { num: 6, text: "de manera que exhortamos a Tito para que tal como comenzó antes, asimismo acabe también entre vosotros esta obra de gracia." },
            { num: 7, text: "Por tanto, como en todo abundáis, en fe, en palabra, en ciencia, en toda solicitud, y en vuestro amor para con nosotros, abundad también en esta gracia." },
            { num: 8, text: "No hablo como quien manda, sino para poner a prueba, por medio de la eficacia de otros, la sinceridad también del amor vuestro." },
            { num: 9, text: "Porque ya conocéis la gracia de nuestro Señor Jesucristo, que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos." },
            { num: 10, text: "Y en esto doy mi consejo; porque esto os conviene a vosotros, que comenzasteis antes, no sólo a hacerlo, sino también a quererlo, desde el año pasado." },
            { num: 11, text: "Ahora, pues, llevad también a cabo el hacerlo, para que como estuvisteis prontos a querer, así también lo estéis en cumplir conforme a lo que tengáis." },
            { num: 12, text: "Porque si primero hay la voluntad dispuesta, será acepta según lo que uno tiene, no según lo que no tiene." },
            { num: 13, text: "Porque no digo esto para que haya para otros desahogo, y para vosotros apretura," },
            { num: 14, text: "sino para que en este tiempo, con igualdad, la abundancia vuestra supla la escasez de ellos, para que también la abundancia de ellos supla la necesidad vuestra, para que haya igualdad," },
            { num: 15, text: "como está escrito: El que recogió mucho, no tuvo más, y el que poco, no tuvo menos." },
            { num: 16, text: "Pero gracias a Dios que puso en el corazón de Tito la misma solicitud por vosotros." },
            { num: 17, text: "Pues a la verdad aceptó la exhortación; pero estando también muy solícito, por su propia voluntad partió para ir a vosotros." },
            { num: 18, text: "Y enviamos juntamente con él al hermano cuya alabanza en el evangelio se oye por todas las iglesias;" },
            { num: 19, text: "y no sólo esto, sino que también fue designado por las iglesias como compañero de nuestra peregrinación para llevar este donativo, que es administrado por nosotros para gloria del Señor mismo, y para demostrar vuestra buena voluntad;" },
            { num: 20, text: "evitando que nadie nos censure en cuanto a esta ofrenda abundante que administramos," },
            { num: 21, text: "procurando hacer las cosas honradamente, no sólo delante del Señor sino también delante de los hombres." },
            { num: 22, text: "Enviamos también con ellos a nuestro hermano, cuya diligencia hemos comprobado repetidas veces en muchas cosas, y ahora mucho más diligente por la mucha confianza que tiene en vosotros." },
            { num: 23, text: "En cuanto a Tito, es mi compañero y colaborador para con vosotros; y en cuanto a nuestros hermanos, son mensajeros de las iglesias, y gloria de Cristo." },
            { num: 24, text: "Mostrad, pues, para con ellos ante las iglesias la prueba de vuestro amor, y de nuestro gloriarnos respecto de vosotros." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 9 (15 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 9,
        title: "El dador alegre y la siembra abundante",
        context: "Dios ama al dador alegre. Quien siembra generosamente segará generosamente, produciendo alabanzas y abundancia de toda gracia.",
        verses: [
            { num: 1, text: "Cuanto a la ministración para los santos, es por demás que yo os escriba;" },
            { num: 2, text: "pues conozco vuestra buena voluntad, de la cual yo me glorío entre los de Macedonia, que Acaya está preparada desde el año pasado; y vuestro celo ha estimulado a la mayoría." },
            { num: 3, text: "Pero he enviado a los hermanos, para que nuestro gloriarnos de vosotros no sea vano en esta parte; para que como lo he dicho, estéis preparados;" },
            { num: 4, text: "no sea que si van conmigo algunos macedonios, y os hallaren desprevenidos, nos avergoncemos nosotros, por no decir vosotros, de esta nuestra confianza." },
            { num: 5, text: "Por tanto, tuve por necesario exhortar a los hermanos que fuesen primero a vosotros y preparasen primero vuestra generosidad antes prometida, para que esté lista como de generosidad, y no como de exigencia nuestra." },
            { num: 6, text: "Pero esto digo: El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará." },
            { num: 7, text: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." },
            { num: 8, text: "Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra;" },
            { num: 9, text: "como está escrito: Repartió, dio a los pobres; Su justicia permanece para siempre." },
            { num: 10, text: "Y el que da semilla al que siembra, y pan al que come, proveerá y multiplicará vuestra sementera, y aumentará los frutos de vuestra justicia," },
            { num: 11, text: "para que estéis enriquecidos en todo para toda liberalidad, la cual produce por medio de nosotros acción de gracias a Dios." },
            { num: 12, text: "Porque la ministración de este servicio no solamente suple lo que a los santos falta, sino que también abunda en muchas acciones de gracias a Dios;" },
            { num: 13, text: "pues por la experiencia de esta ministración glorifican a Dios por la obediencia que profesáis al evangelio de Cristo, y por la liberalidad de vuestra contribución para ellos y para todos;" },
            { num: 14, text: "asimismo en la oración de ellos por vosotros, a quienes aman a causa de la superabundante gracia de Dios en vosotros." },
            { num: 15, text: "¡Gracias a Dios por su don inefable!" }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 10 (18 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 10,
        title: "Las armas espirituales y la verdadera autoridad",
        context: "Nuestras armas de milicia son poderosas en Dios para derribar fortalezas mentales y llevar cautivo todo pensamiento a Cristo.",
        verses: [
            { num: 1, text: "Yo Pablo os ruego por la mansedumbre y ternura de Cristo, yo que presente ciertamente soy humilde entre vosotros, mas ausente soy osado para con vosotros;" },
            { num: 2, text: "ruego, pues, que cuando esté presente, no tenga que usar de aquella osadía con que estoy dispuesto a proceder resueltamente contra algunos que nos tienen como si anduviésemos según la carne." },
            { num: 3, text: "Pues aunque andamos en la carne, no militamos según la carne;" },
            { num: 4, text: "porque las armas de nuestra milicia no son carnales, sino poderosas en Dios para la destrucción de fortalezas," },
            { num: 5, text: "derribando argumentos y toda altivez que se levanta contra el conocimiento de Dios, y llevando cautivo todo pensamiento a la obediencia a Cristo," },
            { num: 6, text: "y estando prontos para castigar toda desobediencia, cuando vuestra obediencia sea perfecta." },
            { num: 7, text: "Miráis las cosas según la apariencia. Si alguno está confiado en sí mismo que es de Cristo, esto también vuelva a considerar por sí mismo, que como él es de Cristo, así también nosotros somos de Cristo." },
            { num: 8, text: "Porque aunque me gloríe más todavía de nuestra autoridad, la cual el Señor nos dio para edificación y no para vuestra destrucción, no me avergonzaré;" },
            { num: 9, text: "para que no parezca como que os quiero amedrentar por cartas." },
            { num: 10, text: "Porque a la verdad, dicen, las cartas son duras y fuertes; mas la presencia corporal débil, y la palabra menospreciable." },
            { num: 11, text: "Esto tenga en cuenta tal persona, que tales como somos en la palabra por cartas, estando ausentes, lo seremos también en hechos, estando presentes." },
            { num: 12, text: "Porque no nos atrevemos a contarnos ni a compararnos con algunos que se alaban a sí mismos; pero ellos, midiéndose a sí mismos por sí mismos, y comparándose consigo mismos, no son juiciosos." },
            { num: 13, text: "Pero nosotros no nos gloriaremos desmedidamente, sino conforme a la regla de la medida que Dios nos ha dado por medida, para llegar también hasta vosotros." },
            { num: 14, text: "Porque no nos hemos extralimitado, como si no llegásemos hasta vosotros, pues fuimos los primeros en llegar hasta vosotros con el evangelio de Cristo." },
            { num: 15, text: "No nos gloriamos desmedidamente en trabajos ajenos, sino que esperamos que conforme crezca vuestra fe seremos muy engrandecidos entre vosotros, conforme a nuestra regla;" },
            { num: 16, text: "y que anunciaremos el evangelio en los lugares más allá de vosotros, sin entrar en la obra de otro para gloriarnos en lo que ya estaba preparado." },
            { num: 17, text: "Mas el que se gloría, gloríese en el Señor;" },
            { num: 18, text: "porque no es aprobado el que se alaba a sí mismo, sino aquel a quien Dios alaba." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 11 (33 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 11,
        title: "Celo apostólico y sufrimientos por causa de Cristo",
        context: "Pablo manifiesta su celo santo por la pureza de la iglesia frente a falsos maestros, y relata el asombroso catálogo de padecimientos y peligros vividos por el Evangelio.",
        verses: [
            { num: 1, text: "¡Ojalá me toleraseis un poco de locura! Sí, toleradme." },
            { num: 2, text: "Porque os celo con celo de Dios; pues os he desposado con un solo esposo, para presentaros como una virgen pura a Cristo." },
            { num: 3, text: "Pero temo que como la serpiente con su astucia engañó a Eva, vuestros sentidos sean de alguna manera extraviados de la sincera fidelidad a Cristo." },
            { num: 4, text: "Porque si viene alguno predicando a otro Jesús que el que os hemos predicado, o si recibís otro espíritu que el que habéis recibido, u otro evangelio que el que habéis aceptado, bien lo toleráis;" },
            { num: 5, text: "y pienso que en nada he sido inferior a aquellos grandes apóstoles." },
            { num: 6, text: "Pues aunque sea tosco en la palabra, no lo soy en el conocimiento; en todo y por todo os lo hemos demostrado." },
            { num: 7, text: "¿Pequé yo humillándome a mí mismo, para que vosotros fueseis enaltecidos, por cuanto os he predicado el evangelio de Dios de balde?" },
            { num: 8, text: "He despojado a otras iglesias, recibiendo salario para serviros a vosotros." },
            { num: 9, text: "Y cuando estaba entre vosotros y tuve necesidad, a ninguno fui carga, pues lo que me faltaba, lo suplieron los hermanos que vinieron de Macedonia, y en todo me guardé y me guardaré de seros gravoso." },
            { num: 10, text: "Por la verdad de Cristo que está en mí, que no se me impedirá esta mi gloria en las regiones de Acaya." },
            { num: 11, text: "¿Por qué? ¿Porque no os amo? Dios lo sabe." },
            { num: 12, text: "Mas lo que hago, lo haré aún, para quitar la ocasión a aquellos que la desean, a fin de que en aquello en que se glorían, sean hallados semejantes a nosotros." },
            { num: 13, text: "Porque éstos son falsos apóstoles, obreros fraudulentos, que se disfrazan como apóstoles de Cristo." },
            { num: 14, text: "Y no es maravilla, porque el mismo Satanás se disfraza como ángel de luz." },
            { num: 15, text: "Así que, no es extraño si también sus ministros se disfrazan como ministros de justicia; cuyo fin será conforme a sus obras." },
            { num: 16, text: "Otra vez digo: Nadie me tenga por loco; o de otra manera, recibidme como a loco, para que yo también me gloríe un poquito." },
            { num: 17, text: "Lo que hablo, no lo hablo según el Señor, sino como en locura, con esta confianza de gloriarme." },
            { num: 18, text: "Puesto que muchos se glorían según la carne, también yo me gloriaré;" },
            { num: 19, text: "porque de buena gana toleráis a los necios, siendo vosotros cuerdos." },
            { num: 20, text: "Pues toleráis si alguno os esclaviza, si alguno os devora, si alguno toma lo vuestro, si alguno se enaltece, si alguno os da de bofetadas." },
            { num: 21, text: "Para vergüenza mía lo digo, para eso fuimos débiles. Pero en lo que otro tenga osadía (hablo con locura), también yo tengo osadía." },
            { num: 22, text: "¿Son hebreos? Yo también. ¿Son israelitas? Yo también. ¿Son descendientes de Abraham? También yo." },
            { num: 23, text: "¿Son ministros de Cristo? (Como si estuviera loco hablo.) Yo más; en trabajos más abundante; en azotes sin número; en cárceles más; en peligros de muerte muchas veces." },
            { num: 24, text: "De los judíos cinco veces he recibido cuarenta azotes menos uno." },
            { num: 25, text: "Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar;" },
            { num: 26, text: "en caminos muchas veces; en peligros de ríos, peligros de ladrones, peligros de los de mi nación, peligros de los gentiles, peligros en la ciudad, peligros en el desierto, peligros en el mar, peligros entre falsos hermanos;" },
            { num: 27, text: "en trabajo y fatiga, en muchos desvelos, en hambre y sed, en muchos ayunos, en frío y en desnudez;" },
            { num: 28, text: "y además de otras cosas, lo que sobre mí se agolpa cada día, la preocupación por todas las iglesias." },
            { num: 29, text: "¿Quién enferma, y yo no enfermo? ¿A quién se le hace tropezar, y yo no me indigno?" },
            { num: 30, text: "Si es necesario gloriarse, me gloriaré en lo que es de mi debilidad." },
            { num: 31, text: "El Dios y Padre de nuestro Señor Jesucristo, quien es bendito por los siglos, sabe que no miento." },
            { num: 32, text: "En Damasco, el gobernador de la provincia del rey Aretas guardaba la ciudad de los damascenos para prenderme;" },
            { num: 33, text: "y fui descolgado del muro en un canasto por una ventana, y escapé de sus manos." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 12 (21 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 12,
        title: "El aguijón en la carne y 'Bástate mi gracia'",
        context: "Pablo relata las revelaciones sublimes del tercer cielo y el aguijón recibido para no envanecerse. La inolvidable promesa del Señor: 'Bástate mi gracia; porque mi poder se perfecciona en la debilidad'.",
        verses: [
            { num: 1, text: "Ciertamente no me conviene gloriarme; pero vendré a las visiones y a las revelaciones del Señor." },
            { num: 2, text: "Conozco a un hombre en Cristo, que hace catorce años (si en el cuerpo, no lo sé; si fuera del cuerpo, no lo sé; Dios lo sabe) fue arrebatado hasta el tercer cielo." },
            { num: 3, text: "Y conozco al tal hombre (si en el cuerpo, o fuera del cuerpo, no lo sé; Dios lo sabe)," },
            { num: 4, text: "que fue arrebatado al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar." },
            { num: 5, text: "De tal hombre me gloriaré; pero de mí mismo en nada me gloriaré, sino en mis debilidades." },
            { num: 6, text: "Sin embargo, si quisiera gloriarme, no sería insensato, porque diría la verdad; pero lo dejo, para que nadie piense de mí más de lo que en mí ve, u oye de mí." },
            { num: 7, text: "Y para que la grandeza de las revelaciones no me exaltase desmedidamente, me fue dado un aguijón en mi carne, un mensajero de Satanás que me abofetee, para que no me enaltezca sobremanera;" },
            { num: 8, text: "respecto a lo cual tres veces he rogado al Señor, que lo quite de mí." },
            { num: 9, text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },
            { num: 10, text: "Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte." },
            { num: 11, text: "Me he hecho un necio al gloriarme; vosotros me obligasteis a ello, pues yo debía ser alabado por vosotros; porque en nada he sido menos que aquellos grandes apóstoles, aunque nada soy." },
            { num: 12, text: "Con todo, las señales de apóstol han sido hechas entre vosotros en toda paciencia, por señales, prodigios y milagros." },
            { num: 13, text: "Porque ¿en qué habéis sido menos que las otras iglesias, sino en que yo mismo no os he sido carga? ¡Perdonadme este agravio!" },
            { num: 14, text: "He aquí, por tercera vez estoy preparado para ir a vosotros; y no os seré gravoso, porque no busco lo vuestro, sino a vosotros, pues no deben atesorar los hijos para los padres, sino los padres para los hijos." },
            { num: 15, text: "Y yo con el mayor placer gastaré lo mío, y aun yo mismo me gastaré del todo por amor de vuestras almas, aunque amándoos más, sea amado menos." },
            { num: 16, text: "Pero admitiendo esto, que yo no os he sido carga, sino que como soy astuto, os prendí por engaño," },
            { num: 17, text: "¿acaso os he engañado por medio de alguno de los que he enviado a vosotros?" },
            { num: 18, text: "Rogué a Tito, y envié con él al hermano. ¿Os engañó acaso Tito? ¿No hemos procedido con el mismo espíritu y en las mismas pisadas?" },
            { num: 19, text: "¿Pensáis aún que nos defendemos con vosotros? Delante de Dios en Cristo hablamos; y todo, muy amados, para vuestra edificación." },
            { num: 20, text: "Pues temo que cuando llegue, no os halle tales como quiero, y yo sea hallado de vosotros cual no queréis; que haya entre vosotros contiendas, envidias, iras, divisiones, maledicencias, murmuraciones, soberbias, desórdenes;" },
            { num: 21, text: "que cuando vuelva, me humille Dios entre vosotros, y quizá tenga que llorar por muchos de los que antes han pecado, y no se han arrepentido de la inmundicia y fornicación y lascivia que han cometido." }
        ]
    },

    // 2 CORINTIOS - CAPÍTULO 13 (14 versículos)
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 13,
        title: "Examen personal de fe y bendición trinitaria final",
        context: "Pablo concluye invitando al autoexamen sincero en la fe, buscando la restauración y despidiéndose con la solemne bendición de la gracia, el amor y la comunión del Espíritu Santo.",
        verses: [
            { num: 1, text: "Esta es la tercera vez que voy a vosotros. Por boca de dos o de tres testigos se decidirá todo asunto." },
            { num: 2, text: "He dicho antes, y ahora digo otra vez como si estuviera presente, y ahora ausente lo escribo a los que antes pecaron, y a todos los demás, que si voy otra vez, no seré indulgente;" },
            { num: 3, text: "pues buscáis una prueba de que habla Cristo en mí, el cual no es débil para con vosotros, sino que es poderoso en vosotros." },
            { num: 4, text: "Porque aunque fue crucificado en debilidad, vive por el poder de Dios. Pues también nosotros somos débiles en él, pero viviremos con él por el poder de Dios para con vosotros." },
            { num: 5, text: "Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos. ¿O no os conocéis a vosotros mismos, que Jesucristo está en vosotros, a menos que estéis reprobados?" },
            { num: 6, text: "Mas espero que conoceréis que nosotros no estamos reprobados." },
            { num: 7, text: "Y oramos a Dios que ninguna cosa mala hagáis; no para que nosotros aparezcamos aprobados, sino para que vosotros hagáis lo bueno, aunque nosotros seamos como reprobados." },
            { num: 8, text: "Porque nada podemos contra la verdad, sino por la verdad." },
            { num: 9, text: "Por lo cual nos gozamos de que seamos nosotros débiles, y que vosotros estéis fuertes; y aun oramos por vuestra perfección." },
            { num: 10, text: "Por esto os escribo estando ausente, para no usar de severidad cuando esté presente, conforme a la autoridad que el Señor me ha dado para edificación, y no para destrucción." },
            { num: 11, text: "Por lo demás, hermanos, tened gozo, perfeccionaos, consolaos, sed de un mismo parecer, y vivid en paz; y el Dios de paz y de amor estará con vosotros." },
            { num: 12, text: "Saludaos los unos a los otros con ósculo santo." },
            { num: 13, text: "Todos los santos os saludan." },
            { num: 14, text: "La gracia del Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo sean con todos vosotros. Amén." }
        ]
    }
];

// Organización en 8 días de 4 capítulos (excepto el último día con la culminación)
class DailyChaptersManager {
    constructor() {
        this.dailyPlans = [
            {
                day: 1,
                title: "Día 1: 1ª de Corintios 1 al 4",
                theme: "La Sabiduría de la Cruz, el Espíritu y los Siervos de Dios",
                contextOverview: "En esta primera jornada, Pablo confronta las divisiones y el orgullo humano en Corinto. Proclama que la verdadera sabiduría y poder se revelan en Cristo crucificado, y que los ministros son administradores fieles de los misterios divinos.",
                chapters: ALL_CHAPTERS.slice(0, 4)
            },
            {
                day: 2,
                title: "Día 2: 1ª de Corintios 5 al 8",
                theme: "Pureza en el Cuerpo, Santidad, Vocación y el Amor que Edifica",
                contextOverview: "Pablo aborda cuestiones éticas y prácticas: la disciplina de la comunidad, el cuerpo como templo sagrado del Espíritu Santo, la vocación matrimonial o célibe, y el principio supremo de que el amor debe guiar el uso de nuestra libertad.",
                chapters: ALL_CHAPTERS.slice(4, 8)
            },
            {
                day: 3,
                title: "Día 3: 1ª de Corintios 9 al 12",
                theme: "La Carrera de la Fe, la Santa Cena y la Diversidad de Dones",
                contextOverview: "Abarca la renuncia y disciplina apostólica, advertencias históricas contra la soberbia, el orden reverente en la Cena del Señor y la enseñanza del cuerpo de Cristo donde todos los dones del Espíritu son indispensables.",
                chapters: ALL_CHAPTERS.slice(8, 12)
            },
            {
                day: 4,
                title: "Día 4: 1ª de Corintios 13 al 16",
                theme: "El Himno al Amor, la Resurrección y la Victoria Eterna",
                contextOverview: "Culminación de 1ª de Corintios con el célebre capítulo del amor ágape (cap. 13), el orden del culto (cap. 14), la defensa magistral de la resurrección corporal de Cristo y nuestra victoria sobre la muerte (cap. 15), y los encargos fraternos.",
                chapters: ALL_CHAPTERS.slice(12, 16)
            },
            {
                day: 5,
                title: "Día 5: 2ª de Corintios 1 al 4",
                theme: "El Dios de Toda Consolación, el Nuevo Pacto y Vasos de Barro",
                contextOverview: "Apertura de la segunda epístola con alabanza al Dios que consuela en las aflicciones. Pablo expone la gloria del Nuevo Pacto en el Espíritu y describe nuestra fragilidad como vasos de barro que portan el tesoro del Evangelio.",
                chapters: ALL_CHAPTERS.slice(16, 20)
            },
            {
                day: 6,
                title: "Día 6: 2ª de Corintios 5 al 8",
                theme: "Nueva Criatura, Ministerio de Reconciliación y Generosidad",
                contextOverview: "Pablo proclama que en Cristo somos nuevas criaturas y embajadores de la reconciliación. Comparte las pruebas de su ministerio, el gozo por el arrepentimiento de Corinto y motiva a la generosidad según el modelo de Jesús.",
                chapters: ALL_CHAPTERS.slice(20, 24)
            },
            {
                day: 7,
                title: "Día 7: 2ª de Corintios 9 al 12",
                theme: "El Dador Alegre, Armas Espirituales y 'Bástate mi Gracia'",
                contextOverview: "La bendición de la siembra generosa, la batalla espiritual de los pensamientos y la profunda revelación que Pablo recibió: 'Bástate mi gracia, porque mi poder se perfecciona en la debilidad', encontrando fortaleza en Cristo.",
                chapters: ALL_CHAPTERS.slice(24, 28)
            },
            {
                day: 8,
                title: "Día 8: 2ª de Corintios 13 (Cierre del Plan)",
                theme: "Examen de Fe, Comunión y la Gracia Trinitaria",
                contextOverview: "Jornada final de lectura. Pablo exhorta a los creyentes a examinarse a sí mismos si están en la fe, a vivir en paz y bendice a la iglesia con la gracia de Jesucristo, el amor del Padre y la comunión del Espíritu Santo.",
                chapters: ALL_CHAPTERS.slice(28, 29)
            }
        ];
    }

    getHistoricalIntro() {
        return HISTORICAL_INTRO;
    }

    getTotalDays() {
        return this.dailyPlans.length;
    }

    getDayPlan(dayNumber) {
        const index = Math.max(1, Math.min(dayNumber, this.dailyPlans.length)) - 1;
        return this.dailyPlans[index];
    }

    getDayForDate(targetDate, startDate) {
        const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
        const target = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());
        const diffTime = target.getTime() - start.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const dayIndex = ((diffDays % this.dailyPlans.length) + this.dailyPlans.length) % this.dailyPlans.length;
        return this.dailyPlans[dayIndex];
    }

    isDefaultHighlighted(bookNum, chapter, verseNum) {
        const key = `${bookNum}_${chapter}`;
        if (DEFAULT_HIGHLIGHTS[key] && DEFAULT_HIGHLIGHTS[key].includes(verseNum)) {
            return true;
        }
        return false;
    }

    getDefaultHighlights() {
        return DEFAULT_HIGHLIGHTS;
    }

    /**
     * Devuelve el texto del versículo según la traducción seleccionada: 'RVR1960' o 'TLA'
     */
    getVerseText(chapterObj, verseObj, version = 'RVR1960') {
        if (version === 'RVR1960') {
            return verseObj.text;
        }

        // Si existe texto TLA directo definido
        if (verseObj.textTLA) {
            return verseObj.textTLA;
        }

        // Conversión y adaptación estilística fiel al Lenguaje Actual (TLA)
        return this.adaptToTLA(verseObj.text);
    }

    /**
     * Adaptador lingüístico dinámico al estilo de la Traducción en Lenguaje Actual (TLA)
     */
    adaptToTLA(text) {
        let t = text;

        // Pronombres y posesivos de 2ª persona plural a estándar latinoamericano / contemporáneo
        t = t.replace(/\ba vosotros\b/gi, 'a ustedes')
             .replace(/\bde vosotros\b/gi, 'de ustedes')
             .replace(/\bpor vosotros\b/gi, 'por ustedes')
             .replace(/\ben vosotros\b/gi, 'en ustedes')
             .replace(/\bcon vosotros\b/gi, 'con ustedes')
             .replace(/\bpara vosotros\b/gi, 'para ustedes')
             .replace(/\bsobre vosotros\b/gi, 'sobre ustedes')
             .replace(/\bentre vosotros\b/gi, 'entre ustedes')
             .replace(/\bvosotros\b/gi, 'ustedes')
             .replace(/\bos ruego\b/gi, 'les ruego')
             .replace(/\bos he\b/gi, 'les he')
             .replace(/\bos digo\b/gi, 'les digo')
             .replace(/\bos escribo\b/gi, 'les escribo')
             .replace(/\bos di\b/gi, 'les di')
             .replace(/\bos dio\b/gi, 'les dio')
             .replace(/\bos hablo\b/gi, 'les hablo')
             .replace(/\bos anuncié\b/gi, 'les anuncié')
             .replace(/\bos \b/gi, 'les ')
             .replace(/\bvuestro\b/gi, 'su')
             .replace(/\bvuestra\b/gi, 'su')
             .replace(/\bvuestros\b/gi, 'sus')
             .replace(/\bvuestras\b/gi, 'sus')
             .replace(/\bVuestro\b/gi, 'Su')
             .replace(/\bVuestra\b/gi, 'Su')
             .replace(/\bVuestros\b/gi, 'Sus')
             .replace(/\bVuestras\b/gi, 'Sus');

        // Conjugaciones verbales a 3ª persona plural (ustedes)
        t = t.replace(/\bsois\b/gi, 'son')
             .replace(/\bfuisteis\b/gi, 'fueron')
             .replace(/\berais\b/gi, 'eran')
             .replace(/\bhabéis\b/gi, 'han')
             .replace(/\btenéis\b/gi, 'tienen')
             .replace(/\bsabéis\b/gi, 'saben')
             .replace(/\bpodéis\b/gi, 'pueden')
             .replace(/\bqueréis\b/gi, 'quieren')
             .replace(/\boísteis\b/gi, 'oyeron')
             .replace(/\bvisteis\b/gi, 'vieron')
             .replace(/\bhacéis\b/gi, 'hacen')
             .replace(/\bdecís\b/gi, 'dicen')
             .replace(/\bcreísteis\b/gi, 'creyeron')
             .replace(/\bandáis\b/gi, 'andan')
             .replace(/\bjuzgáis\b/gi, 'juzgan')
             .replace(/\bestáis\b/gi, 'están')
             .replace(/\bpodáis\b/gi, 'puedan')
             .replace(/\bseáis\b/gi, 'sean')
             .replace(/\bestéis\b/gi, 'estén')
             .replace(/\btengáis\b/gi, 'tengan')
             .replace(/\bsepáis\b/gi, 'sepan')
             .replace(/\bhagáis\b/gi, 'hagan')
             .replace(/\bpongáis\b/gi, 'pongan')
             .replace(/\bcomáis\b/gi, 'coman')
             .replace(/\bpidáis\b/gi, 'pidan')
             .replace(/\bsintáis\b/gi, 'sientan')
             .replace(/\bveáis\b/gi, 'vean')
             .replace(/\bseáis\b/gi, 'sean')
             .replace(/\bpenséis\b/gi, 'piensen')
             .replace(/\bdeberíais\b/gi, 'deberían')
             .replace(/\bpudierais\b/gi, 'pudieran')
             .replace(/\bhicierais\b/gi, 'hicieran')
             .replace(/\bhubierais\b/gi, 'hubieran')
             .replace(/\btuvierais\b/gi, 'tuvieran')
             .replace(/\bhiciereis\b/gi, 'hicieren')
             .replace(/\btuviereis\b/gi, 'tuvieren')
             .replace(/\bpermaneciereis\b/gi, 'permanecieren')
             .replace(/\bengañéis\b/gi, 'engañen')
             .replace(/\bgloriéis\b/gi, 'gloríen');

        // Imperativos plurales
        t = t.replace(/\bmirad\b/gi, 'miren')
             .replace(/\boíd\b/gi, 'oigan')
             .replace(/\bcomed\b/gi, 'coman')
             .replace(/\bbebed\b/gi, 'beban')
             .replace(/\bhuid\b/gi, 'huyan')
             .replace(/\blimpiaos\b/gi, 'límpiense')
             .replace(/\bguardaos\b/gi, 'guárdense')
             .replace(/\bgozaos\b/gi, 'alégrense')
             .replace(/\bglorificad\b/gi, 'glorifiquen')
             .replace(/\bsed\b/gi, 'sean')
             .replace(/\bhaced\b/gi, 'hagan')
             .replace(/\bestad\b/gi, 'estén')
             .replace(/\bvelad\b/gi, 'manténganse alertas')
             .replace(/\bcorred\b/gi, 'corran')
             .replace(/\bcásense\b/gi, 'cásense')
             .replace(/\bjuntaros\b/gi, 'unirse')
             .replace(/\bno os neguéis\b/gi, 'no se nieguen');

        // Léxico arcaico a contemporáneo estilo TLA
        t = t.replace(/\bMas \b/g, 'Pero ')
             .replace(/\bmas \b/g, 'pero ')
             .replace(/\bEmpero \b/g, 'Sin embargo ')
             .replace(/\bempero \b/g, 'sin embargo ')
             .replace(/\bvianda\b/gi, 'alimento')
             .replace(/\bviandas\b/gi, 'alimentos')
             .replace(/\bfornicación\b/gi, 'inmoralidad sexual')
             .replace(/\bfornicaciones\b/gi, 'actos inmorales')
             .replace(/\bfornicarios\b/gi, 'los que practican inmoralidad sexual')
             .replace(/\bfornicario\b/gi, 'inmoral')
             .replace(/\bforniquemos\b/gi, 'cometamos inmoralidad sexual')
             .replace(/\bgentiles\b/gi, 'no creyentes')
             .replace(/\bcónocido\b/gi, 'conocido')
             .replace(/\btropezadero\b/gi, 'motivo de tropiezo');

        return t;
    }
}

window.dailyChaptersManager = new DailyChaptersManager();
