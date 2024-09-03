import "./style.css";
import { WLabel } from "@cedro/ui/label.ui";
import { WHPanel } from "@cedro/ui/hpanel.ui";
import { WContainer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WHPanel padding={5}>
        <WContainer variant="contained" fixedSize={250}>
            <WLabel text="Left Widget" centerX centerY />
        </WContainer>
        <WContainer variant="contained">
            <WLabel text="Right Widget" centerX centerY />
        </WContainer>
    </WHPanel>
);
