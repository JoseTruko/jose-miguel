import styles from './HeroStyles.module.css';
import heroimg from '../../assets/perfil-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import whatsappLight from '../../assets/whatsapp-light.svg';
import whatsappDark from '../../assets/whatsapp-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const whatsappIcon = theme === 'light' ? whatsappLight : whatsappDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return ( 
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            
            <img className={styles.hero} src={heroimg} alt="Profile picture of Jose Miguel" />
            <img className={styles.colorMode} src={themeIcon} alt="color mode iceon" onClick={toggleTheme}/>

        </div>

        <div className={styles.info}>
            <h1>Jose <br /> Ramirez</h1>
            <h2>Especialista en TI</h2>
            <span>
                <a href="https://wa.link/533ud2/" target="_blank">
                    <img src={whatsappIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/JoseTruko/" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="http://www.linkedin.com/in/jose-miguel-ram%C3%ADrez-narv%C3%A1ez/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p className={styles.description}>
                Desarrollador web entusiasta. Me encanta crear proyectos y aprender nuevas tecnologías.
            </p>
        <a href={CV} download>
            <button className='hover'>
                CV
            </button>
        </a>
        </div>
    </section>
);
}

export default Hero