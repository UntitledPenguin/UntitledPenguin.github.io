import React, { useState, useEffect } from "react";

const TypingText = ({ toRotate }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(100); // Adjust the delta value for faster animation
  const [pauseDuration, setPauseDuration] = useState(1600); // Adjust the pause duration before deleting

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      // Pause before deleting
      setTimeout(() => {
        setIsDeleting(true);
        setDelta(200); // Adjust the delta value for slower deletion
      }, pauseDuration);
    } else if (isDeleting && updatedText === '') {
      // Reset after deletion
      setIsDeleting(false);
      setText('');
      setLoopNum(loopNum + 1);
      setDelta(400); // Adjust the delta value for slower typing
    }
  };

  return <span>{text}</span>;
};

export default TypingText;