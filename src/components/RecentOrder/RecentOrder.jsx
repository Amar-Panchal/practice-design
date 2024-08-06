/** @format */

import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar, Chip } from "@mui/material";
import "./_recent_order.css";
import Card from "@mui/material/Card";
import StarRatings from "react-star-ratings";
import Divider from "@mui/material/Divider";

const users = [
  {
    image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    name: "John Doe",
    orderNumber: "12345",
    status: "Delivered",
    amount: "13000",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/5.jpg",
    name: "Jane Smith",
    orderNumber: "67890",
    status: "Pending",
    amount: "10000",
    rating: 5,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, a. Distinctio ducimus quod, sunt, ab velit minima, laudantium consequuntur dolor quo harum vero. Vero aliquid numquam recusandae consequuntur, tempore consectetur.",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/70.jpg",
    name: "Alice Johnson",
    orderNumber: "54321",
    status: "Delivered",
    amount: "15000",
    rating: 0,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/72.jpg",
    name: "Bob Brown",
    orderNumber: "98765",
    status: "Cancelled",
    amount: "5000",
    rating: 4,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/15.jpg",
    name: "Charlie Davis",
    orderNumber: "67891",
    status: "Pending",
    amount: "12000",
    rating: 0,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/65.jpg",
    name: "Diana Evans",
    orderNumber: "11223",
    status: "Delivered",
    amount: "17000",
    rating: 0,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/25.jpg",
    name: "Diana ",
    orderNumber: "11123",
    status: "Cancelled",
    amount: "17200",
    rating: 0,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
  {
    image: "https://randomuser.me/api/portraits/med/men/45.jpg",
    name: "Ethan Foster",
    orderNumber: "44556",
    status: "Pending",
    amount: "14000",
    rating: 0,
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias iusto, id explicabo nam voluptas in? Libero eveniet dicta explicabo!",
  },
];

const RecentOrder = () => {
  const columns = [
    {
      field: "user",
      headerName: "Customer",
      width: 300,
      renderCell: (params) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar alt={params.row.name} src={params.row.image} />
          <span style={{ marginLeft: 10 }}>{params.row.name}</span>
        </div>
      ),
    },
    { field: "orderNumber", headerName: "Order Number", width: 150 },
    {
      field: "amount",
      headerName: "Amount",
      width: 150,
      renderCell: (params) => (
        <span style={{ marginLeft: 10 }}>$ {params.row.amount}</span>
      ),
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={
            params.value === "Delivered"
              ? "success"
              : params.value === "Cancelled"
              ? "error"
              : "default"
          }
        />
      ),
    },
  ];

  const rows = users.map((user, index) => ({
    id: index,
    image: user.image,
    name: user.name,
    orderNumber: user.orderNumber,
    status: user.status,
    amount: user.amount,
  }));

  return (
    <div className='recent-order-main'>
      <Card className='recent-order-left-side'>
        <div
          style={{ marginBottom: "10px", fontWeight: "600", fontSize: "20px" }}
        >
          Recent Orders
        </div>
        <div style={{ width: "100%" }}>
          <DataGrid rows={rows} columns={columns} autoHeight autoPageSize />
        </div>
      </Card>

      <div className='recent-order-right-side'>
        <Card className='recent-order-right-side-card'>
          <div
            style={{
              marginBottom: "10px",
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Customer's Feedback
          </div>
          <div>
            {users.map((item, index) => {
              return (
                item.rating > 3 && (
                  <div style={{ margin: "5px 0px" }}>
                    <div
                      style={{ display: "flex", gap: 15, alignItems: "center" }}
                    >
                      <img
                        src={item.image}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                        }}
                        alt=''
                      />
                      <div style={{ fontSize: "16px" }}>{item.name}</div>
                    </div>
                    <div style={{ margin: "5px 4px" }}>
                      <StarRatings
                        rating={item.rating}
                        starRatedColor='gold'
                        numberOfStars={5}
                        name='rating'
                        starDimension='20px'
                        starSpacing='5px'
                      />
                    </div>
                    <div>{item.feedback}</div>
                    <div style={{ margin: "20px 0px" }}>
                      <Divider component='div' />
                    </div>
                  </div>
                )
              );
            })}
            <div></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RecentOrder;
