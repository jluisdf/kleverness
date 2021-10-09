import React from 'react'

const Drawer = ({ closeNav, room, roomStatusColor, roomHubStatus }) => {

    return (
        <div id="mySidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <h4 className="text-white text-center mb-4">Detail Room</h4>
            <dl class="row text-white mx-3">
                <dt class="col-sm-6">Room:</dt>
                <dd class="col-sm-6">{room.name}</dd>

                <dt class="col-sm-6">Hub:</dt>
                <dd class="col-sm-6">{roomHubStatus(room.roomHub)}</dd>

                <dt class="col-sm-6">Room status:</dt>
                <dd class="col-sm-6">{roomStatusColor(room.status)}</dd>

                <dt class="col-sm-6">Maintenance:</dt>
                <dd class="col-sm-6">{room.maintenance === 1 ? 'None' : 'Requested'}</dd>

                <dt class="col-sm-6">Temperature:</dt>
                <dd class="col-sm-6">No visible</dd>

                <dt class="col-sm-6">Humidity:</dt>
                <dd class="col-sm-6">0%</dd>

                <dt class="col-sm-6">Confort settings:</dt>
                <dd class="col-sm-6">Disabled</dd>

                <dt class="col-sm-6">Lighting:</dt>
                <dd class="col-sm-6">{room.lighting}</dd>

                <dt class="col-sm-6">Privacy:</dt>
                <dd class="col-sm-6">{room.privacy ? 'On' : 'Off'}</dd>

                <dt class="col-sm-6">Housekeeping:</dt>
                <dd class="col-sm-6">{room.housekeeping === 1 ? 'On' : 'Off'}</dd>

                <dt class="col-sm-6">Door status:</dt>
                <dd class="col-sm-6">{room.doorStatus ? 'Open' : 'Close'}</dd>
            </dl>
        </div>
    )
}

export default Drawer
