import TeamMembersList from "../components/TeamMembersList";
import Footer from "../layout/Footer"
import Header from "../layout/Header"
import PageContent from "../layout/PageContent"
import exampleTeam from "../data/exampleTeam";
import TeamBanner from "../components/banners/TeamBanner";
import ClickToAction from "../components/banners/ClickToAction";
import GoUpButton from "../components/buttons/GoUpButton";

const TeamPage = () => {
    return (
        <div>
            <Header/>
            <PageContent>
                <TeamBanner/>
                <TeamMembersList team={exampleTeam}/>
                <ClickToAction
                    header={"Start 14 days free trial"}
                    description={"Meet our global fashion solutions, create your inspiration from scratch."}
                    buttonText={"Try now free"}
                />
            </PageContent>
            <GoUpButton/>
            <Footer/>
        </div>
    )
}
export default TeamPage;