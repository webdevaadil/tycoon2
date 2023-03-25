import React, { PureComponent, useState } from "react";
import profileimg from "../Components/Images/profile-u.png";
import verifydimg from "../Components/Images/verified.svg";

import totalprofit from "../Components/Images/profit.svg";
import trader from "../Components/Images/trader-rank.svg";
import followers from "../Components/Images/followers-on-binance.svg";
import Trading from "../Components/Images/money-bag.svg";
import Tracking from "../Components/Images/days.svg";
import tooltipinfo from "../Components/Images/infobox.svg";

import Totaltrade from "../Components/Images/total-trades.svg";
import profitable from "../Components/Images/profits1.svg";
import singletrades from "../Components/Images/roi.svg";
import bestsingle from "../Components/Images/money-bagsn.svg";
import tradesper from "../Components/Images/barrel-per-day1.svg";
import winrate from "../Components/Images/trophy 1.svg";
import average from "../Components/Images/average.svg";
import tradeduration from "../Components/Images/history1.svg";
import biggestsingle from "../Components/Images/bankruptcy1.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Link } from "react-router-dom";
import { Pagination } from "./Pagination";
import { Pagination1 } from "./Pagination1";

export const User = () => {
  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={18}
            dx={18}
            textAnchor="end"
            fontSize={"12px"}
            fontWeight={400}
            fill="#fff"
          >
            {payload.value.toUpperCase()}
          </text>
        </g>
      );
    }
  }
  class CustomizedAxisTicks extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={5}
            dx={20}
            textAnchor="end"
            fontSize={"12px"}
            fontWeight={400}
            fill="#fff"
          >
            {payload.value}%
          </text>
        </g>
      );
    }
  }
  const data = [
    {
      name: "jan",
      pv: 50,
    },
    {
      name: "feb",
      pv: -100,
    },
    {
      name: "mar",
      pv: 20,
    },
    {
      name: "apr",
      pv: 30,
    },
    {
      name: "may",
      pv: 50,
    },
    {
      name: "jun",
      pv: 70,
    },
    {
      name: "jul",
      pv: 90,
    },
    {
      name: "aug",
      pv: 110,
    },

    {
      name: "sept",
      pv: 130,
    },
    {
      name: "oct",
      pv: 150,
    },
    {
      name: "nov",
      pv: 180,
    },
    {
      name: "dec",
      pv: 200,
    },
    {
      name: "jan",
      pv: 50,
    },
    {
      name: "feb",
      pv: -100,
    },
    {
      name: "mar",
      pv: 20,
    },
    {
      name: "apr",
      pv: 30,
    },
    {
      name: "may",
      pv: 50,
    },
    {
      name: "jun",
      pv: 70,
    },
    {
      name: "jul",
      pv: 90,
    },
    {
      name: "aug",
      pv: 110,
    },

    {
      name: "sept",
      pv: 130,
    },
    {
      name: "oct",
      pv: 150,
    },
    {
      name: "nov",
      pv: 180,
    },
  ];
  const opdata = [
  
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$125.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$251.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$251.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$251.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$125.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
    {
      Symbol: "CRVUSDT Perpetual",
      Symbol1: "Short",
      Symbol2: "24x",
      size: "7155.9",
      "Entry Price": "1.20654",
      "Mark Price": "1.20654",
      "Open Time": "2023-02-20 16:15:36",
      ROI: "-8.34%",
      PNL: "	-$125.52",
      Duration: "2days",
      "close Time": "2023-02-20 16:15:36",
    },
  ];
  // op pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(3);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = opdata.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(opdata.length / recordsPerPage);
  return (
    <div className="container-f profile-design">
      <div className="table_heading">
        <div className="t-headin1">
          <h3>Profile</h3>
          <div className="home-content-buttn">
            <ul>
              <li className="loginbtn btl">
                <Link to="/">
                  {" "}
                  <span>
                    {" "}
                    <em>＜</em> Back to Leaderboard{" "}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="common-profiles">
        <div className="main-profiles">
          <div className="profile-box box-bdr-bg">
            <div className="profile-imgs">
              <div className="profiles-badge">
                {" "}
                <img src={profileimg} alt="Profile image" />{" "}
              </div>
              <img
                className="verify-badge"
                src={verifydimg}
                alt="User Verify"
              />
            </div>

            <h4> Adams-4f7393 </h4>
          </div>

          <div className="body_follow ">
            <div>
              {" "}
              <input
                type="button"
                value="+ Follow"
                className="btn btn-primary follow"
                onClick={(e) => {
                  if (e.target.value == "+ Follow") {
                    e.target.value = "- Unfollow";
                  } else {
                    e.target.value = "+ Follow";
                  }
                }}
              />
            </div>
            <div>
              {" "}
              <input
                type="button"
                value="Mark as Favorite"
                className="btn btn-primary Favorite"
                onClick={(e) => {
                  if (e.target.value == "Favorite") {
                    e.target.value = "Mark as Favorite";
                  } else {
                    e.target.value = "Favorite";
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="number-box">
          <div className="icon-box-main">
            <div className="icon-boxs">
              <div>
                {" "}
                <img src={totalprofit} alt="Total Profit" />{" "}
              </div>
              <h3 className="profit-c"> $984.55 (+45%) </h3>
              <h4> Total Profit</h4>
            </div>

            <div className="icon-boxs">
              <div>
                {" "}
                <img src={followers} alt="Followers on Binance" />{" "}
              </div>
              <h3> 6,125 </h3>
              <h4> Followers on Binance</h4>
            </div>

            <div className="icon-boxs">
              <div>
                {" "}
                <img src={Trading} alt="Total Trading" />{" "}
              </div>
              <h3 className="yellow"> $306,125.12 </h3>
              <h4> Total Trading Volume </h4>

              <div className="tooltipico">
                {" "}
                <div class="tooltip">
                  {" "}
                  <img src={tooltipinfo} alt="Total Profit" />
                  <span class="tooltiptext">
                    The sum of all trades since tracking on Tycoon.{" "}
                  </span>
                </div>{" "}
              </div>
            </div>
            <div className="icon-boxs">
              <div>
                {" "}
                <img src={Tracking} alt="Tracking" />{" "}
              </div>
              <h3> 387 days </h3>
              <h4> of Tracking on Tycoon</h4>
            </div>
          </div>

          <div className="trader-rank">
            <div className="ranks">
              <div className="icon-rank">
                <img src={trader} alt="Followers on Binance" />

                <h3>Trader Rank</h3>
              </div>
            </div>

            <div className="schedule-ranks">
              <p className="schedule-ranksfirst"> Daily Rank</p>
              <h4>1,344</h4>
            </div>

            <div className="schedule-ranks">
              <p> Weekly Rank</p>
              <h4>1,987</h4>
            </div>
            <div className="schedule-ranks">
              <p> Monthly Rank</p>
              <h4>2,456</h4>
            </div>
            <div className="schedule-ranks">
              <p> All-time Rank</p>
              <h4> 6,987 </h4>
            </div>
          </div>
        </div>
      </div>

      {/********************************* openposition *********************************/}
      <div className="statistics-main mainopen">
        <h3>Open Positions </h3>

        <div className="table-main">
          <div className="table-fn">
            <table className="table-user">
              <tr>
                <th>Symbol</th>
                <th>Size</th>
                <th> Entry Price </th>
                <th> Mark Price </th>
                <th>Open Time</th>
                <th>ROI</th>
                <th>PNL</th>
              </tr>
              {currentRecords.map((item, index) => {
                return (
                  <tr className="openposition">
                    <td className="opsymbol">
                      {item.Symbol}
                      <br />
                      <span> {item.Symbol1}</span>|<span> {item.Symbol2}</span>
                    </td>
                    <td> {item.size}</td>
                    <td> {item["Entry Price"]}</td>
                    <td>{item["Mark Price"]} </td>
                    <td>{item["Open Time"]}</td>

                    <td className="openrol">{item.ROI}</td>
                    <td className="openpnl">{item.PNL} </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className="showing-c">
            <p
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                paddingBottom: "14px",
              }}
            >
              {" "}
              Showing {currentPage}-0{recordsPerPage} of {nPages}{" "}
              <Pagination1
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />{" "}
            </p>
          </div>
        </div>
      </div>
      {/********************************* openposition *********************************/}

      {/********************************* Graph *********************************/}

      <div className="graph-main">
        <div className="proformance-colms">
          <h3> Performance </h3>
          <div className="table_top_a">
            <div className="table_top_sort">
              <div class="select select-wrap">
                <label htmlFor="sortby" className="label_sort">
                  Sort by
                </label>
                <select
                  name="sortby"
                  //  onChange={changeState}
                  id="format"
                >
                  {/* <option selected disabled>Select</option> */}
                  <option value="ROI">% ROI</option>
                  <option value="PNL">$ PNL</option>
                </select>
              </div>
            </div>

            <div className="table_top_time">
              <div class="select select-wrap">
                <label htmlFor="time" className="label_time">
                  Time
                </label>
                <select
                  name="time"
                  id="format"
                  // onChange={changeStateperiod}
                >
                  <option
                  // value={sortType == "ROI" ? "" : "dailyPNL"}
                  >
                    Daily
                  </option>
                  <option
                  //  value={sortType == "ROI" ? "weeklyROI" : "weeklyPNL"}
                  >
                    Weekly
                  </option>
                  <option
                  // value={sortType == "ROI" ? "monthlyROI" : "monthlyPNL"}
                  >
                    Monthly
                  </option>
                  <option>
                    {/* // value={sortType == "ROI" ? "allROI" : "allPNL"} */}
                    All
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="graphtop">
          <LineChart
            width={1302}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="0 0 0" stroke="#8090a31c" />

            <XAxis
              dataKey="name"
              tick={<CustomizedAxisTick />}
              padding={{ left: 30 }}
              tickLine={false}
              axisLine={false}
              // allowDuplicatedCategory={false}
            />
            <YAxis
              strokeOpacity={0}
              tickMargin={20}
              padding={{ bottom: 30 }}
              tickLine={false}
              axisLine={false}
              tick={<CustomizedAxisTicks />}
              tickFormatter={(tick) => {
                return `${tick}%`;
              }}
            />
            <Tooltip
              viewBox={{ x: 0, y: 0, width: 800, height: 400 }}
              contentStyle={{ backgroundColor: "#0e1a29", color: "#00BA80" }}
              itemStyle={{ borderBlockColor: "black" }}
              cursorStyle={{ borderColor: "transparent" }}
              cursor={{ stroke: "#01508C", strokeWidth: 2 }}
            />
            <Legend />
            <Line
              type="linear"
              dataKey="pv"
              stroke="#00BA80"
              dot={false}
              activeDot={{ fill: "#041624", strokeWidth: 1, r: 8 }}
            />
          </LineChart>
        </div>
      </div>

      {/********************************* Statistics *********************************/}

      <div className="statistics-main">
        <h3>Statistics </h3>
        <div className="statistics-colm-main">
          <div className="statistics-con-box">
            <img src={Totaltrade} alt="Total Trades" />
            <h4>1523 </h4>
            <p> Trades </p>
          </div>

          <div className="statistics-con-box">
            <img src={profitable} alt="Profitable Days" />
            <h4 className="profit-c">16 </h4>
            <p> Profitable Days </p>
          </div>

          <div className="statistics-con-box">
            <img src={singletrades} alt="Best Single Trade ROI" />
            <h4 className="profit-c">68% </h4>
            <p> Best Single Trade ROI </p>
          </div>

          <div className="statistics-con-box">
            <img src={bestsingle} alt="Best Single Trade Profit" />
            <h4 className="profit-c">$5,080 </h4>
            <p> Best Single Trade Profit </p>
          </div>

          <div className="statistics-con-box">
            <img src={tradesper} alt="Trades per day " />
            <h4>8 </h4>
            <p> Trades per day </p>
          </div>

          <div className="statistics-con-box">
            <img src={winrate} alt="Win Rate" />
            <h4 className="profit-c">55% </h4>
            <p> Win Rate </p>

            <div className="tooltipico">
              {" "}
              <div class="tooltip">
                {" "}
                <img src={tooltipinfo} alt="Total Profit" />
                <span class="tooltiptext">
                  The sum of all trades since tracking on Tycoon.{" "}
                </span>
              </div>{" "}
            </div>
          </div>

          <div className="statistics-con-box">
            <img src={average} alt="Average Position Size" />
            <h4 className="blue">$354 </h4>
            <p> Average Position Size </p>
          </div>

          <div className="statistics-con-box">
            <img src={tradeduration} alt="Average Trade Duration" />
            <h4>2 Days </h4>
            <p> Average Trade Duration </p>
          </div>

          <div className="statistics-con-box">
            <img src={biggestsingle} alt="Biggest Single Trade Loss" />
            <h4 className="red">$465 </h4>
            <p> Biggest Single Trade Loss </p>
          </div>
        </div>
      </div>

      {/********************************* Positions History *********************************/}
      <div className="positions-historys">
        <h3>Positions History </h3>

        <div className="table-main">
          <div className="table-fn">
            <table className="table-user">
              <tr>
                <th>Symbol</th>
                <th>Size</th>
                <th> Entry Price </th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>ROI</th>
                <th>PNL</th>
                <th>Duration</th>
              </tr>
              {currentRecords.map((item, index) => {
                return (
                  <tr className="openposition">
                    <td className="opsymbol">
                      {item.Symbol}
                      <br />
                      <span> {item.Symbol1}</span>|<span> {item.Symbol2}</span>
                    </td>
                    <td> {item.size}</td>
                    <td> {item["Entry Price"]}</td>
                    <td>{item["Open Time"]}</td>
                    <td>{item["close Time"]} </td>

                    <td className="openrol">{item.ROI}</td>
                    <td className="openpnl">{item.PNL} </td>
                    <td >{item.Duration} </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td className="phsymbol">
                  <p>CRVUSDT Perpetual</p>
                  <span className="phshort">Short</span>|
                  <span className="phyellow">24x</span>
                </td>
                <td>7155.9</td>
                <td>1.20654</td>
                <td>2023-02-20 16:15:36</td>
                <td>2023-02-21 16:15:36</td>
                <td className="phnroi">-8.34%</td>
                <td className="phnroi"> -$125.52 </td>
                <td> 02 Days</td> */}
              {/* </tr> */}

              {/* <tr>
                <td className="phsymbol">
                  <p>SIDUJU Perpetual</p>
                  <span className="phproi">Long</span>|
                  <span className="phyellow">6x</span>
                </td>
                <td>7155.9</td>
                <td>1.20654</td>
                <td>2023-02-20 16:15:36</td>
                <td>2023-02-21 16:15:36</td>
                <td className="phproi">+8.34%</td>
                <td className="phproi"> +$125.52 </td>
                <td> 02 Days</td>
              </tr>

              <tr>
                <td className="phsymbol">
                  <p>QWERTY Perpetual</p>
                  <span className="phyellow">Pair</span>|
                  <span className="phyellow">3x</span>
                </td>
                <td>7155.9</td>
                <td>1.20654</td>
                <td>2023-02-20 16:15:36</td>
                <td>2023-02-21 16:15:36</td>
                <td className="phproi">+8.34%</td>
                <td className="phproi"> +$125.52 </td>
                <td> 02 Days</td>
              </tr>

              <tr>
                <td className="phsymbol">
                  <p>CPOIUFT Perpetual</p>
                  <span className="phlvymbol">Levarage</span>|
                  <span className="phyellow">10x</span>
                </td>
                <td>7155.9</td>
                <td>1.20654</td>
                <td>2023-02-20 16:15:36</td>
                <td>2023-02-21 16:15:36</td>
                <td className="phproi">+8.34%</td>
                <td className="phproi"> +$125.52 </td>
                <td> 02 Days</td>
              </tr>

              <tr>
                <td className="phsymbol">
                  <p>LKJGH Perpetual</p>
                  <span className="phshort">Short</span>|
                  <span className="phyellow">8x</span>
                </td>
                <td>7155.9</td>
                <td>1.20654</td>
                <td>2023-02-20 16:15:36</td>
                <td>2023-02-21 16:15:36</td>
                <td className="phnroi">-8.34%</td>
                <td className="phnroi"> -$125.52 </td>
                <td> 02 Days</td>
              </tr> */}
            </table>
          </div>
          <div className="showing-c">
          <p
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                paddingBottom: "14px",
              }}
            >
              {" "}
              Showing {currentPage}-0{recordsPerPage} of {nPages}{" "}
              <Pagination1
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};
