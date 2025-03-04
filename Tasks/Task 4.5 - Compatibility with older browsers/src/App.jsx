import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    return (
        <section className="app">
            <h1>Task 4.5 Marco Jiménez Ureña</h1>
            <section>
                <label htmlFor="name">Nombre:</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </section>
        </section>
    );
}

export default App;