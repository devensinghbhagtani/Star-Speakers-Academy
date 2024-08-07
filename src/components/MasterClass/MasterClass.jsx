import React from "react";
import Colleges from "../Colleges";
import StaticNav from "./StaticNav";
import VideoPart from "./VideoPart";
import ClassDetails from "./ClassDetails/ClassDetails";
import Feedback from "../Feedback";
import MeetCoach from "./CoachDetails/MeetCoach";
import DiscountLine from "./DiscountLine";
import WorkshopFor from "./WorkshopFor/WorkshopFor";
import axios from "axios";
import { useEffect, useState } from "react";
import FrequentlyAsked from "./FrequentlyAsked/FrequentlyAsked";
import AboutCourse from "./AboutSection/AboutCourse";

function MasterClass() {

  const [masterclass, setMasterclass] = useState(null);

  async function getinfo(){
    try {
      const response = await axios.get('http://localhost:8081/masterclass/getmasterclass')
      console.log(response.data);
      console.log(response.data.masterclass);
      setMasterclass({
        followers: response.data.masterclass[0],
        speakerdetails: response.data.masterclass[1],
        masterclassinfo: response.data.masterclass[2],
        userfeedbackvideo: response.data.masterclass[3],
        faq: response.data.masterclass[4],
        userdiscount: response.data.masterclass[5],
        foryou: response.data.masterclass[6],
        masterclassskill: response.data.masterclass[7],
      });

    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  console.log(masterclass);
  useEffect(() => {
    getinfo();
  }, []);

  if (!masterclass) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <StaticNav />
      <div className="w-full min-h-[100vh] ">
      <VideoPart masterclasstitle={masterclass.masterclassinfo} />
        <ClassDetails 
        details={masterclass.masterclassinfo}
        />
        <Colleges />
        <AboutCourse 
        skill={masterclass.masterclassskill}
        />
        <DiscountLine 
        discount={masterclass.userdiscount.discount}/>
        <Feedback />
        <MeetCoach 
        followers={masterclass.followers}
        />
        <DiscountLine  
        discount={masterclass.userdiscount.discount}/>
        <WorkshopFor 
        foryou={masterclass.foryou}
        />
        <DiscountLine 
        discount={masterclass.userdiscount.discount}/>
        <FrequentlyAsked 
        faq={masterclass.faq.faq.L}
        />
      </div>
    </>
  );
}

export default MasterClass;
