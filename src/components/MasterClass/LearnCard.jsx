import React from "react";
import { CircleArrowRight } from "lucide-react";
import styled from "styled-components";
function LearnCard({ text }) {
  return (
    <LearnCardDiv>
      <div className="patch"></div>
      <h1>{text}</h1>
    </LearnCardDiv>
  );
}

export default LearnCard;

const LearnCardDiv = styled.div`
  width: 580px;
  min-height: 90px;
  border-radius: 0.75rem;
  display: flex;
  gap: 0.75rem;
  padding: 15px 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  transform-origin: right;
  /* This ensures scaling from the left side */
  .patch {
    height: 100%;
    width: 10px;
    background-color: #20b486;
    position: absolute;
    left: 0;
    z-index: 1;
    transition: all 0.3s ease;
  }
  &:hover {
    transform: scale(1.05);
  }

  .icon {
    transition: transform 0.3s ease;
    z-index: 2;
  }

  &:hover .patch {
    background-color: #137e5d;

    /* transform: scale(1.2); */
  }

  h1 {
    font-size: large; /* text-lg */
  }
`;
