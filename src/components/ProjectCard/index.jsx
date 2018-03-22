// @flow
import * as React from 'react';
import Devices from './Devices';
import styles from './styles.scss';

type Props = { color: string, description: string, title: string };

function ProjectCard(props: Props): React.Element<any> {
  return (
    <div className={styles['project-card']} style={{ backgroundColor: props.color }}>
      <Devices />
      <main>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </main>
    </div>
  );
}

export default ProjectCard;
