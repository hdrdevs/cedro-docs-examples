import "./style.css";

import { WIcon } from "@cedro/ui/Icon.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="vertical">
        <WSpacer />
        <WContainer orientation="horizontal" fixedSize={45} padding={5}>
            <WSpacer />
            <WIcon icon="home" color="primary" size="xlarge" variant="Filled" fixedSize={70} />
            <WIcon icon="home" color="primary" size="large" variant="Filled" fixedSize={70} />
            <WIcon icon="home" color="primary" size="medium" variant="Filled" fixedSize={70} />
            <WIcon icon="home" color="primary" size="small" variant="Filled" fixedSize={70} />
            <WSpacer />
        </WContainer>
        <WSpacer />
    </WContainer>
);
