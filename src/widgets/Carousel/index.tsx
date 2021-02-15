import React from 'react';

interface ICarouselProps {
    component_guid: string;
    name?: string;
}
class Carousel extends React.Component<ICarouselProps>{
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
export default Carousel;