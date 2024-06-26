import "../App.css";

import seach from "../assets/Search.svg";
import setting from "../assets/Settings.svg";
import more from "../assets/More-2.svg";
import follow from "../assets/Follow.svg";

const fakeFollowData = [
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1455000928255045632/8gJ-F89a_400x400.jpg",
    content: {
      body: {
        title: {
          author: "Elon Musk",
          detail:
            "Tesla CEO Elon Musk says he's 'excited' about Twitter's potential",
        },
      },
    },
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1455000928255045632/8gJ-F89a_400x400.jpg",
    content: {
      body: {
        title: {
          author: "Bill Gates",
          detail: "Bill Gates says he's 'optimistic' about the future of AI",
        },
      },
    },
  },
  {
    avatar:
      "https://pbs.twimg.com/profile_images/1455000928255045632/8gJ-F89a_400x400.jpg",
    content: {
      body: {
        title: {
          author: "Sundar Pichai",
          detail:
            "Google CEO Sundar Pichai says he's 'focused' on making AI more accessible",
        },
      },
    },
  },
];

function Trends() {
  return (
    <div className="min-w-[20rem] p-5  gap-px gap-4 bg-black text-white">
      <div className="search-twitter bg-gray-800 flex rounded-full p-5 gap-px ">
        <img src={seach} alt="" />
        <input
          className="bg-gray-800"
          type="text"
          placeholder="Search Twitter"
        />
      </div>

      <div className="trends-for-you p-5 flex flex-col gap-* gap-1 bg-gray-800 my-4 rounded-lg">
        <div className="trends-title font-bold flex justify-between">
          <h3>Trends for you</h3>
          <img src={setting} alt="" />
        </div>

        <div className="squid">
          <div className="squid-conent ">
            <p>Trending in Turky</p>
            <h3 className="font-bold flex justify-between">
              {" "}
              #SQUID
              <img src={more} alt="" />
            </h3>
            <p>2,066 Tweets</p>
          </div>
        </div>

        <div className="squid">
          <div className="squid-conent">
            <p className="">Trending in Turky</p>
            <h3 className="font-bold flex justify-between">
              #SQUID
              <img src={more} alt="" />
            </h3>
            <p>2,066 Tweets</p>
          </div>
        </div>

        <div className="squid">
          <div className="squid-conent">
            <p>Trending in Turky</p>
            <h3 className="font-bold flex justify-between">
              #SQUID
              <img src={more} alt="" />
            </h3>
            <p>2,066 Tweets</p>
          </div>
        </div>

        <div className="squid">
          <div className="squid-conent">
            <p>Trending in Turky</p>
            <h3 className="font-bold flex justify-between">
              #SQUID
              <img src={more} alt="" />
            </h3>
            <p>2,066 Tweets</p>
          </div>
        </div>

        <div className="show-more">
          <h3 className="text-blue-600 font-bold">Show more</h3>
        </div>
      </div>

      <div className="who-to-follow p-5 bg-gray-800 my-4 rounded-lg">
        <div className="trends-title">
          <h3 className="font-bold">Who to follow</h3>
        </div>
        {fakeFollowData.map((fol, i) => (
          <div className="follow" key={i}>
            <div className="tweet-avatar">
              <img src={fol.avatar} alt="" />
            </div>
            <div className="followConten">
              <div className="tweet-title2">
                <div className="tweet-title-author2">
                  <p>{fol.content.body.title.author}</p>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 12.5C22.5 10.92 21.625 9.55 20.352 8.9C20.506 8.465 20.59 7.995 20.59 7.5C20.59 5.29 18.88 3.502 16.772 3.502C16.302 3.502 15.852 3.586 15.436 3.752C14.818 2.415 13.51 1.5 12 1.5C10.49 1.5 9.18402 2.417 8.56302 3.75C8.14802 3.585 7.69702 3.5 7.22702 3.5C5.11702 3.5 3.40902 5.29 3.40902 7.5C3.40902 7.994 3.49202 8.464 3.64602 8.9C2.37402 9.55 1.49902 10.918 1.49902 12.5C1.49902 13.995 2.28102 15.298 3.44102 15.986C3.42102 16.156 3.40902 16.326 3.40902 16.5C3.40902 18.71 5.11702 20.5 7.22702 20.5C7.69702 20.5 8.14702 20.414 8.56202 20.25C9.18202 21.584 10.488 22.5 11.999 22.5C13.511 22.5 14.817 21.584 15.436 20.25C15.851 20.413 16.301 20.498 16.772 20.498C18.882 20.498 20.59 18.708 20.59 16.498C20.59 16.324 20.578 16.154 20.557 15.985C21.715 15.298 22.5 13.995 22.5 12.501V12.5ZM15.884 9.166L11.55 15.666C11.405 15.883 11.168 16 10.925 16C10.782 16 10.637 15.96 10.509 15.874L10.394 15.78L7.97902 13.365C7.68602 13.072 7.68602 12.597 7.97902 12.305C8.27202 12.013 8.74702 12.011 9.03902 12.305L10.809 14.072L14.634 8.332C14.864 7.987 15.33 7.896 15.674 8.125C16.02 8.355 16.114 8.821 15.884 9.165V9.166Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                </div>
                <div className="tweet-title-details">
                  {fol.content.body.title.detail}
                </div>
              </div>
              <button className="btnfollow font-bold border rounded-full bg-white text-black">
                Follow
              </button>
            </div>
          </div>
        ))}
        <div className="show-more">
          <h3 className=" text-blue-600 font-bold">Show more</h3>
        </div>
      </div>

      <div className="info-content bg-black">
        <p className="info">
          Terms of Service Privacy Policy Cookie Policy Imprint Ads info More
          ... ©2021 Twitter, Inc.
        </p>
      </div>
    </div>
  );
}

export default Trends;
