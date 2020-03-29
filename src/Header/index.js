import React, { useState } from 'react';
import Avatar from '../Avatar';
import './index.css';

const leftSocialIconsConfig = [{
  className: 'tech-blog',
  url: 'http://blog.niranjanborawake.in/',
}, {
  className: 'github',
  url: 'https://github.com/niranjan-borawake'
}, {
  className: 'stack-overflow',
  url: 'https://stackoverflow.com/users/2738966/niranjan-borawake',
}];

const rightSocialIconsConfig = [{
  className: 'linkedin',
  url: 'https://www.linkedin.com/in/niranjanborawake',
}, {
  className: 'twitter',
  url: 'https://twitter.com/niranjandb'
}, {
  className: 'kisse-blog',
  url: 'http://kisse.niranjanborawake.in/',
}];
export default ({ avatarOnClickHandler }) => {
  const [showSocialIconClass, setShowSocialIconClass] = useState('');
  return (
    <header>
      {
        leftSocialIconsConfig.map(({ className, url }) => (
          <a href={url} target="_blank" key={className} className={`hide-social-icon ${showSocialIconClass}`} rel="noopener noreferrer">
            <img alt="" className={className} />
          </a>
        ))
      }
      <Avatar onClickHandler={() => { setTimeout(() => setShowSocialIconClass('show-social-icon'), 3000); avatarOnClickHandler(); }} />
      {
        rightSocialIconsConfig.map(({ className, url }) => (
          <a href={url} target="_blank" key={className} className={`hide-social-icon ${showSocialIconClass}`} rel="noopener noreferrer">
            <img alt="" className={className} />
          </a>
        ))
      }
    </header>
  );
}