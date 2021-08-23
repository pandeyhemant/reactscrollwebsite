import React from 'react'
import { ServicesH1,ServicesContainer,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP } from './ServicesElements';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';





const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Services</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                   
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Services</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                   
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCard>
                    
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services;
