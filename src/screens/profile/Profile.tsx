import React, { Component } from 'react'
import SwitchMenu from '../../components/SwitchMenu.tsx'
import TrendingCompany from '../../components/TrendingCompany.tsx'
import CompanyRanking from '../../components/CompanyRanking.tsx'
import "./Profile.css"
import TabBar from '../../components/TabBar.tsx'

export default function Profile() {
    const bioCompanies = [{
        name: "Vestas",
        price: 24.26,
        logoPath: "\\Assets\\tesco.png",
        picturePath: "\\Assets\\alternative energy.jpeg"
    },
    {
        name: "Chr. Hansen",
        price: 73,
        logoPath: "\\Assets\\chrhansen.png",
        picturePath: "\\Assets\\food producer.jpeg"
    },
    {
        name: "Autodesk",
        price: 38.63,
        logoPath: "\\Assets\\autodesk.png",
        picturePath: "\\Assets\\aerospace _ defense.jpeg"
    },
    ]

    const diversityCompanies = [{
        name: "Novo Nordisk",
        price: 108.26,
        logoPath: "\\Assets\\tesco.png",
        picturePath: "\\Assets\\alternative energy.jpeg"
    },
    {
        name: "Axa",
        price: 34.98,
        logoPath: "\\Assets\\chrhansen.png",
        picturePath: "\\Assets\\food producer.jpeg"
    },
    {
        name: "HP Inc.",
        price: 62.47,
        logoPath: "\\Assets\\autodesk.png",
        picturePath: "\\Assets\\aerospace _ defense.jpeg"
    },
    ]

    const healthCompanies = [{
        name: "Danone",
        price: 134.69,
        logoPath: "\\Assets\\tesco.png",
    },
    {
        name: "Chr. Hansen",
        price: 17.60,
        logoPath: "\\Assets\\chrhansen.png",
    },
    ]

    const executiveCompanies = [{
        name: "Novo Nordisk",
        price: 108.26,
        logoPath: "\\Assets\\tesco.png",
        picturePath: "\\Assets\\alternative energy.jpeg"
    },
    {
        name: "Axa",
        price: 34.98,
        logoPath: "\\Assets\\chrhansen.png",
        picturePath: "\\Assets\\food producer.jpeg"
    },
    {
        name: "HP Inc.",
        price: 62.47,
        logoPath: "\\Assets\\autodesk.png",
        picturePath: "\\Assets\\aerospace _ defense.jpeg"
    },
    ]

    return (
        <div className='screen-container'>
            <div className='profile-container'>
                <img className='profile-picture' src='\Assets\profile.jpg' alt=''></img>
                <div className='profile-welcome'>
                    <span className='welcome-text'>Hi Amalie</span>
                    <span className='welcome-text'>Let's find your match!</span>
                </div>
            </div>
            <div className='menu-switch'>
                <SwitchMenu name="Matches" />
                <SwitchMenu name="Explore" active={true} />
                <SwitchMenu name="Search" />
            </div>
            <span className='content-title'>Trending Companies</span>
            <div className='trending-companies-menu'>
                <TrendingCompany name="Schneider" imgSrc="\Assets\electrical and electronical equipment.jpeg" logoSrc="\Assets\shneder.png" info="Electronic & Electrical Equipment" currentPrice={49.60} />
                <TrendingCompany name="Schneider" imgSrc="\Assets\food producer.jpeg" logoSrc="\Assets\unilever.png" info="Something" currentPrice={55.30} />
            </div>
            <div className='main-content'>
                <CompanyRanking title={"🍃 Biodiversity Top 10"} companies={bioCompanies}></CompanyRanking>
                <CompanyRanking title={"🌈 Diversity & Inclusion  Top 10 "} companies={diversityCompanies}></CompanyRanking>
                <CompanyRanking title={"🩺 Health & Safety Top 10"} companies={healthCompanies}></CompanyRanking>
                <CompanyRanking title={"👩‍💼 Executive Pay Top 10"} companies={executiveCompanies}></CompanyRanking>
            </div>
            <TabBar active="matches"></TabBar>
        </div>
    )
}
