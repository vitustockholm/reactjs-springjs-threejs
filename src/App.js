import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Box } from './components/Box';

function App() {
  return (
    <>
      <div className='container'>
        <h1>REACTjs SPRINGjs THREEjs</h1>
      </div>{' '}
      <div className='c'>
        <Canvas camera={{ position: [-10, 10, 10], fov: 35 }}>
          <ambientLight />
          <pointLight position={[-10, 10, -10]} castShadow />
          {[-3, 0, 3].map((x) =>
            [-3, 0, 3].map((z) => <Box position={[x, 0, z]} />)
          )}
        </Canvas>
      </div>
    </>
  );
}

export default App;
