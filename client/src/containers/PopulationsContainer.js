import React, { useState } from "react"
import Header from "../components/Header";
import { Chart } from "react-google-charts";
import styled from "styled-components"
import europeInfo from "../data/europe-info.json"

const ChartContainer = styled.div`
    display: flex;
    justify-content: center;
    ${'' /* border-radius: 40px;
    border: 20px solid #7448d0;  */}
`


const PopulationsContainer = ({ savedCountryObjects, profile, onHomeClick }) => {


    const [currentData, setCurrentData] = useState(europeInfo)
    const [whichData, setWhichData] = useState("europeInfo")

    const popChartData = (countryObjects) => {

        const data = []

        if (whichData == "savedCountryObjects") {
            countryObjects.map((country) => {

                data.push([country.name.common, parseInt(country.population), '#7448d0'])
            })
        }
        else if (whichData == "europeInfo") {
            countryObjects.features.map((country) => {

                data.push([country.properties.name, country.properties.pop_est, '#7448d0'])
            })
        }

        data.sort(function (a, b) {
            return b[1] - a[1]
        })

        data.unshift(["Country", "Population", { role: 'style' }])

        return data

    }

    const pieChartData = (countryObjects) => {
        const data = []

        if (whichData == "savedCountryObjects") {
            countryObjects.map((country) => {
                const popPercent = parseInt(country.population)

                data.push([country.name.common, popPercent])


            })
            const dataTotal = data.reduce((partialSum, a) => partialSum + a, 0)
            const remainderPop = 746400000 - parseInt(dataTotal)
            data.push(['other', remainderPop])
            data.unshift(["Country", "Population"])

            return data
        }
        else if (whichData == "europeInfo") {
            countryObjects.features.map((country) => {
                const popPercent = parseInt(country.properties.pop_est)

                data.push([country.properties.name, popPercent])

            })
            data.unshift(["Country", "Population"])

            return data
        }

    }

    const barOptions = {
        title: "Country Populations",
        legend: { position: "none" },
        backgroundColor: { fill:'transparent' }
    }

    const pieOptions = {
        title: "Country Populations as Part of Europe's Total Population",
        legend: { position: "none" },
        backgroundColor: { fill:'transparent' }
    }

    const handleSavedClick = () => {
        setCurrentData(savedCountryObjects)
        setWhichData("savedCountryObjects")
    }

    const handleAllClick = () => {
        setCurrentData(europeInfo)
        setWhichData("europeInfo")
    }


    return (
        <>
            <Header profile={profile} onHomeClick = {onHomeClick} />

            <button value={savedCountryObjects} onClick={handleSavedClick}>Saved Countries</button>
            <button value={europeInfo} onClick={handleAllClick}>All Countries</button>
            <ChartContainer>
                    {savedCountryObjects ? <Chart
                        chartType="BarChart"
                        data={popChartData(currentData)}
                        className="population-graph"
                        options={barOptions}
                    />
                        : null}

                    {savedCountryObjects ? <Chart
                        chartType="PieChart"
                        data={pieChartData(currentData)}
                        className="population-graph"
                        options={pieOptions}
                    />
                        : null}

            </ChartContainer>
        </>
    )

}


export default PopulationsContainer