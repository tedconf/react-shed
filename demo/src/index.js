import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'glamorous';
import Shed, {
  createTheme,
} from '../../src';

const TED_THEME = createTheme({
  sizes: 'minor third',
  steps: 30,
  colors: {
    black: '#111111',
    'gray-dd': '#333333',
    'gray-d': '#666666',
    gray: '#999999',
    'gray-l': '#CCCCCC',
    'gray-ll': '#F6F6F6',
    white: '#FFFFFF',
    red: '#E9280B',
  },
  fonts: {
    sans: '"Helvetica Neue Custom", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
});

render(
  <ThemeProvider theme={TED_THEME}>
    <div>
      <div.shed
        c="red"
        bg="black.5"
      >
        Testing color: Should have a red foreground and a black background.
      </div.shed>
      <div.shed>
        <ul.shed
          d="b"
          lst="n"
          pl="0"
        >

          <li.shed d="b">
            Testing font attrs:
            <ul.shed
              pl=".5"
              lst="n"
            >
              <li.shed
                f="2"
              >
                Should be size 2.
              </li.shed>
              <li.shed
                fw="700"
              >
                Should be bold.
              </li.shed>
              <li.shed
                fs="i"
              >
                Should be italicized.
              </li.shed>
              <li.shed
                ff="mono"
              >
                Should be monospaced.
              </li.shed>
              <li.shed
                ls="t"
              >
                Should be tightly spaced.
              </li.shed>
              <li.shed
                lh="2"
              >
                should have a line-height of 2.
              </li.shed>
              <li.shed
                tt="u"
              >
                should be uppercase.
              </li.shed>
              <li.shed
                ta="c"
              >
                should be center-aligned.
              </li.shed>
              <li.shed
                td="u"
                tdc="red"
              >
                should be underlined. in red.
              </li.shed>
            </ul.shed>
          </li.shed>

          <li.shed d="b">
            Testing margin and padding attrs:
            <ul.shed
              pl=".5"
              lst="n"
            >
              <li.shed
                d="i-b"
                w="full"
                m="1"
              >
                should have a margin of 1
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
                ml="1"
                mr="1"
                mt="1"
                mb="1"
              >
                should have a margin of 1 using t, r, b, l
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
                mx="1"
                my="1"
              >
                should have a margin of 1 using x, y
              </li.shed>
              <li.shed
                p="1"
              >
                should have a padding of 1
              </li.shed>
              <li.shed
                d="b"
                pl="1"
                pr="1"
                pt="1"
                pb="1"
              >
                should have a padding of 1 using t, r, b, l
              </li.shed>
              <li.shed
                d="b"
                px="1"
                py="1"
              >
                should have a padding of 1 using x, y
              </li.shed>
            </ul.shed>
          </li.shed>

          <li.shed d="b">
            Testing margin and padding attrs:
            <ul.shed
              pl=".5"
              lst="n"
            >
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  br="1"
                >
                  should have a full border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brt="1"
                >
                  should have a top border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brb="1"
                >
                  should have a bottom border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brl="1"
                >
                  should have a left border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brr="1"
                >
                  should have a right border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brtr="1"
                >
                  should have a top right border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brtl="1"
                >
                  should have a top left border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brbr="1"
                >
                  should have a bottom right border radius
                </div.shed>
              </li.shed>
              <li.shed
                d="i-b"
                w="full"
              >
                <div.shed
                  bg="black.1"
                  p="1"
                  brbl="1"
                >
                  should have a bottom left border radius
                </div.shed>
              </li.shed>
            </ul.shed>
          </li.shed>
        </ul.shed>
      </div.shed>
    </div>
  </ThemeProvider>,
  document.querySelector('#demo'),
);
