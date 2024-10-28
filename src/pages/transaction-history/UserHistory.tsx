import ShadTable from "@/custom-component/custom-table/ShadTable";
import Layout from "@/layout/main-layout/MainLayout";
import React from "react";

const UserHistory = () => {
  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Items", accessor: "items" },
    { header: "Date", accessor: "date" },
  ];

  const rows = [
    {
      id: 1,
      name: "Jayden",
      email: "jayden@gmail.com",
      items: "10",
      date: "10/04/2023",
    },
    {
      id: 2,
      name: "James",
      email: "james@gmail.com",
      items: "4",
      date: "30/01/1998",
    },
    {
      id: 3,
      name: "Jennifer",
      email: "jennifer@gmail.com",
      items: "19",
      date: "10/04/2023",
    },
    {
      id: 4,
      name: "Angela",
      email: "white@gmail.com",
      items: "50",
      date: "10/04/2023",
    },
  ];

  return (
    <Layout>
      <div className="w-full m-4">
        <ShadTable columns={columns} rows={rows} />
      </div>
    </Layout>
  );
};

export default UserHistory;
