import React, { Fragment } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const BulletHeaderList = ({list}) => (
  <Fragment>
    {list.map((item, index) => {
      return (
        <Fragment key={index}>
          <Text>{item.title}</Text>
          <Text>{item.content}</Text>
        </Fragment>
      );
    })}
  </Fragment>
);

BulletHeaderList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default BulletHeaderList;
