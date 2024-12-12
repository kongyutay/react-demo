import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";

export default function Examples() {
    // 当selectedTopic发生变化的时候整个App都会重新渲染，会导致Header component也重新执行渲染
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    console.log("APP COMPONENT EXECUTING");

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }
    return (
        <Section title="Examples" id="examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onSelect={() => handleSelect("components")}
                >
                    Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onSelect={() => handleSelect("jsx")}
                >
                    JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "props"}
                    onSelect={() => handleSelect("props")}
                >
                    Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "state"}
                    onSelect={() => handleSelect("state")}
                >
                    State
                </TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}
