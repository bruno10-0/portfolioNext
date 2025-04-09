"use client"
import Hero from "./sections/hero/page"
import BasicInfo from "./sections/basicInfo/page"
import Location from "./sections/location/page"
import ThemeTogglee from "./sections/themeToggle/page"
import FrontendStack from "./sections/frontendStack/page"
import BackendStack from "./sections/backendStack/page"
import GithubRepo from "./sections/githubRepo/page"
import CopyEmail from "./sections/email/page"
import Experience from "./sections/experience/page"
import Projects from "./sections/projects/page"
import Cv from "./sections/cv/page"
import Certificates from "./sections/certificates/page"
import News from "./sections/news/page"
import LinkedIn from "./sections/linkedIn/page"
import Mission from "./sections/mission/page"
import AnimatedSection from "@/components/AnimatedSection"

const Home = () => {
    const sections = [
        { component: <Hero />, className: "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2" },
        { component: <BasicInfo /> },
        { component: <ThemeTogglee /> },
        { component: <Location /> },
        { component: <Mission />, className: "col-span-1 md:col-span-2" },
        { component: <FrontendStack /> },
        { component: <BackendStack /> },
        { component: <GithubRepo /> },
        { component: <CopyEmail /> },
        { component: <Experience />, className: "col-span-1 md:col-span-2" },
        { component: <Projects />, className: "col-span-1 md:col-span-2 lg:col-span-2" },
        { component: <Cv /> },
        { component: <Certificates /> },
        { component: <News /> },
        { component: <LinkedIn /> }
    ]
    return (
        <main className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {sections.map((section, index) => (
                    <AnimatedSection
                        key={index}
                        delayIndex={index}
                        className={section.className}
                    >
                        {section.component}
                    </AnimatedSection>
                ))}
            </div>
        </main>
    )
}

export default Home