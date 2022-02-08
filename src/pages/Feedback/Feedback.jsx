import React, { useEffect } from "react";
import FeedbackContainer from "../../containers/Feedback/Feedback";
const Feedback = () => {
  useEffect(() => {
    document.title = "Comment - Safka For Clothes";
  }, []);
  return <FeedbackContainer />;
};

export default Feedback;
