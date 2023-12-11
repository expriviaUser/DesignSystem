export interface UserNotification {
    title: string,
    subtitle?: string,
    id?: number, // parametro della rotta verso cui andare per leggere le notifiche
    isRead: boolean, // true se la notifica è stata già cliccata, false altrimenti
    url?: string
}
