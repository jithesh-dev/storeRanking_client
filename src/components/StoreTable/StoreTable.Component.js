import React from "react";
import "./StoreTable.Style.scss";
import { AiOutlineStock } from "react-icons/ai";

import storeData from "../../data/data";

const StoreTable = () => {
  return (
    <>
      <table className="StoreTable">
        <tr>
          <th>Your Stores</th>
          <th>
            Total football <AiOutlineStock />
          </th>
          <th>
            New football <AiOutlineStock />
          </th>
          <th>
            Returning football <AiOutlineStock />
          </th>
          <th>
            Total time spent in the shop <AiOutlineStock />
          </th>
          <th>
            Total departments visited <AiOutlineStock />
          </th>
          <th>
            Average department visit time <AiOutlineStock />
          </th>
          <th>
            Bounce rate <AiOutlineStock />
          </th>
          <th>Store performatnce</th>
        </tr>
        {storeData?.map((store) => (
          <tr key={store.name}>
            <td>{store.name}</td>
            <td>{store.totalFootball}</td>
            <td>{store.newFootball}</td>
            <td>{store.retuns}</td>
            <td>{store.timeSpend} h</td>
            <td>
              {store.totalDepartmentsVisited} / {store.totalDepartments}
            </td>
            <td>{store.avgDptVisitTime} h</td>
            <td>{store.bounceRate}%</td>
            <td>1</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default StoreTable;
