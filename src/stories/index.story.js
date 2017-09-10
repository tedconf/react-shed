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

const fw = storiesOf('fw: fontWeight', module);
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

const fs = storiesOf('fs: fontStyle', module);
fs.addDecorator(withKnobs);

fs
  .add('sets style', () => (
    <div.shed
      fs={
        select(
          'fs',
          [
            'i',
            'o',
            'n',
          ],
          'i',
        )
      }
    >
      <div>it renders the style you have chosen</div>
    </div.shed>
  ))
;

const ff = storiesOf('ff: fontFamily', module);
ff.addDecorator(withKnobs);

ff
  .add('sets font-family from theme', () => (
    <div.shed
      ff={
        select(
          'ff',
          [
            'sans',
            'code',
          ],
          'code',
        )
      }
    >
      <div>it renders the font family you have chosen</div>
    </div.shed>
  ))
;

const ls = storiesOf('ls: letterSpacing', module);
ls.addDecorator(withKnobs);

ls
  .add('sets letter spacing based on defaults', () => (
    <div.shed
      ls={
        select(
          'ls',
          [
            'l',
            'n',
            't',
          ],
          't',
        )
      }
    >
      <div>it renders the letter-spacing you have chosen</div>
    </div.shed>
  ))
  .add('sets letter spacing based on theme sizes', () => (
    <div.shed
      ls={
        number(
          'ls',
          1,
        )
      }
    >
      <div>it renders the letter-spacing you have chosen</div>
    </div.shed>
  ))
;

const lh = storiesOf('lh: lineHeight', module);
lh.addDecorator(withKnobs);

lh
  .add('sets line-height based on defaults', () => (
    <div.shed
      lh={
        select(
          'lh',
          [
            'd',
            'n',
            't',
            'l',
          ],
          'n',
        )
      }
    >
      <div.shed style={{ width: '3rem' }}>
        it renders the line-height you have chosen
      </div.shed>
    </div.shed>
  ))
  .add('sets line-height based on theme sizes', () => (
    <div.shed
      lh={
        number(
          'lh',
          1,
        )
      }
    >
      <div.shed style={{ width: '3rem' }}>
        it renders the line-height you have chosen
      </div.shed>
    </div.shed>
  ))
;

const tt = storiesOf('tt: textTransform', module);
tt.addDecorator(withKnobs);

tt
  .add('sets text-transform', () => (
    <div.shed
      tt={
        select(
          'tt',
          [
            'u',
            'l',
            'c',
            'n',
          ],
          'u',
        )
      }
    >
      <div>
        it renders the text-transform you have chosen
      </div>
    </div.shed>
  ))
;

const ta = storiesOf('ta: texAlign', module);
ta.addDecorator(withKnobs);

ta
  .add('sets text-align', () => (
    <div.shed
      ta={
        select(
          'ta',
          [
            'l',
            'r',
            'c',
            'j',
          ],
          'c',
        )
      }
    >
      <div>
        it renders the text-center you have chosen
      </div>
    </div.shed>
  ))
;


const mp = storiesOf('m|p: margin & padding', module);
mp.addDecorator(withKnobs);

mp
  .add('sets margin', () => (
    <div.shed
      m={
        number(
          'm',
          1,
        )
      }
    >
      <div>
        it renders the margin you have chosen
      </div>
    </div.shed>
  ))
  .add('has a release value that overrides padding', () => (
    <div.shed bg="red" px="2">
      <div.shed
        mx="r"
      >
        <div>
          it renders the margin you have chosen
        </div>
      </div.shed>
    </div.shed>
  ))
;

