/**
 * Temporizador silencioso y minimalista de 30 minutos para la rutina de lectura diaria.
 * Sin sonidos ni fases complejas, enfocado 100% en la lectura serena.
 */

class ReadingTimer {
    constructor() {
        this.totalDuration = 30 * 60; // 30 minutos (1800 segundos)
        this.remainingSeconds = this.totalDuration;
        this.isRunning = false;
        this.interval = null;

        this.callbacks = {
            onTick: null,
            onComplete: null,
            onStateChange: null
        };
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;

        this.interval = setInterval(() => {
            this.tick();
        }, 1000);

        if (this.callbacks.onStateChange) this.callbacks.onStateChange(true);
    }

    pause() {
        if (!this.isRunning) return;
        this.isRunning = false;
        clearInterval(this.interval);
        this.interval = null;
        if (this.callbacks.onStateChange) this.callbacks.onStateChange(false);
    }

    toggle() {
        if (this.isRunning) {
            this.pause();
        } else {
            this.start();
        }
    }

    reset() {
        this.pause();
        this.remainingSeconds = this.totalDuration;
        this.notifyTick();
    }

    tick() {
        if (this.remainingSeconds > 0) {
            this.remainingSeconds--;
            this.notifyTick();
        } else {
            this.complete();
        }
    }

    complete() {
        this.pause();
        if (this.callbacks.onComplete) {
            this.callbacks.onComplete();
        }
    }

    getFormattedRemaining() {
        const mins = Math.floor(this.remainingSeconds / 60);
        const secs = this.remainingSeconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    getProgressPercent() {
        const elapsed = this.totalDuration - this.remainingSeconds;
        return (elapsed / this.totalDuration) * 100;
    }

    notifyTick() {
        if (this.callbacks.onTick) {
            this.callbacks.onTick({
                remainingSeconds: this.remainingSeconds,
                formatted: this.getFormattedRemaining(),
                progressPercent: this.getProgressPercent()
            });
        }
    }
}

window.readingTimer = new ReadingTimer();
