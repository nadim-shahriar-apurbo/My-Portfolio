import { Outlet } from '@remix-run/react';
import { useEffect } from 'react';
import styles from './achievements.module.css';

export default function Achievements() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.achievements}>
      <Outlet />
    </div>
  );
}