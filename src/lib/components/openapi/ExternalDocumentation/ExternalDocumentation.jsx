import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import CommonMark from 'lib/components/common/CommonMark';
import s from './ExternalDocumentation.css';


function ExternalDocumentation(props) {
  const className = classnames(s.externalDocumentation, props.className);
  return (
    <div className={className}>
      <Heading className={s.heading}>External documentation</Heading>
      <CommonMark>{ props.description }</CommonMark>
      <a href={props.url}>{ props.url }</a>
    </div>
  );
}
ExternalDocumentation.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};


export default ExternalDocumentation;
