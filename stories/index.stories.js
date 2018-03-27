import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import Card from '../src/components/Projects/Card';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('ProjectCard', module)
  .add('with orange background', () => <Card color="#D79776" description="This is my project!" title="My Project" />);
