import React from 'react';

interface IMenuCardProps {
    component_guid: string;
    name?: string;
}
class MenuCard extends React.Component<IMenuCardProps>{
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
export default MenuCard;