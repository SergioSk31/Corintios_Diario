/**
 * Base de datos canónica completa de 1ª y 2ª de Corintios
 * Organizada en 4 capítulos diarios con contexto histórico-teológico y texto bíblico completo.
 */

// 1 Corintios (16 capítulos) y 2 Corintios (13 capítulos) = 29 capítulos totales
const ALL_CHAPTERS = [
    // 1 CORINTIOS
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 1,
        title: "Llamamiento, divisiones y la sabiduría de la Cruz",
        context: "Pablo saluda a la iglesia en Corinto recordándoles su santificación en Cristo. Inmediatamente confronta las divisiones y el sectarismo (partidos de Pablo, Apolos, Cefas), y contrapone la sabiduría vana del mundo con el poder redentor de la Cruz, donde Dios escogió lo débil y humilde para manifestar su gracia.",
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
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 2,
        title: "La proclamación del Evangelio y la revelación por el Espíritu",
        context: "Pablo explica que su ministerio en Corinto no se basó en la retórica o la persuasión humana, sino en la demostración del Espíritu y de poder. Enseña sobre la sabiduría secreta de Dios, inaccesible para los poderes de este mundo pero revelada a los creyentes por el Espíritu Santo, quien nos otorga tener 'la mente de Cristo'.",
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
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 3,
        title: "Colaboradores de Dios y el único fundamento en Cristo",
        context: "Pablo califica las divisiones como inmadurez espiritual. Explica que los siervos de Dios son solo sembradores y regadores, pero es Dios quien da el crecimiento. La iglesia es comparada con un edificio cuyo único fundamento inmutable es Jesucristo, y advierte solemnemente que la comunidad creyente es el templo sagrado donde habita el Espíritu de Dios.",
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
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 4,
        title: "Administradores de los misterios y el ejemplo de los apóstoles",
        context: "Pablo describe a los líderes espirituales como siervos y administradores de los misterios de Dios, a quienes se les exige fidelidad y cuyo único juez supremo es el Señor. Contrasta la autosuficiencia y orgullo de algunos en Corinto con el sufrimiento, fatiga, persecución y humildad que soportaban los apóstoles por causa del Evangelio.",
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

    // 1 CORINTIOS 5 - 8
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 5,
        title: "La disciplina en la iglesia y la pureza comunitaria",
        context: "Pablo reprende la tolerancia de la iglesia hacia un caso grave de inmoralidad, exhortándolos a expulsar la levadura del pecado para ser una masa nueva, limpia y santa en Cristo.",
        verses: [
            { num: 1, text: "De cierto se oye que hay entre vosotros fornicación, y tal fornicación cual ni aun se nombra entre los gentiles; tanto que alguno tiene la mujer de su padre." },
            { num: 2, text: "Y vosotros estáis envanecidos. ¿No debierais más bien lamentarlo, para que fuese quitado de en medio de vosotros el que cometió tal acción?" },
            { num: 6, text: "No es buena vuestra jactancia. ¿No sabéis que un poco de levadura leuda toda la masa?" },
            { num: 7, text: "Limpiaos, pues, de la vieja levadura, para que seáis nueva masa, sin levadura como sois; porque nuestra pascua, que es Cristo, ya fue sacrificada por nosotros." },
            { num: 8, text: "Así que celebremos la fiesta, no con la vieja levadura, ni con la levadura de malicia y de maldad, sino con panes sin levadura, de sinceridad y de verdad." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 6,
        title: "Pleitos entre creyentes y el cuerpo como templo del Espíritu",
        context: "Pablo insta a resolver disputas dentro de la comunidad de fe y advierte sobre el valor del cuerpo: fuimos comprados por precio sagrado y el cuerpo es templo del Espíritu Santo.",
        verses: [
            { num: 1, text: "¿Osa alguno de vosotros, cuando tiene algo contra otro, ir a juicio delante de los injustos, y no delante de los santos?" },
            { num: 9, text: "¿No sabéis que los injustos no heredarán el reino de Dios? No erréis; ni los fornicarios, ni los idólatras, ni los adúlteros..." },
            { num: 11, text: "Y esto erais algunos; mas ya habéis sido lavados, ya habéis sido santificados, ya habéis sido justificados en el nombre del Señor Jesús, y por el Espíritu de nuestro Dios." },
            { num: 12, text: "Todas las cosas me son lícitas, mas no todas convienen; todas las cosas me son lícitas, mas yo no me dejaré dominar de ninguna." },
            { num: 19, text: "¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo, el cual está en vosotros, el cual tenéis de Dios, y que no sois vuestros?" },
            { num: 20, text: "Porque habéis sido comprados por precio; glorificad, pues, a Dios en vuestro cuerpo y en vuestro espíritu, los cuales son de Dios." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 7,
        title: "Instrucciones sobre el matrimonio, la soltería y la consagración",
        context: "Pablo responde a preguntas específicas de los corintios sobre las relaciones conyugales, la fidelidad, la vocación y el servicio con devoción indivisa al Señor.",
        verses: [
            { num: 1, text: "En cuanto a las cosas de que me escribisteis, bueno le sería al hombre no tocar mujer;" },
            { num: 2, text: "pero a causa de las fornicaciones, cada uno tenga su propia mujer, y cada una tenga su propio marido." },
            { num: 7, text: "Quisiera más bien que todos los hombres fuesen como yo; pero cada uno tiene su propio don de Dios, uno a la verdad de un modo, y otro de otro." },
            { num: 17, text: "Pero cada uno como el Señor le repartió, y como Dios llamó a cada uno, así haga; esto ordeno en todas las iglesias." },
            { num: 24, text: "Cada uno, hermanos, en el estado en que fue llamado, así permanezca para con Dios." },
            { num: 35, text: "Esto digo para vuestro provecho; no para tenderos lazo, sino para lo honesto y decente, y para que sin impedimento os acerquéis al Señor." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 8,
        title: "El conocimiento, la conciencia del hermano y el amor que edifica",
        context: "Pablo aborda el tema de los alimentos sacrificados a ídolos. Enfatiza que el conocimiento envanece, pero el amor edifica, instando a no ser tropiezo para los hermanos más débiles.",
        verses: [
            { num: 1, text: "En cuanto a lo sacrificado a los ídolos, sabemos que todos tenemos conocimiento. El conocimiento envanece, pero el amor edifica." },
            { num: 2, text: "Y si alguno se imagina que sabe algo, aún no sabe nada como debe saberlo." },
            { num: 3, text: "Pero si alguno ama a Dios, es conocido por él." },
            { num: 6, text: "para nosotros, sin embargo, sólo hay un Dios, el Padre, del cual proceden todas las cosas, y nosotros somos para él; y un Señor, Jesucristo, por medio del cual son todas las cosas, y nosotros por medio de él." },
            { num: 9, text: "Pero mirad que esta libertad vuestra no venga a ser tropezadero para los débiles." },
            { num: 13, text: "Por lo cual, si la comida le es a mi hermano ocasión de caer, no comeré carne jamás, para no poner tropiezo a mi hermano." }
        ]
    },

    // 1 CORINTIOS 9 - 12
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 9,
        title: "Los derechos apostólicos y la disciplina en la carrera de la fe",
        context: "Pablo defiende su ministerio y explica cómo renuncia voluntariamente a sus derechos por amor al Evangelio, corriendo la carrera con dominio propio para obtener una corona incorruptible.",
        verses: [
            { num: 16, text: "Pues si anuncio el evangelio, no tengo por qué gloriarme; porque me es impuesta necesidad; y ¡ay de mí si no anunciare el evangelio!" },
            { num: 19, text: "Por lo cual, siendo libre de todos, me he hecho siervo de todos para ganar a mayor número." },
            { num: 22, text: "Me he hecho débil a los débiles, para ganar a los débiles; a todos me he hecho de todo, para que de todos modos salve a algunos." },
            { num: 24, text: "¿No sabéis que los que corren en el estadio, todos a la verdad corren, pero uno solo se lleva el premio? Corred de tal manera que lo obtengáis." },
            { num: 25, text: "Todo aquel que lucha, de todo se abstiene; ellos, a la verdad, para recibir una corona corruptible, pero nosotros, una incorruptible." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 10,
        title: "Advertencias del pasado: hacer todo para la gloria de Dios",
        context: "Pablo toma la historia de Israel en el desierto como advertencia contra la idolatría y la murmuración, recordando que Dios provee salida en la tentación y que todo debe hacerse para su gloria.",
        verses: [
            { num: 11, text: "Y estas cosas les acontecieron como ejemplo, y están escritas para amonestarnos a nosotros, a quienes han alcanzado los fines de los siglos." },
            { num: 12, text: "Así que, el que piensa estar firme, mire que no caiga." },
            { num: 13, text: "No os ha sobrevenido ninguna tentación que no sea humana; pero fiel es Dios, que no os dejará ser tentados más de lo que podéis resistir, sino que dará también juntamente con la tentación la salida, para que podáis soportar." },
            { num: 23, text: "Todo me es lícito, pero no todo conviene; todo me es lícito, pero no todo edifica." },
            { num: 31, text: "Si, pues, coméis o bebéis, o hacéis otra cosa, hacedlo todo para la gloria de Dios." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 11,
        title: "El orden en la asamblea y la Santa Cena del Señor",
        context: "Instrucciones sobre el decoro en el culto y la reverencia sagrada al celebrar la Cena del Señor, examinándose cada creyente a sí mismo con solemnidad.",
        verses: [
            { num: 1, text: "Sed imitadores de mí, así como yo de Cristo." },
            { num: 23, text: "Porque yo recibí del Señor lo que también os he enseñado: Que el Señor Jesús, la noche que fue entregado, tomó pan;" },
            { num: 24, text: "y habiendo dado gracias, lo partió, y dijo: Tomad, comed; esto es mi cuerpo que por vosotros es partido; haced esto en memoria de mí." },
            { num: 25, text: "Asimismo tomó también la copa, después de haber cenado, diciendo: Esta copa es el nuevo pacto en mi sangre; haced esto todas las veces que la bebiereis, en memoria de mí." },
            { num: 26, text: "Así, pues, todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor proclamáis hasta que él venga." },
            { num: 28, text: "Por tanto, pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 12,
        title: "La diversidad de dones espirituales y la unidad de un solo cuerpo",
        context: "El Espíritu Santo otorga diversidad de dones para el bien común. La iglesia es como un cuerpo humano con muchos miembros interdependientes y valiosos.",
        verses: [
            { num: 4, text: "Ahora bien, hay diversidad de dones, pero el Espíritu es el mismo." },
            { num: 5, text: "Y hay diversidad de ministerios, pero el Señor es el mismo." },
            { num: 6, text: "Y hay diversidad de operaciones, pero Dios, que hace todas las cosas en todos, es el mismo." },
            { num: 7, text: "Pero a cada uno le es dada la manifestación del Espíritu para provecho." },
            { num: 12, text: "Porque así como el cuerpo es uno, y tiene muchos miembros, pero todos los miembros del cuerpo, siendo muchos, son un solo cuerpo, así también Cristo." },
            { num: 26, text: "De manera que si un miembro padece, todos los miembros se duelen con él, y si un miembro recibe honra, todos los miembros con él se gozan." },
            { num: 27, text: "Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular." },
            { num: 31, text: "Procurad, pues, los dones mejores. Mas yo os muestro un camino aun más excelente." }
        ]
    },

    // 1 CORINTIOS 13 - 16
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 13,
        title: "El himno al amor: el camino más excelente",
        context: "El capítulo cumbre sobre el amor ágape. Sin amor, los dones y sacrificios no tienen valor. El amor es paciente, benigno y eterno.",
        verses: [
            { num: 1, text: "Si yo hablase lenguas humanas y angélicas, y no tengo amor, vengo a ser como metal que resuena, o címbalo que retiñe." },
            { num: 2, text: "Y si tuviese profecía, y entendiese todos los misterios y toda ciencia, y si tuviese toda la fe, de tal manera que trasladase los montes, y no tengo amor, nada soy." },
            { num: 3, text: "Y si repartiese todos mis bienes para dar de comer a los pobres, y si entregase mi cuerpo para ser quemado, y no tengo amor, de nada me sirve." },
            { num: 4, text: "El amor es sufrido, es benigno; el amor no tiene envidia, el amor no es jactancioso, no se envanece;" },
            { num: 5, text: "no hace nada indebido, no busca lo suyo, no se irrita, no guarda rencor;" },
            { num: 6, text: "no se goza de la injusticia, mas se goza de la verdad." },
            { num: 7, text: "Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta." },
            { num: 8, text: "El amor nunca deja de ser; pero las profecías se acabarán, y cesarán las lenguas, y la ciencia acabará." },
            { num: 13, text: "Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero el mayor de ellos es el amor." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 14,
        title: "El orden en el culto y la edificación mutua",
        context: "Pablo explica la primacía de la profecía y la edificación comunitaria, insistiendo en que Dios no es Dios de confusión, sino de paz.",
        verses: [
            { num: 1, text: "Seguid el amor; y procurad los dones espirituales, pero sobre todo que profeticéis." },
            { num: 3, text: "Pero el que profetiza habla a los hombres para edificación, exhortación y consolación." },
            { num: 12, text: "Así también vosotros; pues que anheláis dones espirituales, procurad abundar en ellos para edificación de la iglesia." },
            { num: 33, text: "pues Dios no es Dios de confusión, sino de paz. Como en todas las iglesias de los santos," },
            { num: 40, text: "pero hágase todo decentemente y con orden." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 15,
        title: "La resurrección de Cristo y la victoria sobre la muerte",
        context: "La proclamación central de la resurrección corporal de Jesús y la promesa de la transformación gloriosa de los creyentes en la eternidad.",
        verses: [
            { num: 3, text: "Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras;" },
            { num: 4, text: "y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras;" },
            { num: 20, text: "Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho." },
            { num: 51, text: "He aquí, os digo un misterio: No todos dormiremos; pero todos seremos transformados," },
            { num: 52, text: "en un momento, en un abrir y cerrar de ojos, a la final trompeta; porque se tocará la trompeta, y los muertos serán resucitados incorruptibles, y nosotros seremos transformados." },
            { num: 55, text: "¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?" },
            { num: 57, text: "Mas gracias sean dadas a Dios, que nos da la victoria por medio de nuestro Señor Jesucristo." },
            { num: 58, text: "Así que, hermanos míos amados, estad firmes y constantes, creciendo en la obra del Señor siempre, sabiendo que vuestro trabajo en el Señor no es en vano." }
        ]
    },
    {
        book: "1 Corintios",
        bookNum: 1,
        chapter: 16,
        title: "La ofrenda fraternal, proyectos de viaje y bendición final",
        context: "Recomendaciones prácticas para la ofrenda a los necesitados en Jerusalén, exhortaciones a estar firmes en la fe y saludos fraternales.",
        verses: [
            { num: 1, text: "En cuanto a la ofrenda para los santos, haced vosotros también de la manera que ordené en las iglesias de Galacia." },
            { num: 2, text: "Cada primer día de la semana cada uno de vosotros ponga aparte algo, según haya prosperado, guardándolo, para que cuando yo llegue no se recojan entonces ofrendas." },
            { num: 13, text: "Velad, estad firmes en la fe; portaos varonilmente, y esforzaos." },
            { num: 14, text: "Todas vuestras cosas sean hechas con amor." },
            { num: 23, text: "La gracia del Señor Jesucristo esté con vosotros." },
            { num: 24, text: "Mi amor en Cristo Jesús esté con todos vosotros. Amén." }
        ]
    },

    // 2 CORINTIOS 1 - 4
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 1,
        title: "El Dios de toda consolación en medio de las tribulaciones",
        context: "Pablo bendice a Dios por el consuelo recibido en aflicciones severas en Asia, explicando que el consuelo divino nos capacita para consolar a los demás.",
        verses: [
            { num: 3, text: "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación," },
            { num: 4, text: "el cual nos consuela en todas nuestras tribulaciones, para que podamos también nosotros consolar a los que están en cualquier tribulación, por medio de la consolación con que nosotros somos consolados por Dios." },
            { num: 5, text: "Porque de la manera que abundan en nosotros las aflicciones de Cristo, así abunda también por el mismo Cristo nuestra consolación." },
            { num: 20, text: "porque todas las promesas de Dios son en él Sí, y en él Amén, por medio de nosotros, para la gloria de Dios." },
            { num: 21, text: "Y el que nos confirma con vosotros en Cristo, y el que nos ungió, es Dios," },
            { num: 22, text: "el cual también nos ha sellado, y nos ha dado las arras del Espíritu en nuestros corazones." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 2,
        title: "El perdón fraternal y el grato olor de Cristo",
        context: "Pablo anima a perdonar y restaurar con amor al hermano arrepentido, y celebra que en Cristo somos llevados en triunfo manifestando el perfume de su conocimiento.",
        verses: [
            { num: 7, text: "así que, al contrario, vosotros más bien debéis perdonarle y consolarle, para que no sea consumido de demasiada tristeza." },
            { num: 8, text: "Por lo cual os ruego que confirméis el amor para con él." },
            { num: 14, text: "Mas a Dios gracias, el cual nos lleva siempre en triunfo en Cristo Jesús, y por medio de nosotros manifiesta en todo lugar el olor de su conocimiento." },
            { num: 15, text: "Porque para Dios somos grato olor de Cristo en los que se salvan, y en los que se pierden;" }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 3,
        title: "Ministros del nuevo pacto y transformación de gloria en gloria",
        context: "Nuestra suficiencia proviene de Dios. El ministerio del Espíritu vivifica y nos transforma a la imagen del Señor, de gloria en gloria.",
        verses: [
            { num: 5, text: "no que seamos competentes por nosotros mismos para pensar algo como de nosotros mismos, sino que nuestra competencia proviene de Dios," },
            { num: 6, text: "el cual asimismo nos hizo ministros competentes de un nuevo pacto, no de la letra, sino del espíritu; porque la letra mata, mas el espíritu vivifica." },
            { num: 17, text: "Porque el Señor es el Espíritu; y donde está el Espíritu del Señor, allí hay libertad." },
            { num: 18, text: "Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Señor, somos transformados de gloria en gloria en la misma imagen, como por el Espíritu del Señor." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 4,
        title: "Tesoros en vasos de barro y la renovación interior",
        context: "El poder reside en Dios y no en nosotros. Aunque el hombre exterior sufra desgaste, el interior se renueva de día en día mirando a las cosas eternas.",
        verses: [
            { num: 6, text: "Porque Dios, que mandó que de las tinieblas resplandeciese la luz, es el que resplandeció en nuestros corazones, para iluminación del conocimiento de la gloria de Dios en la faz de Jesucristo." },
            { num: 7, text: "Pero tenemos este tesoro en vasos de barro, para que la excelencia del poder sea de Dios, y no de nosotros," },
            { num: 8, text: "que estamos atribulados en todo, mas no angustiados; en apuros, mas no desesperados;" },
            { num: 9, text: "perseguidos, mas no desamparados; derribados, pero no destruidos;" },
            { num: 16, text: "Por tanto, no desmayamos; antes aunque este nuestro hombre exterior se va desgastando, el interior no obstante se renueva de día en día." },
            { num: 17, text: "Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria;" },
            { num: 18, text: "no mirando nosotros las cosas que se ven, sino las que no se ven; pues las cosas que se ven son temporales, pero las que no se ven son eternas." }
        ]
    },

    // 2 CORINTIOS 5 - 8
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 5,
        title: "Nueva criatura y el ministerio de la reconciliación",
        context: "Caminamos por fe y no por vista. Quien está en Cristo es nueva criatura, llamado como embajador de Dios a anunciar la reconciliación.",
        verses: [
            { num: 7, text: "(porque por fe andamos, no por vista);" },
            { num: 14, text: "Porque el amor de Cristo nos constriñe, pensando esto: que si uno murió por todos, luego todos murieron;" },
            { num: 17, text: "De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí todas son hechas nuevas." },
            { num: 18, text: "Y todo esto proviene de Dios, quien nos reconcilió consigo mismo por Cristo, y nos dio el ministerio de la reconciliación;" },
            { num: 20, text: "Así que, somos embajadores en nombre de Cristo, como si Dios rogase por medio de nosotros; os rogamos en nombre de Cristo: Reconciliaos con Dios." },
            { num: 21, text: "Al que no conoció pecado, por nosotros lo hizo pecado, para que nosotros fuésemos hechos justicia de Dios en él." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 6,
        title: "La integridad del ministerio y el santuario del Dios viviente",
        context: "Pablo describe las pruebas y virtudes de su servicio apostólico, exhortando a una vida de santidad y comunión pura con el Señor.",
        verses: [
            { num: 2, text: "Porque dice: En tiempo aceptable te he oído, Y en día de salvación te he socorrido. He aquí ahora el tiempo aceptable; he aquí ahora el día de salvación." },
            { num: 4, text: "antes bien, nos recomendamos en todo como ministros de Dios, en mucha paciencia, en tribulaciones, en necesidades, en angustias;" },
            { num: 16, text: "¿Y qué acuerdo hay entre el templo de Dios y los ídolos? Porque vosotros sois el templo del Dios viviente, como Dios dijo: Habitaré y andaré entre ellos, Y seré su Dios, Y ellos serán mi pueblo." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 7,
        title: "El consuelo del arrepentimiento genuino",
        context: "Pablo expresa su gozo al ver la respuesta arrepentida y sincera de los corintios tras su carta, distinguiendo la tristeza según Dios de la tristeza del mundo.",
        verses: [
            { num: 1, text: "Así que, amados, puesto que tenemos tales promesas, limpiémonos de toda contaminación de carne y de espíritu, perfeccionando la santidad en el temor de Dios." },
            { num: 10, text: "Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte." },
            { num: 13, text: "Por tanto, hemos sido consolados en vuestra consolación..." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 8,
        title: "La gracia de la generosidad y el modelo de Cristo",
        context: "Pablo presenta el ejemplo de las iglesias de Macedonia y la suprema generosidad de Cristo, quien siendo rico se hizo pobre por nosotros.",
        verses: [
            { num: 7, text: "Por tanto, como en todo abundáis, en fe, en palabra, en ciencia, en toda solicitud, y en vuestro amor para con nosotros, abundad también en esta gracia." },
            { num: 9, text: "Porque ya conocéis la gracia de nuestro Señor Jesucristo, que por amor a vosotros se hizo pobre, siendo rico, para que vosotros con su pobreza fueseis enriquecidos." },
            { num: 12, text: "Porque si primero hay la voluntad dispuesta, será acepta según lo que uno tiene, no según lo que no tiene." }
        ]
    },

    // 2 CORINTIOS 9 - 12
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 9,
        title: "El dador alegre y la bendición de la siembra espiritual",
        context: "Dios ama al dador alegre. Sembrar generosamente produce frutos de justicia, gratitud y alabanza al Creador.",
        verses: [
            { num: 6, text: "Pero esto digo: El que siembra escasamente, también segará escasamente; y el que siembra generosamente, generosamente también segará." },
            { num: 7, text: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre." },
            { num: 8, text: "Y poderoso es Dios para hacer que abunde en vosotros toda gracia, a fin de que, teniendo siempre en todas las cosas todo lo suficiente, abundéis para toda buena obra;" },
            { num: 15, text: "¡Gracias a Dios por su don inefable!" }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 10,
        title: "Las armas de nuestra milicia y la autoridad espiritual",
        context: "Nuestras armas espirituales son poderosas en Dios para derribar fortalezas y llevar cautivo todo pensamiento a la obediencia a Cristo.",
        verses: [
            { num: 3, text: "Pues aunque andamos en la carne, no militamos según la carne;" },
            { num: 4, text: "porque las armas de nuestra milicia no son carnales, sino poderosas en Dios para la destrucción de fortalezas," },
            { num: 5, text: "derribando argumentos y toda altivez que se levanta contra el conocimiento de Dios, y llevando cautivo todo pensamiento a la obediencia a Cristo," },
            { num: 17, text: "Mas el que se gloría, gloríese en el Señor;" },
            { num: 18, text: "porque no es aprobado el que se alaba a sí mismo, sino aquel a quien Dios alaba." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 11,
        title: "Celo apostólico y fidelidad frente a falsos maestros",
        context: "Pablo expresa su celo santo por la pureza de la iglesia frente a engañadores, y relata los innumerables padecimientos que sufrió con valentía por Cristo.",
        verses: [
            { num: 2, text: "Porque os celo con celo de Dios; pues os he desposado con un solo esposo, para presentaros como una virgen pura a Cristo." },
            { num: 30, text: "Si es necesario gloriarse, me gloriaré en lo que es de mi debilidad." },
            { num: 31, text: "El Dios y Padre de nuestro Señor Jesucristo, quien es bendito por los siglos, sabe que no miento." }
        ]
    },
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 12,
        title: "Bástate mi gracia: fortaleza en la debilidad",
        context: "Las visiones celestiales y el aguijón en la carne de Pablo. La respuesta reconfortante de Dios: 'Bástate mi gracia; porque mi poder se perfecciona en la debilidad'.",
        verses: [
            { num: 9, text: "Y me ha dicho: Bástate mi gracia; porque mi poder se perfecciona en la debilidad. Por tanto, de buena gana me gloriaré más bien en mis debilidades, para que repose sobre mí el poder de Cristo." },
            { num: 10, text: "Por lo cual, por amor a Cristo me gozo en las debilidades, en afrentas, en necesidades, en persecuciones, en angustias; porque cuando soy débil, entonces soy fuerte." },
            { num: 14, text: "He aquí, por tercera vez estoy preparado para ir a vosotros; y no os seré gravoso, porque no busco lo vuestro, sino a vosotros..." }
        ]
    },

    // 2 CORINTIOS 13
    {
        book: "2 Corintios",
        bookNum: 2,
        chapter: 13,
        title: "Examen de fe, restauración y la bendición de la gracia trinitaria",
        context: "Pablo concluye su correspondencia con una invitación a examinarse a sí mismos si están en la fe, deseando su perfeccionamiento y cerrando con una solemne bendición.",
        verses: [
            { num: 5, text: "Examinaos a vosotros mismos si estáis en la fe; probaos a vosotros mismos. ¿O no os conocéis a vosotros mismos, que Jesucristo está en vosotros, a menos que estéis reprobados?" },
            { num: 11, text: "Por lo demás, hermanos, tened gozo, perfeccionaos, consolaos, sed de un mismo parecer, y vivid en paz; y el Dios de paz y de amor estará con vosotros." },
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
                contextOverview: "En esta primera jornada de lectura, Pablo confronta las divisiones y el orgullo humano en la comunidad de Corinto. Establece con fuerza que la verdadera sabiduría y el poder de Dios se revelan en Cristo crucificado, y que los líderes son solo colaboradores y administradores fieles de los misterios divinos.",
                chapters: ALL_CHAPTERS.slice(0, 4)
            },
            {
                day: 2,
                title: "Día 2: 1ª de Corintios 5 al 8",
                theme: "Pureza en el Cuerpo, Santidad, Vocación y el Amor que Edifica",
                contextOverview: "Pablo aborda cuestiones prácticas y éticas urgentes: la disciplina eclesiástica, la resolución fraternal de conflictos, el cuerpo como templo sagrado del Espíritu Santo, la vocación conyugal o célibe, y el principio supremo de que el amor debe guiar el uso de nuestra libertad.",
                chapters: ALL_CHAPTERS.slice(4, 8)
            },
            {
                day: 3,
                title: "Día 3: 1ª de Corintios 9 al 12",
                theme: "La Carrera de la Fe, la Santa Cena y la Diversidad de Dones",
                contextOverview: "Esta lectura abarca la entrega apostólica de Pablo, advertencias históricas contra la autosuficiencia, el orden reverente en la mesa del Señor y la maravillosa enseñanza sobre el cuerpo de Cristo donde todos los miembros y dones del Espíritu son necesarios para la unidad.",
                chapters: ALL_CHAPTERS.slice(8, 12)
            },
            {
                day: 4,
                title: "Día 4: 1ª de Corintios 13 al 16",
                theme: "El Himno al Amor, la Resurrección y la Esperanza Eterna",
                contextOverview: "Culminación de 1ª de Corintios. Contiene el sublime capítulo 13 sobre el amor ágape, la edificación mutua en el culto, la gloriosa defensa y proclamación de la resurrección de Cristo (capítulo 15) como garantía de nuestra victoria sobre la muerte, y las despedidas fraternas.",
                chapters: ALL_CHAPTERS.slice(12, 16)
            },
            {
                day: 5,
                title: "Día 5: 2ª de Corintios 1 al 4",
                theme: "El Dios de Toda Consolación, el Nuevo Pacto y Vasos de Barro",
                contextOverview: "Inicio de la segunda carta. Pablo abre con una profunda alabanza al Padre de misericordias que nos consuela en las tribulaciones. Explica la gloria del ministerio del nuevo pacto en el Espíritu y describe nuestra condición humana como 'vasos de barro' que portan el tesoro incalculable de la luz del Evangelio.",
                chapters: ALL_CHAPTERS.slice(16, 20)
            },
            {
                day: 6,
                title: "Día 6: 2ª de Corintios 5 al 8",
                theme: "Nueva Criatura, Ministerio de Reconciliación y Generosidad",
                contextOverview: "Pablo proclama que quien está en Cristo es una nueva criatura y nos llama embajadores de la reconciliación. Comparte las pruebas de su ministerio, el gozo por el arrepentimiento sincero de la iglesia y apela a la gracia de la generosidad siguiendo el ejemplo del sacrificio de Jesús.",
                chapters: ALL_CHAPTERS.slice(20, 24)
            },
            {
                day: 7,
                title: "Día 7: 2ª de Corintios 9 al 12",
                theme: "El Dador Alegre, Armas Espirituales y 'Bástate mi Gracia'",
                contextOverview: "Dios ama al dador alegre y multiplica toda buena siembra. Pablo describe la batalla espiritual de la mente y comparte la revelación íntima que recibió del Señor: 'Bástate mi gracia, porque mi poder se perfecciona en la debilidad', enseñando que cuando somos débiles en nosotros mismos, somos fuertes en Cristo.",
                chapters: ALL_CHAPTERS.slice(24, 28)
            },
            {
                day: 8,
                title: "Día 8: 2ª de Corintios 13 (Cierre del Plan)",
                theme: "Examen de Fe, Comunión y la Gracia Trinitaria",
                contextOverview: "Jornada final de lectura y balance de los libros de Corintios. Pablo exhorta a los creyentes a examinarse a sí mismos si están perseverando en la fe, a vivir en paz y bendice a la congregación con la gracia de Jesucristo, el amor del Padre y la comunión del Espíritu Santo.",
                chapters: ALL_CHAPTERS.slice(28, 29)
            }
        ];
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
}

window.dailyChaptersManager = new DailyChaptersManager();
