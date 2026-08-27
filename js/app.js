/**
 * Aplicación principal: Corintios Diario (4 Capítulos Diarios)
 * Lectura bíblica completa, contexto histórico-teológico y rutina de 15 minutos.
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
        fontSize: 'normal'
    };

    // Referencias DOM
    const elements = {
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
        
        // Botón de completado
        btnCompleteDay: document.getElementById('btnCompleteDay'),
        
        // Temporizador de 15 min en cabecera
        timerDigitsMini: document.getElementById('timerDigitsMini'),
        btnTimerToggleMini: document.getElementById('btnTimerToggleMini'),
        btnTimerResetMini: document.getElementById('btnTimerResetMini'),
        
        // Toast
        toast: document.getElementById('toast')
    };

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

        state.streak = parseInt(localStorage.getItem('corinthians_streak_v2') || '0', 10);
        state.lastCompletedDate = localStorage.getItem('corinthians_last_date_v2') || null;

        const savedTheme = localStorage.getItem('corinthians_theme') || 'light';
        setTheme(savedTheme);

        const savedFontSize = localStorage.getItem('corinthians_fontsize') || 'normal';
        setFontSize(savedFontSize);

        // Calcular día correspondiente a la fecha de hoy
        const todayPlan = window.dailyChaptersManager.getDayForDate(new Date(), state.startDate);
        state.currentDay = todayPlan.day;
    }

    function saveState() {
        localStorage.setItem('corinthians_completed_days', JSON.stringify(Array.from(state.completedDays)));
        localStorage.setItem('corinthians_streak_v2', state.streak.toString());
        if (state.lastCompletedDate) {
            localStorage.setItem('corinthians_last_date_v2', state.lastCompletedDate);
        }
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

    // Renderizar los 4 capítulos del día actual
    function renderDay() {
        const plan = window.dailyChaptersManager.getDayPlan(state.currentDay);
        if (!plan) return;

        // Barra de pestañas
        renderDaysBar();

        // Encabezado
        const totalDays = window.dailyChaptersManager.getTotalDays();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = new Date().toLocaleDateString('es-ES', dateOptions);
        
        elements.dayMetaBadge.textContent = `RUTINA DIARIA (15 MIN) &bull; DÍA ${plan.day} DE ${totalDays}`;
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

            chapterData.verses.forEach(v => {
                const row = document.createElement('div');
                row.className = 'verse-row';
                row.innerHTML = `
                    <span class="verse-num">${v.num}</span>
                    <span class="verse-text">${v.text}</span>
                `;
                versesList.appendChild(row);
            });

            card.appendChild(versesList);
            elements.chaptersContainer.appendChild(card);
        });

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

    // Configuración del Temporizador Silencioso de 15 Minutos en Cabecera
    const timer = window.readingTimer;

    timer.callbacks.onTick = (data) => {
        elements.timerDigitsMini.textContent = data.formatted;
    };

    timer.callbacks.onStateChange = (isRunning) => {
        elements.btnTimerToggleMini.innerHTML = isRunning
            ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
            : `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        elements.btnTimerToggleMini.title = isRunning ? "Pausar tiempo" : "Iniciar 15 min de lectura";
    };

    timer.callbacks.onComplete = () => {
        showToast("Tiempo de lectura de 15 minutos concluido");
    };

    elements.btnTimerToggleMini.addEventListener('click', () => {
        timer.toggle();
    });

    elements.btnTimerResetMini.addEventListener('click', () => {
        timer.reset();
        showToast("Temporizador reiniciado a 15:00");
    });

    // Inicializar
    loadState();
    renderDay();
    timer.notifyTick();
});
