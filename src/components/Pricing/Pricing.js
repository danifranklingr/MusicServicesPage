import React from 'react';
import {Button} from "../../globalStyles";
import {GiStoneAxe, GiWoodAxe, GiBattleAxe} from "react-icons/gi";
import	{PricingSection, PricingWrapper, PricingHeading, PricingContainer,
				PricingCard, PricingCardInfo,	PricingCardIcon, PricingCardPlan,
				PricingCardCost, PricingCardLength, PricingCardFeatures, PricingCardFeature, 
} from "./Pricing.elements";

function Pricing() {
	return (
		<PricingSection>
			<PricingWrapper>
				<PricingHeading> Our Services </PricingHeading>
				<PricingContainer>
					<PricingCard to="/sign-up">
						<PricingCardInfo>
							<PricingCardIcon>
								<GiStoneAxe/>
							</PricingCardIcon>
							<PricingCardPlan> Stone Axe </PricingCardPlan>
							<PricingCardCost> $9.99 </PricingCardCost>
							<PricingCardLength> per month </PricingCardLength>
							<PricingCardFeatures>
								<PricingCardFeature> 100 New Users </PricingCardFeature>
								<PricingCardFeature> $1000 Budget </PricingCardFeature>
								<PricingCardFeature> Retargetting Analytics </PricingCardFeature>
							</PricingCardFeatures>
							<Button primary> Choose Plan </Button>
						</PricingCardInfo>
					</PricingCard>
					<PricingCard to="/sign-up">
						<PricingCardInfo>
							<PricingCardIcon>
								<GiWoodAxe/>
							</PricingCardIcon>
							<PricingCardPlan> Steel Axe </PricingCardPlan>
							<PricingCardCost> $29.99 </PricingCardCost>
							<PricingCardLength> per month </PricingCardLength>
							<PricingCardFeatures>
								<PricingCardFeature> 1000 New Users </PricingCardFeature>
								<PricingCardFeature> $5000 Budget </PricingCardFeature>
								<PricingCardFeature> Lead Gen Analytics </PricingCardFeature>
							</PricingCardFeatures>
							<Button primary> Choose Plan </Button>
						</PricingCardInfo>
					</PricingCard>
					<PricingCard to="/sign-up">
						<PricingCardInfo>
							<PricingCardIcon>
								<GiBattleAxe/>
							</PricingCardIcon>
							<PricingCardPlan> Battle Axe </PricingCardPlan>
							<PricingCardCost> $49.99 </PricingCardCost>
							<PricingCardLength> per month </PricingCardLength>
							<PricingCardFeatures>
								<PricingCardFeature> Unlimited Users </PricingCardFeature>
								<PricingCardFeature> Unlimited Budget </PricingCardFeature>
								<PricingCardFeature> 24/7 Support </PricingCardFeature>
							</PricingCardFeatures>
							<Button primary> Choose Plan </Button>
						</PricingCardInfo>
					</PricingCard>
				</PricingContainer>
			</PricingWrapper>
		</PricingSection>
	)
}


export default Pricing;
