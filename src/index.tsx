import "./style.css";

import { Application, Routes, Route, Widgets } from "@cedro/core/application.core";
import { WContainer } from "@cedro/ui/container.ui";
import { createApplication } from "@cedro/core/application.builder";

window.app = (() => {
    const onLoadHandler = () => {
        const router = app?.router;
        const routeData = router?.getCurrentLocation().params;

        if (routeData?.theme && routeData?.theme !== "cedro") {
            app?.theme.setTheme(routeData?.theme);
        }
    };

    return createApplication(
        <Application
            title="Ceddro | Examples"
            padding={0}
            orientation="vertical"
            theme="cedro"
            onLoad={onLoadHandler}
        >
            <Widgets>
                <WContainer id="main-container" orientation="vertical"></WContainer>
            </Widgets>
            <Routes hostId="main-container">
                <Route src="/examples/text-buttons/" />
                <Route src="/examples/contained-buttons/" />
                <Route src="/examples/outlined-buttons/" />
                <Route src="/examples/icons-sizes/" />
                <Route src="/examples/icons-colors/" />
                <Route src="/examples/icons-variants/" />
                <Route src="/examples/switches/" />
                <Route src="/examples/checkboxes/" />
                <Route src="/examples/radios/" />
                <Route src="/examples/containers/" />
            </Routes>
        </Application>
    );
})();
