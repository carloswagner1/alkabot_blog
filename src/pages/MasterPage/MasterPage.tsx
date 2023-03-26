import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import './MasterPage.scss'


export default function MasterPage() {
    return (
        <>            <Header />
            <Container >
                <Outlet />
            </Container>
        </>
    )
}