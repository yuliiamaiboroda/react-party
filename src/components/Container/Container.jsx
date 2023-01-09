import { PropTypes } from 'prop-types';
import Box from 'components/Box';

export default function Container({ children }) {
  return (
    <Box
      maxWidth={[
        'containerWidth.mobile',
        'containerWidth.tablet',
        'containerWidth.desktop',
      ]}
      mx="auto"
      my="0"
      px={[3, 4, 3]}
      py="0"
    >
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};
