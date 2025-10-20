import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Solutions from "./screens/Nos-Solutions";
import Blog from "./screens/Blog";
import BlogDetail from "./screens/BlogDetail";
import Contact from "./screens/Contact";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ScrollButton from "./components/ScrollButton/index";
import StrategieTransformationDigitale from "./screens/TransformationDigitale";
import StrategieConseil from "./screens/StrategieConseil";
import PerformanceMesure from "./screens/PerformanceMesure";
import GouvernanceRisques from "./screens/GouvernanceRisques";
import AutomatisationSolutionsDigitalesSurMesure from "./screens/AutomatisationSolutionsDigitalesSur-Mesure";
import AccompagnementFormationDigitaleCoaching from "./screens/AccompagnementFormationDigitaleCoaching";
import { BlogProvider } from "./context/BlogContext";
import About from "./screens/About/index";
import MetaTags from "./components/MetaTags";
import StructuredData from "./components/StructuredData";
import ContactUs from "./screens/contact-us/index";
import GoogleAnalytics from "./components/GoogleAnalytics";


function App() {
    return (
        <BlogProvider>
            <GoogleAnalytics />
            <MetaTags />
            <StructuredData />
            <ScrollButton/>
            <ProgressBar/>
            <Routes>
                {/* <Route path="/" element={<Maintenance />} />
                <Route path="*" element={<Maintenance />} /> */}
                
                <Route path="/">
                    <Route
                        index
                        element={
                            <Page>
                                <Home />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions"
                        element={
                            <Page>
                                <Solutions />
                            </Page>
                        }
                    />
                    <Route
                        path="about"
                        element={
                            <Page>
                                <About />
                            </Page>
                        }
                    />
                    {/* <Route
                        path="pricing"
                        element={
                            <Page>
                                <Pricing />
                            </Page>
                        }
                    /> */}
                    {/* <Route
                        path="download"
                        element={
                            <Page>
                                <Download />
                            </Page>
                        }
                    /> */}
                    <Route
                        path="blog"
                        element={
                            <Page>
                                <Blog />
                            </Page>
                        }
                    />
                    <Route
                        path="blog/:slug"
                        element={
                            <Page>
                                <BlogDetail />
                            </Page>
                        }
                    />
                    <Route
                        path="contact"
                        element={
                            <Page>
                                <Contact />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/transformation-digitale"
                        element={
                            <Page>
                                <StrategieTransformationDigitale />
                            </Page>
                        }
                    />
                     <Route
                        path="Nos-Solutions/strategie-conseil"
                        element={
                            <Page>
                                <StrategieConseil />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/performance-mesure"
                        element={
                            <Page>
                                <PerformanceMesure />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/gouvernance-risques"
                        element={
                            <Page>
                                <GouvernanceRisques />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/automatisation-processus"
                        element={
                            <Page>
                                <AutomatisationSolutionsDigitalesSurMesure />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/formation-coaching-digital"
                        element={
                            <Page>
                                <AccompagnementFormationDigitaleCoaching />
                            </Page>
                        }
                    />
                    <Route
                        path="contact-us"
                        element={
                            <Page>
                                <ContactUs />
                            </Page>
                        }
                    />
                </Route>
               
            </Routes>
        </BlogProvider>
    );
}

export default App;
