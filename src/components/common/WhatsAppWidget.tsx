import styles from './WhatsAppWidget.module.css'

export function WhatsAppWidget() {
  const phoneNumber = '201000000000'
  const message = encodeURIComponent('مرحباً إدراكنا، أود الاستفسار عن المناهج والحصص التجريبية.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="تواصل معنا عبر واتساب"
    >
      <span className={`material-symbols-outlined ${styles.icon}`}>chat</span>
      <span className={styles.label}>تواصل عبر واتساب</span>
    </a>
  )
}
