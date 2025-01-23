import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PrimaryBtn from "./components/button/PrimaryBtn";
import bitCoinImg from "./assets/imgs/bitCoinImg.png";
import Play from "./assets/svg/play.svg?react";
import Lt from "./components/linkText/Lt";
import PrimaryLogo from "./components/primaryLogo/PrimaryLogo";
import Money from "./assets/svg/moneys.svg?react";
import SCard from "./assets/svg/shopping-cart.svg?react";
import EWallet from "./assets/svg/empty-wallet.svg?react";
import Unlock from "./assets/svg/unlock.svg?react";
import BitCoinCon from "./assets/svg/bitcoin-convert.svg?react";
import Bootstrap from "./assets/svg/bootsrap.svg?react";
import Activity from "./assets/svg/activity.svg?react";
import map from "./assets/svg/map.svg";
import tradingImg from "./assets/imgs/trading.png";
import H1 from "./components/h1/H1";
import P from "./components/p/P";
import H2 from "./components/h2/H2";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import Card1 from "./components/card1/Card1";
import VContainer from "./components/vContainer/VContainer";
import SectionHead from "./components/sectionHead/SectionHead";
import Card2 from "./components/card2/Card2";
import Slider from "./components/slider/Slider";

import Profile from "./assets/svg/profile.svg?react";
import LikeDisLike from "./assets/svg/like-dislike.svg?react";
import Star from "./assets/svg/star.svg?react";
import MusicPlay from "./assets/svg/music-play.svg?react";
import Card3 from "./components/card3/Card3";
import cartoonBitCoin from "./assets/imgs/cartoonBitCoin.png";

import manCartoon from "./assets/imgs/manCartoon.png";
import dogCartoon from "./assets/imgs/dogCartoon.png";
import catCartoon from "./assets/imgs/catCartoon.png";

import bitCoinExchange from "./assets/svg/bitCoinExchange.svg";
import earth from "./assets/imgs/earth.png";

import FacebookIcon from "./assets/svg/facebookIcon.svg?react";
import TwitterIcon from "./assets/svg/twitterIcon.svg?react";
import YoutubeIcon from "./assets/svg/youtubeIcon.svg?react";

import Call from "./assets/svg/call.svg?react";
import Sms from "./assets/svg/sms.svg?react";
import Clock from "./assets/svg/clock.svg?react";

function App() {
  return (
    <>
      <div className="app">
        <Header />

        <Container
          m={50}
          leftCon={
            <div className="hdet">
              <div className="glow"></div>
              <H1>
                Best place buy and sell{" "}
                <span className="colorize">crypto currency</span> asset
              </H1>
              <P
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum."
                }
              />

              <div className="containerBtns">
                <PrimaryBtn h={true} title={"Get Started"} />
                <PrimaryBtn
                  h={true}
                  outline={true}
                  title={"Watch Tutorial"}
                  LIcon={<Play />}
                />{" "}
              </div>
            </div>
          }
          rightCon={
            <div className="imgCon flex align-items-center justify-content-center">
              <span className="overS1"></span>
              <span className="overS1 s1"></span>
              <span className="overS1 s2"></span>
              <span className="overS1 s3"></span>
              <span className="overS1 s5"></span>
              <span className="overS1 s4"></span>
              <img src={bitCoinImg} />
            </div>
          }
        />
        <Container
          m={50}
          leftCon={
            <img src={tradingImg} className="w80 border border-2 rounded-4" />
          }
          rightCon={
            <div>
              <SectionHead
                about={"About us"}
                title={"Accelerate the world's transition"}
                des={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum."
                }
              >
                <br />
                <PrimaryBtn title={"More About Us"} h={true} />
              </SectionHead>
            </div>
          }
        />

        <VContainer
          top={
            <SectionHead
              cs="text-center"
              about={"Why Choose Us"}
              title={"Safe, guaranteed, and easy to use"}
              des={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum."
              }
            />
          }
          bottom={
            <Slider
              contents={
                <>
                  <Card1
                    icon={<Unlock />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Safe and secure"}
                  />
                  <Card1
                    icon={<Activity />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Good invesment"}
                  />
                  <Card1
                    icon={<Bootstrap />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Integrated app"}
                  />
                  <Card1
                    icon={<BitCoinCon />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Multi Curency Support"}
                  />
                  <Card1
                    icon={<BitCoinCon />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Multi Curency Support"}
                  />
                  <Card1
                    icon={<BitCoinCon />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Multi Curency Support"}
                  />
                  <Card1
                    icon={<BitCoinCon />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Multi Curency Support"}
                  />
                </>
              }
            />
          }
        />
        <VContainer
          top={
            <SectionHead
              cs="text-center"
              about={"Step by step guide"}
              title={"Easy Steps to Success"}
              des={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum."
              }
            />
          }
          bottom={
            <Slider
              contents={
                <>
                  <Card2
                    icon={<EWallet />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Safe and secure"}
                  >
                    <br />
                    <PrimaryBtn
                      h={true}
                      RIcon={
                        <span className="text-white">
                          <FaAngleRight />
                        </span>
                      }
                      title={"Learn More"}
                    />
                  </Card2>
                  <Card2
                    icon={<Money />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Make Payment"}
                  >
                    <br />
                    <PrimaryBtn
                      h={true}
                      RIcon={
                        <span className="text-white">
                          <FaAngleRight />
                        </span>
                      }
                      title={"Learn More"}
                    />
                  </Card2>
                  <Card2
                    icon={<SCard />}
                    des={
                      "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                    }
                    title={"Buy and or sell"}
                  >
                    <br />
                    <PrimaryBtn
                      h={true}
                      RIcon={
                        <span className="text-white">
                          <FaAngleRight />
                        </span>
                      }
                      title={"Learn More"}
                    />
                  </Card2>
                </>
              }
            />
          }
        />

        <Container
          leftCon={
            <SectionHead
              about={"Our vision"}
              title={"Users from all over the world"}
              des={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."
              }
            >
              <div className="flex align-items-center justify-content-start gap-5 mt-5">
                <section className="text-center count-s">
                  <H2 title={"32K+"} l={true} />
                  <P title={"People Joined"} />
                </section>
                <section className="text-center count-s">
                  <H2 title={"250+"} l={true} />
                  <P title={"VIP Users"} />
                </section>
                <section className="text-center count-s">
                  <H2 title={"87+"} l={true} />
                  <P title={"Big companies"} />
                </section>
              </div>
            </SectionHead>
          }
          rightCon={<img src={map} className="w100" />}
        />

        <VContainer
          top={
            <SectionHead
              cs={"text-center"}
              about={"Our Features"}
              title={"All you need is here"}
              des={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."
              }
            >
              <div className="tcx w-100 d-grid align-items-center lis">
                <img src={cartoonBitCoin} className="w80 mx-auto" />
              </div>
            </SectionHead>
          }
          bottom={
            <div className="flex feature">
              <div className="colm">
                <Card3
                  title={"Free trial account"}
                  des={
                    "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                  }
                  icon={<Profile />}
                />
                <br />
                <Card3
                  title={"Affordable"}
                  des={
                    "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                  }
                  icon={<LikeDisLike />}
                />
              </div>
              <div className="tcx w-100 d-grid align-items-center lig">
                <img src={cartoonBitCoin} className="w80 mx-auto" />
              </div>
              <div className="colm">
                <Card3
                  title={"Guide by Experts"}
                  des={
                    "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                  }
                  icon={<Star />}
                />
                <br />
                <Card3
                  title={"24/7 Live Support"}
                  des={
                    "Lorem ullamco laboris nisi ex ea commodo consequat. Duis aute  mollit anim id est laborum sad to veniam nostrud quis exercition laboris."
                  }
                  icon={<MusicPlay />}
                />
              </div>
            </div>
          }
        />

        <VContainer
          top={
            <SectionHead
              about={"Papasale"}
              title={"Lauchpad Lists"}
              cs={"text-center"}
            />
          }
          bottom={
            <div className=" flex justify-content-center gap-4 boxContainer xx3">
              <div className="lauchCard text-white p-4 flex flex-column justify-content-between rounded-3">
                <div className="dualContent flex align-items-center justify-content-between">
                  <div className="profileImg bg-danger rounded-circle flex align-items-center justify-content-center">
                    <img src={manCartoon} className="w-100" />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"Uploading"}
                    />
                  </div>
                </div>
                <P title={"Defy kings Lending"} />
                <P
                  title={"1 BNB = 69,444.44 DKL"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P
                  title={"Soft/Hard1B BNB - 36 BNB"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P title={"18 BNB - 36 BNB"} />
                <div className="progressContent">
                  <P
                    title={"Progress (0.00%)"}
                    sss={true}
                    cs={"text-white m-0"}
                  />
                  <div className="progressBar rounded-5"></div>
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"0 BNB"} sss={true} cs={"text-white m-0"} />
                  <P title={"36 BNB"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Liquidity %"} sss={true} cs={"text-white m-0"} />
                  <P title={"51 %"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Lockup Time:"} sss={true} cs={"text-white m-0"} />
                  <P title={"180 days"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <div>
                    <P
                      title={"Sale stars in:"}
                      sss={true}
                      cs={"text-white m-0"}
                    />
                    <P title={"26:19:40:25"} sss={true} cs={"text-white m-0"} />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"view"}
                    />
                  </div>
                </div>
              </div>

              <div className="lauchCard text-white p-4 flex flex-column justify-content-between rounded-3">
                <div className="dualContent flex align-items-center justify-content-between">
                  <div className="profileImg bg-danger rounded-circle flex align-items-center justify-content-center">
                    <img src={dogCartoon} className="w-100" />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"Uploading"}
                    />
                  </div>
                </div>
                <P title={"Fedy kings Lending"} />
                <P
                  title={"1 BNB = 69,444.44 DKL"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P
                  title={"Soft/Hard1B BNB - 36 BNB"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P title={"18 BNB - 36 BNB"} />
                <div className="progressContent">
                  <P
                    title={"Progress (0.00%)"}
                    sss={true}
                    cs={"text-white m-0"}
                  />
                  <div className="progressBar rounded-5"></div>
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"0 BNB"} sss={true} cs={"text-white m-0"} />
                  <P title={"36 BNB"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Liquidity %"} sss={true} cs={"text-white m-0"} />
                  <P title={"51 %"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Lockup Time:"} sss={true} cs={"text-white m-0"} />
                  <P title={"180 days"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <div>
                    <P
                      title={"Sale stars in:"}
                      sss={true}
                      cs={"text-white m-0"}
                    />
                    <P title={"26:19:40:25"} sss={true} cs={"text-white m-0"} />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"view"}
                    />
                  </div>
                </div>
              </div>

              <div className="lauchCard text-white p-4 flex flex-column justify-content-between rounded-3">
                <div className="dualContent flex align-items-center justify-content-between">
                  <div className="profileImg bg-danger rounded-circle flex align-items-center justify-content-center">
                    <img src={catCartoon} className="w-100" />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"Uploading"}
                    />
                  </div>
                </div>
                <P title={"Define kings Lending "} />
                <P
                  title={"1 BNB = 69,444.44 DKL"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P
                  title={"Soft/Hard1B BNB - 36 BNB"}
                  sss={true}
                  cs={"text-white m-0"}
                />
                <P title={"18 BNB - 36 BNB"} />
                <div className="progressContent">
                  <P
                    title={"Progress (0.00%)"}
                    sss={true}
                    cs={"text-white m-0"}
                  />
                  <div className="progressBar rounded-5"></div>
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"0 BNB"} sss={true} cs={"text-white m-0"} />
                  <P title={"36 BNB"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Liquidity %"} sss={true} cs={"text-white m-0"} />
                  <P title={"51 %"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <P title={"Lockup Time:"} sss={true} cs={"text-white m-0"} />
                  <P title={"180 days"} sss={true} cs={"text-white m-0"} />
                </div>
                <div className="dualContent flex align-items-center justify-content-between">
                  <div>
                    <P
                      title={"Sale stars in:"}
                      sss={true}
                      cs={"text-white m-0"}
                    />
                    <P title={"26:19:40:25"} sss={true} cs={"text-white m-0"} />
                  </div>
                  <div className="wf px-2  rounded-pill m-0 outlBtn">
                    <P
                      cs={"m-0 text-white fw-light"}
                      sss={true}
                      title={"view"}
                    />
                  </div>
                </div>
              </div>
            </div>
          }
        />

        <div className="flex align-items-center justify-content-between rounded-3 box ec">
          <div className="left w-100">
            <Lt title={"Crypto Exchange"} />
            <P title={"Low fees and deep liquidity"} l={true} />
            <P
              title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."
              }
            />
            <br />
            <PrimaryBtn title={"Go To Exchange"} h={true} />
          </div>
          <div className="w-100 flex align-items-center justify-content-center right">
            <img src={bitCoinExchange} className="" />
          </div>
        </div>
        <br />
        <br />
        <div className="box bg-transparent flex align-items-center justify-content-between my-5 rounded-3 ecx">
          <div className="right w-100 flex align-items-center justify-content-center">
            <img src={earth} className="" />
          </div>
          <div className="left w-100">
            <Lt title={"Start Now"} />
            <P title={"Sign up to learn more"} l={true} />
            <P
              title={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."
              }
            />
            <br />
            <div className="inp flex bg-white wf overflow-hidden rounded-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-1"
              />
              <PrimaryBtn title={"Subscribes"} h={true} />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-100 flex align-items-center justify-content-center gap-5 ex">
        <section>
          <PrimaryLogo />
          <P
            title={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."
            }
          />
          <br />
          <div className="flex gap-2 icss">
            <div className="id flex align-items-center justify-content-center rounded-circle">
              <FacebookIcon />
            </div>
            <div className="id flex align-items-center justify-content-center rounded-circle">
              <TwitterIcon />
            </div>
            <div className="id flex align-items-center justify-content-center rounded-circle">
              <YoutubeIcon />
            </div>
          </div>
        </section>

        <section>
          <P title={"Our Products"} l={true} cs={"text-white"} />
          <a href="#" className="ad">
            <P title={"Crypto Earn"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Exchanges"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Defi Wallet"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Converter"} cs={"text-white"} />
          </a>
        </section>
        <section>
          <P title={"Pages"} l={true} cs={"text-white"} />
          <a href="#" className="ad">
            <P title={"About Us"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Our aap"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Careers"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <P title={"Taken Safe"} cs={"text-white"} />
          </a>
        </section>
        <section>
          <P title={"Contact"} l={true} cs={"text-white"} />
          <a href="#" className="ad">
            <Call />
            <P title={"(205) 555-01000"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <Sms />
            <P title={"Mon - Fri : 9 am- 11 pm"} cs={"text-white"} />
          </a>
          <a href="#" className="ad">
            <Clock />
            <P title={"Email@Coinreal.com"} cs={"text-white"} />
          </a>
        </section>
      </footer>
    </>
  );
}

export default App;
