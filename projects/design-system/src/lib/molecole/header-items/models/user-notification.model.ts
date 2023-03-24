export interface UserNotification {
  title: string,
  subtitle?: string,
  id?: number, // parametro della rotta verso cui andare per leggere le notifiche
  isRead: boolean, // true se la notifica è stata già cliccata, false altrimenti
  // TODO: prevedere un model per la rotta verso cui spostarsi dopo il click sulla singola notifica.
  // Es. UserNotificationLink
}
