import { useState } from 'react'
import styles from './DemoBookingModal.module.css'

export interface DemoBookingModalProps {
  readonly isOpen: boolean
  readonly onClose: () => void
}

export function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [grade, setGrade] = useState('secondary-1')
  const [track, setTrack] = useState('national')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setError('يرجى إدخال اسم الطالب')
      return
    }
    // Simple Egyptian mobile check (starts with 01 or +201)
    const cleanPhone = phone.replace(/\s+/g, '')
    if (!cleanPhone || !/^(01[0125]\d{8}|\+201[0125]\d{8})$/.test(cleanPhone)) {
      setError('يرجى إدخال رقم هاتف مصري صحيح (مثال: 01000000000)')
      return
    }

    setError('')
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setName('')
    setPhone('')
    onClose()
  }

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="إغلاق النافذة"
          onClick={onClose}
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {!submitted ? (
          <>
            <div className={styles.header}>
              <h2 className={styles.title}>حجز حصة تجريبية مجاناً</h2>
              <p className={styles.description}>
                اترك بياناتك وسيتواصل معك مستشار تعليمي لتحديد موعد الحصة وتجربة المنصة.
              </p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="demo-name" className={styles.label}>
                  اسم الطالب
                </label>
                <input
                  id="demo-name"
                  type="text"
                  className={styles.input}
                  placeholder="أدخل الاسم الثلاثي"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="demo-phone" className={styles.label}>
                  رقم الهاتف (الواتساب)
                </label>
                <input
                  id="demo-phone"
                  type="tel"
                  className={styles.input}
                  placeholder="01223373972"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="demo-track" className={styles.label}>
                  المسار التعليمي
                </label>
                <select
                  id="demo-track"
                  className={styles.select}
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                >
                  <option value="national">المنهج الوطني المصري</option>
                  <option value="american">الدبلومة الأمريكية (SAT / EST / ACT)</option>
                  <option value="revision">التأسيس والمراجعات النهائية</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="demo-grade" className={styles.label}>
                  الصف الدراسي
                </label>
                <select
                  id="demo-grade"
                  className={styles.select}
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="primary">مرحلة ابتدائية</option>
                  <option value="prep-1">الصف الأول الإعدادي</option>
                  <option value="prep-2">الصف الثاني الإعدادي</option>
                  <option value="prep-3">الصف الثالث الإعدادي</option>
                  <option value="secondary-1">الصف الأول الثانوي</option>
                  <option value="secondary-2">الصف الثاني الثانوي</option>
                  <option value="secondary-3">الصف الثالث الثانوي</option>
                </select>
              </div>

              {error ? <p className={styles.error}>{error}</p> : null}

              <button type="submit" className={styles.submitBtn}>
                تأكيد طلب الحصة المجانية
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <span className={`material-symbols-outlined ${styles.successIcon}`}>
              check_circle
            </span>
            <h3 className={styles.successTitle}>تم استلام طلبك بنجاح!</h3>
            <p className={styles.successDesc}>
              شكراً لك يا {name}. سيتواصل معك فريق إدراكنا عبر الواتساب خلال دقائق لتأكيد موعد الحصة.
            </p>
            <button type="button" className={styles.submitBtn} onClick={handleReset}>
              تم
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
