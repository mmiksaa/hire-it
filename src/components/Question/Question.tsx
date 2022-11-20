import { useEffect, useState } from 'react';
import { getQuestion } from '../../api/api';
import { IQuestion } from '../../interfaces/interfaces';

import Loader from '../UI/Loader/Loader';

import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Button from '../UI/Button/Button';

import styles from '../Question/Question.module.scss';

const Question: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<IQuestion | any>();
  const [questionUpdate, setQuestionUpdate] = useState<number>(0);

  useEffect(() => {
    setIsLoading(false);
    getQuestion(questionUpdate)
      .then((res) => {
        setData(res);
        setIsLoading(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [questionUpdate]);

  const generateRandInt = (): number => {
    const randInt = Math.floor(Math.random() * 2);
    return randInt;
  };

  return isLoading ? (
    <div className={styles.wrapper__default}>
      <h1 className={styles.question__title}>
        {data.title}
        <div className={styles.question__title__line}></div>
      </h1>
      <div className={styles.question__container}>
        <span className={styles.question__container__border}></span>
        <div className={styles.question__inner}>
          <SyntaxHighlighter
            language='javascript'
            style={darcula}
            className={styles.answer__text}
            wrapLines={true}
            wrapLongLines={true}>
            {data.spoiler}
          </SyntaxHighlighter>
        </div>
      </div>
      <div className={styles.question__btns}>
        <Button
          onClick={() => {
            setQuestionUpdate(generateRandInt);
          }}>
          дальше
        </Button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};
export default Question;
