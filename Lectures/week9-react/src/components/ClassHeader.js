import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClassHeader = (props) => {

  const { isClassScheduled, isSpringBreak, isSummerBreak } = props;
  const [ isFallClassReady, setIsFallClassReady ] = useState(false);
  const [count, setCount] = useState(0);
  const [classRoomData, setClassRoomData] = useState(null);
  const [classRoomError, setClassRoomError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const fetchClassRoom = async () => {

    try{
      setIsLoading(true);
      
      const response = await axios.post('https://localhost:8080/classschedule/classroom', {course: 'CS548'});
      setClassRoomData(response?.data);
    
    }catch(error){
      setClassRoomError(true);
    }
    finally{
      setIsLoading(false);
    }
  }

  useEffect(() => {
    console.log("Hello from ClassHeader useEffect")
    fetchClassRoom();

  },[count]);

  // console.log("Hello from ClassHeader",isClassScheduled,isSpringBreak, isSummerBreak);

  
  const handleClick = () => {
    console.log("Button clicked");

    if(isSummerBreak){
      setIsFallClassReady(true);
      setCount(count + 1);
    }    
  }
  // console.log("isFallClassReady",isFallClassReady);
  console.log("count",count);
  console.log("classRoomData",classRoomData, "This is the classroom");
  console.log("classRoomError",classRoomError, "This is the classroom error");
  
  return (

    <header>
      <h1>Class Header</h1>

      {isLoading && <span>This API is Loading...</span>}

      <span> Clicked: {count}</span>
      <span> Classroom: {classRoomData?.classroom}</span>
      <button onClick ={handleClick}>Check</button>
    </header>
  );
}

export default ClassHeader;