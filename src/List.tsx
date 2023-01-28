// tsrafce

type Props = {}
export const List = (props: Props) => {
    let data = true
    return (
        <>
            <ul>
                <li>List item 10</li>
                <li>List item 20</li>
                <li>List item 30</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti labore tenetur nemo perferendis, ut atque incidunt!
                Neque officia maxime, sed aperiam quod ratione similique
                veritatis nemo dolor exercitationem voluptas odit.
            </p>
            <p
                style={{
                    color: 'white',
                    backgroundColor: data ? 'purple' : 'tomato',
                }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                accusantium sed quod a animi tempora magni dolore mollitia iusto
                consequatur ipsum voluptate, atque suscipit, inventore facere,
                nihil maiores officiis libero?
            </p>
        </>
    )
}
// export default List
