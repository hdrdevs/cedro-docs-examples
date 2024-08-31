import "./style.css";

import { WButton } from "@cedro/ui/button.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="vertical">
        <WSpacer />
        <WContainer orientation="horizontal" fixedSize={45} padding={5}>
            <WSpacer />
            <WButton text="PRIMARY" variant="outlined" color="primary" />
            <WButton text="ERROR" variant="outlined" color="error" />
            <WButton text="SUCCESS" variant="outlined" color="success" />
            <WSpacer />
        </WContainer>
        <WSpacer />
    </WContainer>
);
