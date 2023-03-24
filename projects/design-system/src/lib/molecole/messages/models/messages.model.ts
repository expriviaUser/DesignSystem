import { Message } from 'primeng/api';

interface Messages {
    success: Message,
    info: Message,
    error: Message,
    warn: Message,
}

export const MESSAGES_GENERAL: Messages = {
    success: { severity: 'success', summary: 'Titolo success', detail: 'Contenuto del messaggio success qui.' },
    info: { severity: 'info', summary: 'Titolo info', detail: 'Contenuto del messaggio info qui.' },
    error: { severity: 'error', summary: 'Titolo error', detail: 'Contenuto del messaggio error qui.' },
    warn: { severity: 'warn', summary: 'Titolo warn', detail: 'Contenuto del messaggio warn qui.' },
};

export const ALERTS_GENERAL: Messages = {
    success: { severity: 'success', summary: 'Titolo success', detail: 'Contenuto del messaggio success qui.' },
    info: { severity: 'info', summary: 'Titolo info', detail: 'Contenuto del messaggio info qui.' },
    error: { severity: 'error', summary: 'Titolo error', detail: 'Contenuto del messaggio error qui.' },
    warn: { severity: 'warn', summary: 'Titolo warn', detail: 'Contenuto del messaggio warn qui.' },
};
