const NUM_SQUARES = 100;
function SquaresBack() {
    const squares = [];
    for (let i = 0; i < NUM_SQUARES; i++) {
        squares.push(
            <div key={i} className="border-b border-r border-gray-800 border-opacity-50 z-0"/>
        );
    }

    return (
        <div className="absolute grid grid-cols-10 w-full h-screen z-1 ">
            {squares}
        </div>
    )

}

export default SquaresBack;