import React from 'react';

const PropertyHost = ({host, description}) => {
  const {name, avatar_url, is_pro} = host
  return <div className="property__host">
    <h2 className="property__host-title">Meet the host</h2>
    <div className="property__host-user user">
      <div className={"property__avatar-wrapper" + ' ' + (is_pro && "property__avatar-wrapper--pro") + ' ' + (avatar_url || "user__avatar-wrapper")}>
        <img className="property__avatar user__avatar" src={avatar_url} width="74" height="74" alt="Host avatar"/>
      </div>
      <span className="property__user-name">
        {name}
      </span>
    </div>
    <div className="property__description">
      <p className="property__text">
        {description}
      </p>
    </div>
  </div>;
};

export default PropertyHost;
