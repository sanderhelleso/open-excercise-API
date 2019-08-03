import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
	from {
		transform: scale(0.25);
		opacity: 0;
	}

	to {
		transform: scale(1);
		opacity: 1;
	}
`;

export const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.25);
    opacity: 0;
  }
`;

export const expand = keyframes`
  from {
    min-width: 0;
    min-height: 0;
    opacity: 0;
    transform: rotate(20deg);
  }

  to {
    min-width: 90px;
    min-height: 90px;
    opacity: 1;
    transform: rotate(360deg);
  }
`;
