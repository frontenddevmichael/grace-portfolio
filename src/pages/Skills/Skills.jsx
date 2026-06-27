import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'

const PaintbrushIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
        <path d="M18 2L22 6L11 17L7 17L7 13L18 2Z" fill="currentColor" />
        <path d="M7 13L4 21L11 17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
    </svg>
)

const PaletteIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="1.6" fill="currentColor" />
        <circle cx="15" cy="9" r="1.6" fill="currentColor" />
        <circle cx="9" cy="15" r="1.6" fill="currentColor" />
        <circle cx="15" cy="15" r="1.6" fill="currentColor" />
    </svg>
)

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
        <path d="M8 6L3 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L21 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const BriefcaseIcon = () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <line x1="3" y1="13" x2="21" y2="13" stroke="currentColor" strokeWidth="1.8" />
    </svg>
)

const skillGroups = [
    {
        id: 'design-tools',
        label: 'Design Tools',
        variant: 'coral',
        icon: <PaintbrushIcon />,
        items: ['Figma', 'Photoshop', 'Corel Draw', 'Canva', 'Pixellab'],
    },
    {
        id: 'design-skills',
        label: 'Design Skills',
        variant: 'marigold',
        icon: <PaletteIcon />,
        items: ['Flyer Design', 'Graphics Layout', 'UI/UX Design', 'Typography', 'Visual Identity', 'Social Media Posts'],
    },
    {
        id: 'programming',
        label: 'Programming',
        variant: 'teal',
        icon: <CodeIcon />,
        items: ['HTML', 'CSS', 'JavaScript', 'Web Flow', 'Python', 'Dart'],
    },
    {
        id: 'workplace',
        label: 'Workplace',
        variant: 'outline',
        icon: <BriefcaseIcon />,
        items: ['Communication', 'Event Organizing', 'Interpersonal Skills', 'Problem Solving', 'Project Strategy', 'Writing'],
    },
]

export default function Skills() {
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
        <section className={styles.skillsSection} ref={sectionRef}>
            <svg className={styles.floatCross} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 4V20M4 12H20" stroke="var(--raw-ink)" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <svg className={styles.floatWave} viewBox="0 0 100 30" fill="none" aria-hidden="true">
                <path
                    d="M2 15C12 5 22 25 32 15C42 5 52 25 62 15C72 5 82 25 92 15"
                    stroke="var(--raw-ink)"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>

            <svg className={styles.floatRing} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="var(--raw-teal)" strokeWidth="2.5" />
            </svg>

            <h2 className={styles.heading}>Skills &amp; Tools</h2>

            <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                {skillGroups.map((group, index) => (
                    <div
                        key={group.id}
                        className={`${styles.card} ${styles[`tilt${index}`]}`}
                        style={{ '--delay': `${index * 120}ms` }}
                    >
                        <span className={styles.foldCorner} aria-hidden="true" />

                        <div className={`${styles.pill} ${styles[`pill-${group.variant}`]}`}>
                            <span className={styles.pillIcon}>{group.icon}</span>
                            {group.label}
                        </div>

                        <ul className={styles.itemList}>
                            {group.items.map((item, i) => (
                                <li key={item} className={styles.item} style={{ '--itemDelay': `${i * 60}ms` }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}