import React from 'react'
import "./Leaderboard.css"



const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <div className="container">

            <table class="table table-hover media_table">
                <thead>
                    <tr>
                        <th className='head_sno'>#</th>
                        <th className='head_trader'> <button
                            type="button"
                            onClick={() => requestSort('trader')}
                            className={getClassNamesFor('trader')}
                        >
                            Trader
                        </button></th>
                        <th className='head_profitloss'><button
                            type="button"
                            onClick={() => requestSort('daily')}
                            className={getClassNamesFor('daily')}
                        >
                            Daily
                        </button>
                        </th>
                        <th className='head_follower'><button
                            type="button"
                            onClick={() => requestSort('weekly')}
                            className={getClassNamesFor('weekly')}
                        >
                            Weekly
                        </button>
                        </th>
                        <th className='head_trades'> <button
                            type="button"
                            onClick={() => requestSort('monthly')}
                            className={getClassNamesFor('monthly')}
                        >
                            Monthly
                        </button>
                        </th>
                        <th className='head_traderequity'><button
                            type="button"
                            onClick={() => requestSort('alltime')}
                            className={getClassNamesFor('alltime')}
                        >
                            AllTime
                        </button></th>
                        <th className='head_followerequity'><button
                            type="button"
                            onClick={() => requestSort('follower')}
                            className={getClassNamesFor('follower')}
                        >
                            Follower
                        </button> </th>
                        <th className='head_openposition'><button
                            type="button"
                            onClick={() => requestSort('openposition')}
                            className={getClassNamesFor('openposition')}
                        >
                            Open Position
                        </button></th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((items, index) => {
                        return (
                            <tr key={index} >
                                <td className='body_sno'>{index + 1}.</td>
                                <td className='body_trader'><img src={items.picture} alt="" className='trader_img' />{items.trader}</td>
                                <td className='body_profitloss'><h6>{`${items.daily}%`}</h6><p>{`≈ $${items.dailyA}`}</p></td>
                                <td className='body_trades'><h6>{`${items.weekly}`}</h6><p>{`≈ $${items.weeklyA}`}</p></td>
                                <td className='body_traderequity'><h6>{` ${items.monthly}`}</h6><p>{`≈ $${items.monthlyA}`}</p></td>
                                <td className='body_followerequity'><h6>{`$ ${items.alltime}`}</h6><p>{`≈ $${items.alltimeA}`}</p></td>
                                <td className='body_follower'>{`${items.follower}`}</td>
                                <td className='body_openposition'>{items.openposition}</td>
                                <td className='body_follow'><button className='btn btn-primary'>+ Follow</button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className='media_Body'>
                {
                    items.map((items, index) => {
                        return (
                            <>
                                <div className="flex_body">
                                    <div key={index} className="media_content">
                                        <div className='firstLine'>
                                            <div>{index + 1}.</div>
                                            <div onClick={() => requestSort('trader')}><img src={items.picture} alt="" className='trader_img' />{items.trader}</div>
                                            <div className='firstline_a'>
                                                <h6 onClick={() => requestSort('follower')}>Follower</h6>
                                                <p>{items.follower}</p>
                                            </div>
                                            <div className='firstline_b'>
                                                <h6 onClick={() => requestSort('openposition')}>Open Position</h6>
                                                <p>{items.openposition}</p>
                                            </div>
                                            <div className='media_btn'><button className='btn btn-primary'>+</button></div>


                                        </div>
                                        <div className='secondline'>
                                            <div className='secondline_a'>
                                                <h5 onClick={() => requestSort('daily')}>Daily</h5>
                                                <div> <h6>{items.daily}%</h6><p>{`≈ $${items.dailyA}`}</p></div>
                                            </div>
                                            <div className='secondline_b'>
                                                <h5 onClick={() => requestSort('weekly')}>Weekly</h5>
                                                <div><h6>{items.weekly}%</h6><p>{`≈ $${items.weeklyA}`}</p></div>
                                            </div>
                                            <div className='secondline_c'>
                                                <h5 onClick={() => requestSort('monthly')} >Monthly</h5>
                                                <div><h6>{items.monthly}%</h6><p>{`≈ $${items.monthlyA}`}</p></div>
                                            </div>
                                            <div className='secondline_d'>
                                                <h5 onClick={() => requestSort('alltime')} >All-time</h5>
                                                <div><h6>{items.alltime}%</h6><p>{`≈ $${items.alltimeA}`}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>


        </div>
    );
};



export const ProductSort = () => {




    return (
        <>
            <div className="product-sortss">
                <div className="container">
                    <ProductTable
                        products={[
                            {

                                "trader": "Jone",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",

                                "daily": '+577.06',
                                "dailyA": "35,267.84",
                                "weekly": 545.89,
                                "weeklyA": '15,237.21',
                                "monthly": 895.54,
                                "monthlyA": "12,123.45",
                                "alltime": 212.50,
                                "alltimeA": '11,895.12',
                                "follower": 344,
                                "openposition": 46,
                            },
                            {

                                "trader": "Victoria",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",
                                "daily": '+347.06',
                                "dailyA": "20,550.34",
                                "weekly": 212.50,
                                "weeklyA": '11,895.12',
                                "monthly": 545.54,
                                "monthlyA": "20,556.78",
                                "alltime": 256.23,
                                "alltimeA": '30,598.81',
                                "follower": 1500,
                                "openposition": 12,
                            },
                            {

                                "trader": "Joy",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",
                                "daily": '+197.06',
                                "dailyA": "15,237.34",

                                "weekly": 895.50,
                                "weeklyA": "30,569.81",

                                "monthly": 256.54,
                                "monthlyA": "12,123.78",

                                "alltime": 577.06,
                                "alltimeA": "15,237.12",

                                "follower": 3699,
                                "openposition": 23,
                            },
                            {

                                "trader": "Quinn",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",
                                "daily": '+211.06',
                                "dailyA": "11,895.34",

                                "weekly": 347.06,
                                "weeklyA": "23.847.84",

                                "monthly": 256.54,
                                "monthlyA": "12,123.78",

                                "alltime": 895.67,
                                "alltimeA": "11,237.12",

                                "follower": 8975,

                                "openposition": 56,
                            },
                            {

                                "trader": "Sheenalo",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",
                                "daily": '+895.54',
                                "dailyA": "30,654.34",

                                "weekly": 256.23,
                                "weeklyA": "12,123.84",

                                "monthly": 455.54,
                                "monthlyA": "56,586.78",

                                "alltime": 347.06,
                                "alltimeA": "30,569.81",

                                "follower": 4569999,

                                "openposition": 42,
                            },
                            {

                                "trader": "Charlene",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",
                                "daily": '+545.89',
                                "dailyA": "20,556.34",

                                "weekly": 577.06,
                                "weeklyA": "35,286.7",

                                "monthly": 895.54,
                                "monthlyA": "35,589.78",

                                "alltime": 812.46,
                                "alltimeA": "23,569.81",

                                "follower": 459,

                                "openposition": 25,
                            },
                            {

                                "trader": "LeonaBaby",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",
                                "daily": '+256.54',
                                "dailyA": "12,123.34",

                                "weekly": 895.47,
                                "weeklyA": "30,569.84",

                                "monthly": 347.06,
                                "monthlyA": "12,123.78",

                                "alltime": 256.06,
                                "alltimeA": "12,123.81",

                                "follower": 698,

                                "openposition": 34,
                            },
                            {

                                "trader": "Sunny",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",
                                "daily": '+455.54',
                                "dailyA": "56,654.34",

                                "weekly": 256.23,
                                "weeklyA": "12,123.84",

                                "monthly": 197.54,
                                "monthlyA": "15,586.78",

                                "alltime": 577.06,
                                "alltimeA": "35,569.81",

                                "follower": 7855,

                                "openposition": 30,
                            },
                            {

                                "trader": "ImWord",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",
                                "daily": '+895.54',
                                "dailyA": "35,654.34",

                                "weekly": 197.23,
                                "weeklyA": "35,123.84",

                                "monthly": 212.54,
                                "monthlyA": "11,586.78",

                                "alltime": 989.06,
                                "alltimeA": "23,569.81",

                                "follower": 256,

                                "openposition": 12,
                            },
                            {

                                "trader": "Dophine",
                                "picture": "https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",
                                "daily": '+256.54',
                                "dailyA": "45,654.34",

                                "weekly": 895.23,
                                "weeklyA": "20,123.84",

                                "monthly": 256.54,
                                "monthlyA": "56,586.78",

                                "alltime": 589.06,
                                "alltimeA": "32,569.81",

                                "follower": 6988,

                                "openposition": 56,
                            }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}
