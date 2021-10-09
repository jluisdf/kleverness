import React, { useEffect, useState } from 'react'
import Drawer from './Drawer'

const Hotels = (props) => {

    const [ payload, setPayload ] = useState({})
    const [ roomSelected, setRoomSeleted ] = useState({})

    useEffect(() => {
        fetch('https://api-hospitality.kleverness.com/dev/hotels/test/front')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPayload(data.payload)
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message)
        })
    }, [])

    useEffect(() => {
        // console.log("esta cambiando roomSelected", roomSelected)
    }, [roomSelected])

    const openNav = (floor, room) => {
        console.log("indices", payload.floor[floor].room[room])
        setRoomSeleted(payload.floor[floor].room[room])
        document.getElementById("mySidenav").style.width = "50vh"
    }

    /* Set the width of the side navigation to 0 */
    const closeNav = () => {
        setRoomSeleted({})
        document.getElementById("mySidenav").style.width = "0"
    }


    const roomHubColor = roomHub => {
        if(!roomHub) return 'text-secondary'
        return roomHub[0].isHubOnline ? 'text-success' : 'text-danger'
    }

    const roomHubStatus = roomHub => {
        if(!roomHub) return 'Disabled'
        return roomHub[0].isHubOnline ? 'On' : 'Off'
    }

    const roomStatusColor = status => {
        switch (status) {
            case 1:
                return 'Created' //Creado
            break;
            case 2:
                return 'Assigned' //Asignado
            break;
            case 3:
                return 'Busy' //Ocupado
            break;
        }
    }

    const housekeepingColor = housekeeping => {
        return housekeeping === 1 ? 'text-success' : 'text-danger'
    }

    const privacyColor = privacy => {
        return privacy ? 'text-success' : 'text-danger'
    }

    return (
        <div>
            <Drawer
                closeNav={closeNav}
                room={roomSelected}
                roomStatusColor={roomStatusColor}
                roomHubStatus={roomHubStatus}
            />
            <h2>{payload?.name}</h2>
            <p>{payload?.address}</p>
            { Object.keys(payload).length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Room</th>
                            <th scope="col">Hub</th>
                            <th scope="col">Room status</th>
                            <th scope="col">Maintenance</th>
                            <th scope="col">Temperature</th>
                            <th scope="col">Humidity</th>
                            <th scope="col">Confort settings</th>
                            <th scope="col">Lighting</th>
                            <th scope="col">Privacy</th>
                            <th scope="col">Housekeeping</th>
                            <th scope="col">Door status</th>
                            <th scope="col">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payload?.floor.map((floor, index0) => {
                                return (
                                    <React.Fragment key={index0}>
                                        { floor?.room.map((room, index1) => {
                                            return (
                                                <tr key={room.id}>
                                                    <td>{room.name}</td>
                                                    <td className="text-center">
                                                        <i className={`fas fa-circle ${roomHubColor(room.roomHub)}`}></i>
                                                    </td>
                                                    <td>
                                                        {roomStatusColor(room.status)}
                                                    </td>
                                                    <td>{room.maintenance === 1 ? 'None' : 'Requested'}</td>
                                                    <td>No visible</td>
                                                    <td className="text-center">0%</td>
                                                    <td className="text-center">
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                                                            <label className="custom-control-label" htmlFor="customSwitch2" />
                                                        </div>
                                                    </td>
                                                    <td>{room.lighting}</td>
                                                    <td className="text-center">
                                                        <span className="d-none">{room.privacy ? 'verde' : 'rojo'}</span>
                                                        <i className={`fas fa-circle ${privacyColor(room.privacy)}`}></i>
                                                    </td>
                                                    <td className="text-center">
                                                        <span className="d-none">{room.housekeeping} - {room.housekeeping === 1 ? 'verde' : 'rojo'}</span>
                                                        <i className={`fas fa-circle ${housekeepingColor(room.housekeeping)}`}></i>
                                                    </td>
                                                    <td>{room.doorStatus ? 'Open' : 'Close'}</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-secondary btn-sm"
                                                            onClick={() => openNav(index0, index1)}
                                                        >
                                                            Detail
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        } )}
                                    </React.Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            :
                <div className="alert alert-warning text-center" role="alert">
                    <strong>No hay datos</strong>
                </div>
            }
        </div>
    )
}

export default Hotels
