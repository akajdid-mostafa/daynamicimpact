import { Routes, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Solutions from "./screens/Nos-Solutions";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Blog from "./screens/Blog";
import BlogDetail from "./screens/BlogDetail";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import Contact from "./screens/Contact";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ScrollButton from "./components/ScrollButton/index";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import StrategieTransformationDigitale from "./screens/StrategieTransformationDigitale";
import CreationSiteWebSEO from "./screens/CreationSiteWebSEO";
import GestionCroissanceReseauxSociauxSocialMedia from "./screens/GestionCroissanceReseauxSociauxSocialMedia";
import ProductionContenuMarque from "./screens/ProductionContenuMarque";
import AutomatisationSolutionsDigitalesSurMesure from "./screens/AutomatisationSolutionsDigitalesSur-Mesure";
import AccompagnementFormationDigitaleCoaching from "./screens/AccompagnementFormationDigitaleCoaching";
import { BlogProvider } from "./context/BlogContext";
import About from "./screens/About/index";
import MetaTags from "./components/MetaTags";


function App() {
    return (
        <BlogProvider>
            <MetaTags />
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
                    <Route
                        path="pricing"
                        element={
                            <Page>
                                <Pricing />
                            </Page>
                        }
                    />
                    <Route
                        path="download"
                        element={
                            <Page>
                                <Download />
                            </Page>
                        }
                    />
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
                        path="lifestyle"
                        element={
                            <Page>
                                <Lifestyle />
                            </Page>
                        }
                    />
                    <Route
                        path="article"
                        element={
                            <Page>
                                <Article />
                            </Page>
                        }
                    />
                    <Route
                        path="class02"
                        element={
                            <Page>
                                <Class02 />
                            </Page>
                        }
                    />
                    <Route
                        path="class02-details"
                        element={
                            <Page>
                                <Class02Details />
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
                        path="Nos-Solutions/strategie-transformation-digitale"
                        element={
                            <Page>
                                <StrategieTransformationDigitale />
                            </Page>
                        }
                    />
                     <Route
                        path="Nos-Solutions/creation-site-web"
                        element={
                            <Page>
                                <CreationSiteWebSEO />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/gestion-reseaux-sociaux"
                        element={
                            <Page>
                                <GestionCroissanceReseauxSociauxSocialMedia />
                            </Page>
                        }
                    />
                    <Route
                        path="Nos-Solutions/production-contenu-marque"
                        element={
                            <Page>
                                <ProductionContenuMarque />
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
                </Route>
               
            </Routes>
        </BlogProvider>
    );
}

export default App;
