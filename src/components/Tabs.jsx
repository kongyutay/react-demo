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
    </menu>
    
    2. 不能直接使用 buttonsContainer 作为组件来包裹 buttons，
    是因为 buttonsContainer 可能是一个普通的 React 元素类型或字符串（比如 div 或 span），
    而不是一个有效的 React 组件。

    如果直接使用，会当作已经存在的html标签，会解析出错

    所以中级的解决放在你是可以直接设置大字母的props，也可以添加默认参数
    */

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
    // const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}
