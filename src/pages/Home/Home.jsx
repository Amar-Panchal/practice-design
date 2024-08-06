/** @format */

import React from "react";
import CountCards from "../../components/CountCards/CountCards";
import Activity from "../../components/Activity/Activity";
import RecentOrder from "../../components/RecentOrder/RecentOrder";

function Home() {
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: "20px", marginBottom: "10px" }}>
        Dashboard
      </div>
      <CountCards />
      <Activity />
      <RecentOrder />
    </div>
  );
}

export { Home };
