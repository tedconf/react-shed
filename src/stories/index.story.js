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

const va = storiesOf('va: vertialAlign', module);
va.addDecorator(withKnobs);

va
  .add('sets vertical-alignment', () => (
    <div.shed
      bg="red"
      c="white"
    >
      <div.shed
        css={{
          display: 'inline-block',
          witdth: '50%',
        }}
        va={
          select(
            'va',
            [
              't',
              'b',
              'm',
              'bl',
            ],
            'm',
          )
        }
      >
        it renders the verical alignment you have chosen
      </div.shed>
      <div.shed
        css={{
          display: 'inline-block',
          witdth: '50%',
        }}
        va={
          select(
            'va',
            [
              't',
              'b',
              'm',
              'bl',
            ],
            'm',
          )
        }
      >
        it renders the text-center you have chosen<br />
        it renders the text-center you have chosen<br />
        it renders the text-center you have chosen<br />
        it renders the text-center you have chosen<br />
        it renders the text-center you have chosen<br />
        it renders the text-center you have chosen<br />
      </div.shed>
    </div.shed>
  ))
  .add('aligns `center`', () => (
    <div.shed
      bg="red"
      c="white"
      css={{
        height: '100vh',
      }}
    >
      <div.shed
        css={{
          position: 'relative',
        }}
        va="c"
      >
        it centers vertically
      </div.shed>
    </div.shed>
  ))
;

const d = storiesOf('d: display', module);
d.addDecorator(withKnobs);

d
  .add('sets display', () => (
    <div.shed
      bg="red"
      c="white"
      d={
        select(
          'd',
          [
            'b',
            'i',
            'ib',
            't',
            'tc',
            'tr',
            'f',
            'if',
            'n',
          ],
          'b',
        )
      }
    >
      it renders the display you have chosen
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
        it renders the margin you choose
      </div>
    </div.shed>
  ))
  .add('has a release value that overrides padding', () => (
    <div.shed bg="red" px="2">
      <div.shed
        mx="r"
      >
        <div>
          overrides padding with release
        </div>
      </div.shed>
    </div.shed>
  ))
;

const br = storiesOf('br: border-radius', module);
br.addDecorator(withKnobs);

br
  .add('sets radius', () => (
    <div.shed
      bg="red"
      br={
        number(
          'br',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets top radius', () => (
    <div.shed
      bg="red"
      brt={
        number(
          'brt',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets bottom radius', () => (
    <div.shed
      bg="red"
      brb={
        number(
          'brb',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets left radius', () => (
    <div.shed
      bg="red"
      brl={
        number(
          'brl',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets right radius', () => (
    <div.shed
      bg="red"
      brr={
        number(
          'brr',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets top-left radius', () => (
    <div.shed
      bg="red"
      brtl={
        number(
          'brtl',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets top-right radius', () => (
    <div.shed
      bg="red"
      brtr={
        number(
          'brtr',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets bottom-right radius', () => (
    <div.shed
      bg="red"
      brbr={
        number(
          'brbr',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
  .add('sets bottom-left radius', () => (
    <div.shed
      bg="red"
      brbl={
        number(
          'brbl',
          1,
        )
      }
    >
      <div>
        it renders the radius you have chosen
      </div>
    </div.shed>
  ))
;

