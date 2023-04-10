import React from "react";
import "./RightSidebar.css";
import Comment from "../../assets/comment-alt-solid.svg";
import Pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>The overflow Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
        <img src={Pen} alt="Pen" width="18" />
          <p>Consistancy is the key to success to your Dev Career</p>
        </div>
        <div className="right-sidebar-div-2">
        <img src={Pen} alt="Pen" width="18" />
          <p>Podcast 377: How to stay self motivated while coding?</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={Comment} alt="Comment" width="18" />
          <p>Review queue workflows - Final release....</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={Comment} alt="Comment" width="18" />
          <p>Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="Pen" width="18" />
          <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>89</p>
          <p>Why was this my question not showing, yet the question is getting reply?</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>45</p>
          <p>How do I start to code roadmap to coding for beginners?</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>12</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
