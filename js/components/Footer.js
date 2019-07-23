import React from 'react';
import classNames from 'classnames';
import Branding from './Branding';
import FooterEnd from './FooterEnd';
import { assetUrl, getItemPageNames, isMobileViewport } from '../../common/config';

export default function Footer({ items, pageName }) {
  return (
    <div className={classNames('footer', {'is-hidden': !isMobileViewport() && getItemPageNames(items).includes(pageName)})}>
      <Branding
        modifier="footer"
        logoContent={<img src={assetUrl('logo.svg')} width="150px" height="60px" />}
      >
        <span className="footnote">
        Flagbit stands for the realization of highly complex and individual e-commerce solutions. The development of a strategic and sustainable project vision is in focus and serves as a basis for the joint cooperation with our customers. In the backend, we rely on PHP-based systems and frameworks such as Akeneo, Magento 2, Spryker, and Symfony.
        </span>
      </Branding>
      <FooterEnd/>
    </div>
  );
}
