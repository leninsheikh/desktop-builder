import React from "react";
import BrowseComponent from "../components/browse-component/BrowseComponent";
import {useQuery} from "../services/RouterService";

export default () => {
    const query = useQuery();
    const component = query.get('component');
    return <BrowseComponent component={component}/>
}
