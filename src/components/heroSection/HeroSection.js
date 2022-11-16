import React from 'react';
import styled from "styled-components";
import Logo from '../../assets/Logo White.png';
import DronePicture from '../../assets/Drone.png';
import { Link } from 'react-router-dom';

function HeroSection (){

    //--------Styles--------//
    const StyledHeroSection = styled.div`
        background-color: orange;
        height: 100%;
        width: 100%;
    `;
    const StyledLogo = styled.img`
        height: 50px;
        width: 150px;
        padding: 24px;
    `;
    const StyledHeader = styled.div`
        display: flex;
        justify-content: center;
    `;
    const StyledHeroPicture = styled.img`
        height: 400px;
        width: 500px;
        padding: 50px;
    `;
    const StyledBody = styled.div`
        display: flex;
        justify-content: space-around;
    `;
    const SideBarLinks = styled.div`
        display: block;
        padding: 16px;
    `;
    const ListedLink = styled.li`
        font-family: inherit;
        font-size: x-large;
        color: white;
    `;

    return (
        <StyledHeroSection>
            <StyledHeader>
                <StyledLogo src={Logo}/>
            </StyledHeader>
            <StyledBody>    
                <StyledHeroPicture src={DronePicture} />
                <SideBarLinks>
                    <ListedLink>
                        <Link to='/'>Home</Link>
                    </ListedLink>
                    <ListedLink>
                        <Link to='/contact'>Contact</Link>
                    </ListedLink>
                </SideBarLinks>
            </StyledBody>
        </StyledHeroSection>
    );
};

export default HeroSection;