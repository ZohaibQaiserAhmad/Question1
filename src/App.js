import './App.css';

//input given
const rooms = [
  { room_type: "Queen", vacant_rooms: 5, price: 100 },
  { room_type: "Double", vacant_rooms: 3, price: 75 },
  { room_type: "Twin", vacant_rooms: 8, price: 60 }
];

const RoomFunction = (props) => {

  //wrap the lists in ordered list as required
  //use of deconstructor to get each properties of out room
  return <ol>
    {props.rooms.map(({ room_type, vacant_rooms, price }, index) => {
      //list the items as specified
      return <li key={index}>{room_type}, {vacant_rooms}, ${price}</li>
    })}
  </ol>
}

function App() {
  return (
    <div className="App">
      <RoomFunction rooms={rooms}></RoomFunction>
    </div>
  );
}

export default App;
