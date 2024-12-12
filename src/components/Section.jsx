// 一般上这种wrapper component需要解析class和id

export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            {/* 这里的section并没有把id进行引用，如果要，可以写
            
                <section id={id}>
                </section>

                但是如果有很多attribute的话，就不应该这样写，要用...props进行接收，返回的时候要进行展开
             */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}
