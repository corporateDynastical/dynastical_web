"use client";
import Link from "next/link";
import Image from "next/image";
import { Didact_Gothic, Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import style from "@styles/AboutUs.module.scss";

const didact = Didact_Gothic({
  weight: "400",
  subsets: ["latin-ext"],
});

const mont = Montserrat({
  weight: "800",
  subsets: ["latin"],
});

const AboutUs = () => {

  return (
    <div className={style.container}>
      <div className={style.circle}>
        <div className={style.outerBorder}>
          <div className={style.innerBorder}></div>
        </div>
      </div>
      <div className={style.left}>
        <p className={`${style.headingOne}`}>We're Offering</p>
        <h1 className={didact.className}>Awesome <span> Services</span></h1>
        <p className={style.tagline}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className={style.info}>
          Dynastical Communication is a full-service digital marketing and
          advertising agency in Pune that helps businesses increase their online
          visibility and reach their target audience. With a team of experienced
          professionals, Dynastical Communication provides a range of services
          including SEO, PPC advertising, social media marketing, email
          marketing, content marketing, and website design and development. At
          Dynastical Communication, we believe that your digital dreams can
          become a reality with the right strategy and execution. So, join us
          and reign your digital kingdom with confidence!
        </p>
      </div>
      <div className={style.right}>
        <div className={style.blockDiv}>
          <div className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/icons/digital-campaign.png"}
                alt="digital marketing"
                fill
              />
            </div>
            <p className={mont.className}>Digital Marketing</p>
            <button>
              <Link href={"/digital-marketing"}>
                See More{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </Link>
            </button>
          </div>
          <div className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/icons/teamwork.png"}
                alt="corporate solutions"
                fill
              />
            </div>
            <p className={mont.className}>Corporate Solution</p>
            <button>
              <Link href={"/corporate-solutions"}>
                See More{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </Link>
            </button>
          </div>
          <div className={style.block}>
            <div className={style.picture}>
              <Image
                src={"/icons/statistic.png"}
                alt="political analysis"
                fill
              />
            </div>
            <p className={mont.className}>Political Analysis</p>
            <button>
              <Link href={"/political-analysis"}>
                See More{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </Link>
            </button>
          </div>
          <div className={style.block}>
            <div className={style.picture}>
              <Image src={"/icons/people.png"} alt="events" fill />
            </div>
            <p className={mont.className}>Events</p>
            <button>
              <Link href={"/events"}>
                See More{" "}
                <span>
                  <BsArrowRight />
                </span>{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
