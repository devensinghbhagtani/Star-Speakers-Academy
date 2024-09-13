import React from "react";
import styled from "styled-components";
import { BadgeCheck } from "lucide-react";

function ProfCard() {
  return (
    <ProCard className="h-[360px] w-[280px] flex flex-col items-center">
      <div className="pfp">
        <img src="./assets/Images/ppfp1.png" alt="" />
      </div>
      <h3 className="mt-1 text-lg font-[500] flex items-center gap-1">
        Jacob Jones <BadgeCheck size={20} color="#20B486" />
      </h3>
      <h4 className="text-sm font-[300]">UI-UX Design Expert</h4>
    </ProCard>
  );
}

export default ProfCard;

const ProCard = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  transition: all ease-in 0.2s;

  .pfp {
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
  .pfp img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
