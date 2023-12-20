"use client";
import React, { useState, useEffect, useRef } from "react";
import "./page.css";
import icon from "@/assets/Logo.png";

const PlayQuizGame = () => {
  const [secondsLeft, setSecondsLeft] = useState(10);
  const [scrollToTarget, setScrollToTarget] = useState(false);
  const [text, setText] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [name, setName] = useState("");
  const [score, setScore] = useState({
    parameter1: 0,
    parameter2: 0,
    parameter3: 0,
  });

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
  const videoRef = useRef(null);



  const optionClicked = (id) => {
    if (videoEnded) {
      updateScore(id);

      if (currentQuestion + 1 < 6) {
        setCurrentQuestion(currentQuestion + 1);
        setVideoEnded(false);
      } else {
        setShowResults(true);
      }
    }
  };

  const updateScore = (id) => {
    // Update scores based on the selected option for the first two questions only
    if (currentQuestion <= 2) {
      if (id === 0) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter1: prevScore.parameter1 + 1,
        }));
      } else if (id === 1) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter1: prevScore.parameter1 - 0,
        }));
      } else if (id === 2) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter1: prevScore.parameter1 + 2,
        }));
      } else if (id === 3) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter1: prevScore.parameter1 + 3,
        }));
      }
    } else if(2>=currentQuestion<=4){
      // For other questions, update parameters as needed
      if (id === 0) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter2: prevScore.parameter2 + 0,
        }));
      } else if (id === 1) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter2: prevScore.parameter2 + 3,
        }));
      } else if (id === 2) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter2: prevScore.parameter2 + 2,
        }));
      } else if (id === 3) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter2: prevScore.parameter2 - 0,
        }));
      }
    }else if(currentQuestion>4){
      if (id === 0) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter3: prevScore.parameter3 + 1,
        }));
      } else if (id === 1) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter3: prevScore.parameter3 + 2,
        }));
      } else if (id === 2) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter3: prevScore.parameter3 + 3,
        }));
      } else if (id === 3) {
        setScore((prevScore) => ({
          ...prevScore,
          parameter3: prevScore.parameter3 - 0,
        }));
      }
    }
  };

  useEffect(() => {
    if (showResults) {
      console.log("Parameters Individual Score: ");
      console.log(score.parameter1)
      console.log(score.parameter2)
      console.log(score.parameter3)
    }
  }, [showResults]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setName(items);
    }
  }, []);

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

  // const calculateResult = () => {
  //   // Logic to calculate result based on the three parameters
  //   // Use the state values to decide the result text
  //   // You can update the setText state based on the score values
  //   // Example:
  //   if (score.parameter1 >= 2) {
  //     setText("Result for Parameter 1: High");
  //   } else if (score.parameter1 >= 1) {
  //     setText("Result for Parameter 1: Moderate");
  //   } else {
  //     setText("Result for Parameter 1: Low");
  //   }

  //   // Repeat the logic for the other parameters (parameter2, parameter3)
  // };


  const questions = [
    {
      src: "https://ik.imagekit.io/wellnesswards/scene1.mp4?updatedAt=1703065679031",
      text: "Q.1 What will Shreya do?",
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
      text: "Q.2 What should Shreya do?",
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
      text: "Q.3 How will Shreya respond?",
      options: [
        { id: 0, text: "1. She is tired and wants to stay alone." },
        { id: 1, text: "2. She shouts at her friends for forcing her." },
        { id: 2, text: "3. She agrees to play Kho-Kho with her friends." },
        { id: 3, text: "4. She ignores her friends." },
      ],
    },
    {
      src: "https://ik.imagekit.io/wellnesswards/SCENE4.mp4?updatedAt=1695668109047",
      text: "Q.4 Now what will Shreya do?",
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
      text: "Q.5 How will she ask her classmates to join her?",
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
      text: "Q.6 Will she offer the seat to that sick student?",
      options: [
        { id: 0, text: "1.Yes" },
        { id: 1, text: "2.No" },
      ],
    },
  ];

  return (
    <>
      <div className="container m-6/12">
        <div className="question-card m-10">
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

          <div>
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-center text-[25px] py-5">
                {questions[currentQuestion].text}
              </h3>
            </div>

            {/* List of possible answers  */}
            <div className="">
              <ul className="flex flex-row flex-wrap gap-5 justify-center">
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.id)}
                      className={`
                        bg-gradient-to-l from-[#FEE4EC] to-[#C3E5F0]
                        ${videoEnded ? "option" : "option disabled"}
                      `}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div id="scroll"></div>
      </div>
    </>
  );
};

export default PlayQuizGame;
