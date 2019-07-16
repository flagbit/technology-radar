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
        Flagbit develop and maintain highly complex web applications such as online shops, PWAs or e-commerce platforms for customers from a wide variety of industries. At our Karlsruhe location, our team of e-commerce consultants and web developers plans, realizes and optimizes innovative and agile solutions based on Magento, Spryker and Akeneo.
        </span>
      </Branding>
      <FooterEnd/>
    </div>
  );
}
