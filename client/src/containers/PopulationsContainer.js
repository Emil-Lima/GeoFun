import React, { useState } from "react"
import Header from "../components/Header";
import { Chart } from "react-google-charts";
import styled from "styled-components"
import europeInfo from "../data/europe-info.json"

const ChartContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const PopulationsContainer = ({ savedCountryObjects, profile }) => {


    const [currentData, setCurrentData] = useState(savedCountryObjects)
    const [whichData, setWhichData] = useState("savedCountryObjects")

    const popChartData = (countryObjects) => {

        const data = []

        if (whichData == "savedCountryObjects") {
            countryObjects.map((country) => {

                data.push([country.name.common, parseInt(country.population), '#4BC0AE'])
            })
        }
        else if (whichData == "europeInfo") {
            countryObjects.features.map((country) => {

                data.push([country.properties.name, country.properties.pop_est, '#4BC0AE'])
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
        legend: { position: "none" }
    }

    const pieOptions = {
        title: "Country Populations as Part of Europe's Total Population",
        legend: { position: "none" }
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
            <Header profile={profile} />

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