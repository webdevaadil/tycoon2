import React, { useEffect, useState } from "react";
// import "./Leaderboard.css";
import { Pagination } from "./Pagination";
import leadericon from "./Images/BinanceFutures.svg";
import leadericon1 from "./Images/table-logo.png";
import dummy from "./Images/th-2964712677";
import Mobbtn from "./Mobbtn";
import Desbtn from "./Desbtn";
import axios from "axios";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const [nameclass, setNameclass] = useState("");
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = ({
  changeState,
  products,
  changeStateperiod,
  periodType,
  sortType,
}) => {
  useEffect(() => {
    requestSort(`${periodType}${sortType}`);
    getClassNamesFor(`${periodType}${sortType}`);
    console.log(`${periodType}${sortType}`);
  }, [periodType, changeState]);
  useEffect(() => {
    requestSort("dailyROI");
    getClassNamesFor("dailyROI");
    if (sortType === "dailyPNL") {
      requestSort("dailyPNL");
      getClassNamesFor("dailyPNL");
    }
  }, []);

  const [loadmores, setLoadmore] = useState(1);

  const [a, setA] = useState();
  const [search, setSearch] = useState("");
  let { items, requestSort, sortConfig } = useSortableData(products[0]);
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

  useEffect(() => {
    getdummy();
  }, [currentPage]);

  const getdummy = () => {
    const xyz = items.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    );

    setA(xyz.length);
  };

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const loadmore = () => {
    if (loadmores == totalPages) {
      return;
    } else {
      setLoadmore(loadmores + 1);
    }
  };

  return (
    <>
      {products ? (
        <div className="container">
          <div className="head_flex">
            <div className="table_heading">
              <div className="t-headin1">
                <h3>Leaderboard</h3>
              </div>
              <div className="t-headin1">
                <img src={leadericon} alt="" className="head-img" />
                <img src={leadericon1} alt="" className="head-img1" />
              </div>
            </div>

            <div className="table_top">
              <div className="table_top_a">
                <div className="table_top_sort">
                  <label htmlFor="sortby" className="label_sort">
                    Sort by
                  </label>

                  <div class="select">
                    <select name="sortby" onChange={changeState} id="format">
                      {/* <option selected disabled>Select</option> */}
                      <option value="ROI">% ROI</option>
                      <option value="PNL">$ PNL</option>
                    </select>
                  </div>
                </div>

                <div className="table_top_time">
                  <label htmlFor="time" className="label_time">
                    Time
                  </label>

                  <div class="select">
                    <select
                      name="time"
                      id="format"
                      onChange={changeStateperiod}
                    >
                      <option
                        value={sortType == "ROI" ? "dailyROI" : "dailyPNL"}
                      >
                        Daily
                      </option>
                      <option
                        value={sortType == "ROI" ? "weeklyROI" : "weeklyPNL"}
                      >
                        Weekly
                      </option>
                      <option
                        value={sortType == "ROI" ? "monthlyROI" : "monthlyPNL"}
                      >
                        Monthly
                      </option>
                      <option value={sortType == "ROI" ? "allROI" : "allPNL"}>
                        All
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="table_top_search">
                <input
                  type="search"
                  placeholder="Search by Tradername"
                  className="w-25 form-control input_search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="icon_search">
                  <i class="fa fa-search searchicon" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="media_table">
            <div className="table_res">
              <table
                cellspacing="10"
                cellpadding="0"
                class="table table-hover  media_table"
              >
                <thead>
                  <tr>
                    <th className="head_sno" style={{ width: "0%" }}>
                      #
                    </th>
                    <th className="head_trader">
                      {" "}
                      <button
                        type="button"
                        onClick={() => requestSort("nickName")}
                        className={getClassNamesFor("nickName")}
                      >
                        Trader
                      </button>
                    </th>
                    <th className="head_daily">
                      <button
                        type="button"
                        onClick={() =>
                          sortType == "ROI"
                            ? requestSort("dailyROI")
                            : requestSort("dailyPNL")
                        }
                        className={
                          sortType == "ROI"
                            ? getClassNamesFor("dailyROI")
                            : getClassNamesFor("dailyPNL")
                        }
                      >
                        Daily
                      </button>
                    </th>
                    <th className="head_weekly">
                      <button
                        type="button"
                        onClick={() =>
                          sortType == "ROI"
                            ? requestSort("weeklyROI")
                            : requestSort("weeklyPNL")
                        }
                        className={
                          sortType == "ROI"
                            ? getClassNamesFor("weeklyROI")
                            : getClassNamesFor("weeklyPNL")
                        }
                      >
                        Weekly
                      </button>
                    </th>
                    <th className="head_monthy">
                      {" "}
                      <button
                        type="button"
                        onClick={() =>
                          sortType == "ROI"
                            ? requestSort("monthlyROI")
                            : requestSort("monthlyPNL")
                        }
                        className={
                          sortType == "ROI"
                            ? getClassNamesFor("monthlyROI")
                            : getClassNamesFor("monthlyPNL")
                        }
                      >
                        Monthly
                      </button>
                    </th>
                    <th className="head_alltime">
                      <button
                        type="button"
                        onClick={() =>
                          sortType == "ROI"
                            ? requestSort("allROI")
                            : requestSort("allPNL")
                        }
                        className={
                          sortType == "ROI"
                            ? getClassNamesFor("allROI")
                            : getClassNamesFor("allPNL")
                        }
                      >
                        All Time
                      </button>
                    </th>
                    <th className="head_follower">
                      <button
                        type="button"
                        onClick={() => requestSort("followers")}
                        className={getClassNamesFor("followers")}
                      >
                        Follower
                      </button>{" "}
                    </th>
                    <th className="head_openposition">
                      <button
                        type="button"
                        onClick={() => requestSort("openPositions")}
                        className={getClassNamesFor("openPositions")}
                      >
                        Open Positions
                      </button>
                    </th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="ctt">
                  {items
                    .slice(0, loadmores * ITEMS_PER_PAGE)
                    .filter((value) => {
                      return (
                        ` ${value.nickName} 
                      `
                          // ${value.daily} ${value.weekly} ${value.monthly} ${value.alltime} ${value.follower}${value.openposition}
                          .toLowerCase()
                          .match(search.toLowerCase())
                      );
                    })
                    .map((items, index) => {
                      //  setA(items.length)
                      //  setC(a+b)
                      //  setB(a)

                      //   setA(index)
                      // console.log(items.dailyROI);
                      return (
                        <tr key={index} className="sub-body">
                          <td className="body_sno">
                            {currentPage <= 1
                              ? index + 1
                              : index + 1 + ITEMS_PER_PAGE * (currentPage - 1)}
                          </td>

                          <td className="body_trader">
                            {items.userPhotoUrl ? (
                              <img
                                src={items.userPhotoUrl}
                                alt=""
                                className="trader_img"
                              />
                            ) : (
                              <img src={dummy} alt="" className="trader_img" />
                            )}
                            {items.nickName}
                          </td>

                          <td className="body_profitloss">
                            {items.dailyROI && items.dailyROI ? (
                              <h6
                                className={
                                  items.dailyROI > 0 ? "" : "color_red "
                                }
                              >
                                {items.dailyROI > 0
                                  ? `+${items.dailyROI.toLocaleString("en-US", {
                                      valute: "USD",
                                    })}%`
                                  : `${items.dailyROI.toLocaleString("en-US", {
                                      valute: "USD",
                                    })}%`}
                              </h6>
                            ) : (
                              <h6>&nbsp; 0%</h6>
                            )}

                            {items.dailyPNL && items.dailyPNL ? (
                              <p>{`≈ $${items.dailyPNL.toLocaleString("en-US", {
                                valute: "USD",
                              })}`}</p>
                            ) : (
                              <p>≈$0</p>
                            )}
                          </td>

                          <td className="body_trades">
                            {items.weeklyROI && items.weeklyROI ? (
                              <h6
                                className={
                                  items.weeklyROI > 0 ? "" : "color_red"
                                }
                              >
                                {items.weeklyROI > 0
                                  ? `+${items.weeklyROI.toLocaleString(
                                      "en-US",
                                      {
                                        valute: "USD",
                                      }
                                    )}%`
                                  : `${items.weeklyROI.toLocaleString("en-US", {
                                      valute: "USD",
                                    })}%`}
                              </h6>
                            ) : (
                              <h6>&nbsp;0%</h6>
                            )}
                            {items.weeklyPNL && items.weeklyPNL ? (
                              <p>{`≈ $${items.weeklyPNL.toLocaleString(
                                "en-US",
                                {
                                  valute: "USD",
                                }
                              )}`}</p>
                            ) : (
                              <p>≈$0</p>
                            )}
                          </td>

                          <td className="body_traderequity color_red">
                            {items.monthlyROI && items.monthlyROI ? (
                              <h6
                                className={
                                  items.monthlyROI > 0 ? "" : "color_red"
                                }
                              >
                                {items.monthlyROI > 0
                                  ? `+${items.monthlyROI.toLocaleString(
                                      "en-US",
                                      {
                                        valute: "USD",
                                      }
                                    )}%`
                                  : `${items.monthlyROI.toLocaleString(
                                      "en-US",
                                      {
                                        valute: "USD",
                                      }
                                    )}%`}
                              </h6>
                            ) : (
                              <h6> &nbsp;0%</h6>
                            )}
                            {items.monthlyPNL && items.monthlyPNL ? (
                              <p>{`≈ $${items.monthlyPNL.toLocaleString(
                                "en-US",
                                {
                                  valute: "USD",
                                }
                              )}`}</p>
                            ) : (
                              <p>$0</p>
                            )}
                          </td>

                          <td className="body_followerequity">
                            {items.allROI && items.allROI ? (
                              <h6
                                className={items.allROI > 0 ? "" : "color_red"}
                              >
                                {items.allROI > 0
                                  ? `+${items.allROI.toLocaleString("en-US", {
                                      valute: "USD",
                                    })}%`
                                  : `${items.allROI.toLocaleString("en-US", {
                                      valute: "USD",
                                    })}%`}
                              </h6>
                            ) : (
                              <h6> &nbsp;0%</h6>
                            )}
                            {items.allPNL && items.allPNL ? (
                              <p>{`≈ $${items.allPNL.toLocaleString("en-US", {
                                valute: "USD",
                              })}`}</p>
                            ) : (
                              <p>$0</p>
                            )}
                          </td>

                          <td className="body_follower">
                            {items.followers
                              ? `${items.followers.toLocaleString("en-US", {
                                  valute: "USD",
                                })}`
                              : 0}
                          </td>

                          <td className="body_openposition">
                            {items.openPositions ? items.openPositions : ""}
                          </td>
                          <td className="body_follow">
                            <input
                              type="button"
                              value="+ Follow"
                              className="btn btn-primary"
                              onClick={(e) => {
                                if (e.target.value == "+ Follow") {
                                  e.target.value = "- Unfollow";
                                } else {
                                  e.target.value = "+ Follow";
                                }
                              }}
                            />
                          </td>
                          {/* <Desbtn/> */}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="pagination_btm">
              <div className="btm_p">
                {/* <p>
                Showing{" "}
                {currentPage <= 1
                  ? `1 - ${a}`
                  : `${1 + (currentPage - 1) * ITEMS_PER_PAGE} - ${
                      a + ITEMS_PER_PAGE * (currentPage - 1)
                    }`}{" "}
                of {items.length}
              </p> */}
                {loadmores == totalPages ? (
                  ""
                ) : (
                  <button className="btn loadmore" onClick={loadmore}>
                    Load more
                  </button>
                )}
              </div>
            </div>
            {/* <div onClick={getdummy}>
                
               <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={(page) => setCurrentPage(page)}
              /> 
            </div> */}
          </div>
          {/* media  */}
          <div className="media_Body">
            {items
              .slice(0, loadmores * ITEMS_PER_PAGE)
              .filter((value) => {
                return (
                  ` ${value.nickName} 
                `
                    // ${value.daily} ${value.weekly} ${value.monthly} ${value.alltime} ${value.follower}${value.openposition}
                    .toLowerCase()
                    .match(search.toLowerCase())
                );
              })
              .map((items, index) => {
                console.log(items.openPositions);
                if(items.openPositions==0){
                  items.openPositions = "0"
                }
                return (
                  <>
                    <div className="flex_body">
                      <div key={index} className="media_content">
                        <div className="firstLine">
                          <div
                            className="line_a"
                            onClick={() => requestSort("nickName")}
                          >
                            {items.userPhotoUrl ? (
                              <img
                                src={items.userPhotoUrl}
                                alt=""
                                className="trader_img"
                              />
                            ) : (
                              <p className="trader_img"></p>
                            )}
                            <span>{items.nickName}</span>
                          </div>
                          <div className="firstline_a">
                            <h6 onClick={() => requestSort("follower")}>
                              Follower
                            </h6>
                            {items.followers && items.followers ? (
                              <p>
                                {items.followers.toLocaleString("en-US", {
                                  valute: "USD",
                                })}
                              </p>
                            ) : (
                              <p>0</p>
                            )}
                          </div>
                          <div className="firstline_b">
                            <h6 onClick={() => requestSort("openPositions")}>
                              Open Position
                            </h6>
                            <p> {items.openPositions ? items.openPositions : ""}</p>
                          </div>
                          {/* <div className="media_btn" onclick="addClass()"><input type="button"  id={index} value="+" onClick={(e) => {
                                                    if (e.target.value == "-") {
                                                        e.target.value = "+"

                                                    }
                                                    else {
                                                        e.target.value = "-"

                                                    }
                                                }} /></div> */}
                          <Mobbtn />

                          {/* <button className={isActive ? 'bnnerbtn' : 'hidebtn'} onClick={handleClick} id={index}  ></button> */}
                        </div>
                        <div className="secondline">
                          <div className="secondline_a">
                            <h5
                              onClick={() =>
                                sortType == "ROI"
                                  ? requestSort("dailyROI")
                                  : requestSort("dailyPNL")
                              }
                              className={
                                sortType == "ROI"
                                  ? getClassNamesFor("dailyROI")
                                  : getClassNamesFor("dailyPNL")
                              }
                            >
                              Daily
                            </h5>
                            <div>
                              {items.dailyROI && items.dailyROI ? (
                                <h6
                                  className={
                                    items.dailyROI > 0 ? "" : "color_red "
                                  }
                                >
                                  {items.dailyROI > 0
                                    ? `+${items.dailyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`
                                    : `${items.dailyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`}
                                </h6>
                              ) : (
                                <h6>&nbsp; 0%</h6>
                              )}
                              {items.dailyPNL && items.dailyPNL ? (
                                <p>{`≈ $${items.dailyPNL}`}</p>
                              ) : (
                                <p>≈$0</p>
                              )}
                            </div>
                          </div>
                          <div className="secondline_b">
                            <h5
                              onClick={() =>
                                sortType == "ROI"
                                  ? requestSort("weeklyROI")
                                  : requestSort("weeklyPNL")
                              }
                              className={
                                sortType == "ROI"
                                  ? getClassNamesFor("weeklyROI")
                                  : getClassNamesFor("weeklyPNL")
                              }
                            >
                              weekly
                            </h5>
                            <div>
                              {items.weeklyROI && items.weeklyROI ? (
                                <h6
                                  className={
                                    items.weeklyROI > 0 ? "" : "color_red "
                                  }
                                >
                                  {items.weeklyROI > 0
                                    ? `+${items.weeklyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`
                                    : `${items.weeklyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`}
                                </h6>
                              ) : (
                                <h6>&nbsp;0%</h6>
                              )}
                              {items.weeklyPNL && items.weeklyPNL ? (
                                <p>{`≈ $${items.weeklyPNL}`}</p>
                              ) : (
                                <p>≈$0</p>
                              )}
                            </div>
                          </div>
                          <div className="secondline_c">
                            <h5
                              onClick={() =>
                                sortType == "ROI"
                                  ? requestSort("monthlyROI")
                                  : requestSort("monthlyPNL")
                              }
                              className={
                                sortType == "ROI"
                                  ? getClassNamesFor("monthlyROI")
                                  : getClassNamesFor("monthlyPNL")
                              }
                            >
                              Monthly
                            </h5>
                            <div>
                              {items.monthlyROI && items.monthlyROI ? (
                                <h6
                                  className={
                                    items.monthlyROI > 0 ? "" : "color_red "
                                  }
                                >
                                  {items.monthlyROI > 0
                                    ? `+${items.monthlyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`
                                    : `${items.monthlyROI.toLocaleString(
                                        "en-US",
                                        {
                                          valute: "USD",
                                        }
                                      )}%`}
                                </h6>
                              ) : (
                                <h6> &nbsp;0%</h6>
                              )}
                              {items.monthlyPNL && items.monthlyPNL ? (
                                <p>{`≈ $${items.monthlyPNL}`}</p>
                              ) : (
                                <p>$0</p>
                              )}
                            </div>
                          </div>
                          <div className="secondline_d">
                            <h5
                              className={
                                sortType == "ROI"
                                  ? getClassNamesFor("allROI")
                                  : getClassNamesFor("allPNL")
                              }
                              onClick={() =>
                                sortType == "ROI"
                                  ? requestSort("allROI")
                                  : requestSort("allPNL")
                              }
                            >
                              All-time
                            </h5>
                            <div>
                              {items.allROI && items.allROI ? (
                                <h6
                                  className={
                                    items.allROI > 0 ? "" : "color_red "
                                  }
                                >
                                  {items.allROI > 0
                                    ? `+${items.allROI.toLocaleString("en-US", {
                                        valute: "USD",
                                      })}%`
                                    : `${items.allROI.toLocaleString("en-US", {
                                        valute: "USD",
                                      })}%`}
                                </h6>
                              ) : (
                                <h6> &nbsp;0%</h6>
                              )}
                              {items.allPNL && items.allPNL ? (
                                <p>{`≈ $${items.allPNL}`}</p>
                              ) : (
                                <p>$0</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            <div>
              <div>
                <p></p>
              </div>
              {loadmores == totalPages ? (
                ""
              ) : (
                <button className="btn loadmore" onClick={loadmore}>
                  Load more
                </button>
              )}
              {/* <div className="pagination_btm">
              <div className="btm_p">
                <p>
                  Showing{" "}
                  {currentPage <= 1
                    ? `1 - ${a}`
                    : `${1 + (currentPage - 1) * ITEMS_PER_PAGE} - ${
                        a + ITEMS_PER_PAGE * (currentPage - 1)
                      }`}{" "}
                  of {items.length}
                </p>
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={(page) => setCurrentPage(page)}
              />
            </div> */}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export const ProductSort1 = () => {
  const [sortType, setsortType] = useState("ROI");
  const [periodType, setperiodType] = useState("daily");
  useEffect(() => {
    apis();
  }, [sortType, periodType]);

  const [leaderboard, setLeaderboard] = useState();
  const apis = async (e) => {
    const data = await axios(
      `https://ca-signalsleaderboard-dev.orangedesert-af9d2c45.westeurope.azurecontainerapps.io/LeaderboardApi/GetLeaderboard?sortType=${sortType}&periodType=${periodType}`
    );
    setLeaderboard(data.data.entries);
  };
  const changeState = (e) => {
    const value = e.target.value;
    setsortType(value);
  };
  const changeStateperiod = (e) => {
    let value = e.target.value;
    value = value.substring(0, value.length - 3);
    setperiodType(value);
  };

  return (
    <>
      <div className="product-sortss">
        <div className="container">
          {leaderboard && (
            <ProductTable
              changeStateperiod={changeStateperiod}
              changeState={changeState}
              products={[leaderboard]}
              periodType={periodType}
              sortType={sortType}
            />
          )}
        </div>
      </div>
    </>
  );
};
