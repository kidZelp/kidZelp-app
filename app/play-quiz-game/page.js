"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";

import "./page.css";
import icon from "@/assets/Logo.png";

const PlayQuizGame = () => {
  const [secondsLeft, setSecondsLeft] = useState(10); // Set the initial countdown time
  const [scrollToTarget, setScrollToTarget] = useState(false);

  const [text, settext] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (secondsLeft > 0) {
        setSecondsLeft((prevSeconds) => prevSeconds - 1);
      } else {
        clearInterval(timerInterval);
        setScrollToTarget(true);
      }
    }, 1900);

    return () => clearInterval(timerInterval);
  }, [secondsLeft]);

  useEffect(() => {
    if (scrollToTarget) {
      const targetElement = document.getElementById("scroll");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToTarget, "scroll"]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const videoRef = useRef(null);
  const [name, setName] = useState("");

  const questions = [
    {
      src: "https://ik.imagekit.io/wellnesswards/scene1.mp4?updatedAt=1695668108651",
      text: "Q. What will Shreya do?",
      options: [
        {
          id: 0,
          text: "1. She thinks of helping the cat but she doesn't want to get punished.",
        },
        { id: 1, text: "2. She walks away." },
        { id: 2, text: "3. She helps the cat and is thus late for school." },
        { id: 3, text: "4. She calls someone else for the help." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE2.mp4?updatedAt=1695668109072",
      text: "Q. What should Shreya do?",
      options: [
        {
          id: 0,
          text: "1. She is very hungry and doesn’t want to share her lunch.",
        },
        { id: 1, text: "2. She asks her friends to share their lunch." },
        { id: 2, text: "3. She shares her lunch." },
        { id: 3, text: "4. She buys something for her bench-mate." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE3.mp4?updatedAt=1695668109044",
      text: "Q. How will Shreya respond?",
      options: [
        { id: 0, text: "1. She is tired and wants to stay alone." },
        { id: 1, text: "2. She shouts at her friends for forcing her." },
        { id: 2, text: "3. She agrees to play Kho-Kho with her friends." },
        { id: 3, text: "4. She ignores her friends." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE4.mp4?updatedAt=1695668109047",
      text: "Q. Now what will Shreya do?",
      options: [
        { id: 0, text: "1.She will refuse to give her notebook." },
        {
          id: 1,
          text: "2.She will ignore him & submit the notebook for checking.",
        },
        {
          id: 2,
          text: "3.She will give him the notebook and ask to return her notebook fast.",
        },
        {
          id: 3,
          text: "4.She will scold him and submit the notebook afterwards.",
        },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE5.mp4?updatedAt=1695668109518",
      text: "Q. How will she ask her classmates to join her?",
      options: [
        { id: 0, text: "1.Politely, she will ask all of her friends." },
        { id: 1, text: "2.She will force each friend to join the team." },
        {
          id: 2,
          text: "3.She will fight with her friends over the different team formation.",
        },
        {
          id: 3,
          text: "4.She will complain the teacher and ask for the help.",
        },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE6.mp4?updatedAt=1695668109490",
      text: "Q. Will she offer the seat to that sick student?",
      options: [
        { id: 0, text: "1.Yes" },
        { id: 1, text: "2.No" },
      ],
    },
  ];

  const optionClicked = (id) => {
    // Increment the score
    if (videoEnded) {
      if (id === 0) {
        setScore(score + 1);
      } else if (id === 1) {
        setScore(score + 2);
      } else if (id === 2) {
        setScore(score + 3);
      } else if (id === 3) {
        setScore(score + 4);
      }
      console.log(score);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setVideoEnded(false);
      } else {
        setShowResults(true);
      }
    }
  };

  useEffect(() => {
    if (showResults) {
      scores();
    }
  }, [showResults]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setName(items);
    }
  }, []);

  const scores = () => {
    if (score >= 15) {
      settext(
        "Above Average Score Report:           Congratulations! Your results indicate that your child's prosocial behavior level is above average. This means that your child consistently demonstrates kindness, empathy, and a willingness to help others. They are likely to be sensitive to the needs and feelings of those around them and often engage in behaviors that contribute positively to their social interactions. Encourage and support their continued development in these areas to foster a strong sense of empathy and kindness."
      );
    } else if (8 >= score < 15) {
      settext(
        "Average Score Report:                  Your child's results indicate an average level of prosocial behavior. This suggests that they exhibit some prosocial behaviors but may also have room for improvement in certain areas. It's important to continue nurturing and reinforcing their positive behaviors while providing opportunities for them to develop empathy, sharing, and cooperation further. Encouraging open communication and teaching them the value of helping others can aid in their ongoing social and emotional development."
      );
    } else if (score < 8) {
      settext(
        "Below Average Score Report:               Hey! With the assessment of your child's prosocial level, we analyse that, it is below average. This indicates that your child has a comparatively Lower level of empathy, kindness, feeling of cooperation, and understanding for others emotions.These behaviour may cause difficulty in building positive relationships, bullying or aggressive behaviour, isolation or loneliness, self centrredness, etc. But there is nothing to worry as with proper guidance and support we can help you to develop prosocial behaviors by inculcating such behaviours like sharing, empathy, and cooperation. It's essential to work with your child to cultivate these skills through positive reinforcement, modeling, and opportunities for practicing kindness and consideration towards others."
      );
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        setVideoEnded(true);
      });
    }
    // Clean up the event listener when the component unmounts
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("ended", () => {
          setVideoEnded(true);
        });
      }
    };
  }, []);

  return (
    <>
      <div className="logo">
        <img src={icon} width={40} alt="Heamen Logo" /> <a href="/">Heamen</a>
      </div>

      <div className="question-card">
        {/* Current Question  */}

        <div className="story-video">
          <video
            ref={videoRef}
            autoPlay
            width={900}
            controls
            controlsList="nodownload"
            src={questions[currentQuestion].src}
          ></video>
        </div>

        <h3 className="question-text">{questions[currentQuestion].text}</h3>

        {/* List of possible answers  */}
        <ul>
          {questions[currentQuestion].options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => optionClicked(option.id)}
                className={videoEnded ? "option" : "option disabled"} // Disable options if the video has not ended
              >
                {option.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div id="scroll"></div>

   
    </>
  );
};

export default PlayQuizGame;
