import * as React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Overview() {
  const { data: session } = useSession();

  return (
    <>
      <div className="Overview_Hero_Container">
        <div className="Overview_Hero_Wrapper">
          <div className="Overview_Hero_Text_Container">
            <h1>Support-A-Creator</h1>
            <p>
              Receive real-money payout awards from creating and sharing content
              for Fortnite, Rocket League, and participating titles in the Epic
              Games Store.
            </p>
            <div className="Global_Buttons">
              <div className="Global_Buttons_Wrapper">
                <Link href={"/signup"}>
                  <button className="Global_Button_Primary" type="button">
                    <span>{session ? ("Apply Now") : ("Signup To Apply")}</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Overview_Cards_Container">
        <div className="Overview_Cards_Wrapper">
          <div className="Overview_Card_Container">
            <div className="Overview_Card_Wrapper">
              <div className="Overview_Card_Image">
                <img
                  src="https://cdn2.unrealengine.com/apply-120x120-e97c3d975bba.png"
                  draggable="false"
                  alt=""
                ></img>
              </div>
              <div className="Overview_Card_Text">
                <h4>APPLY</h4>
                <p>
                  Sign in with your Epic account, tell us about your channels,
                  and accept the terms. Check that you meet the{" "}
                  <a href="#eligible">eligibility requirements</a>.
                </p>
              </div>
            </div>
          </div>
          <div className="Overview_Card_Container">
            <div className="Overview_Card_Wrapper">
              <div className="Overview_Card_Image">
                <img
                  src="https://cdn2.unrealengine.com/create-and-share-120x120-7380d207450e.png"
                  draggable="false"
                  alt=""
                ></img>
              </div>
              <div className="Overview_Card_Text">
                <h4>CREATE & SHARE</h4>
                <p>
                  Once you’re accepted, share your creator code and attribution
                  links with your fans and followers
                </p>
              </div>
            </div>
          </div>
          <div className="Overview_Card_Container">
            <div className="Overview_Card_Wrapper">
              <div className="Overview_Card_Image">
                <img
                  src="https://cdn2.unrealengine.com/earn-rewards-120x120-245249e320a9.png"
                  draggable="false"
                  alt=""
                ></img>
              </div>
              <div className="Overview_Card_Text">
                <h4>RECEIVE PAYOUT AWARDS</h4>
                <p>
                  You can potentially receive real-money payout awards from
                  qualifying purchases and redemptions made using your Creator
                  Code and attribution links.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Overview_Faq_Container">
        <div className="Overview_Faq_Wrapper">
          <div className="Overview_Faq_Title">
            <h3>Faq</h3>
          </div>
          <div className="Overview_Faq_Blocks">
            <div className="Overview_Faq_Section_Container Overview_NoBorderTop">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>WHAT IS THE EPIC GAMES SUPPORT-A-CREATOR PROGRAM?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      The Support-A-Creator program is an affiliate marketing
                      program for streamers and social media content creators.
                      Support-A-Creator gives creators the opportunity to
                      receive real-money payout awards by creating content for
                      Fortnite, Rocket League, and participating games in the
                      Epic Games Store. Epic believes that content creators are
                      an essential part of building communities around awesome
                      games. We recognize how important content creators of all
                      kinds have been to our success, so we built this program
                      to share in that success.
                    </p>
                    <p>
                      We’re looking for creators that focus on the quality of
                      the moments they make and share, the communities they
                      build, and the love they have for the games they play.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>
                    HOW DO I PUBLISH AND MONETIZE THE FORTNITE ISLANDS THAT I
                    HAVE CREATED?
                  </h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      The ability to publish and monetize Fortnite islands is
                      now part of the Island Creator program. The
                      Support-A-Creator program has returned to its roots as an
                      affiliate marketing program for streamers and social media
                      content creators. For information about Creator Economy
                      2.0 and how to join the Island Creator program, please
                      visit the Creator Portal{" "}
                      <a href="https://create.fortnite.com">
                        [http://create.fortnite.com]
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>HOW DO MEDIA CREATORS RECEIVE PAYOUT AWARDS?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      Before we dive into the details, we want to clarify a very
                      important point: you are not guaranteed to receive, and
                      you should not create program content with the expectation
                      of receiving, payout awards or consideration of any kind
                      in any amount. No payout awards are earned or credited to
                      you under this program unless you receive $100 USD or more
                      in attributed purchases or redemptions within a
                      12-consecutive month period. If you do not meet the $100
                      USD payout minimum within a period of 12 consecutive
                      months, any attributed purchases and/or redemptions made
                      by followers during that 12-month period will reset to
                      zero. If you participate in other Epic monetization
                      programs, Epic may combine eligible rewards payable to you
                      in connection with any other program to meet the payout
                      minimum.
                    </p>
                    <p>
                      For Fortnite, accepted creators will have 5% of the value
                      of in-game purchases made using their Creator Code applied
                      towards the $100 USD payout minimum. This applies to
                      in-game purchases made with either earned V-Bucks or
                      purchased V-Bucks, as well as most real-money offers.
                      Players declare their support for a Fortnite Creator
                      in-game by entering the creator’s code via the
                      “Support-A-Creator” button.
                    </p>
                    <p>
                      For Epic Games Store games, creators can share referral
                      links on their channels or promote their Creator Code to
                      their supporters, to get credit for sales of those games.
                      Each game has a different payout rate for attributed sales
                      set by the game's developer, but all games have a minimum
                      payout rate of 5%.
                    </p>
                    <p>
                      For Rocket League, accepted creators will have 5% of
                      Credits spent in-game while using their Creator Code
                      applied towards the $100 USD payout minimum. This applies
                      to Credits used in the Item Shop, Blueprint building and
                      Rocket Pass Premium upgrades. Players declare their
                      support for a Rocket League creator in-game by entering
                      the creator's code in the Item Shop.
                    </p>
                    <p>
                      Regardless of the game, players can choose to support a
                      different creator at any time. With the exception of Epic
                      Games Store games, once selected, that Creator Code will
                      be set for 14 days, unless another Creator Code is
                      entered. After 14 consecutive days, the
                      previously-selected Creator Code will expire, at which
                      point players can select the same Creator Code for another
                      14-day period, or choose a new one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="eligible" className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>WHO IS ELIGIBLE TO PARTICIPATE?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      Social media content creators and streamers who meet the
                      following criteria are eligible to participate:
                    </p>
                    <ul>
                      <li>
                        <p>
                          Are a legal adult according to the law where they live
                        </p>
                      </li>
                      <li>
                        <p>
                          Have 1,000+ followers* on at least one of the
                          following eligible social platforms:
                        </p>
                      </li>
                      <li>
                        <p>YouTube, Twitch, Twitter, or VK</p>
                      </li>
                      <li>
                        <p>
                          Are capable of accepting the Support-A-Creator Program
                          Terms (either on behalf of yourself or the enterprise
                          that you represent)
                        </p>
                      </li>
                      <li>
                        <p>
                          Are capable of abiding by our{" "}
                          <a href="https://www.epicgames.com/site/content-guidelines">
                            Creator Content Guidelines
                          </a>
                        </p>
                      </li>
                      <li>
                        <p>
                          Are capable of receiving payment using our designated
                          payment platform, currently{" "}
                          <a href="https://www.hyperwallet.com/">Hyperwallet</a>
                        </p>
                      </li>
                    </ul>
                    <p>
                      *Note: The social media follower requirement does not
                      apply to Epic approved Fortnite Creative Island Builders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>WHO ISN'T ELIGIBLE?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      The Support-A-Creator program is not open to individuals
                      who do not meet the eligibility requirements listed above.
                      You are also not eligible to participate if the program is
                      restricted or prohibited by law where you live, or we
                      cannot issue a payout award to you because of legal or
                      other considerations. Epic uses a third-party payout
                      provider to make payout award payments to program
                      participants in these{" "}
                      <a href="https://docs.hyperwallet.com/content/transfer-methods/v1/paypal">
                        countries and regions
                      </a>
                    </p>
                    <p>
                      The Epic ecosystem and the Support-A-Creator program
                      celebrate diversity and hope to continue adding support
                      for additional regions and languages over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>HOW MUCH CAN MEDIA CREATORS RECEIVE?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      Please expect modest results. The payout amount you can
                      potentially receive scales with the number of players who
                      choose to support you. A Fortnite example: If your in-game
                      supporters spend 50,000 V-Bucks in-game, then $25 USD
                      would be applied towards your $100 USD payout minimum. An
                      Epic Games Store example: if your supporters purchase $100
                      of games, then $5 USD would be applied towards your $100
                      USD payout minimum (at the base Epic-funded rate).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>WHEN DO I RECEIVE MY PAYOUT AWARDS?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      First things first: In order to receive payout awards
                      under the program, you must first successfully set up a
                      payout account and complete any payout enrollment process
                      required by the third-party service provider Epic engages
                      to process and distribute payout awards.
                    </p>
                    <p>
                      If you reach the $100 USD payout minimum, we will
                      distribute your payout award approximately 30 days after
                      the end of the month for which it was reached. If you
                      receive less than $100 in attributed purchases or
                      redemptions in a month, we’ll carry those attributions
                      over to the next month for up to 12 consecutive months.
                      For example, if you received $50 in attributed purchases
                      or redemptions during January and then another $50 in
                      attributed purchases or redemptions during February, we’ll
                      send you $100 in payouts by April 15.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>WHERE CAN I CHANGE MY CREATOR CODE?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      You can change your Creator Code without contacting Player
                      Support, through the Support-A-Creator tools in the Epic
                      Account Management page.
                    </p>
                    <p>
                      You can navigate to the Epic Account Management page
                      directly, via epicgames.com, by clicking the Profile in
                      the top right corner, selecting Account, and then select
                      the Support-A-Creator tab. From there, you’ll find
                      instructions to enter your desired new Creator Code and
                      check that it’s available. If it meets all the
                      requirements listed, and is available, you can lock it in
                      right there,{" "}
                      <b>
                        but please note: if you change your Creator Code, you
                        will reset any current supporters for Fortnite and
                        Rocket League in the process.
                      </b>{" "}
                      This means that players who have selected your old Creator
                      Code will not be carried over to your new Creator Code, so
                      if you do decide to change your Creator Code, be sure to
                      let your supporters know about your new Creator Code as
                      soon as possible!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text">
                  <h1>HOW DO I PROPERLY DISCLOSE THAT I'M IN THE PROGRAM?</h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper">
                    <p>
                      DON’T FORGET! Whenever (and wherever) you promote or
                      endorse the Support-A-Creator Program, Fortnite, Rocket
                      League, Epic, Psyonix, the Epic Games Store, or share your
                      Creator Code or link, you must
                    </p>
                    <p>
                      <u>
                        <b>Disclosures Must Be Clear</b>
                      </u>
                    </p>
                    <p>
                      For your disclosure to be sufficiently “clear,” the
                      wording must be one of the following:
                    </p>
                    <ul>
                      <li>
                        <p>#Ad</p>
                      </li>
                      <li>
                        <p>#Sponsored</p>
                      </li>
                      <li>
                        <p>#EpicPartner</p>
                      </li>
                      <li>
                        <p>#EpicAmbassador</p>
                      </li>
                      <li>
                        <p>
                          “In connection with Epic Games’ Support-A-Creator
                          Program, I may receive payouts from your in-game
                          purchases.”
                        </p>
                      </li>
                    </ul>
                    <p>
                      <u>
                        <b>Disclosures Must Be Conspicuous</b>
                      </u>
                    </p>
                    <p>
                      For your disclosure to be sufficiently “conspicuous,” the
                      disclosure options above must appear:
                    </p>
                    <ul>
                      <li>
                        <p>
                          In a location that consumers will easily notice,
                          without clicking, scrolling, or hunting for it. This
                          may vary for different outlets, for example:{" "}
                        </p>
                        <ul>
                          <li>
                            <p>
                              In <b>social media</b> posts: within the first two
                              lines of copy (when viewed on a desktop).
                            </p>
                          </li>
                          <li>
                            <p>
                              In <b>social media stories</b> or{" "}
                              <b>framed content</b> : superimposed as text over
                              the image/video in each and every frame, in a way
                              that viewers can easily see during the time of the
                              story (i.e., in a large-enough font, in a
                              contrasting color, separate from competing or
                              distracting text, and ideally on a solid
                              background).
                            </p>
                          </li>
                          <li>
                            <p>
                              In <b>written</b> or <b>editorial content</b> ,
                              such as a blog post: adjacent to the headline or
                              other focal point of the content, in a font size
                              that is at least reasonably the same size as the
                              other content.
                            </p>
                          </li>
                          <li>
                            <p>
                              In <b>videos</b> : within the video (at the
                              beginning), and in the video description.
                            </p>
                          </li>
                          <li>
                            <p>
                              In a <b>live stream</b> : repeated regularly so
                              those who tune in later will still know.
                            </p>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>
                          In every post and/or piece of content you share, not
                          just in a profile and/or bio.
                        </p>
                      </li>
                      <li>
                        <p>
                          As the first hashtag in the chain, if used in a long
                          list of hashtags (not buried amongst others).
                        </p>
                      </li>
                      <li>
                        <p>
                          In addition to a platform-specific tool. Tools
                          provided by Facebook, Instagram, etc. may not be
                          enough to meet these requirements.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="Overview_Faq_Section_Container">
              <div className="Overview_Faq_Section_Wrapper">
                <div className="Overview_Faq_Section_Container_Text Overview_Text_Center">
                  <h1 className="Overview_NoUppercase">
                    For any further questions or concerns, please visit our
                    Support Page:
                  </h1>
                  <div className="Overview_Faq_Section_Container_Text_P_Wrapper Overview_SmallMarginFAQ Overview_WFull">
                    <p>
                      <a href="https://www.epicgames.com/help/supportacreator-c83">
                        https://www.epicgames.com/help/supportacreator-c83
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
