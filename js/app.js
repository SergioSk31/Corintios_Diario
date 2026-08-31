/**
 * Aplicación principal: Corintios Diario (4 Capítulos Diarios)
 * Lectura bíblica completa, contexto histórico-teológico y rutina de 30 minutos.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Estado
    const state = {
        currentDay: 1,
        startDate: null,
        completedDays: new Set(),
        streak: 0,
        lastCompletedDate: null,
        theme: 'light',
        fontSize: 'normal',
        bibleVersion: 'RVR1960' // 'RVR1960' o 'TLA'
    };

    // Referencias DOM
    const elements = {
        // Vistas
        btnTabCover: document.getElementById('btnTabCover'),
        btnTabReading: document.getElementById('btnTabReading'),
        btnHeroStart: document.getElementById('btnHeroStart'),
        coverSection: document.getElementById('coverSection'),
        readingSection: document.getElementById('readingSection'),

        // Versión bíblica
        btnVersionRVR: document.getElementById('btnVersionRVR'),
        btnVersionTLA: document.getElementById('btnVersionTLA'),

        daysBar: document.getElementById('daysBar'),
        streakCount: document.getElementById('streakCount'),
        themeToggle: document.getElementById('themeToggle'),
        fontSizeToggle: document.getElementById('fontSizeToggle'),
        
        // Encabezado del Día
        dayMetaBadge: document.getElementById('dayMetaBadge'),
        dayMainTitle: document.getElementById('dayMainTitle'),
        daySubtitle: document.getElementById('daySubtitle'),
        overviewContextText: document.getElementById('overviewContextText'),
        
        // Contenedor de los 4 Capítulos
        chaptersContainer: document.getElementById('chaptersContainer'),

        // Esgrima Bíblico Quiz
        esgrimaQuizCard: document.getElementById('esgrimaQuizCard'),
        quizScoreText: document.getElementById('quizScoreText'),
        quizRefTag: document.getElementById('quizRefTag'),
        quizQuestionText: document.getElementById('quizQuestionText'),
        quizOptionsList: document.getElementById('quizOptionsList'),
        quizFeedbackBox: document.getElementById('quizFeedbackBox'),
        feedbackStatus: document.getElementById('feedbackStatus'),
        feedbackExplanation: document.getElementById('feedbackExplanation'),
        btnSkipQuestion: document.getElementById('btnSkipQuestion'),
        btnNextQuestion: document.getElementById('btnNextQuestion'),
        
        // Botón de completado
        btnCompleteDay: document.getElementById('btnCompleteDay'),
        
        // Temporizador de 30 min en cabecera
        timerDigitsMini: document.getElementById('timerDigitsMini'),
        btnTimerToggleMini: document.getElementById('btnTimerToggleMini'),
        btnTimerResetMini: document.getElementById('btnTimerResetMini'),
        
        // Toast
        toast: document.getElementById('toast')
    };

    // Estado del Quiz de Esgrima Bíblico
    const quizState = {
        currentDay: null,
        questions: [],
        currentIndex: 0,
        score: 0,
        answered: false
    };

    // Función para cambiar de vista (Portada vs Lectura)
    function switchView(view) {
        if (view === 'cover') {
            elements.coverSection.style.display = 'flex';
            elements.readingSection.style.display = 'none';
            elements.btnTabCover.classList.add('active');
            elements.btnTabReading.classList.remove('active');
        } else {
            elements.coverSection.style.display = 'none';
            elements.readingSection.style.display = 'block';
            elements.btnTabCover.classList.remove('active');
            elements.btnTabReading.classList.add('active');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    elements.btnTabCover.addEventListener('click', () => switchView('cover'));
    elements.btnTabReading.addEventListener('click', () => switchView('reading'));
    if (elements.btnHeroStart) {
        elements.btnHeroStart.addEventListener('click', () => {
            state.currentDay = 1;
            renderDay();
            switchView('reading');
        });
    }

    // Cargar estado desde localStorage
    function loadState() {
        const storedStart = localStorage.getItem('corinthians_start_date_v2');
        if (storedStart) {
            state.startDate = new Date(storedStart);
        } else {
            state.startDate = new Date();
            localStorage.setItem('corinthians_start_date_v2', state.startDate.toISOString());
        }

        const savedCompleted = localStorage.getItem('corinthians_completed_days');
        if (savedCompleted) {
            try {
                const arr = JSON.parse(savedCompleted);
                state.completedDays = new Set(arr);
            } catch (e) {
                state.completedDays = new Set();
            }
        }

        const savedHighlights = localStorage.getItem('corinthians_custom_highlights');
        if (savedHighlights) {
            try {
                state.customHighlights = JSON.parse(savedHighlights);
            } catch (e) {
                state.customHighlights = {};
            }
        } else {
            state.customHighlights = {};
        }

        state.streak = parseInt(localStorage.getItem('corinthians_streak_v2') || '0', 10);
        state.lastCompletedDate = localStorage.getItem('corinthians_last_date_v2') || null;

        const savedTheme = localStorage.getItem('corinthians_theme') || 'light';
        setTheme(savedTheme);

        const savedFontSize = localStorage.getItem('corinthians_fontsize') || 'normal';
        setFontSize(savedFontSize);

        const savedVersion = localStorage.getItem('corinthians_bible_version') || 'RVR1960';
        setBibleVersion(savedVersion, false);

        // Calcular día correspondiente a la fecha de hoy
        const todayPlan = window.dailyChaptersManager.getDayForDate(new Date(), state.startDate);
        state.currentDay = todayPlan.day;
    }

    function setBibleVersion(version, notify = true) {
        state.bibleVersion = version;
        localStorage.setItem('corinthians_bible_version', version);

        if (elements.btnVersionRVR && elements.btnVersionTLA) {
            elements.btnVersionRVR.classList.toggle('active', version === 'RVR1960');
            elements.btnVersionTLA.classList.toggle('active', version === 'TLA');
        }

        if (notify) {
            renderDay();
            showToast(version === 'RVR1960' ? 'Traducción: Reina-Valera 1960' : 'Traducción: Lenguaje Actual (TLA)');
        }
    }

    if (elements.btnVersionRVR) {
        elements.btnVersionRVR.addEventListener('click', () => setBibleVersion('RVR1960'));
    }
    if (elements.btnVersionTLA) {
        elements.btnVersionTLA.addEventListener('click', () => setBibleVersion('TLA'));
    }

    function saveState() {
        localStorage.setItem('corinthians_completed_days', JSON.stringify(Array.from(state.completedDays)));
        localStorage.setItem('corinthians_custom_highlights', JSON.stringify(state.customHighlights));
        localStorage.setItem('corinthians_streak_v2', state.streak.toString());
        if (state.lastCompletedDate) {
            localStorage.setItem('corinthians_last_date_v2', state.lastCompletedDate);
        }
    }

    function toggleCustomHighlight(bookNum, chapter, verseNum) {
        const key = `${bookNum}_${chapter}`;
        if (!state.customHighlights[key]) {
            state.customHighlights[key] = [];
        }

        const list = state.customHighlights[key];
        const idx = list.indexOf(verseNum);
        let isNowHighlighted = false;

        if (idx >= 0) {
            list.splice(idx, 1);
            isNowHighlighted = false;
        } else {
            list.push(verseNum);
            isNowHighlighted = true;
        }

        saveState();
        return isNowHighlighted;
    }

    // =========================================================================
    // Motor de Esgrima Bíblico (Quiz)
    // =========================================================================
    function shuffleArray(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    function loadQuizForDay(dayNumber) {
        if (!window.esgrimaQuizData || !window.esgrimaQuizData[dayNumber]) {
            quizState.questions = [];
            return;
        }

        const rawQuestions = window.esgrimaQuizData[dayNumber];
        quizState.currentDay = dayNumber;
        quizState.questions = shuffleArray(rawQuestions);
        quizState.currentIndex = 0;
        quizState.score = 0;
        quizState.answered = false;

        if (elements.quizScoreText) {
            elements.quizScoreText.textContent = `Aciertos: 0`;
        }

        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        if (!quizState.questions || quizState.questions.length === 0) {
            if (elements.esgrimaQuizCard) elements.esgrimaQuizCard.style.display = 'none';
            return;
        }

        if (elements.esgrimaQuizCard) elements.esgrimaQuizCard.style.display = 'block';

        // Si se llegó al final de todas las preguntas del día, reiniciar y reordenar al azar (Ilimitado)
        if (quizState.currentIndex >= quizState.questions.length) {
            quizState.questions = shuffleArray(quizState.questions);
            quizState.currentIndex = 0;
            showToast("¡Has repasado todas las preguntas! Reiniciando preguntas al azar...");
        }

        const currentQ = quizState.questions[quizState.currentIndex];
        quizState.answered = false;

        // Ocultar feedback y alternar botones
        elements.quizFeedbackBox.style.display = 'none';
        elements.btnSkipQuestion.style.display = 'inline-flex';
        elements.btnNextQuestion.style.display = 'none';

        // Renderizar referencia y enunciado
        elements.quizRefTag.textContent = currentQ.reference;
        elements.quizQuestionText.textContent = currentQ.question;

        // Renderizar opciones A, B, C, D
        elements.quizOptionsList.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];

        currentQ.options.forEach((optText, idx) => {
            const btn = document.createElement('button');
            btn.className = 'btn-quiz-option';
            btn.innerHTML = `
                <span class="option-letter">${letters[idx]}</span>
                <span class="option-text">${optText}</span>
            `;
            btn.addEventListener('click', () => handleQuizOptionClick(idx, currentQ));
            elements.quizOptionsList.appendChild(btn);
        });
    }

    function handleQuizOptionClick(selectedIndex, currentQ) {
        if (quizState.answered) return;
        quizState.answered = true;

        const optionButtons = elements.quizOptionsList.querySelectorAll('.btn-quiz-option');
        optionButtons.forEach(btn => btn.disabled = true);

        const isCorrect = (selectedIndex === currentQ.correctIndex);

        if (isCorrect) {
            quizState.score++;
            if (elements.quizScoreText) {
                elements.quizScoreText.textContent = `Aciertos: ${quizState.score}`;
            }
            optionButtons[selectedIndex].classList.add('correct');
            elements.feedbackStatus.className = 'feedback-status correct-text';
            elements.feedbackStatus.textContent = '¡Correcto! Excelente dominio de la Palabra.';
        } else {
            optionButtons[selectedIndex].classList.add('incorrect');
            optionButtons[currentQ.correctIndex].classList.add('correct');
            elements.feedbackStatus.className = 'feedback-status incorrect-text';
            elements.feedbackStatus.textContent = `Respuesta correcta: Opción ${['A','B','C','D'][currentQ.correctIndex]} (${currentQ.options[currentQ.correctIndex]})`;
        }

        elements.feedbackExplanation.textContent = currentQ.explanation;
        elements.quizFeedbackBox.style.display = 'block';

        elements.btnSkipQuestion.style.display = 'none';
        elements.btnNextQuestion.style.display = 'inline-flex';
    }

    function handleQuizSkip() {
        if (quizState.answered) return;
        quizState.answered = true;

        const currentQ = quizState.questions[quizState.currentIndex];
        const optionButtons = elements.quizOptionsList.querySelectorAll('.btn-quiz-option');
        optionButtons.forEach(btn => btn.disabled = true);

        optionButtons[currentQ.correctIndex].classList.add('correct');

        elements.feedbackStatus.className = 'feedback-status incorrect-text';
        elements.feedbackStatus.textContent = `Respuesta correcta: Opción ${['A','B','C','D'][currentQ.correctIndex]} (${currentQ.options[currentQ.correctIndex]})`;
        elements.feedbackExplanation.textContent = currentQ.explanation;
        elements.quizFeedbackBox.style.display = 'block';

        elements.btnSkipQuestion.style.display = 'none';
        elements.btnNextQuestion.style.display = 'inline-flex';
    }

    if (elements.btnSkipQuestion) {
        elements.btnSkipQuestion.addEventListener('click', handleQuizSkip);
    }
    if (elements.btnNextQuestion) {
        elements.btnNextQuestion.addEventListener('click', () => {
            quizState.currentIndex++;
            renderQuizQuestion();
        });
    }

    // Renderizar barra de días (Día 1 a Día 8)
    function renderDaysBar() {
        elements.daysBar.innerHTML = '';
        const totalDays = window.dailyChaptersManager.getTotalDays();

        for (let d = 1; d <= totalDays; d++) {
            const btn = document.createElement('button');
            btn.className = `btn-day-tab ${d === state.currentDay ? 'active' : ''} ${state.completedDays.has(d) ? 'completed-day' : ''}`;
            btn.textContent = `Día ${d}`;
            btn.addEventListener('click', () => {
                state.currentDay = d;
                renderDay();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            elements.daysBar.appendChild(btn);
        }
    }

    // Renderizar los 4 capítulos del día actual y cargar Quiz
    function renderDay() {
        const plan = window.dailyChaptersManager.getDayPlan(state.currentDay);
        if (!plan) return;

        // Barra de pestañas
        renderDaysBar();

        // Encabezado
        const totalDays = window.dailyChaptersManager.getTotalDays();
        
        elements.dayMetaBadge.textContent = `RUTINA DIARIA (30 MIN) &bull; DÍA ${plan.day} DE ${totalDays}`;
        elements.dayMainTitle.textContent = plan.title;
        elements.daySubtitle.textContent = plan.theme;
        elements.overviewContextText.textContent = plan.contextOverview;

        // Racha
        elements.streakCount.textContent = `${state.streak} ${state.streak === 1 ? 'día' : 'días'}`;

        // Renderizar cada uno de los 4 capítulos
        elements.chaptersContainer.innerHTML = '';
        plan.chapters.forEach(chapterData => {
            const card = document.createElement('article');
            card.className = 'chapter-card';

            // Cabecera del capítulo
            const header = document.createElement('div');
            header.className = 'chapter-header';
            header.innerHTML = `
                <div class="chapter-number-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold-primary)"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    ${chapterData.book} ${chapterData.chapter}
                </div>
                <div class="chapter-theme-title">${chapterData.title}</div>
            `;
            card.appendChild(header);

            // Banner de Contexto y Explicación del capítulo
            const contextBanner = document.createElement('div');
            contextBanner.className = 'chapter-context-banner';
            contextBanner.innerHTML = `
                <div class="chapter-context-tag">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    Contexto y Enseñanza del Capítulo
                </div>
                <p class="chapter-context-p">${chapterData.context}</p>
            `;
            card.appendChild(contextBanner);

            // Lista de Versículos
            const versesList = document.createElement('div');
            versesList.className = 'chapter-verses-list';

            const key = `${chapterData.bookNum}_${chapterData.chapter}`;

            chapterData.verses.forEach(v => {
                const isDefault = window.dailyChaptersManager.isDefaultHighlighted(chapterData.bookNum, chapterData.chapter, v.num);
                const isCustom = state.customHighlights[key] && state.customHighlights[key].includes(v.num);

                let hlClass = '';
                if (isDefault) {
                    hlClass = 'highlighted-default';
                } else if (isCustom) {
                    hlClass = 'highlighted-custom';
                }

                const verseContent = window.dailyChaptersManager.getVerseText(chapterData, v, state.bibleVersion);
                const row = document.createElement('div');
                row.className = `verse-row ${hlClass}`;
                row.innerHTML = `
                    <span class="verse-num">${v.num}</span>
                    <span class="verse-text">${verseContent}</span>
                `;

                // Clic interactivo: Los predeterminados son fijos; los no predeterminados se marcan personalmente
                row.addEventListener('click', () => {
                    if (isDefault) {
                        showToast("Versículo clave de Esgrima Bíblico (resaltado fijo)");
                        return;
                    }

                    const nowHl = toggleCustomHighlight(chapterData.bookNum, chapterData.chapter, v.num);
                    row.classList.toggle('highlighted-custom', nowHl);
                    showToast(nowHl ? `Versículo ${v.num} marcado personalmente` : `Marca personal quitada de v. ${v.num}`);
                });

                versesList.appendChild(row);
            });

            card.appendChild(versesList);
            elements.chaptersContainer.appendChild(card);
        });

        // Inicializar / Cargar Quiz de Esgrima Bíblico del Día
        loadQuizForDay(state.currentDay);

        // Actualizar botón de completar día
        const isCompleted = state.completedDays.has(state.currentDay);
        updateCompleteButton(isCompleted);
    }

    function updateCompleteButton(isCompleted) {
        if (isCompleted) {
            elements.btnCompleteDay.classList.add('completed');
            elements.btnCompleteDay.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Lectura de 4 Capítulos Completada
            `;
        } else {
            elements.btnCompleteDay.classList.remove('completed');
            elements.btnCompleteDay.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                Completar lectura de los 4 capítulos de hoy
            `;
        }
    }

    // Completar día
    elements.btnCompleteDay.addEventListener('click', () => {
        const day = state.currentDay;
        const isAlreadyCompleted = state.completedDays.has(day);

        if (isAlreadyCompleted) {
            state.completedDays.delete(day);
            showToast("Lectura desmarcada");
        } else {
            state.completedDays.add(day);

            const todayStr = new Date().toISOString().split('T')[0];
            if (state.lastCompletedDate !== todayStr) {
                state.streak++;
                state.lastCompletedDate = todayStr;
            }

            showToast("¡Has completado tus 4 capítulos diarios!");
        }

        saveState();
        renderDay();
    });

    // Temas (Luz de Vela / Pergamino)
    function setTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('corinthians_theme', theme);
    }

    elements.themeToggle.addEventListener('click', () => {
        const newTheme = state.theme === 'light' ? 'candlelight' : 'light';
        setTheme(newTheme);
        showToast(newTheme === 'candlelight' ? 'Modo Luz de Vela activado' : 'Modo Pergamino activado');
    });

    // Ajuste de tamaño de fuente
    function setFontSize(size) {
        state.fontSize = size;
        document.documentElement.style.fontSize = size === 'large' ? '18px' : size === 'small' ? '14px' : '16px';
        localStorage.setItem('corinthians_fontsize', size);
    }

    elements.fontSizeToggle.addEventListener('click', () => {
        const sizes = ['small', 'normal', 'large'];
        const nextIdx = (sizes.indexOf(state.fontSize) + 1) % sizes.length;
        setFontSize(sizes[nextIdx]);
        showToast(`Tamaño de letra: ${sizes[nextIdx]}`);
    });

    // Notificaciones Toast
    let toastTimeout = null;
    function showToast(msg) {
        elements.toast.textContent = msg;
        elements.toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 2800);
    }

    // Configuración del Temporizador Silencioso de 30 Minutos en Cabecera
    const timer = window.readingTimer;

    timer.callbacks.onTick = (data) => {
        elements.timerDigitsMini.textContent = data.formatted;
    };

    timer.callbacks.onStateChange = (isRunning) => {
        elements.btnTimerToggleMini.innerHTML = isRunning
            ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
            : `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        elements.btnTimerToggleMini.title = isRunning ? "Pausar tiempo" : "Iniciar 30 min de lectura";
    };

    timer.callbacks.onComplete = () => {
        showToast("Tiempo de lectura de 30 minutos concluido");
    };

    elements.btnTimerToggleMini.addEventListener('click', () => {
        timer.toggle();
    });

    elements.btnTimerResetMini.addEventListener('click', () => {
        timer.reset();
        showToast("Temporizador reiniciado a 30:00");
    });

    // Inicializar
    loadState();
    renderDay();
    timer.notifyTick();
});
