import React, { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import { FaChartArea, FaChartBar } from "react-icons/fa";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);
  return (
    <Wrapper>
      <h4>Monthly Appications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? (
          <>
            <FaChartArea />
            <br />
            <span>Area Chart</span>
          </>
        ) : (
          <>
            <FaChartBar />
            <br />
            <span>Bar Chart</span>
          </>
        )}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
