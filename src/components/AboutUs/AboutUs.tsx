import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>Acerca de Nosotros</h1>
      <div className="card-container">
        <div className="card">
          <img src="imagen1.jpg" alt="Miembro del equipo 1" />
          <h2>Miembro del Equipo 1</h2>
          <p>Descripción del miembro del equipo 1.</p>
        </div>

        <div className="card">
          <img src="imagen2.jpg" alt="Miembro del equipo 2" />
          <h2>Miembro del Equipo 2</h2>
          <p>Descripción del miembro del equipo 2.</p>
        </div>

        <div className="card">
          <img src="imagen3.jpg" alt="Miembro del equipo 3" />
          <h2>Miembro del Equipo 3</h2>
          <p>Descripción del miembro del equipo 3.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;