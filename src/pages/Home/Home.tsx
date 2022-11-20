import { useState, FC } from 'react';

import { Button } from 'antd';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { AngularSvg, JsSvg, TsSvg, ReactSvg, VueSvg } from '../../resources/logo/languages';
import Footer from '../../components/Footer/Footer';
import dotsSvg from '../../resources/icons/dotssvg.svg';

import styles from './Home.module.scss';

const languages = [AngularSvg, JsSvg, TsSvg, ReactSvg, VueSvg];
const contributions = ['DaiFudo', 'mmiksaa', 'bxckwood'];

const Home: FC = () => {
  const [flag, setFlag] = useState<boolean>(false);
  let navigate = useNavigate();

  const handleLink = () => {
    setFlag(true);

    setTimeout(() => {
      navigate('jstask');
    }, 500);
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__inner}>
        <div className={styles.home__left}>
          <h1 className={styles.home__title}>HIRE-IT</h1>
          <h2 className={styles.home__undertitle}>Платформа которая поможет поднять технические скиллы</h2>
          <p className={styles.home__desc}>
            Open Source проект который прокачает твои технические скиллы. Здесь ты можешь решать задачи и
            отвечать на вопросы разных уровней.
          </p>

          <Button onClick={handleLink} className={styles.home__button}>
            начать учиться
          </Button>
        </div>

        <div className={styles.home__right}>
          <div className={styles.board}>
            <span className={styles.board__title}>поддерживаемые языки</span>
            <ul className={styles.board__list}>
              {languages.map((item, index) => (
                <li key={index} className={styles.board__item}>
                  <img src={item} alt='icon' />
                </li>
              ))}
            </ul>
          </div>

          <ul className={styles.contributions}>
            {contributions.map((item, index) => (
              <li key={index} className={styles.contributions__item}>
                <a className={styles.contributions__link} href={`https://github.com/${item}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={clsx('home__svg', 'home__svg__left', {
            home__svg__left__active: flag,
          })}>
          <img src={dotsSvg} alt='' />
        </div>
        <div
          className={clsx('home__svg', 'home__svg__right', {
            home__svg__right__active: flag,
          })}>
          <img src={dotsSvg} alt='' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
