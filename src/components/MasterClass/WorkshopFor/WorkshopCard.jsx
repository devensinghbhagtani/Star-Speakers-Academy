import React from "react";
import { CircleCheck } from "lucide-react";
import styled from "styled-components";

function WorkshopCard() {
  return (
    <Card className="relative min-h-[100px] max-w-[350px] items-center justify-center rounded-xl p-4 overflow-hidden">
      <div className="patch w-full h-3 absolute bottom-0 left-0"></div>
      <div className="flex gap-1 mb-1">
        <CircleCheck strokeWidth={2} color="#20b486" />
        <h1 className="text-md md:text-md">
          If you struggle with anxiety, depression, or self-esteem issues.
        </h1>
      </div>
    </Card>
  );
}

export default WorkshopCard;

const Card = styled.div`
  border: 1px solid lightgrey;
  background-color: white;

  transition: all 0.3s ease;
  .patch {
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    transform: scale(1.06);
    .patch {
      background-color: #20b486;
    }
  }
`;
