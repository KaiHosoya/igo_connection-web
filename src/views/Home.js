import React from "react";
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from "recharts";
import Header from "../component/Index/Header";
import SideBar from "../component/SideBar/SideBar";

const Home = () => {
  const data = [
    {
      "name": "9月",
      "添削数": 2,
    },
    {
      "name": "10月",
      "添削数": 3,
    },
    {
      "name": "11月",
      "添削数": 2,
    },
    {
      "name": "12月",
      "添削数": 2,
    },
    {
      "name": "1月",
      "添削数": 1,
    },
    {
      "name": "2月",
      "添削数": 2,
    },
    {
      "name": "3月",
      "添削数": 5,
    }
  ]
  return (
    <div style={styles.home}>
      <SideBar />
      <div style={styles.dashboard}>
        <Header title="管理画面" />
        <div style={styles.dashboardDescription}>毎月の添削数が表示されます</div>
        <div style={styles.dashboardContent}>
          <LineChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
            <Line type="monotone" dataKey="添削数" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
    </div>
  )
}

export default Home;

const styles = {
  home: {
    display: "flex"
  },

  dashboard: {
    display: "block"
  },

  dashboardDescription: {
    textAlign: "center",
    marginTop: 20
  },

  dashboardContent: {
    marginTop: 100,
    marginLeft: 200
  }
}