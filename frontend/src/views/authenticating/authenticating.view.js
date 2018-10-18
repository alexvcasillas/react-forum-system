import React from 'react';

import styles from './authenticating.module.css';

const Authenticating = () => (
  <div className={styles.container}>
    <div className={styles.spinner}>
      <div className={styles.rect1} />
      <div className={styles.rect2} />
      <div className={styles.rect3} />
      <div className={styles.rect4} />
      <div className={styles.rect5} />
    </div>
    <div className={styles.auth_message}>Authenticating, please wait...</div>
  </div>
);

export default Authenticating;
