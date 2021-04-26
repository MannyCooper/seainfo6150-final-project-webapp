import React from 'react'
import styles from './Me.module.css'
import portrait from '../../images/portrait.png'

const Me = () => {
    return (
        <div className={styles.me_container}>
            <h1 className={styles.title}>About<br/>Me<br/><span role="img" aria-label="Me">🧑🏻‍💻</span></h1>
            <img className={styles.portrait} src={portrait} alt="portrait" />
            <article>
                <h2 className={styles.hi}>
                    <span role="img" aria-label="Hi">👋 </span>
                    Zifan An
                </h2>
                <div className={styles.intro}>
                    <p>Postgrad at the <a className={styles.NEU} href="https://www.northeastern.edu" target="_blank" rel="noopener noreferrer">Northeastern University</a>. Alumni of the <a className={styles.NJUPT} href="http://www.njupt.edu.cn/en/" target="_blank" rel="noopener noreferrer">Nanjing University of Posts and Telecommunications</a>. Technical editors at <a className={styles.SSPAI} href="https://sspai.com" target="_blank" rel="noopener noreferrer">SSPAI</a>.</p>
                    <p>
                        In the past four years, I have achieved strong skills in web development, data science, and machine learning. I'm familiar with Java, Python, and JavaScript. And, of course, the associated frameworks and libraries. You can see the technical stack in more detail below. At the same time, I also published a paper in the field of AI related to paralanguage: Exploration of Acoustic and Lexical Cues for the INTERSPEECH 2020 Computational Paralinguistic Challenge.
                </p>
                    <h2 className={styles.skills}>Technical Skills:</h2>
                    <ul>
                        <li>
                            <p><b>Programming Languages:</b></p>
                            <p>Java, Python, JavaScript, HTML, CSS, Swift, SQL, MATLAB</p>
                        </li>
                        <li>
                            <p><b>Framework/Libraries:</b></p>
                            <p>Vue.js, React.js, Node.js, scikit-learn, TensorFlow, Hadoop, SwiftUl, JavaFX, Scrapy, Git...</p>
                        </li>
                        <li>
                            <p><b>Database:</b></p>
                            <p>MySQL, MongoDB, Redis</p>
                        </li>
                    </ul>
                </div>
            </article>
        </div>
    )
}

export default Me
