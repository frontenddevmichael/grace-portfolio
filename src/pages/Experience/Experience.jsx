import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'

const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="var(--raw-ink)" strokeWidth="1.6" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="var(--raw-ink)" strokeWidth="1.6" fill="none" />
        <line x1="3" y1="13" x2="21" y2="13" stroke="var(--raw-ink)" strokeWidth="1.6" />
    </svg>
)

const GradCapIcon = () => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M12 4L2 9L12 14L22 9L12 4Z" stroke="var(--raw-ink)" strokeWidth="1.6" fill="var(--raw-teal)" />
        <path d="M6 11.5V16C6 17.5 9 19 12 19C15 19 18 17.5 18 16V11.5" stroke="var(--raw-ink)" strokeWidth="1.6" fill="none" />
    </svg>
)

const experience = [
    { role: 'UI/UX and Brand Designer', org: 'Techrity', period: 'Oct 2022 - Aug 2024', dot: 'teal' },
    { role: 'Lead Campaign/Comms', org: 'SheCodeAfrica, Uniport', period: 'Jul 2023 - Present', dot: 'marigold' },
    { role: 'Design Assistant/Trainee', org: 'Ustacky', period: 'Jun 2023 - Present', dot: 'rose' },
    { role: 'Tech Consultant', org: 'GDSC Uniport', period: 'Jul 2023 - Jun 2024', dot: 'rose' },
]

const education = [
    { degree: 'B.Sc. Computer Science', school: 'University of Port Harcourt', period: '2019 - Present' },
    { degree: 'Secondary School Certificate', school: 'Archdeacon Brown Education Centre', period: '2012 - 2018' },
]

export default function ExperienceEducation() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="experience"
            className={`${styles.section} ${isVisible ? styles.visible : ''}`}
            ref={sectionRef}
        >
            <svg className={styles.floatBriefcase} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="8" width="18" height="12" rx="2" stroke="var(--raw-ink)" strokeWidth="1.4" opacity="0.4" />
            </svg>

            <div className={styles.grid}>
                {/* ---------- Experience column ---------- */}
                <div className={styles.column}>
                    <div className={`${styles.pill} ${styles.pillCoral}`}>
                        <BriefcaseIcon />
                        Experience
                    </div>

                    <div className={styles.timelineWrap}>
                        <span className={styles.timelineLine} />
                        <ul className={styles.timelineList}>
                            {experience.map((exp, i) => (
                                <li
                                    key={exp.role}
                                    className={styles.timelineItem}
                                    style={{ animationDelay: `${i * 130 + 300}ms` }}
                                >
                                    <span className={`${styles.dot} ${styles[`dot-${exp.dot}`]}`} />
                                    <div className={styles.itemContent}>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.meta}>
                                            {exp.org} &bull; {exp.period}
                                            {exp.period.includes('Present') && (
                                                <span className={styles.liveDot} aria-label="ongoing" />
                                            )}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ---------- Education column ---------- */}
                <div className={styles.column}>
                    <div className={`${styles.pill} ${styles.pillTeal}`}>
                        <GradCapIcon />
                        Education
                    </div>

                    <svg className={styles.floatGradCap} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 4L2 9L12 14L22 9L12 4Z" stroke="var(--raw-ink)" strokeWidth="1.4" opacity="0.4" />
                    </svg>

                    <div className={styles.cardStack}>
                        {education.map((edu, i) => (
                            <div
                                key={edu.degree}
                                className={`${styles.eduCard} ${styles[`tilt${i}`]}`}
                                style={{ animationDelay: `${i * 150 + 400}ms` }}
                            >
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <p className={styles.meta}>
                                    {edu.school} &bull; {edu.period}
                                    {edu.period.includes('Present') && (
                                        <span className={styles.liveDot} aria-label="ongoing" />
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}