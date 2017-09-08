import React from 'react';
import Shed from 'react-shed';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  number,
  text,
} from '@storybook/addon-knobs';

const color = storiesOf('c: color', module);
color.addDecorator(withKnobs);

color
  .add('from theme', () => (
    <div.shed
      c={
        select(
          'color',
          [
            'red',
            'black',
            'white',
          ],
          'red',
        )
      }
    >
      <div>it renders the color you have chosen</div>
    </div.shed>
  ))
  .add('with alpha', () => (
    <div.shed c={`red.${number('alpha', 9, { min: 1, max: 9 })}`}>
      <div>it renders red</div>
    </div.shed>
  ))
  .add('transparent', () => (
    <div.shed
      c="transparent"
    >
      <div>it renders invisibly</div>
    </div.shed>
  ))
  .add('currentColor', () => (
    <div.shed c="red">
      <div.shed
        c="currentColor"
      >
        <div>it renders red</div>
      </div.shed>
    </div.shed>
  ))
;

const bg = storiesOf('bg: backgroundColor', module);
bg.addDecorator(withKnobs);

bg
  .add('from theme', () => (
    <div.shed
      bg={
        select(
          'bg',
          [
            'red',
            'black',
            'white',
          ],
          'red',
        )
      }
    >
      <div>it renders the bgcolor you have chosen</div>
    </div.shed>
  ))
  .add('transparent', () => (
    <button.shed
      bg="transparent"
    >
      <div>it renders invisibly</div>
    </button.shed>
  ))
  .add('currentColor', () => (
    <div.shed c="red">
      <div.shed
        bg="currentColor"
      >
        <div.shed c="white">it renders red</div.shed>
      </div.shed>
    </div.shed>
  ))
;

const f = storiesOf('f: fontSize', module);
f.addDecorator(withKnobs);

f
  .add('from scale', () => (
    <div.shed
      f={
        number(
          'f',
          1,
        )
      }
    >
      <div>it renders the size you have chosen</div>
    </div.shed>
  ))
;

const fw = storiesOf('f-w: fontWeight', module);
fw.addDecorator(withKnobs);

fw
  .add('sets weight', () => (
    <div.shed
      fw={
        text(
          'fw',
          'bold',
        )
      }
    >
      <div>it renders the size you have chosen</div>
    </div.shed>
  ))
;

