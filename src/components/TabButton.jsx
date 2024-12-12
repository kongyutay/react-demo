export default function TabButton({ children, isSelected, ...props }) {
    console.log("TABBUTTON COMPONENT EXECUTING");
    return (
        // TabButton 这里直接用...props 代替了onSelect 的custom prop，进行传递。
        // 在父组件那里就要移除onSelect的自定义prop，改成onClick，因为可以直接继承
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>
                {children}
            </button>
        </li>
    );
}
