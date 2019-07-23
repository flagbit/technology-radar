import React from 'react';
import classNames from 'classnames';

export default function FooterEnd({modifier}) {
  return (
        <div className={classNames('footer-end', {[`footer-end__${modifier}`]: modifier})}>
            <div className="footer-social">
                <div className="footer-social__label">
                    <p>Follow us:</p>
                </div>
                <div className="footer-social__links">
                    <a className="social-links-icon" href="https://www.facebook.com/flagbit" target="_blank"><i className="socicon-facebook social-icon"></i></a>
                    <a className="social-links-icon" href="https://twitter.com/flagbit" target="_blank"><i className="socicon-twitter social-icon"></i></a>
                    <a className="social-links-icon" href="https://www.instagram.com/flagbit" target="_blank"><i className="socicon-instagram social-icon"></i></a>
                    <a className="social-links-icon" href="https://www.linkedin.com/company/flagbit-gmbh-&-co-kg" target="_blank"><i className="socicon-linkedin social-icon"></i></a>
                    <a className="social-links-icon" href="https://www.xing.com/companies/flagbitgmbh%26co.kg" target="_blank"><i className="socicon-xing social-icon"></i></a>
                    <a className="social-links-icon" href="https://www.youtube.com/user/flagbittv" target="_blank"><i className="socicon-youtube social-icon"></i></a>
                    <a className="social-links-icon" href="https://github.com/flagbit" target="_blank"><i className="socicon-github social-icon"></i></a>
                </div>
            </div>
        </div>
  );
}
