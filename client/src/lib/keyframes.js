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

export const fadeInPure = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;
