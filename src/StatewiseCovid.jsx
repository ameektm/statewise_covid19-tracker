import React, { useEffect, useState } from 'react'

const StatewiseCovid = () => {
    const [stateData, setstateData] = useState([]);

    const stateCovidData = async () => {
        const fetchData = await fetch("https://data.covid19india.org/data.json");
        const jasonData = await fetchData.json();
        // console.log(jasonData.statewise)
        setstateData(jasonData.statewise);

    }

    useEffect(() => {
        stateCovidData();

    }, [])
    return (<>
        <div className="table_wrapper ms-2 me-4">
            <h1 className='text-center'>Statewise Covid19 Dashboard</h1>
            <table class="table table-striped table-dark ">

                <thead>
                    <tr>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Active</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">UpdatedTime</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stateData.map((currentElem, index) => {
                            return (

                                <tr>
                                    <th scope="row">{currentElem.state}</th>
                                    <td>{currentElem.confirmed}</td>
                                    <td>{currentElem.active}</td>
                                    <td>{currentElem.recovered}</td>
                                    <td>{currentElem.lastupdatedtime}</td>
                                </tr>

                            )
                        })

                    }


                </tbody>
            </table>
        </div>

    </>

    )
}

export default StatewiseCovid