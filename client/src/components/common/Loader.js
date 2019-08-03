import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loader = ({ size, color }) => <MoonLoader sizeUnit={'px'} size={size} color={color} loading={true} />;

export default Loader;
