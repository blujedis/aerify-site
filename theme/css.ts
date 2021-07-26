import { css } from '@aerify/react';

export const createGlobalStyles = <T extends Record<string, any>>(theme: T) => {

  return css`
      html,
      body {
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
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

