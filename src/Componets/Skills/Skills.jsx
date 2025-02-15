import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';


function Skills() {
    return (
        <section id="skills" className={styles.container}>
            <h1 className="sectionTitle">Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="HTML" />
                <SkillList src={checkMarkIcon} skill="CSS" />
                <SkillList src={checkMarkIcon} skill="JavaScript" />
                <SkillList src={checkMarkIcon} skill="Java" />
                <SkillList src={checkMarkIcon} skill="Node" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Ract" />
                <SkillList src={checkMarkIcon} skill="Laravel" />
                <SkillList src={checkMarkIcon} skill="Vue" />
                <SkillList src={checkMarkIcon} skill="asp.net" />
                <SkillList src={checkMarkIcon} skill="Bootstrap" />
                <SkillList src={checkMarkIcon} skill="MySQL" />
                <SkillList src={checkMarkIcon} skill="Oracle SQL" />
                <SkillList src={checkMarkIcon} skill="Firebase" />
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill="Adobe Suite" />
                <SkillList src={checkMarkIcon} skill="Jira" />
                <SkillList src={checkMarkIcon} skill="Scrum" />
                <SkillList src={checkMarkIcon} skill="Office" />  
            </div>
        </section>
    );
}

export default Skills;
