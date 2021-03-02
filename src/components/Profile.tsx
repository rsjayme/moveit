import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/rsjayme.png" alt="Raphael Jayme" />

      <div>
        <strong>Raphael Jayme</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 99
        </p>
      </div>
    </div>
  );
}
