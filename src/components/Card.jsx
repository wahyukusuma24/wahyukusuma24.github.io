function Card({ children }) {
    return (
        <div className={'relative'}>
            <div className={'absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-md blur opacity-75'}></div>
            <div className={'relative bg-black rounded-md'}>
                <div>{children}</div>
                <div className={''}></div>
            </div>    
        </div>
    )
}

export default Card