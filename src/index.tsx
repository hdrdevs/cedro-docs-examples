import "./style.css";
import { createApplication } from "@cedro/core/application.builder";
import { Application, Routes, Route, Widgets } from "@cedro/core/application.core";
import { WContainer } from "@cedro/ui/container.ui";

window.app = (() => {
    return createApplication(
        <Application
            title="Ceddro | Examples"
            padding={0}
            orientation="vertical"
            theme="dark"
            onLoad={() => {}}
        >
            <Widgets>
                <WContainer id="main-container" orientation="vertical"></WContainer>
            </Widgets>
            <Routes hostId="main-container">
                <Route src="/examples/text-buttons/" />
                <Route src="/examples/contained-buttons/" />
                <Route src="/examples/outlined-buttons/" />
            </Routes>
        </Application>
    );
})();
