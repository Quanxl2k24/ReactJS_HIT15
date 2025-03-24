import './Bai_1.css'


function Bai_1({data}){
    return(
        <div className="Bai_1">
            <table>
                <tr className='title-table'>
                    <th>
                        Rank
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Points
                    </th>
                    <th>
                        Team
                    </th>
                </tr>

            {data.map((index) => (
                <tr key = {index}>
                    <td>{index.userId}</td>
                    <td>{index.id}</td>
                    <td>{index.title}</td>
                    <td>{index.body}</td>
                </tr>
            ))}


                
            </table>
        </div>
    )
}

export default Bai_1