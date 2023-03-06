import React from 'react'
import profileimg from "../Components/Images/profile-u.png"
import verifydimg from "../Components/Images/verified.svg"

import totalprofit from "../Components/Images/profit.svg"
import followers from "../Components/Images/followers-on-binance.svg"
import Trading from "../Components/Images/money-bag.svg"
import Tracking from "../Components/Images/days.svg"
import tooltipinfo from "../Components/Images/infobox.svg"

import Totaltrade from "../Components/Images/total-trades.svg"
import profitable from "../Components/Images/profits1.svg"
import singletrades from "../Components/Images/roi.svg"
import bestsingle from "../Components/Images/money-bagsn.svg"
import tradesper from "../Components/Images/barrel-per-day1.svg"
import winrate from "../Components/Images/trophy 1.svg"
import average from "../Components/Images/average.svg"
import tradeduration from "../Components/Images/history1.svg"
import biggestsingle from "../Components/Images/bankruptcy1.svg"





export const User = () => {
  return (

<div className='container-f profile-design'> 
<div className='table_heading'>
  <div className='t-headin1'>
    <h3>Profile</h3>
    <div className='home-content-buttn'>
      <ul>
        <li className='loginbtn'>
           <a href="#">  Back to Leaderboard  </a>
      </li>
      </ul>
    </div>
    </div>
  
    </div>


    <div className='common-profiles'>
    <div className='main-profiles'>
      
      <div className='profile-box box-bdr-bg'>

        <div className='profile-imgs'>     
         <div className='profiles-badge'> <img src={profileimg} alt="Profile image" />  </div> 
        <img className='verify-badge' src={verifydimg} alt="User Verify"/>

       </div>

          <h4> Adams-4f7393 </h4>



      </div>

<div className='body_follow '>
     
     <div> <input  type="button" value="+ Follow" className="btn btn-primary"
                              onClick={(e) => {
                                if (e.target.value == "+ Follow") {
                                  e.target.value = "- Unfollow";
                                } else {
                                  e.target.value = "+ Follow";
                                }
                              } }
        />
        </div>
        <div> <input  type="button" value="Mark as Favorite" className="btn btn-primary favs"
                              onClick={(e) => {
                                if (e.target.value == "Favorite") {
                                  e.target.value = "Mark as Favorite";
                                } else {
                                  e.target.value = "Favorite";
                                }
                              } }
        />
        </div>




      </div>
      </div>


      <div className='number-box'>
        <div className='icon-box-main'>
                  <div className='icon-boxs'>
                       <div>  <img src={totalprofit} alt="Total Profit" />   </div>       
                       <h3 className='profit-c'> $984.55 (+45%) </h3>
                        <h4> Total Profit</h4>      
                  </div>

                  <div className='icon-boxs'>
                       <div>  <img src={followers} alt="Followers on Binance" />   </div>       
                       <h3> 6,125 </h3>
                        <h4> Followers on Binance</h4>      
                  </div>

                  <div className='icon-boxs'>
                       <div>  <img src={Trading} alt="Total Trading" />   </div>       
                       <h3 className='yellow'> $306,125.12 </h3>
                        <h4> Total Trading Volume </h4>   

                      <div className='tooltipico'>  <div class="tooltip"> <img src={tooltipinfo} alt="Total Profit" />  
  <span class="tooltiptext">The sum of all trades since tracking on Tycoon.  </span>
</div>   </div>   

                  </div>
                  <div className='icon-boxs'>
                       <div>  <img src={Tracking} alt="Tracking" />   </div>       
                       <h3> 387 days </h3>
                        <h4> of Tracking on Tycoon</h4>      
                  </div>

          </div>                        

          <div className='trader-rank'>

                 <div className='ranks'> 
                           <div className='icon-rank'>  
                            <img src={followers} alt="Followers on Binance" /> 
                           
                           <h3>Trader Rank</h3>
                              </div>   
                  
                  </div>             

                 <div className='schedule-ranks'>
                        <p> Daily Rank</p>
                        <h4>1,344</h4>
                 
                  </div>    

                  <div className='schedule-ranks'>
                        <p> Weekly Rank</p>
                        <h4>1,987</h4>
                 
                  </div>      
                  <div className='schedule-ranks'>
                        <p> Monthly Rank</p>
                        <h4>2,456</h4>
                  </div>      
                  <div className='schedule-ranks'>
                        <p> All-time Rank</p>
                        <h4> 6,987 </h4>
                  </div> 






          </div>
          </div>


      </div>
      
      
      {/********************************* Graph *********************************/}

      <div className="graph-main"> 
      <div className='proformance-colms'>
      <h3> Performance </h3>
      <div className="table_top_a">
                <div className="table_top_sort">
                  <label htmlFor="sortby" className="label_sort">
                    Sort by
                  </label>

                  <div class="select">
                    <select name="sortby"
                    //  onChange={changeState}
                     id="format">
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
                      <option >
                    {/* // value={sortType == "ROI" ? "allROI" : "allPNL"} */}
                    
                        All
                      </option>
                    </select>
                  </div>
                </div>
              </div>


              </div>

              </div>





      {/********************************* Statistics *********************************/}
        

      <div className='statistics-main'>
        <h3>Statistics </h3>
  <div className='statistics-colm-main'>

                  <div className='statistics-con-box'> 
                       <img src={Totaltrade} alt="Total Trades"/>
                       <h4>1523 </h4>    
                       <p>  Trades </p>       
                  </div>

                  <div className='statistics-con-box'> 
                       <img src={profitable} alt="Profitable Days"/>
                       <h4 className='profit-c'>16 </h4>    
                       <p> Profitable Days </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={singletrades} alt="Best Single Trade ROI"/>
                       <h4 className='profit-c'>68% </h4>    
                       <p> Best Single Trade ROI </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={bestsingle} alt="Best Single Trade Profit"/>
                       <h4 className='profit-c'>$5,080 </h4>    
                       <p> Best Single Trade Profit </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={tradesper} alt="Trades per day "/>
                       <h4>8 </h4>    
                       <p> Trades per day </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={winrate} alt="Win Rate"/>
                       <h4 className='profit-c'>55% </h4>    
                       <p> Win Rate </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={average} alt="Average Position Size"/>
                       <h4 className='blue'>354 </h4>    
                       <p> Average Position Size </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={tradeduration} alt="Average Trade Duration"/>
                       <h4>2 Days </h4>    
                       <p> Average Trade Duration </p>       
                  </div>    

                  <div className='statistics-con-box'> 
                       <img src={biggestsingle} alt="Biggest Single Trade Loss"/>
                       <h4 className='red'>$465 </h4>    
                       <p> Biggest Single Trade Loss </p>       
                  </div>   

                  </div>

  </div>



  {/********************************* Positions History *********************************/}
 <div className='statistics-main'>
        <h3>Positions History </h3>


        <div className='table-main'>
<table className='table-user'>
  <tr>
    <th>Symbol</th>
    <th>Size</th>
    <th>  Entry Price </th>
    <th>Open Time</th>
     <th>Close Time</th>
      <th>ROI</th>
       <th>PNL</th>
        <th>Duration</th>

  </tr>
 
 <tr>
    <td>CRVUSDT Perpetual</td>
    <td>7155.9</td>
    <td>1.20654</td>
      <td>2023-02-20 16:15:36</td>
        <td>2023-02-21 16:15:36</td>
          <td>-8.34%</td>
            <td> -125.52  </td>
              <td> 02 Days</td>
     </tr>
     
     <tr>
    <td>CRVUSDT Perpetual</td>
    <td>7155.9</td>
    <td>1.20654</td>
      <td>2023-02-20 16:15:36</td>
        <td>2023-02-21 16:15:36</td>
          <td>-8.34%</td>
            <td> -125.52  </td>
              <td> 02 Days</td>
     </tr>
     
     <tr>
    <td>CRVUSDT Perpetual</td>
    <td>7155.9</td>
    <td>1.20654</td>
      <td>2023-02-20 16:15:36</td>
        <td>2023-02-21 16:15:36</td>
          <td>-8.34%</td>
            <td> -125.52  </td>
              <td> 02 Days</td>
     </tr>
     
     <tr>
    <td>CRVUSDT Perpetual</td>
    <td>7155.9</td>
    <td>1.20654</td>
      <td>2023-02-20 16:15:36</td>
        <td>2023-02-21 16:15:36</td>
          <td>-8.34%</td>
            <td> -125.52  </td>
              <td> 02 Days</td>
     </tr>
     
     <tr>
    <td>CRVUSDT Perpetual</td>
    <td>7155.9</td>
    <td>1.20654</td>
      <td>2023-02-20 16:15:36</td>
        <td>2023-02-21 16:15:36</td>
          <td>-8.34%</td>
            <td> -125.52  </td>
              <td> 02 Days</td>
     </tr>
    
</table>


</div>












</div>

    </div>


  )
}
