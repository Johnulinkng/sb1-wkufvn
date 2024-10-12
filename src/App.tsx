import React from 'react';
import Header from './components/Header';
import VisionMission from './components/VisionMission';
import AvatarCreation from './components/AvatarCreation';
import AvatarChat from './components/AvatarChat';
import Web3Ecosystem from './components/Web3Ecosystem';
import UseCases from './components/UseCases';
import TrustCenter from './components/TrustCenter';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 bg-transparent p-4 z-50">
        <div className="container mx-auto">
          <a href="https://digiternity.ai" className="flex items-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/openavatar2.appspot.com/o/images%2F8d6a1d8dbfc459e6b3f48a7d8eb0d3b.png?alt=media&token=d1c6d309-ad8e-44c5-a8d7-59bb71e45a97"
              alt="Company Logo"
              className="h-16 w-60"
            />
          </a>
        </div>
      </nav>

      <main>
        <Header />
        <VisionMission />
        <AvatarCreation />
        <AvatarChat />
        <Web3Ecosystem />
        <UseCases />
        <TrustCenter />
      </main>

      <footer className="bg-gray-800 text-center p-4">
        <p>&copy; 2023 Digiternity. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;