import React from "react";
import SectionNavbar from "../components/customer/SectionNavbar/SectionNavbar";
import SectionCampaign from "../components/customer/SectionCampaign/SectionCampaign";
import SectionContact from "../components/customer/SectionContact/SectionContact";
import SectionHero from "../components/customer/SectionHero/SectionHero";
import SectionFooter from "../components/customer/SectionFooter/SectionFooter";
import { Layout } from "antd";

const CustomerPage = () => {
    return (
    <Layout>
        <SectionNavbar />
        <SectionCampaign />
        <SectionContact />
        <SectionHero />
        <SectionFooter />
    </Layout>
    )
}

export default CustomerPage