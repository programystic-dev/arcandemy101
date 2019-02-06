import React, { Fragment } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const BulletList = ({list}) => (
  <Fragment>
    {list.map((item, index) => {
      return ( <Text key={index}>{item}</Text> );
    })}
  </Fragment>
);

BulletList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default BulletList;
