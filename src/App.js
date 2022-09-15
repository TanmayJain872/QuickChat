/* jshint esversion: 9 */

import './App.css';
import { Layout } from './components/Layout.js';
import SentMessage from './components/SentMessage.js';
import { Stack } from '@mui/material';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';


function App() {
  
  return (
    <div className='App'>
      <Layout />
      {/* <Stack 
        direction='row' 
        spacing={0.5}
        sx={{
          // width: '100px'
        }}
      >
        <PriorityHighRoundedIcon iconStyle={{ height: '100px', width: '100px' }} sx={{
            color: '#ffffff', 
            bgcolor: 'blue', 
            // height: '200px', 
            // maxHeight: '150px',
            // '&.MuiSvgIcon-root': {
            //   height: '100px'
            // }
          }} 
        />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
        <PriorityHighRoundedIcon sx={{color: '#ffffff', bgcolor: 'blue'}} />
      </Stack> */}
      <div style={{textAlign: 'right'}}>
        <SentMessage />
      </div>
    </div>
  );
}

export default App;




// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }