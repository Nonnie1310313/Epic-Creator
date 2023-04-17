import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <div className="Footer-footer_10e6ab13">
        <div className="egh-theme epic_games">
          <footer
            id="egf"
            className="egf container-fluid bg-color mobile-border-color epic_games "
            data-version="7.0.7"
          >
            <div className="row footer-social-container">
              <div className="col-xs-10 col-sm-8">
                <ul className="social">
                  <li>
                    <Link
                      id="facebook"
                      className="focusable"
                      href={"http://facebook.com/epicgames"}
                      data-index={0}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <i className="text-color-nonactive accent-color-hover eg-footer-icon-facebook">
                          &nbsp;
                        </i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="twitter"
                      className="focusable"
                      href={"https://twitter.com/epicgames"}
                      data-index={1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <i className="text-color-nonactive accent-color-hover eg-footer-icon-twitter">
                          &nbsp;
                        </i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      id="youtube"
                      className="focusable"
                      href={"http://youtube.com/epicgamesinc"}
                      data-index={2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <i className="text-color-nonactive accent-color-hover eg-footer-icon-youtube">
                          &nbsp;
                        </i>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-2 col-sm-4 pull-right">
                <button
                  onClick={() => {
                    document.body.scrollTop = 0;
                  }}
                  aria-label="Return to top"
                  className="focusable up-button text-color-nonactive-border accent-color-hover-border "
                >
                  <span className="eg-footer-icon-carrot text-color-nonactive accent-color-hover" />
                </button>
              </div>
            </div>
            <div className="row footer-links-container">
              <div className="col-xs-12 col-sm-8 col-md-7 col-lg-6">
                <div className="footerLink-wrapper thin one two three">
                  <div className="inner-wrap">
                    <div className="subtitle text-color mobile-border-color">
                      <span>Resources</span>
                    </div>
                    <ul className="footerLinks first-column">
                      <li>
                        <Link
                          href={"/"}
                          data-index={0}
                          className="focusable text-color accent-color-hover "
                          target=""
                          rel="noopener noreferrer"
                        >
                          Support-A-Creator
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/store/about?lang=en-US"
                          }
                          data-index={1}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Publish on Epic Games
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/site/careers?lang=en-US"
                          }
                          data-index={2}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Careers
                        </Link>
                      </li>
                    </ul>
                    <ul className="footerLinks second-column">
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/site/about?lang=en-US"
                          }
                          data-index={3}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Company
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/site/fan-art-policy?lang=en-US"
                          }
                          data-index={4}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Fan Art Policy
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://www.epicgames.com/site/ux?lang=en-US"}
                          data-index={5}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          UX Research
                        </Link>
                      </li>
                    </ul>
                    <ul className="footerLinks third-column">
                      <li>
                        <a
                          href={"/eula"}
                          data-index={6}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Creator Agreement
                        </a>
                      </li>
                      <li>
                        <Link
                          href={"https://dev.epicgames.com/?lang=en-US"}
                          data-index={7}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Online Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/site/community-rules?lang=en-US"
                          }
                          data-index={8}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Community Rules
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footerLink-wrapper thin one two ">
                  <div className="inner-wrap">
                    <div className="subtitle text-color mobile-border-color">
                      <span>Made By Epic Games</span>
                    </div>
                    <ul className="footerLinks first-column">
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/battlebreakers?lang=en-US"
                          }
                          data-index={0}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Battle Breakers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"https://www.epicgames.com/fortnite?lang=en-US"}
                          data-index={1}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Fortnite
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/infinityblade?lang=en-US"
                          }
                          data-index={2}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Infinity Blade
                        </Link>
                      </li>
                    </ul>
                    <ul className="footerLinks second-column">
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/roborecall?lang=en-US"
                          }
                          data-index={3}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Robo Recall
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/shadowcomplex?lang=en-US"
                          }
                          data-index={4}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Shadow Complex
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            "https://www.epicgames.com/unrealtournament?lang=en-US"
                          }
                          data-index={5}
                          className="focusable text-color accent-color-hover "
                          rel="noopener noreferrer"
                        >
                          Unreal Tournament
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cta-section tag-section">
                <div />
              </div>
            </div>
            <hr className="mobile-border-color" />
            <div className="row copyright">
              <div className="col-xs-12 col-md-12 col-lg-6 no-padding">
                <div className="copyright-paragraph">
                  <span className="text-color-nonactive">
                    © 2023, Epic Games, Inc. All rights reserved. Epic, Epic
                    Games, the Epic Games logo, Fortnite, the Fortnite logo,
                    Unreal, Unreal Engine, the Unreal Engine logo, Unreal
                    Tournament, and the Unreal Tournament logo are trademarks or
                    registered trademarks of Epic Games, Inc. in the United
                    States of America and elsewhere. Other brands or product
                    names are the trademarks of their respective owners. Non-US
                    transactions through Epic Games International, S.à r.l.{" "}
                    {/* */}&nbsp;&nbsp;
                  </span>
                </div>
              </div>
            </div>
            <div className="row footer-legal">
              <div className="col-xs-12 col-sm-6 legal">
                <ul className="links">
                  <li className="more-legal-link">
                    <Link
                      className="focusable text-color accent-color-hover"
                      data-index={0}
                      rel="noopener noreferrer"
                      href={"https://www.epicgames.com/site/tos?lang=en-US"}
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="more-legal-link">
                    <Link
                      className="focusable text-color accent-color-hover"
                      data-index={1}
                      rel="noopener noreferrer"
                      href={
                        "https://www.epicgames.com/site/privacypolicy?lang=en-US"
                      }
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="more-legal-link">
                    <Link
                      className="focusable text-color accent-color-hover"
                      data-index={2}
                      rel="noopener noreferrer"
                      href={
                        "https://www.epicgames.com/site/store-refund-policy?lang=en-US"
                      }
                    >
                      Store Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-6 legal">
                <ul className="logos">
                  <li>
                    <Link
                      className="focusable"
                      href={"https://www.epicgames.com"}
                      title="Epic Games"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        title="Epic Games"
                        className="text-color-nonactive eg-footer-icon-eg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="focusable"
                      href={"https://www.unrealengine.com"}
                      title="Unreal Engine"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        title="Unreal Engine"
                        className="text-color-nonactive eg-footer-icon-ue"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
