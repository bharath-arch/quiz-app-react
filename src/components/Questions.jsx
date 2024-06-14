import React, { useEffect, useState } from "react";

function Questions({ questions }) {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [qid, setQid] = useState(1);
  const [answer, setAnswer] = useState(0);

  const [minute, setMinute] = useState(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  if (time >= 59) {
    setMinute((minute) => minute + 1);
    setTime(0);
  }
  console.log(time);

  if(time >= 10){
    const radios = document.getElementsByName("option");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }

    setTime(0);

    if (count < questions.length - 1) {
      setCount(count + 1);
    }
  }

  const handleNext = () => {
    const radios = document.getElementsByName("option");
    for (let i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }

    setTime(0);

    if (count < questions.length - 1) {
      setCount(count + 1);
    }
  };

  const handleChange = (e) => {
    const selectedOptionIndex = parseInt(e.target.value);
    const selectedOption = questions[count].options[selectedOptionIndex];

    console.log("Selected option:", selectedOption);
    console.log(questions[count].answer);
    if (selectedOption === questions[count].answer) {
      setScore(score + 1);
    }
    console.log(score);
    setAnswer(selectedOption);
    if (qid === questions[count].id) {
      if (selectedOption !== questions[count].answer) {
        setScore(score - 1);

        if (score <= 0) {
          setScore(0);
        }
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col text-xl">
      <>
        
        {minute >= 3 ? (
          <span>your Score is {score}</span>
        ) : (
          <>
          {minute} m : {time} s
            <h3>{questions[count].question}</h3>
            <div>
              {questions[count].options.map((item, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    value={index}
                    name="option"
                    onClick={handleChange}
                  />
                  <label>{item}</label>
                </div>
              ))}
            </div>

            <>
              {" "}
              <button onClick={handleNext} className="p-2 ">Next</button>
            </>
            <span>your Score is {score}</span>
          </>
        )}
      </>
    </div>
  );
}

export default Questions;
