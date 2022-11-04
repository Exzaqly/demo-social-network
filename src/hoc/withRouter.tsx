import {useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";

function withRouter<WCP>(Component: React.ComponentType<WCP>) {
    function ComponentWithRouterProp(props: WCP) {

        let params = useParams();
        return (
            <Component
                {...props}
                params = {params}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default withRouter

