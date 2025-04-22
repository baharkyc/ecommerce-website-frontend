import TeamMembersList from "../components/TeamMembersList";
import Breadcrumb from "../components/menus/Breadcrumb"
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent"
import exampleTeam from "../data/exampleTeam";
import TeamBanner from "../components/banners/TeamBanner";

const TeamPage = () => {
    return (
        <div>
            <Header/>
            <PageContent>
                <TeamBanner/>
                <TeamMembersList team={exampleTeam}/>
            </PageContent>
            <Footer/>
        </div>
    )
}
export default TeamPage;