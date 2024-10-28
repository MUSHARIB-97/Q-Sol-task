import ShadTable from "@/custom-component/custom-table/ShadTable.js";
import Layout from "@/layout/main-layout/MainLayout.js";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserHistoryList } from "./../../redux-store/features/productSlice.js";

const UserHistory = () => {
  const { historyList } = useSelector((state: any) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserHistoryList());
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Body", accessor: "body" },
  ];

  // const rows = [
  //   {
  //     id: 1,
  //     name: "Jayden",
  //     email: "jayden@gmail.com",
  //     items: "10",
  //     date: "10/04/2023",
  //   },
  //   {
  //     id: 2,
  //     name: "James",
  //     email: "james@gmail.com",
  //     items: "4",
  //     date: "30/01/1998",
  //   },
  //   {
  //     id: 3,
  //     name: "Jennifer",
  //     email: "jennifer@gmail.com",
  //     items: "19",
  //     date: "10/04/2023",
  //   },
  //   {
  //     id: 4,
  //     name: "Angela",
  //     email: "white@gmail.com",
  //     items: "50",
  //     date: "10/04/2023",
  //   },
  // ];

  const rows = historyList;

  return (
    <Layout>
      <div className="w-full overflow-hidden m-4">
        <div className="my-6">
          <h1 className="font-semibold text-[2rem]">
            User Transaction History
          </h1>
        </div>
        <div className="">
          <ShadTable columns={columns} rows={rows} />
        </div>
      </div>
    </Layout>
  );
};

export default UserHistory;
