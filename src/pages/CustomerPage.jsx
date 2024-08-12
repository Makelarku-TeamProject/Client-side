import React from "react";
import SectionNavbar from "../components/Customer/SectionNavbar/SectionNavbar";
import SectionCampaign from "../components/Customer/SectionCampaign/SectionCampaign";
import SectionContact from "../components/Customer/SectionContact/SectionContact";
import SectionHero from "../components/Customer/SectionHero/SectionHero";
import SectionFooter from "../components/Customer/SectionFooter/SectionFooter";
import { Layout } from "antd";

const CustomerPage = () => {
    return (
    <Layout>
        <SectionNavbar />
        <SectionHero />
        <SectionCampaign />
        <SectionContact />
        <SectionFooter />
    </Layout>
    )
}

export default CustomerPage