import { css } from '@aerify/react';

export const createGlobalStyles = <T extends Record<string, any>>(theme: T) => {

  return css`
      html,
      body {
        min-height: 100%;
      }
      body {
        background: ${theme.body.background};
      }
      body.fadeIn {
        transition: background .2s;
      }
      #__next {
        min-height: 100%;
        width: 100%;
      }
    `;
};

