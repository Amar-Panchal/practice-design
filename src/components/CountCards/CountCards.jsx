/** @format */

import React, { useState } from "react";
import Card from "@mui/material/Card";
import { BsFillCartPlusFill } from "react-icons/bs";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Pie from "./PieChart";
import "./_count-cards.css";
function CountCards() {
  const cardData = [
    {
      id: 1,
      title: "Total Orders",
      count: "75",
      profitLossInPercentage: "3",
      icon: BsFillCartPlusFill,
      background: "rgba(114, 148, 255, 0.2)",
      color: "#7294ff",
      profitOrLoss: "profit",
    },
    {
      id: 2,
      title: "Total Delivered",
      count: "70",
      profitLossInPercentage: "3",
      icon: PiHandbagSimpleFill,
      background: "rgba(0, 100, 0, 0.2)",
      color: "#90EE90",
      profitOrLoss: "loss",
    },
    {
      id: 3,
      title: "Total Cancelled",
      count: "05",
      profitLossInPercentage: "3",
      icon: PiHandbagSimpleFill,
      background: "rgba(139, 0, 0, 0.2)",
      color: "#FFA07A",
      profitOrLoss: "profit",
    },
    {
      id: 4,
      title: "Total Revenue",
      count: "12",
      profitLossInPercentage: "3",
      icon: FaHandHoldingDollar,
      background: "rgba(233, 123, 237, 0.2)",
      color: "#d709de",
      profitOrLoss: "loss",
    },
  ];

  return (
    <div className='count-card-main'>
      <div className='count-card-left-side'>
        {cardData.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <Card className='count-card-left-side-card' key={item.id}>
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  padding: "6px 8px",
                  border: `1px solid ${item.background}`,
                  color: `${item.color}`,
                  background: `${item.background}`,
                  borderRadius: "6px",
                  fontSize: "26px",
                }}
              >
                <IconComponent />
              </span>
              <div style={{ padding: "5px 0px" }}>{item.title}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {item.title === "Total Revenue" ? (
                  <div style={{ fontSize: "24px", fontWeight: "600" }}>
                    ${item.count}k
                  </div>
                ) : (
                  <div style={{ fontSize: "24px", fontWeight: "600" }}>
                    {item.count}
                  </div>
                )}
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: `${
                      item.profitOrLoss === "profit" ? "green" : "red"
                    }`,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.profitOrLoss === "profit" ? (
                    <span style={{ fontSize: "20px" }}>
                      <IoMdArrowDropup />
                    </span>
                  ) : (
                    <span style={{ fontSize: "20px" }}>
                      <IoMdArrowDropdown />
                    </span>
                  )}
                  <span> {item.profitLossInPercentage} %</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className='count-card-right-side'>
        <Card className='count-card-right-side-card'>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>Net Profit</div>
              <div style={{ fontSize: "30px", fontWeight: "600" }}>
                $6759.25
              </div>
            </div>
            <div>
              <Pie percentage={70} color='#7294ff' />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "green",
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "20px" }}>
                <IoMdArrowDropup />
              </span>
              <span>3%</span>
            </div>
            <div style={{ fontSize: "8px" }}>
              *The values here has been rounded off.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CountCards;
