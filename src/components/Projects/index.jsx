// @flow
import * as React from 'react';
import Card from './Card';
import styles from './styles.scss';

type Props = {};
type State = { projects: Object[] };

export default class Projects extends React.Component<Props, State> {
  colors: string[];
  constructor(): void {
    super();
    this.colors = [ '#CE997B', '#9AC4F8', '#99EDCC', '#BF4E30', '#C6CCB2' ];
    this.state = { projects: [] };
  }

  componentDidMount = (): void => {
    this.fetchProjects();
  }

  fetchProjects = (): void => {
    fetch('https://api.github.com/users/josephrstraub/repos')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then(projects => {
        this.setState({ projects });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render(): React.Element<any> {
    return (
      <div id={styles.projects}>
        {this.state.projects.map((project, index) => (
          <Card key={project.id} {...project} color={this.colors[index % this.colors.length]} />
        ))}
      </div>
    );
  }
}
