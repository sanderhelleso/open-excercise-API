import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
	from {
		transform: scale(0.7);
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
    transform: scale(.25);
    opacity: 0;
  }
`;
