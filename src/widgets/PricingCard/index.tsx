import React from 'react';

interface IPricingCardProps {
    component_guid: string;
    name?: string;
}
class PricingCard extends React.Component<IPricingCardProps>{
    constructor(props: any) {
        super(props)
    }

    componentDidMount() {
    }
    render() {
        return (
            <>
            </>
        )
    }
}
export default PricingCard;