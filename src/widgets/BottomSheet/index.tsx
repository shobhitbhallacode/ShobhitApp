import React from 'react';

interface IBottomSheetProps {
    component_guid: string;
    name?: string;
}
class BottomSheet extends React.Component<IBottomSheetProps>{
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
export default BottomSheet;