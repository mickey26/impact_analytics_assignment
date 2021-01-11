import React, { useEffect, useState } from "react";
import Header from "./Header";
import { URL } from "./constant/EndPoint";
import axios from "axios";
import "./ResultPage.css";

function ResultPage() {
  const [result, setResult] = useState([]);
  const [shortListedCandidate, setShortListedCandidate] = useState([]);
  const [rejectedCandidate, setRejectedCandidate] = useState([]);
  const [but, setBut] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(URL);
      setResult(res.data);
      return res;
    }
    fetchdata();
  }, []);

  const shortlistCount = (data) => {
    console.log(data, "shortlist data");
    let temp = data;
    rejectedCandidate.push(temp);
    console.log(rejectedCandidate, "shortlist");
  };

  const rejectedCount = (data) => {
    console.log(data, "rejected data");
    for (let i = 0; i < rejectedCandidate.length; i++) {
      if (data.id === rejectedCandidate[i].id) {
        rejectedCandidate.pop(data);
      }
    }
    setBut(true);
    console.log(rejectedCandidate, "shortlist-rejected final");
  };

  // .then((res) => {
  //   console.log(res);
  //   if (res.status === 200) {
  //     setResult(res.data);
  //   }
  // })
  //   .catch((err) => {
  //     console.log(err);
  //   return res;
  // })

  console.log(result, "pagedata");

  return (
    <div className='resultPage'>
      <Header />
      <div className='resultCard'>
        {result.map((data, index) => (
          <div className='card'>
            <img src={data.Image} alt={data.name}></img>
            <div className='textSpace'>
              <h3>{data.name}</h3>
            </div>
            <div>
              {but ? (
                <button onClick={() => shortlistCount(data)}>Accept</button>
              ) : (
                <button onClick={() => rejectedCount(data)}>Reject</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultPage;
