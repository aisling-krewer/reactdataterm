import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import './index.css';
import './cyberpunk.css';
import { initializeApp } from "firebase/app";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
  };

  initializeApp(firebaseConfig); // optional: move this to a separate firebase.js file to avoid re-initializing

  const handleSignIn = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Sign in successful:', user);
      setError(''); // clear error on success
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Sign in error:', errorCode, errorMessage);
      setError('login_failed'); // trigger error message display
    }
  };

  return (
    <div><section className="login cyberpunk inverse">
      <h2>Sign In</h2>

      <input
        className="cyberpunk"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="cyberpunk"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="cyberpunk" onClick={handleSignIn}>Sign In</button>
      </section>
      {error && (
        <section className="cyberpunk black">
          <h1 id="error-msg" className="cyberpunk inverse glitched">
            [ZIGGURAT NETWORK INTERFACE – SYSTEM ALERT 9002-B//PRIORITY: MODERATE]
          </h1>
          <p className="cyberpunk dotted">
          An unforeseen irregularity has been detected in your request's processing pathway. Despite adherence to standard data transmission protocols, the operation encountered a non-critical procedural impedance resulting in Service Discontinuity Event: Code R-77X.<br/>

While the anomaly does not currently pose an immediate security threat, it falls outside the parameters of auto-corrective subroutines. As a result, self-resolution is not recommended and may lead to additional discrepancies within your user session experience.
<br/>
<br/>
In alignment with Ziggurat’s Unified Netcare Framework™ and our commitment to maintaining infrastructural transparency, we strongly encourage you to escalate this matter through an official support conduit. <br/>
Quote Reference ID: SYS-ACT/ZNF/9002-B

Note: Prolonged attempts at unauthorized circumvention may result in session destabilization, latency bleed, or contractual review leading to a total ban from all Ziggurat services and/or the use of force under the Digital Conduct Clause (Article 44.2, rev. Z).
<br/>
<br/>
We appreciate your patience as we navigate this minor deviation together. Your continued interaction with Ziggurat’s platform signifies acceptance of the anomaly management process.
      
          </p>
        </section>
      )}
    </div>
  );
}

export default Login;
