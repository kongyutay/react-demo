/*不应该直接这样写，直接包裹住不好，因为其他component和props要import进来，可复用性不高，
应该知识单纯的负责包裹而已
    <menu>
        <TabButton
            isSelected={selectedTopic === "components"}
            onClick={() => handleSelect("components")}
        >
            Components
        </TabButton>
        <TabButton
            isSelected={selectedTopic === "jsx"}
            onClick={() => handleSelect("jsx")}
        >
            JSX
        </TabButton>
        <TabButton
            isSelected={selectedTopic === "props"}
            onClick={() => handleSelect("props")}
        >
            Props
        </TabButton>
        <TabButton
            isSelected={selectedTopic === "state"}
            onClick={() => handleSelect("state")}
        >
            State
        </TabButton>
    </menu>*/

export default function Tabs({ children, buttons }) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}
