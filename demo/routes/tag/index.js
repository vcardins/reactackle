import React from 'react';
// eslint-disable-next-line
import TagCode from '!raw-loader!../../../packages/reactackle-tag/src/Tag';
import { RouteInfo, RouteProps } from '../../components/Route/RouteStructure';

const propTypes = RouteInfo.propTypes;
const defaultProps = {
  ...RouteInfo.defaultProps,
  componentTitle: 'Tag',
  routeTitle: 'Tag',
};

const itemProps = (
  <RouteProps
    componentCode={TagCode}
    title="Tag Props"
  />
);

export const TagIndexRoute = props => (
  <div className="route-info">
    <RouteInfo {...props}>
      {itemProps}
    </RouteInfo>
  </div>
);

TagIndexRoute.propTypes = propTypes;
TagIndexRoute.defaultProps = defaultProps;
TagIndexRoute.displayName = 'TagIndexRoute';
