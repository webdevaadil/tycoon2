import React, { useEffect, useState } from "react";
// import "./Leaderboard.css";
import { Pagination } from "./Pagination";
import leadericon from "./Images/BinanceFutures.svg";
import leadericon1 from "./Images/table-logo.png";
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

const ProductTable = (props) => {
  const [loadmores, setLoadmore] = useState(1);
const [leaderboard, setLeaderboard] = useState();

  const [changeClass, setChangeClass] = useState(null);
  const [a, setA] = useState();
  const [search, setSearch] = useState("");
  let { items, requestSort, sortConfig } = useSortableData(props.products);
  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const [b, setB] = useState();
  const [c, setC] = useState(0);

  const [isActive, setIsActive] = useState(false);

  //   const handleClick = event => {
  //     // 👇️ toggle isActive state on click
  //     setIsActive(current => !current);
  //   };

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  // useEffect(() => {

  // }, [])
  const apis = async() => {
    await fetch(
      "https://ca-signalsleaderboard-dev.orangedesert-af9d2c45.westeurope.azurecontainerapps.io/LeaderboardApi/GetLeaderboards",
      {
        mode: "no-cors",
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data,"aa");
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(leaderboard);
    // fetch(
    //   "https://ca-signalsleaderboard-dev.orangedesert-af9d2c45.westeurope.azurecontainerapps.io/LeaderboardApi/GetLeadersWithPositions",
    //   {
    //     mode: "no-cors",
    //     method: "GET",
    //     dataType: "json",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       "Content-Type": "multipart/form-data",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  useEffect(() => {
    getdummy();
    apis();
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
    console.log("test1");
    console.log(loadmores, totalPages);
  };
  const loadless = () => {
    if (loadmores != 1) {
      setLoadmore(loadmores - 1);
      console.log(loadmores, totalPages);
    }
  };
  return (
    <>
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
                {/* <select name="sortby" className='select_sort' >
                                    <option value="" disabled selected>Select</option>
                                    <option value="">% ROI</option>
                                    <option value="">$ PNL</option>

                                </select> */}
                <div class="select">
                  <select name="sortby" id="format">
                    {/* <option selected disabled>Select</option> */}
                    <option value="">% ROI</option>
                    <option value="">$ PNL</option>
                  </select>
                </div>
              </div>

              <div className="table_top_time">
                <label htmlFor="time" className="label_time">
                  Time
                </label>
                {/* <select name="time" className='select_time' onChange={(e) => { requestSort(e.target.value) }}>
                                    <option value="" disabled selected>Select</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="alltime">All</option>
                                </select> */}
                <div class="select">
                  <select
                    name="time"
                    id="format"
                    onChange={(e) => {
                      requestSort(e.target.value);
                    }}
                  >
                    {/* <option selected disabled>Select</option> */}
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="alltime">All</option>
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
                  <th className="head_sno" style={{width:"0%"}}>#</th>
                  <th className="head_trader">
                    {" "}
                    <button
                      type="button"
                      onClick={() => requestSort("trader")}
                      className={getClassNamesFor("trader")}
                    >
                      Trader
                    </button>
                  </th>
                  <th className="head_daily">
                    <button
                      type="button"
                      onClick={() => requestSort("daily")}
                      className={getClassNamesFor("daily")}
                    >
                      Daily
                    </button>
                  </th>
                  <th className="head_weekly">
                    <button
                      type="button"
                      onClick={() => requestSort("weekly")}
                      className={getClassNamesFor("weekly")}
                    >
                      Weekly
                    </button>
                  </th>
                  <th className="head_monthy">
                    {" "}
                    <button
                      type="button"
                      onClick={() => requestSort("monthly")}
                      className={getClassNamesFor("monthly")}
                    >
                      Monthly
                    </button>
                  </th>
                  <th className="head_alltime">
                    <button
                      type="button"
                      onClick={() => requestSort("alltime")}
                      className={getClassNamesFor("alltime")}
                    >
                      All Time
                    </button>
                  </th>
                  <th className="head_follower">
                    <button
                      type="button"
                      onClick={() => requestSort("follower")}
                      className={getClassNamesFor("follower")}
                    >
                      Follower
                    </button>{" "}
                  </th>
                  <th className="head_openposition">
                    <button
                      type="button"
                      onClick={() => requestSort("openposition")}
                      className={getClassNamesFor("openposition")}
                    >
                      Position
                    </button>
                  </th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="ctt">
                {items
                  .slice(0, loadmores * ITEMS_PER_PAGE)
                  .filter((value) => {
                    return ` ${value.trader} ${value.daily} ${value.weekly} ${value.monthly} ${value.alltime} ${value.follower}${value.openposition} `
                      .toLowerCase()
                      .match(search.toLowerCase());
                  })
                  .map((items, index) => {
                    //  setA(items.length)
                    //  setC(a+b)
                    //  setB(a)

                    //   setA(index)
                    return (
                      <tr key={index} className="sub-body">
                        <td className="body_sno">
                          {currentPage <= 1
                            ? index + 1
                            : index + 1 + ITEMS_PER_PAGE * (currentPage - 1)}
                        </td>

                        <td className="body_trader">
                          <img
                            src={items.picture}
                            alt=""
                            className="trader_img"
                          />
                          {items.trader}
                        </td>

                        <td className="body_profitloss">
                          <h6 className={items.daily > 0 ? "" : "color_red "}>
                            {items.daily > 0
                              ? `+${items.daily.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`
                              : `${items.daily.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`}
                          </h6>
                          <p>{`≈ $${items.dailyA.toLocaleString("en-US", {
                            valute: "USD",
                          })}`}</p>
                        </td>

                        <td className="body_trades">
                          <h6 className={items.weekly > 0 ? "" : "color_red"}>
                            {items.weekly > 0
                              ? `+${items.weekly.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`
                              : `${items.weekly.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`}
                          </h6>
                          <p>{`≈ $${items.weeklyA.toLocaleString("en-US", {
                            valute: "USD",
                          })}`}</p>
                        </td>

                        <td className="body_traderequity color_red">
                          <h6 className={items.monthly > 0 ? "" : "color_red"}>
                            {items.monthly > 0
                              ? `+${items.monthly.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`
                              : `${items.monthly.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`}
                          </h6>
                          <p>{`≈ $${items.monthlyA.toLocaleString("en-US", {
                            valute: "USD",
                          })}`}</p>
                        </td>

                        <td className="body_followerequity">
                          <h6 className={items.alltime > 0 ? "" : "color_red"}>
                            {items.alltime > 0
                              ? `+${items.alltime.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`
                              : `${items.alltime.toLocaleString("en-US", {
                                  valute: "USD",
                                })}%`}
                          </h6>
                          <p>{`≈ $${items.alltimeA.toLocaleString("en-US", {
                            valute: "USD",
                          })}`}</p>
                        </td>

                        <td className="body_follower">{`${items.follower.toLocaleString(
                          "en-US",
                          { valute: "USD" }
                        )}`}</td>

                        <td className="body_openposition">
                          {items.openposition}
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
              {loadmores == totalPages?(""):(  <button className="btn loadmore" onClick={loadmore}>
                Load more
              </button>)}
            
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
        <div className="media_Body">
          {items
            .slice(0, loadmores * ITEMS_PER_PAGE)
            .filter((value) => {
              return ` ${value.trader} ${value.daily} ${value.weekly} ${value.monthly} ${value.alltime} ${value.follower}${value.openposition} `
                .toLowerCase()
                .match(search.toLowerCase());
            })
            .map((items, index) => {
              return (
                <>
                  <div className="flex_body">
                    <div key={index} className="media_content">
                      <div className="firstLine">
                        <div
                          className="line_a"
                          onClick={() => requestSort("trader")}
                        >
                          <img
                            src={items.picture}
                            alt=""
                            className="trader_img"
                          />
                          <span>{items.trader}</span>
                        </div>
                        <div className="firstline_a">
                          <h6 onClick={() => requestSort("follower")}>
                            Follower
                          </h6>
                          <p>
                            {items.follower.toLocaleString("en-US", {
                              valute: "USD",
                            })}
                          </p>
                        </div>
                        <div className="firstline_b">
                          <h6 onClick={() => requestSort("openposition")}>
                            Open Position
                          </h6>
                          <p>{items.openposition}</p>
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
                          <h5 onClick={() => requestSort("daily")}>Daily</h5>
                          <div>
                            <h6 className={items.daily > 0 ? "" : "color_red "}>
                              {items.daily > 0
                                ? `+${items.daily.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`
                                : `${items.daily.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`}
                            </h6>
                            <p>{`≈ $${items.dailyA}`}</p>
                          </div>
                        </div>
                        <div className="secondline_b">
                          <h5 onClick={() => requestSort("weekly")}>Weekly</h5>
                          <div>
                            <h6
                              className={items.weekly > 0 ? "" : "color_red "}
                            >
                              {items.weekly > 0
                                ? `+${items.weekly.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`
                                : `${items.weekly.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`}
                            </h6>
                            <p>{`≈ $${items.weeklyA}`}</p>
                          </div>
                        </div>
                        <div className="secondline_c">
                          <h5 onClick={() => requestSort("monthly")}>
                            Monthly
                          </h5>
                          <div>
                            <h6
                              className={items.monthly > 0 ? "" : "color_red "}
                            >
                              {items.monthly > 0
                                ? `+${items.monthly.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`
                                : `${items.monthly.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`}
                            </h6>
                            <p>{`≈ $${items.monthlyA}`}</p>
                          </div>
                        </div>
                        <div className="secondline_d">
                          <h5 onClick={() => requestSort("alltime")}>
                            All-time
                          </h5>
                          <div>
                            <h6
                              className={items.alltime > 0 ? "" : "color_red "}
                            >
                              {items.alltime > 0
                                ? `+${items.alltime.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`
                                : `${items.alltime.toLocaleString("en-US", {
                                    valute: "USD",
                                  })}%`}
                            </h6>
                            <p>{`≈ $${items.alltimeA}`}</p>
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
            {loadmores == totalPages?(""):(  <button className="btn loadmore" onClick={loadmore}>
                Load more
              </button>)}
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
    </>
  );
};

export const ProductSort1 = () => {
  return (
    <>
      <div className="product-sortss">
        <div className="container">
          <ProductTable
            products={[
              {
                id: 1,
                trader: "Jone",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",

                daily: 577.06,
                dailyA: 35267.84,
                weekly: 545.89,
                weeklyA: 15237.21,
                monthly: 895.54,
                monthlyA: 12123.45,
                alltime: 212.5,
                alltimeA: 11895.12,
                follower: 344,
                openposition: 46,
              },
              {
                id: 2,
                trader: "Victoria",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",
                daily: -347.06,
                dailyA: 20550.34,
                weekly: 212.5,
                weeklyA: 11895.12,
                monthly: 545.54,
                monthlyA: 20556.78,
                alltime: 256.23,
                alltimeA: 30008.81,
                follower: 1500,
                openposition: 12,
              },
              {
                id: 3,
                trader: "Joy",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",
                daily: 197.06,
                dailyA: 15237.34,

                weekly: 895.5,
                weeklyA: 30569.81,

                monthly: 256.54,
                monthlyA: 12123.78,

                alltime: -577.06,
                alltimeA: 15237.12,

                follower: 3699,
                openposition: 23,
              },
              {
                id: 4,
                trader: "Quinn",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",
                daily: 211.06,
                dailyA: 11895.34,

                weekly: 347.06,
                weeklyA: 23847.84,

                monthly: 256.54,
                monthlyA: 12123.78,

                alltime: 895.67,
                alltimeA: 11237.12,

                follower: 8975,

                openposition: 56,
              },
              {
                id: 5,
                trader: "Sheenalo",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",
                daily: 895.54,
                dailyA: 30654.34,

                weekly: 256.23,
                weeklyA: 12123.84,

                monthly: 455.54,
                monthlyA: 56586.78,

                alltime: 347.06,
                alltimeA: 30569.81,

                follower: 4569999,

                openposition: 42,
              },
              {
                id: 6,
                trader: "Charlene",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",
                daily: 545.89,
                dailyA: 20556.34,

                weekly: 577.06,
                weeklyA: 35286.7,

                monthly: 895.54,
                monthlyA: 35589.78,

                alltime: 812.46,
                alltimeA: 23569.81,

                follower: 459,

                openposition: 25,
              },
              {
                id: 7,
                trader: "LeonaBaby",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",
                daily: 256.54,
                dailyA: 12123.34,

                weekly: 895.47,
                weeklyA: 30569.84,

                monthly: 347.06,
                monthlyA: 12123.78,

                alltime: 256.06,
                alltimeA: 12123.81,

                follower: 698,

                openposition: 34,
              },
              {
                id: 8,
                trader: "Sunny",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",
                daily: 455.54,
                dailyA: 56654.34,

                weekly: 256.23,
                weeklyA: 12123.84,

                monthly: 197.54,
                monthlyA: 15586.78,

                alltime: 577.06,
                alltimeA: 35569.81,

                follower: 7855,

                openposition: 30,
              },
              {
                id: 9,
                trader: "ImWord",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",
                daily: 895.54,
                dailyA: 35654.34,

                weekly: 197.23,
                weeklyA: 35123.84,

                monthly: 212.54,
                monthlyA: 11586.78,

                alltime: 989.06,
                alltimeA: 23569.81,

                follower: 256,

                openposition: 12,
              },
              {
                id: 10,
                trader: "Dophine",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",
                daily: 256.54,
                dailyA: 45654.34,

                weekly: -895.23,
                weeklyA: 20123.84,

                monthly: 256.54,
                monthlyA: 56586.78,

                alltime: 589.06,
                alltimeA: 32569.81,

                follower: 6988,

                openposition: 56,
              },

              {
                id: 1,
                trader: "Jone",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",

                daily: 577.06,
                dailyA: 35267.84,
                weekly: 545.89,
                weeklyA: 15237.21,
                monthly: 895.54,
                monthlyA: 12123.45,
                alltime: 212.5,
                alltimeA: 11895.12,
                follower: 344,
                openposition: 46,
              },
              {
                id: 2,
                trader: "Victoria",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",
                daily: 347.06,
                dailyA: 20550.34,
                weekly: 212.5,
                weeklyA: 11895.12,
                monthly: 545.54,
                monthlyA: 20556.78,
                alltime: 256.23,
                alltimeA: 30008.81,
                follower: 1500,
                openposition: 12,
              },
              {
                id: 3,
                trader: "Joy",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",
                daily: 197.06,
                dailyA: 15237.34,

                weekly: 895.5,
                weeklyA: 30569.81,

                monthly: 256.54,
                monthlyA: 12123.78,

                alltime: 577.06,
                alltimeA: 15237.12,

                follower: 3699,
                openposition: 23,
              },
              {
                id: 4,
                trader: "Quinn",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",
                daily: 211.06,
                dailyA: 11895.34,

                weekly: 347.06,
                weeklyA: 23847.84,

                monthly: 256.54,
                monthlyA: 12123.78,

                alltime: 895.67,
                alltimeA: 11237.12,

                follower: 8975,

                openposition: 56,
              },
              {
                id: 5,
                trader: "Sheenalo",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",
                daily: 895.54,
                dailyA: 30654.34,

                weekly: 256.23,
                weeklyA: 12123.84,

                monthly: 455.54,
                monthlyA: 56586.78,

                alltime: 347.06,
                alltimeA: 30569.81,

                follower: 4569999,

                openposition: 42,
              },
              {
                id: 6,
                trader: "Charlene",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",
                daily: 545.89,
                dailyA: 20556.34,

                weekly: 577.06,
                weeklyA: 35286.7,

                monthly: 895.54,
                monthlyA: 35589.78,

                alltime: 812.46,
                alltimeA: 23569.81,

                follower: 459,

                openposition: 25,
              },
              {
                id: 7,
                trader: "LeonaBaby",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",
                daily: 256.54,
                dailyA: 12123.34,

                weekly: 895.47,
                weeklyA: 30569.84,

                monthly: 347.06,
                monthlyA: 12123.78,

                alltime: 256.06,
                alltimeA: 12123.81,

                follower: 698,

                openposition: 34,
              },
              {
                id: 8,
                trader: "Sunny",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",
                daily: 455.54,
                dailyA: 56654.34,

                weekly: 256.23,
                weeklyA: 12123.84,

                monthly: 197.54,
                monthlyA: 15586.78,

                alltime: 577.06,
                alltimeA: 35569.81,

                follower: 7855,

                openposition: 30,
              },
              {
                id: 9,
                trader: "ImWord",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",
                daily: 895.54,
                dailyA: 35654.34,

                weekly: 197.23,
                weeklyA: 35123.84,

                monthly: 212.54,
                monthlyA: 11586.78,

                alltime: 989.06,
                alltimeA: 23569.81,

                follower: 256,

                openposition: 12,
              },
              {
                id: 10,
                trader: "Dophine",
                picture:
                  "https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",
                daily: 256.54,
                dailyA: 45654.34,

                weekly: 895.23,
                weeklyA: 20123.84,

                monthly: 256.54,
                monthlyA: 56586.78,

                alltime: 589.06,
                alltimeA: 32569.81,

                follower: 6988,

                openposition: 56,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};
