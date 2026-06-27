import { useEffect, useRef, useState } from 'react'
import styles from './About.module.css'

export default function About() {
    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const node = containerRef.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    const skills = ['Figma', 'UI/UX Design', 'Graphic Design', 'Social Media Strategy']

    return (
        <div className={styles.aboutContainer} ref={containerRef}>
            {/* decorative floating shapes */}
            <svg className={styles.floatStar} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                    d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"
                    stroke="var(--raw-ink)"
                    strokeWidth="1.5"
                    fill="var(--raw-marigold)"
                />
            </svg>

            <svg className={styles.floatSquiggle} viewBox="0 0 100 40" fill="none" aria-hidden="true">
                <path
                    d="M2 30C15 5 25 35 40 15C55 -5 65 35 80 10C90 -5 95 25 98 15"
                    stroke="var(--raw-ink)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                />
            </svg>

            <svg className={styles.floatDotCluster} viewBox="0 0 60 60" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="3" fill="var(--raw-teal)" />
                <circle cx="20" cy="14" r="3" fill="var(--raw-coral)" />
                <circle cx="10" cy="28" r="3" fill="var(--raw-marigold)" />
            </svg>

            <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
                <div className={styles.eyebrow}>About Me</div>

                <div className={styles.card}>
                    <div className={styles.tealDot}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                            <path
                                d="M12 2L14.5 8.5L21 9L16 13.5L17.5 20L12 16.5L6.5 20L8 13.5L3 9L9.5 8.5L12 2Z"
                                fill="var(--raw-white)"
                            />
                        </svg>
                    </div>

                    <div className={styles.highlightBlock}>
                        <p>
                            I am a highly motivated Computer Science student combining technical foundation
                            with strong design and content creation skills. With a background in developing
                            digital interfaces, running successful social media campaigns, and managing
                            graphic design projects, I strive to build intuitive and engaging user experiences.
                        </p>
                    </div>

                    <div className={styles.plainBlock}>
                        <p>
                            My experience ranges from UI/UX design (Figma) to graphic layout and social media
                            strategy, aiming to bridge the gap between aesthetics and functionality.
                        </p>
                    </div>

                    <div className={styles.skillRow}>
                        {skills.map((skill, index) => (
                            <span
                                key={skill}
                                className={styles.skillPill}
                                style={{ '--delay': `${index * 80}ms` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}