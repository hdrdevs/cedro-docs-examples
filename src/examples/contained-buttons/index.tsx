import "./style.css";

import { WButton } from "@cedro/ui/button.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="vertical">
        <WSpacer />
        <WContainer orientation="horizontal" fixedSize={45} padding={5}>
            <WSpacer />
            <WButton text="PRIMARY" variant="contained" color="primary" />
            <WButton text="ERROR" variant="contained" color="error" />
            <WButton text="SUCCESS" variant="contained" color="success" />
            <WSpacer />
        </WContainer>
        <WSpacer />
    </WContainer>
);
