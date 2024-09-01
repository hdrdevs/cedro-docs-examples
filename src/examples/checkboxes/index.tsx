import "./style.css";

import { WCheckbox } from "@cedro/ui/checkbox.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="vertical">
        <WSpacer />
        <WContainer orientation="horizontal" fixedSize={45} padding={5}>
            <WSpacer />
            <WCheckbox text="Switch One" checked />
            <WCheckbox text="Switch Two" />
            <WCheckbox text="Switch Three" />
            <WSpacer />
        </WContainer>
        <WSpacer />
    </WContainer>
);
