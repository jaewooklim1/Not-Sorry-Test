import {
    fetchAllRooms,
    getRoom,
    createRoom,
    removeRoom
} from '../util/room_api_util';

export const RECEIVE_ROOMS = "RECEIVE_ROOMS";
export const RECEIVE_ROOM = "RECEIVE_ROOM";
// export const RECEIVE_ROOM_DATA = "RECEIVE_ROOM_DATA";
export const RECEIVE_NEW_ROOM = "RECEIVE_NEW_ROOM";
export const RECEIVE_ROOM_ERRORS = "RECEIVE_ROOM_ERRORS";
export const REMOVE_ROOM_ERRORS = "REMOVE_ROOM_ERRORS";
export const REMOVE_ROOM = "REMOVE_ROOM";



export const receiveRooms = rooms => ({
    type: RECEIVE_ROOMS,
    rooms
});

export const receiveRoom = room => ({
    type: RECEIVE_ROOM,
    room
});

export const destroyRoom = roomId => ({
    type: REMOVE_ROOM,
    roomId
})

// export const receiveRoomData = roomData => ({
//     type: RECEIVE_ROOM_DATA,
//     room: roomData,
// });


export const receiveNewRoom = room => ({
    type: RECEIVE_NEW_ROOM,
    room
});



// export const receiveRoomErrors= errors => ({ 
//     type: RECEIVE_ROOM_ERRORS, 
//     errors
// }); 

// export const removeRoomErrors= ()=> ({
//     type: REMOVE_ROOM_ERRORS

// }); 

export const fetchRooms = () => dispatch => (
    fetchAllRooms()
        .then(rooms => {
            dispatch(receiveRooms(rooms.data))
        })
        .catch(err => console.log(err))
);


export const createNewRoom = (roomData) => dispatch => (
    createRoom(roomData)
    // .then(room => dispatch(receiveNewRoom(room)))
    // .catch(err => console.log(err))
)

export const fetchGameRoom = (roomId) => dispatch => (
    getRoom(roomId)
        .then(room => dispatch(receiveRoom(room)))
)

export const deleteRoom = (roomId) => dispatch => (
    removeRoom(roomId)
        .then(roomId => dispatch(destroyRoom(roomId)))
)


// export const updateRoom=(roomData)=> dispatch => (
//     updateRoom(roomData)
//         .then(room=> dispatch(receiveRoom(room)))
//         .catch(err => console.log(err))
// )

// export const getRoomData=(roomId)=> dispatch => (
//     getRoom(roomId)
//         .then(roomData=> dispatch(receiveRoomData(roomData)))
//         .catch(err => console.log(err))
// )