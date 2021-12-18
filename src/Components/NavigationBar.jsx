import styled from "styled-components";

const ToolBar = styled.nav`
width: 100%;
height: 50px;
background: blue;
display: flex;
justify-content: space-between;

color: white;
`
const SiteName = styled.button`
border: 1px;
background: rgb(13, 13, 209);
padding: 5px;
font-size: 20px;
`

const Drawer = styled.div`
display: flex;
gap: 1rem;
font-size: 22px;
padding: 10px 0px;
margin: 0px 10px;
`

const DrawerItem = ({label}) => {
    return <div>{label}</div>
}

export default function NavigationBar() {
    return (
        <ToolBar>
            <SiteName>
                <DrawerItem label="Site Name"/>
            </SiteName>
            <Drawer>
                <DrawerItem label="About us"/>
                <DrawerItem label="Prices"/>
                <DrawerItem label="Start Page" />
                <DrawerItem label="Offer" />
                <DrawerItem label="Contact" />
            </Drawer>


        </ToolBar>
    )
}