import React from 'react';

interface IRatingProps {
    component_guid: string;
    name?: string;
}
class Rating extends React.Component<IRatingProps>{
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
export default Rating;